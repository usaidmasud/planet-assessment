import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("Header renders correctly", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const navElement = screen.getByRole("navigation");
  const linkElement = screen.getByRole("link", { name: /Planet Assessment/i });

  expect(navElement).toBeInTheDocument();
  expect(navElement).toHaveClass(
    "bg-primary-main text-white border-gray-200 shadow-lg",
  );

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/");

  const textElement = screen.getByText(/Planet Assessment/i);
  expect(textElement).toBeInTheDocument();
  expect(textElement).toHaveClass("text-2xl font-semibold");
});

// Add more tests as needed
