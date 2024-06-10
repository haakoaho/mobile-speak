"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { Agenda, Role } from "../types";
import { useRouter } from "next/navigation";

const Home = () => {
  const [agenda, setAgenda] = useState<Agenda | null>(null);
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
              "X-Requested-With": "XMLHttpRequest"
            },
            credentials: "include",
          }
        );

        if (response.ok) {
          const data: Agenda = await response.json();
          setAgenda(data);
        } else if (response.status == 401) {
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

  const handleTakeRole = async (roleId: number) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/currentMeeting/reserveRole/${roleId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        console.log(`Role ${roleId} reserved successfully`);
        // Optionally, refresh the agenda to show updated roles
        const updatedAgenda = await response.json();
        setAgenda(updatedAgenda);
      } else if (response.status == 401) {
        router.push("/login");
      } else {
        console.error(`Failed to reserve role ${roleId}`);
      }
    } catch (error) {
      console.error(`Failed to reserve role ${roleId}:`, error);
    }
  };

  return (
    <div className={styles.agendaContainer}>
      <h1 className={styles.agendaHeader}>Current Meeting Agenda</h1>
      {agenda ? (
        <div className={styles.agendaGrid}>
          {agenda.roles.map((role) => (
            <div key={role.roleId} className={styles.roleItem}>
                <div className={styles.roleName}>{role.roleName}</div>
                {role.userName ? (
                  <div className={`${styles.userName} ${styles.assignedRole}`}> {role.userName}</div>
                ) : (
                  <div className={`${styles.userName} ${styles.unassignedRole}`}> Unassigned</div>
                )}

              {!role.userName && (
                <button
                  className={styles.button}
                  onClick={() => handleTakeRole(role.roleId)}
                >
                  Take Role
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading agenda...</p>
      )}
    </div>
  );
};

export default Home;
