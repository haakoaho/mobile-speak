import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/authOptions";
import { CustomSession } from "./auth/typing";
import { getBackendUrl } from "../../util/getBackendUrl";
import { Agenda } from "../../types";

export default async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  const session = (await getServerSession(
    req,
    res,
    authOptions
  )) as CustomSession;

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const title: string = req.body.title;
  const pathways: string = req.body.pathways;
  const meetingOrder: number = req.body.meetingOrder;
  const backendUrl = await getBackendUrl();

  try {
    const response = await fetch(
      `${backendUrl}/api/currentMeeting/reserveSpeech`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Cookie: `JSESSIONID=${session.user.jsessionId}`,
        },
        credentials: "include",
        body: JSON.stringify({
          title,
          pathways,
          meetingOrder,
        }),
      }
    );

    if (!response.ok) {
      res.status(response.status).json({ message: response.statusText });
      return;
    }

    const data: Agenda = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch agenda:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
