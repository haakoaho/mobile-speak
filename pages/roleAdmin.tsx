import { useEffect, useState } from "react";
import { Agenda, User } from "../types";
import { useRouter } from "next/router";
import Grammarian from "./roles/grammarian";
import Navbar from "./navbar";
import ToastmasterOfTheEvening from "./roles/toastmasterOfTheEvening";

const RoleAdmin = () => {
  const [agenda, setAgenda] = useState<Agenda | null>(null);
  const [roles, setRoles] = useState<Set<string>>(new Set<string>());
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [agendaResponse, userResponse] = await Promise.all([
          fetch(`api/agenda?meeting=0`),
          fetch("/api/user"),
        ]);

        if (agendaResponse.ok && userResponse.ok) {
          const agendaData: Agenda = await agendaResponse.json();
          const userData: User = await userResponse.json();
          console.log(agendaData);
          setAgenda(agendaData);
          setRoles(
            new Set<string>(
              agendaData.roles
                .filter((role) => role.userId === userData.id)
                .map((role) => role.roleName)
            )
          );
        } else if (
          agendaResponse.status === 401 ||
          userResponse.status === 401
        ) {
          router.push("/signin");
        } else {
          // Handle other errors (e.g., console.error)
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {!loading && (
        <>
          <div>
            {roles.has("Grammarian") && (
              <Grammarian inputWord={agenda.wordOfTheDay} />
            )}
          </div>
          <div>
            {roles.has("Toastmaster of the Evening") && (
              <ToastmasterOfTheEvening inputWord={agenda.theme} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RoleAdmin;
