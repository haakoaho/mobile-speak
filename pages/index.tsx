import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Roles from "./main/roles";
import Speeches from "./main/speeches";
import type { Agenda } from "../types";
import { useRouter } from "next/router";
import { getBackendUrl, useBackendUrl } from "../hooks/useBackendUrl";

const Agenda = () => {
  const [agenda, setAgenda] = useState< Agenda | null>(null);
  const backendUrl = useBackendUrl();
  const router = useRouter();

  useEffect(() => {
    
    const fetchAgenda = async () => {
    const backendUrlInUseEffect = await getBackendUrl();
      try {
        const response = await fetch(
          `${backendUrlInUseEffect}/api/currentMeeting/agenda`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
              "ngrok-skip-browser-warning" :"y"
            },
            credentials: "include",
          }
        );
  
        if (response.ok) {
          const data: Agenda = await response.json();
          setAgenda(data);
        } else if (response.status === 401) {
          router.push("/login");
        }

        else {
          console.error("Failed to fetch agenda");
        }
      } catch (error) {
        console.error("Failed to fetch agenda:", error);
      }
    };
    fetchAgenda();
  }, []);

  return (
    <div className={styles.agendaContainer}>
      <h1 className={styles.agendaHeader}>Current Meeting Agenda</h1>
      {backendUrl ? (  // Check if backendUrl is populated before using it
        <>
          <Roles agenda={agenda} setAgenda={setAgenda} />
          <Speeches agenda={agenda} />
        </>
      ) : (
        <p>Loading agenda...</p>
      )}
    </div>
  );
};

export default Agenda;