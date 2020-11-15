// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Page$MyBlog = require("./page.bs.js");
var Loading = require("src/js/Loading").default;

function LoadingScreen(Props) {
  return React.createElement(Page$MyBlog.make, {
              children: React.createElement("div", {
                    className: "flex flex-col justify-center text-center items-center text-4xl my-12"
                  }, React.createElement("div", {
                        className: "animate-bounce font-bold"
                      }, "Connecting with your new friends now"), React.createElement("div", {
                        className: "w-62 m-auto"
                      }, React.createElement(Loading, {})))
            });
}

var make = LoadingScreen;

var $$default = LoadingScreen;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */