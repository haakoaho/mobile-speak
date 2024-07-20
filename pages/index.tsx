import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";
import Roles from "./main/roles";
import Speeches from "./main/speeches";
import type { Agenda, User } from "../types";

const Agenda = () => {
  const [agenda, setAgenda] = useState<Agenda | null>(null);
  const [userId, setUserId] = useState<Number | null>(null);
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
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user");
        if (response.status === 401) {
          router.push("/signin");
        } else if (response.ok) {
          const userData: User = await response.json();
          setUserId(userData.id);
        } else {
          throw new Error("Unexpected response status: " + response.status);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
    fetchAgenda();
  }, [meeting]);

  const handleNavigation = (offset: number) => {
    const newMeeting = parseInt(meeting as string, 10) + offset;
    if (newMeeting >= 0 && newMeeting <= 3) {
      router.push(`/?meeting=${newMeeting}`);
    }
  };

  const currentMeeting = parseInt(meeting as string, 10);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    return `Agenda for Meeting on ${date.toLocaleDateString("en-US", options)}`;
  };

  return (
    <div className={styles.agendaContainer}>
      <a href="/user">User info</a>.
      <h1 className={styles.agendaHeader}>
        {agenda
          ? formatDate(agenda.startDateTime.toString())
          : "Loading agenda..."}
      </h1>
      {agenda ? (
        <>
          <div className={styles.meetingDetails}>
            <p>
              <strong>Word of the Day:</strong> {agenda.wordOfTheDay}
            </p>
            <p>
              <strong>Theme:</strong> {agenda.theme}
            </p>
            <p>
              <strong>Location:</strong> {agenda.location}
            </p>
          </div>
          <Roles agenda={agenda} setAgenda={setAgenda} userId={userId} />
          <Speeches
            agenda={agenda}
            setAgenda={setAgenda}
            meeting={meeting as string}
            userId={userId}
          />
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
          <button onClick={() => handleNavigation(1)} className={styles.button}>
            Next Meeting
          </button>
        )}
      </div>
    </div>
  );
};

export default Agenda;
