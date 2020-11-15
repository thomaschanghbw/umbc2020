import React, { useState, useEffect, useContext, useCallback } from "react";
import { Socket, Presence } from "phoenix";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import conf from "conf";
import SocketContext from "./SocketContext";
const debug = require("debug")("app:SocketProvider");

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function SocketProvider(props) {
  const [uid, setUid] = useState(null);
  const [socket, setSocket] = useState(null);
  const [meetChannel, setMeetChannel] = useState(null);
  const [myChannel, setMyChannel] = useState(null);
  const [presence, setPresence] = useState([]);
  const [status, setStatus] = useState({});
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const newUid = nanoid(6);
    setUid(newUid);
    const newSocket = new Socket(conf.get("SOCKET_URL"), {
      params: { user_id: newUid },
    });
    setSocket(newSocket);
    newSocket.connect();
    debug("Connected to Socket");
    const newMeetChannel = newSocket.channel(`meet:lobby`, {});
    const presence = new Presence(newMeetChannel);
    newMeetChannel.join().receive("ok", () => {
      debug("Joined MeetChannel");
      setMeetChannel(newMeetChannel);
    });

    function updatePList(presence) {
      const pList = presence.list();
      debug("PLIST", pList);
      setPresence(pList);
    }

    //only one onsync handler allowed
    presence.onSync(() => updatePList(presence));
    updatePList(presence);

    const newMyChannel = newSocket.channel(`user:${newUid}`, {});
    newMyChannel.join().receive("ok", () => {
      debug("Joined MyChannel");
      setMyChannel(newMyChannel);
    });

    return () => {
      newSocket.disconnect(() => debug("Disconnect from old socket"));
      newMyChannel.leave().receive("ok", () => debug("Left MyChannel"));
    };
  }, []);

  function updateSelf(payload) {
    //only update values
    setStatus((status) => {
      Object.entries(payload).map(([k, v]) => {
        status[k] = v;
      });
      return { ...status };
    });
  }

  function startSearch(name, hobbies) {
    updateSelf({ status: "searching", name, hobbies });
  }

  useEffect(() => {
    if (meetChannel && status) {
      meetChannel.push("update_self", status).receive("ok", (resp) => {
        debug("UPDATED_SELF", resp);
      });
    }
  }, [status, meetChannel]);

  useEffect(() => {
    if (myChannel) {
      myChannel.on("new_room", (payload) => {
        debug("new_room PERSONAL", payload);
      });

      return () => myChannel.off("new_room");
    }
  }, [myChannel]);

  // if (!socket) {
  //   return <Loading />;
  // } else {
  return (
    <SocketContext.Provider
      value={{
        socket,
        myChannel,
        updateSelf,
        startSearch,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
  // }
}
