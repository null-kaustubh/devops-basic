import { prismaClient } from "@repo/db/prismaClient";

export default async function Page() {
  const user = await prismaClient.user.findFirst();

  return (
    <div>
      <p>username: {user?.username}</p>
      <p>password: {user?.password}</p>
    </div>
  );
}
