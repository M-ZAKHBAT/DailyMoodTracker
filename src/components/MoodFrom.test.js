import { render, fireEvent } from "@testing-library/react";
import MoodForm from "./MoodForm";

test('selecting happy emoji displays "You are happy" message', () => {
  const { getByText, getByTestId } = render(<MoodForm />);
  const happyEmojiButton = getByText("😄");

  fireEvent.click(happyEmojiButton);

  const selectedEmojiMessage = getByTestId("selected-emoji-message");
  expect(selectedEmojiMessage.textContent).toBe("You're feeling happy!");
});
