import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/authOptions";
import { CustomSession } from "./auth/typing";
import { getBackendUrl } from "../../util/getBackendUrl";

export default async function PATCH(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions) as CustomSession;
    const body = JSON.parse(req.body);
    const word : string = body.word;

    const backendUrl = getBackendUrl();
    if (!session) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
  
  
    try {
      const response = await fetch(`${backendUrl}/api/currentMeeting/theme?theme=${word}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Cookie": `JSESSIONID=${session.user.jsessionId}`
        },
        credentials: "include",
      });
  
      if (!response.ok) {
        res.status(response.status).json({ message: response.statusText });
        return;
      }
      res.status(200).json(null);
    } catch (error) {
      console.error("Failed to fetch agenda:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }