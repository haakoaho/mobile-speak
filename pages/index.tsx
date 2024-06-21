import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/navigation";
import Roles from "./main/roles";
import Speeches from "./main/speeches";
import type { Agenda } from "../types";

const Agenda = () => {
  const [agenda, setAgenda] = useState< Agenda | null>(null);
  const router = useRouter();

  useEffect(() => {

    const fetchAgenda = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/currentMeeting/agenda",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            credentials: "include",
          }
        );
  
        if (response.ok) {
          const data: Agenda = await response.json();
          setAgenda(data);
        } else if (response.status === 401) {
          router.push("/login");
        } else {
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
      {agenda ? (
        <>
          <Roles agenda={agenda} setAgenda = {setAgenda}/>
          <Speeches agenda={agenda} />
        </>
      ) : (
        <p>Loading agenda...</p>
      )}
    </div>
  );
};

export default Agenda;