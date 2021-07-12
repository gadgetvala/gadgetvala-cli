const React = require("react");
const { Box } = require("ink");
const SelectInput = require("ink-select-input").default;
const open = require("open");

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  } else if (item.action) {
    item.action();
  }
};

const createList = (items) => {
  return items.map((item) => {
    return { ...item, key: item.label || item.url };
  });
};

const listItems = createList([
  {
    label: "Website 🌎",
    url: "https://gadgetvala.github.io",
  },
  {
    label: "GitHub 🦄",
    url: "https://github.com/gadgetvala",
  },
  {
    label: "Twitter 👀",
    url: "https://twitter.com/gadgetvala_",
  },
  {
    label: "Linkedin 💼",
    url: "http://linkedin.com/in/gadgetvala/",
  },
  {
    label: "Contact ✉️",
    url: "mailto:surajj.verma7@gmai.com",
  },
  {
    label: "---------",
  },
  {
    label: "Quit",
    action() {
      process.exit();
    },
  },
]);

const renderResume = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box marginBottom={1} />
        <SelectInput items={listItems} onSelect={handleSelect} />
      </Box>
    </>
  );
};

module.exports = renderResume;
