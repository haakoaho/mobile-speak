import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { getBackendUrl, invalidateBackendUrl } from "../../util/getBackendUrl";
import { CustomSession } from "./auth/typing";
import { authOptions } from "./auth/authOptions";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions) as CustomSession;
  const backendUrl = await getBackendUrl();
  const meeting = req.query.meeting as string;

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const response = await fetch(`${backendUrl}/api/currentMeeting/agenda/${meeting}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Cookie": `JSESSIONID=${session.user.jsessionId}`
      },
      credentials: "include",
    });

    if (!response.ok) {
      if(response.status === 504){
        invalidateBackendUrl();
      }
      res.status(response.status).json({ message: response.statusText });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch agenda:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
