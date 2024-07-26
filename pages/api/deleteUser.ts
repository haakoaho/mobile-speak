import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/authOptions";
import { CustomSession } from "./auth/typing";
import { getBackendUrl } from "../../util/getBackendUrl";

export default async function DELETE(req: NextApiRequest, res: NextApiResponse) {

    const session = (await getServerSession(
        req,
        res,
        authOptions
      )) as CustomSession;
    
      if (!session) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }
      const backendUrl = getBackendUrl();
      const response = await fetch(`${backendUrl}/api/users`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `JSESSIONID=${session.user.jsessionId}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        res.status(response.status).json({ message: response.json});
        return;
      }
      res.status(200).json("ok");
}