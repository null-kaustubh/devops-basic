import express from "express";
import { prismaClient } from "@repo/db/prismaClient";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hey there" });
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await prismaClient.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    message: "Signed up successfully",
    id: user.id,
  });
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
