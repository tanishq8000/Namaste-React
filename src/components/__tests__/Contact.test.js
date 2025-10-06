import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load heading inside contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load Name input box inside contact component", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Name");
  expect(nameInput).toBeInTheDocument();
});

test("Should load 2 inputs inside contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});

test("Should load paragraph inside contact component", () => {
  render(<Contact />);
  const para = screen.getByText(
    "For any query mail to hungerhub.helpdesk@gmail.com"
  );

  expect(para).toBeInTheDocument();
});
