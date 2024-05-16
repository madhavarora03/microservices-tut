import axios from "axios";
import express from "express";

const app = express();

app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "Comment Created") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://event-bus-srv:4005/events", {
      type: "Comment Moderated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
