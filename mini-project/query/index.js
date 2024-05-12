import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "Post Created") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }
  if (type === "Comment Created") {
    const { id, content, postId, status } = data;

    const post = posts[postId];

    post.comments.push({ id, content, status });
  }

  if (type === "Comment Updated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id === id);

    comment.status = status;
    comment.content = content;
  }

  console.log(posts);

  res.send({});
});

app.listen(4002, () => console.log("Listening on 4002"));
