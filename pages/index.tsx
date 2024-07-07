import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";
import Roles from "./main/roles";
import Speeches from "./main/speeches";
import type { Agenda } from "../types";

const Agenda = () => {
  const [agenda, setAgenda] = useState<Agenda | null>(null);
  const router = useRouter();
  const { meeting = "0" } = router.query;

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const response = await fetch(`api/agenda?meeting=${meeting}`);

        if (response.ok) {
          const data: Agenda = await response.json();
          setAgenda(data);
        } else if (response.status === 401) {
          router.push("/signin");
        } else {
          console.error("Failed to fetch agenda");
        }
      } catch (error) {
        console.error("Failed to fetch agenda:", error);
      }
    };
    fetchAgenda();
  }, [meeting]); 

  const handleNavigation = (offset: number) => {
    const newMeeting = parseInt(meeting as string, 10) + offset;
    if (newMeeting >= 0 && newMeeting <= 3) {
      router.push(`/?meeting=${newMeeting}`);
    }
  };

  const currentMeeting = parseInt(meeting as string, 10);

  return (
    <div className={styles.agendaContainer}>
      <h1 className={styles.agendaHeader}>Current Meeting Agenda</h1>
      {agenda ? (
        <>
          <Roles agenda={agenda} setAgenda={setAgenda} />
          <Speeches agenda={agenda} setAgenda={setAgenda} meeting={meeting as string} />
        </>
      ) : (
        <p>Loading agenda...</p>
      )}
      <div className={styles.navigationButtons}>
        {currentMeeting > 0 && (
          <button
            onClick={() => handleNavigation(-1)}
            className={styles.button}
          >
            Previous Meeting
          </button>
        )}
        {currentMeeting < 3 && (
          <button
            onClick={() => handleNavigation(1)}
            className={styles.button}
          >
            Next Meeting
          </button>
        )}
      </div>
    </div>
  );
};

export default Agenda;
