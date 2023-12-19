const { trello } = require("../../config.js");

module.exports = () => {
  return {
    title: "James Doc",
    subtitle: "Sitting at the intersection of Christianity and technology…",
    url: "https://jamesdoc.com",
    feed: {
      url: "https://jamesdoc.com/blog/feed.xml",
    },
    author: {
      name: "James Doc",
    },
    gitRepo: "https://github.com/jamesdoc/jamesdoc.com/",
    metaImg: "/_assets/img/twitter.jpg",
    description:
      "Head of Technology at Vixen Labs | Living in London | Sitting at the intersection of Christianity and Technology",
    readingListId: trello.readingList.boardId,
  };
};
