import { useState } from "react";

const ToastmasterOfTheEvening = ({
    inputWord
  }: {
    inputWord: string
  }) => {
  const [word, setWord] = useState<string | null>(inputWord);
  const [theme, setTheme] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleWordChange = (event) => {
    setWord(event.target.value);
  };

  const sendTheme = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/theme`, {
        method: "PATCH",
        body: JSON.stringify({
          word: word,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setTheme(data.word);
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
      <h1>Toastmaster of the Evening Admin</h1>
      <label>Theme</label>
      <input type="text" value={word} onChange={handleWordChange} />
      <button onClick={sendTheme} disabled={isLoading}>
        {isLoading ? "Loading..." : "Set Agenda"}
      </button>
      {error && <p className="error">{error}</p>}
      {theme && <p>Word of the Day: {theme}</p>}
    </div>
  );
};

export default ToastmasterOfTheEvening;
