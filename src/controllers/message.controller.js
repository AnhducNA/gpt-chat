const axios = require("axios");

async function handleMessage(req, res) {
  let messageRes = { role: "assistant", content: "" };
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
      messageRes = res.data.message;
    })
    .catch((err) => {
      console.log(err);
      messageRes.content = "Error connect to LLAMA: " + err.message;
    });
  return res.json({ message: messageRes });
}

module.exports = { handleMessage };
