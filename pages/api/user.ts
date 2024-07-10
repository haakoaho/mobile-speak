import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/authOptions";
import { CustomSession } from "./auth/typing";
import { getBackendUrl } from "../../util/getBackendUrl";
import { User } from "../../types";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const session = (await getServerSession(
        req,
        res,
        authOptions
      )) as CustomSession;
    
      if (!session) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }
      const backendUrl = await getBackendUrl();
      const response = await fetch(`${backendUrl}/api/users/userInfo`, {
        method: 'GET',
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
  
      const data : User = await response.json();
      res.status(200).json(data);
}