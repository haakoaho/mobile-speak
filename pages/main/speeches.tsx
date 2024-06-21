import { useState, useEffect } from "react";
import { PathwaySpeech, pathways } from "../../pathways";
import { Agenda } from "../../types";
import styles from "../../styles/Home.module.scss";

const Speeches = ({ agenda }: { agenda: Agenda }) => {
  const [selectedPathway, setSelectedPathway] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedSpeech, setSelectedSpeech] = useState<PathwaySpeech | null>(
    null
  );

  const handleSpeechSelection = (
    pathwayIndex:number,
    level: string,
    speechNumber: number
  ) => {
    if (agenda) {
        const selectedLevelSpeech =
          pathways[pathwayIndex][level][speechNumber - 1];
        setSelectedPathway(pathwayIndex);
        setSelectedLevel(level);
        setSelectedSpeech(selectedLevelSpeech);
    }
  };

  return (
    <div className={styles.dropdowns}>
      <select
        value={selectedPathway || ""}
        onChange={(e) => setSelectedPathway(Number(e.target.value))}
      >
        <option value="">Select Pathway</option>
        {agenda &&
          pathways.map((pathway, index) => (
            <option key={pathway.title} value={index + 1}>
              {pathway.title}
            </option>
          ))}
      </select>
      {selectedPathway && (
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
              selectedLevel!,
              speechNumber
            );
          }}
        >
          <option value="">Select Speech</option>
          {selectedPathway &&
            selectedLevel &&
            pathways[selectedPathway][selectedLevel].map((speech, index) => (
              <option key={index + 1} value={index + 1}>
                {speech.title}
              </option>
            ))}
        </select>
      )}
      {selectedSpeech && ( // Display selected speech details
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
  );
};

export default Speeches;
