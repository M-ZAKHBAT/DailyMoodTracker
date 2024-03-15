// MoodForm.jsx
import React, { useState } from "react";

const MoodForm = () => {
  const [mood, setMood] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrer l'humeur
    console.log("Mood submitted:", mood);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setMessage(getMessage(emoji));
  };

  const getMessage = (emoji) => {
    switch (emoji) {
      case "😄":
        return "You're feeling happy!";
      case "😐":
        return "You're feeling normal.";
      case "😞":
        return "You're feeling sad.";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">How do you feel today?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Enter your mood..."
          className="w-full border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <div className="flex justify-between mb-4">
          <button
            type="button"
            onClick={() => handleEmojiClick("😄")}
            className="text-2xl"
          >
            😄
          </button>
          <button
            type="button"
            onClick={() => handleEmojiClick("😐")}
            className="text-2xl"
          >
            😐
          </button>
          <button
            type="button"
            onClick={() => handleEmojiClick("😞")}
            className="text-2xl"
          >
            😞
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {message && (
        <div className="mt-4 bg-gray-100 p-3 rounded-md">{message}</div>
      )}
    </div>
  );
};

export default MoodForm;
