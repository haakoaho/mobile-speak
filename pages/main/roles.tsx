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
      const response = await fetch("api/roles", {
        method: "PATCH",
        body: JSON.stringify({ roleId: roleId })
      });

      if (response.ok) {
        console.log(`Role ${roleId} reserved successfully`);
        const updatedAgenda : Agenda = await response.json();
        setAgenda(updatedAgenda);
      } else if (response.status == 401) {
        router.push("/signin");
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



