import { Dispatch, SetStateAction } from "react";
import styles from "../../styles/Home.module.scss";
import { Agenda } from "../../types";
import { useRouter } from "next/router";

const Roles = ({
  agenda,
  setAgenda,
}: {
  agenda: Agenda;
  setAgenda: Dispatch<SetStateAction<Agenda>>;
}) => {
  const router = useRouter();

  const handleTakeRole = async (roleId: number) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/currentMeeting/reserveRole/${roleId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
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
    <div className={styles.agendaGrid}>
      {agenda?.roles.map((role) => (
        <div key={role.roleId} className={styles.roleItem}>
          <div className={styles.roleName}>{role.roleName}</div>
          {role.userName ? (
            <div className={`${styles.userName} ${styles.assignedRole}`}>
              {role.userName}
            </div>
          ) : (
            <div className={`${styles.userName} ${styles.unassignedRole}`}>
              Unassigned
            </div>
          )}

          {!role.userName && (
            <button
              className={styles.button}
              onClick={() => {
                handleTakeRole(role.roleId);
              }}
            >
              Take Role
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Roles;



