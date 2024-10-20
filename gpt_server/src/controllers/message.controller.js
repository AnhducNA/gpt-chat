const axios = require("axios");

async function handleMessage(req, res) {
  let messageRes = "";
  const bodyChat = {
    model: "llama3.2",
    messages: [
      {
        role: "user",
        content: req.body.content,
      },
    ],
    stream: false,
  };

  await axios
    .post("http://localhost:11434/api/chat", bodyChat)
    .then((res) => {
      console.log(res.data);
      messageRes = res.data.message;
    })
    .catch((err) => {
      console.log(err);
    });
  return res.json({ message: messageRes });
}

module.exports = { handleMessage };
