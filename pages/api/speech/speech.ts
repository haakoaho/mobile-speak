import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import Agenda from "../..";
import { getBackendUrl } from "../../../util/getBackendUrl";
import { authOptions } from "../auth/authOptions";
import { CustomSession } from "../auth/typing";


export default async function POST(req: NextApiRequest, res: NextApiResponse) {
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
  const pathway: string = req.body.pathway;
  const meetingOrder: number = req.body.meeting;
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
          pathway,
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
