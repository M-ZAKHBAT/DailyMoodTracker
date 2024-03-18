import { useState } from "react";

const MoodForm = () => {
  const [mood, setMood] = useState("");
  const [, setSelectedEmoji] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mood submitted:", mood);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    const msg = getMessage(emoji);
    setMessage(msg);
    setMessageColor(getMessageColor(emoji));
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

  const getMessageColor = (emoji) => {
    switch (emoji) {
      case "😄":
        return "text-green-500";
      case "😐":
        return "text-gray-500";
      case "😞":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">How do you feel today?</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Enter your mood..."
          className="w-full px-4 py-2 mb-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => handleEmojiClick("😄")}
            className="text-2xl rounded-full bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            😄
          </button>
          <button
            type="button"
            onClick={() => handleEmojiClick("😐")}
            className="text-2xl rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            😐
          </button>
          <button
            type="button"
            onClick={() => handleEmojiClick("😞")}
            className="text-2xl rounded-full bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            😞
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Submit
        </button>
      </form>
      {message && (
        <div
          data-testid="selected-emoji-message"
          className={`mt-4 p-3 rounded-md ${messageColor} font-bold text-lg border border-gray-300`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default MoodForm;
