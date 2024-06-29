import type { NextApiRequest, NextApiResponse } from "next";
import { getBackendUrl } from "../../util/getBackendUrl";
import { getSession } from "next-auth/react";
import { CustomSession } from "./auth/typing";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req }) as CustomSession;

  console.log(session);

  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const url = await getBackendUrl();

  try {
    const response = await fetch(`${url}/api/currentMeeting/agenda`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "ngrok-skip-browser-warning": "y",
        "Cookie": `JSESSIONID=${session.user.jsessionId}`
      },
      credentials: "include",
    });

    if (!response.ok) {
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
