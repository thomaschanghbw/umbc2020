// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Page$MyBlog = require("./page.bs.js");
var Header$MyBlog = require("./header.bs.js");
var CheckButton$MyBlog = require("./checkButton.bs.js");

function Landing(Props) {
  var onSubmit = Props.onSubmit;
  var match = React.useState(function () {
        return "";
      });
  var setUserName = match[1];
  var userName = match[0];
  return React.createElement(React.Fragment, undefined, React.createElement(Header$MyBlog.make, {}), React.createElement(Page$MyBlog.make, {
                  children: null
                }, React.createElement("img", {
                      className: "absolute",
                      src: "sun.svg"
                    }), React.createElement("div", {
                      className: "w-full h-12 bg-green-200 absolute right-0 bottom-0 rounded-full"
                    }), React.createElement("div", {
                      className: "relative"
                    }, React.createElement("div", {
                          className: "m-auto bg-white border border-solid border-black min-w-landing max-w-landing p-8"
                        }, React.createElement("form", {
                              className: "flex flex-col justify-center w-full ",
                              onSubmit: (function (e) {
                                  return Curry._2(onSubmit, e, {
                                              name: userName,
                                              hobbies: /* [] */0,
                                              status: "searching"
                                            });
                                })
                            }, React.createElement("div", {
                                  className: "mx-auto mb-6"
                                }, React.createElement("label", {
                                      className: "block text-center"
                                    }, "What is your name?"), React.createElement("input", {
                                      className: "border border-solid border-black rounded-md",
                                      name: "name",
                                      type: "text",
                                      value: userName,
                                      onChange: (function (target) {
                                          return Curry._1(setUserName, target.target.value);
                                        })
                                    })), React.createElement("div", {
                                  className: "text-center"
                                }, React.createElement("div", {
                                      className: "mb-2"
                                    }, "What are your interests?"), React.createElement("div", {
                                      className: "inline-grid grid-cols-4 gap-3 mb-10 rounded-sm justify-center"
                                    }, React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 🔥 "
                                        }), React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 💩 "
                                        }), React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 🥺 "
                                        }), React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 🥺 "
                                        }), React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 🥺 "
                                        }), React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 🥺 "
                                        }), React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 🥺 "
                                        }), React.createElement(CheckButton$MyBlog.make, {
                                          interest: " Fire 🥺 "
                                        }))), React.createElement("button", {
                                  className: "m-auto bg-submit-500 py-2 px-12 text-white",
                                  type: "submit"
                                }, "submit"))))));
}

var make = Landing;

var $$default = Landing;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */