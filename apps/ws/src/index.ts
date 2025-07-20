import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/prismaClient";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws) => {
  await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  ws.send("Yo, ws server is working properly");
});
