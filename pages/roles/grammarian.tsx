import { useState } from "react";

const Grammarian = ({
    inputWord
  }: {
    inputWord: string
  }) => {
  const [word, setWord] = useState<string | null>(inputWord);
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const fetchWordOfTheDay = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/wordOfTheDay`, {
        method: "PATCH",
        body: JSON.stringify({
          word: word,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setWordOfTheDay(data.word);
      } else {
        setError("Failed to fetch word of the day");
      }
    } catch (error) {
      console.error("Error fetching word of the day:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Grammarian Admin</h1>
      <label>Word of the day</label>
      <input type="text" value={word} onChange={handleWordChange} />
      <button onClick={fetchWordOfTheDay} disabled={isLoading}>
        {isLoading ? "Loading..." : "Set Word of the Day"}
      </button>
      {error && <p className="error">{error}</p>}
      {wordOfTheDay && <p>Word of the Day: {wordOfTheDay}</p>}
    </div>
  );
};

export default Grammarian;
