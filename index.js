const tmi = require("tmi.js");

const options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "LiniePiesBot",
    password: "oauth:bxpd3231iwthy6v5w2lxrh6a3x4s2n"
  },
  channels: ["linie_pie"]
};

const client = new tmi.client(options);

client.connect();

client.on("connected", (address, port) => {
  client.action("linie_pie", "Hello, LiniePiesBot is now connected");
});

client.on("chat", (channel, user, message, self) => {
  if (message === "!game") {
    client.action("linie_pie", "linie_pie is playing The Sims4");
  }

  if (message === "!schedule") {
    client.action(
      "linie_pie",
      "linie_pie streams monday and thursday nights 7PM - 9PM eastern time."
    );
  }

  if (message == "Hello" || "hello") {
    client.action(
      "linie_pie",
      `Hello ${user["display-name"]}, enjoy the stream :)`
    );
  }
});
