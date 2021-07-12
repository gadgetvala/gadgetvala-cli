#!/usr/bin/env node

const showBanner = require("node-banner");
const importJsx = require("import-jsx");
const { render } = require("ink");
const React = require("react");
const meow = require("meow");

const ui = importJsx("./ui");

meow(`
	Usage
	  $ gadgetvala
`);

(async () => {
  await showBanner(
    "gadgetvala",
    "Self-taught Full-Stack developer & perpetual thinker, Linux enthusiast.",
    "cyan",
    "blue"
  );

  render(React.createElement(ui));
})();
