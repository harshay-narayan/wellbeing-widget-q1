import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WellbeingWidget from "./WellbeingWidget";
import { feelings } from "../../lib/data";

describe("WellbeingWidget", () => {
  it("renders heading and prompt", () => {
    render(<WellbeingWidget />);
    expect(screen.getByText("Wellbeing Check-in")).toBeInTheDocument();
    expect(
      screen.getByText("Hello! How are you feeling today?")
    ).toBeInTheDocument();
  });

  it("renders all feeling options", () => {
    render(<WellbeingWidget />);
    feelings.forEach((feeling) => {
      expect(screen.getByText(feeling.name)).toBeInTheDocument();
    });
  });

  it("selects a feeling on click", () => {
    render(<WellbeingWidget />);
    const targetFeeling = feelings[2];
    const feelingButton = screen.getByText(targetFeeling.name);
    fireEvent.click(feelingButton);

    expect(feelingButton).toHaveClass("bg-[#e2f1ffb3]");
    expect(feelingButton).toHaveClass("border-[#1c8cf2]");
  });

  it("renders Continue button", () => {
    render(<WellbeingWidget />);
    const continueButton = screen.getByText("Continue");
    expect(continueButton).toBeInTheDocument();
    expect(continueButton).toHaveClass("bg-gray-400");
  });

  it("displays shows Back and Close", () => {
    render(<WellbeingWidget />);
    const arrow = screen.getAllByRole("button")[0];
    const close = screen.getAllByRole("button")[1];
    expect(arrow).toBeInTheDocument();
    expect(close).toBeInTheDocument();
  });

  it("changes Continue button background color when a feeling is selected", () => {
    render(<WellbeingWidget />);
    const targetFeeling = feelings[3];
    const feelingButton = screen.getByText(targetFeeling.name);
    fireEvent.click(feelingButton);
    const continueButton = screen.getByRole("button", { name: "Continue" });
    expect(continueButton).not.toHaveClass("bg-gray-400");
    expect(continueButton).toHaveClass("bg-[#1C8CF2]");
  });
});
