import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { PathwaySpeech, pathways } from "../../pathways";
import { Agenda, User } from "../../types";
import styles from "../../styles/Home.module.scss";

const Speeches = ({
  agenda,
  setAgenda,
  meeting
}: {
  agenda: Agenda;
  meeting: string
  setAgenda: Dispatch<SetStateAction<Agenda>>;
}) => {

  const [selectedPathway, setSelectedPathway] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedSpeech, setSelectedSpeech] = useState<PathwaySpeech | null>(
    null
  );
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data: User = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  const handleSpeechSelection = (
    pathwayIndex: number,
    level: string,
    speechNumber: number
  ) => {
    const selectedLevelSpeech = pathways[pathwayIndex][level][speechNumber - 1];
    setSelectedPathway(pathwayIndex);
    setSelectedLevel(level);
    setSelectedSpeech(selectedLevelSpeech);
  };

  const handleEvaluate = async (speechId: number) => {
    try {
      const response = await fetch("/api/speech/evaluate", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          speechId, meeting
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to evaluate the speech");
      }

      setMessage("Scheduled to evaluate");
      const data : Agenda = await response.json();
      setAgenda(data);
    } catch (error) {
      setMessage("Error evaluating the speech");
    }
  };

  if (!agenda) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.dropdowns}>
        <select
          value={selectedPathway || ""}
          onChange={(e) => setSelectedPathway(Number(e.target.value))}
        >
          <option value="">Select Pathway</option>
          {pathways.map((pathway, index) => (
            <option key={pathway.title} value={index}>
              {pathway.title}
            </option>
          ))}
        </select>
        {selectedPathway !== null && (
          <select
            value={selectedLevel || ""}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="level1">1</option>
            <option value="level2">2</option>
            <option value="level3">3</option>
            <option value="level4">4</option>
            <option value="level5">5</option>
          </select>
        )}
        {selectedLevel && (
          <select
            onChange={(e) => {
              const speechNumber = parseInt(e.target.value);
              handleSpeechSelection(
                selectedPathway!,
                selectedLevel,
                speechNumber
              );
            }}
          >
            <option value="">Select Speech</option>
            {selectedPathway !== null &&
              selectedLevel &&
              pathways[selectedPathway][selectedLevel].map((speech, index) => (
                <option key={index} value={index + 1}>
                  {speech.title}
                </option>
              ))}
          </select>
        )}
        {selectedSpeech && (
          <div className={styles.selectedSpeech}>
            <h2>{selectedSpeech.title}</h2>
            <p>{selectedSpeech.overview}</p>
            <p>Objective: {selectedSpeech.objective}</p>
            <p>Green Card: {selectedSpeech.greenCard}</p>
            <p>Yellow Card: {selectedSpeech.yellowCard}</p>
            <p>Red Card: {selectedSpeech.redCard}</p>
          </div>
        )}
      </div>

      {selectedPathway !== null && selectedLevel && selectedSpeech && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await fetch("/api/speech/speech", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  title,
                  pathway: pathways[selectedPathway].title + "." + selectedLevel + "." + selectedSpeech.speechNumber,
                  meetingOrder: meeting
                }),
              });

              if (!response.ok) {
                throw new Error("Failed to reserve the speech");
              }

              setMessage("Successfully reserved the speech");
              const data : Agenda = await response.json();
              setAgenda(data);
            } catch (error) {
              setMessage("Error reserving the speech");
            }
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit">Reserve Speech</button>
        </form>
      )}

      <div className={styles.speeches}>
        {agenda.speeches.map((speech) => (
          <div key={speech.id} className={styles.speech}>
            <h3>{speech.title}</h3>
            <p>Pathway: {speech.pathway}</p>
            <p>Speaker: {speech.speakerName}</p>
            <p>Evaluator: {speech.evaluatorName || "Not assigned"}</p>
            {user && user.id !== speech.speakerId && !speech.evaluatorId && (
              <button onClick={() => handleEvaluate(speech.id)}>
                Evaluate
              </button>
            )}
          </div>
        ))}
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Speeches;
