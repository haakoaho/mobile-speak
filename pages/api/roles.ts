import { NextApiRequest, NextApiResponse } from "next";
import { CustomSession } from "./auth/typing";
import { backendUrl } from "../../util/getBackendUrl";
import { Agenda } from "../../types";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/authOptions";

export default async function PATCH(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions) as CustomSession;
    const body = JSON.parse(req.body);
    const roleId : number = body.roleId;

    console.log(body);
    if (!session) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
  
  
    try {
      const response = await fetch(`${backendUrl}/api/currentMeeting/reserveRole/${roleId}`, {
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
  
      const data : Agenda = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Failed to fetch agenda:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }