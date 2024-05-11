import express from "express";
import axios from "axios";
const app = express();

app.use(express.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  await axios.post("http://localhost:4000/events", event);
  await axios.post("http://localhost:4001/events", event);
  await axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(4005, () => console.log("Listening on 4005"));
