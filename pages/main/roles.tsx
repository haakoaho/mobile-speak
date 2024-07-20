import { Dispatch, SetStateAction, useState } from "react";
import styles from "../../styles/Home.module.scss";
import { Agenda } from "../../types";
import { useRouter } from "next/router";

const Roles = ({
  agenda,
  setAgenda,
  userId
}: {
  agenda: Agenda;
  userId: Number;
  setAgenda: Dispatch<SetStateAction<Agenda>>;
}) => {
  const router = useRouter();
  const { meeting = "0" } = router.query;

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);

  const handleTakeRole = async (roleId: number, force: boolean = false) => {
    try {
      const response = await fetch("api/roles", {
        method: "PATCH",
        body: JSON.stringify({ roleId: roleId, meeting: meeting, force: force }),
      });

      if (response.ok) {
        console.log(`Role ${roleId} reserved successfully`);
        const updatedAgenda: Agenda = await response.json();
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

  const handleCancelRole = async (roleId: number) => {
    try {
      const response = await fetch("api/roles", {
        method: "DELETE",
        body: JSON.stringify({ roleId: roleId, meeting: meeting }),
      });

      if (response.ok) {
        console.log(`Role ${roleId} cancelled successfully`);
        const updatedAgenda: Agenda = await response.json();
        setAgenda(updatedAgenda);
      } else if (response.status == 401) {
        router.push("/signin");
      } else {
        console.error(`Failed to cancel role ${roleId}`);
      }
    } catch (error) {
      console.error(`Failed to cancel role ${roleId}:`, error);
    }
  };

  const openConfirmDialog = (roleId: number) => {
    setSelectedRoleId(roleId);
    setConfirmOpen(true);
  };

  const closeConfirmDialog = () => {
    setConfirmOpen(false);
    setSelectedRoleId(null);
  };

  const confirmTakeRole = () => {
    if (selectedRoleId !== null) {
      handleTakeRole(selectedRoleId, true);
      closeConfirmDialog();
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

          {!role.userName ? (
            <button
              className={styles.button}
              onClick={() => handleTakeRole(role.roleId)}
            >
              Take Role
            </button>
          ) : (
            <>
              <button
                className={styles.redButton}
                onClick={() => openConfirmDialog(role.roleId)}
              >
                Force Take Role
              </button>
              {role.userId === userId && (
                <button
                  className={styles.cancelButton}
                  onClick={() => handleCancelRole(role.roleId)}
                >
                  Cancel Role
                </button>
              )}
            </>
          )}
        </div>
      ))}

      {confirmOpen && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3>Confirm Force Take Role</h3>
            <p>
              Are you sure you want to forcefully take this role? This action
              will overwrite the current reservation.
            </p>
            <div className={styles.dialogActions}>
              <button onClick={closeConfirmDialog}>Cancel</button>
              <button onClick={confirmTakeRole}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roles;
