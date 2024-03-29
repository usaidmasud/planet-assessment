// Generated by CodiumAI

import { render, screen } from "@testing-library/react";
import PlanetCardDescription from "./PlanetCardDescription";

describe("PlanetCardDescription", () => {
  // Renders a li element with two span elements inside
  it("should render a li element with two span elements inside", () => {
    // Arrange
    const label = "Label";
    const value = "Value";

    // Act
    render(<PlanetCardDescription label={label} value={value} />);

    // Assert
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(1);
    expect(screen.getAllByRole("listitem")[0]).toContainElement(
      screen.getByText(label),
    );
    expect(screen.getAllByRole("listitem")[0]).toContainElement(
      screen.getByText(value),
    );
  });

  // The first span element displays the label passed as prop
  it("should display the label passed as prop in the first span element", () => {
    // Arrange
    const label = "Label";
    const value = "Value";

    // Act
    render(<PlanetCardDescription label={label} value={value} />);

    // Assert
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  // The second span element displays the value passed as prop
  it("should display the value passed as prop in the second span element", () => {
    // Arrange
    const label = "Label";
    const value = "Value";

    // Act
    render(<PlanetCardDescription label={label} value={value} />);

    // Assert
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  // label prop is not passed
  it("should render without the label prop", () => {
    // Arrange
    const value = "Value";

    // Act
    render(<PlanetCardDescription value={value} />);

    // Assert
    expect(screen.queryByText(value)).toBeInTheDocument();
  });

  // value prop is not passed
  it("should render without the value prop", () => {
    // Arrange
    const label = "Label";

    // Act
    render(<PlanetCardDescription label={label} />);

    // Assert
    expect(screen.queryByText(label)).toBeInTheDocument();
  });

  // textSize prop is not "sm" or "md"
  it("should render with default textSize prop value", () => {
    // Arrange
    const label = "Label";
    const value = "Value";

    // Act
    render(<PlanetCardDescription label={label} value={value} />);

    // Assert
    expect(screen.getByText(label)).toHaveClass("text-sm");
    expect(screen.getByText(value)).toHaveClass("text-sm");
  });

  // textSize prop is "sm"
  it('should render with textSize prop value "sm"', () => {
    // Arrange
    const label = "Label";
    const value = "Value";

    // Act
    render(<PlanetCardDescription label={label} value={value} textSize="sm" />);

    // Assert
    expect(screen.getByText(label)).toHaveClass("text-sm");
    expect(screen.getByText(value)).toHaveClass("text-sm");
  });

  // textSize prop is "md"
  it('should render with textSize prop value "md"', () => {
    // Arrange
    const label = "Label";
    const value = "Value";

    // Act
    render(<PlanetCardDescription label={label} value={value} textSize="md" />);

    // Assert
    expect(screen.getByText(label)).toHaveClass("text-base");
    expect(screen.getByText(value)).toHaveClass("text-base");
  });
});
