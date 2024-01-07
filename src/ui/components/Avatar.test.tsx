import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Avatar from "./Avatar";

test("Avatar renders correctly", () => {
  const link = "https://example.com";
  const icon = <div data-testid="test-icon">Icon</div>;

  render(<Avatar link={link} icon={icon} />);

  const avatarElement = screen.getByRole("link");
  const iconElement = screen.getByTestId("test-icon");

  expect(avatarElement).toBeInTheDocument();
  expect(avatarElement).toHaveClass(
    "h-10 w-10 flex justify-center items-center bg-primary-main text-white rounded-full p-1.5 shadow-md hover:-translate-y-1 transition-transform duration-300",
  );
  expect(avatarElement).toContainElement(iconElement);
});

test("Avatar link works correctly", () => {
  const link = "https://example.com";
  const icon = <div data-testid="test-icon">Icon</div>;

  render(<Avatar link={link} icon={icon} />);

  const avatarElement = screen.getByRole("link");

  expect(avatarElement).toBeInTheDocument();

  // Simulate a click event on the avatar link
  userEvent.click(avatarElement);

  // You can add more assertions related to the navigation or other actions triggered by the link click
});

// Add more tests as needed
