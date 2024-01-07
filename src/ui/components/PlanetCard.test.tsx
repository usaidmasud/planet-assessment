import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PlanetCard from "./PlanetCard";
import { TPlanet } from "@/utils/services/planets/planet.api";

describe("PlanetCard", () => {
  const mockPlanet = {
    name: "Test Planet",
    rotation_period: 24,
    orbital_period: 365,
    diameter: 10000,
    population: 1000000,
    terrain: "Test Terrain",
    surface_water: 50,
    url: "https://example.com/1/",
  } as TPlanet;

  it("renders planet card with correct information", () => {
    render(
      <MemoryRouter>
        <PlanetCard planet={mockPlanet} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Test Planet")).toBeInTheDocument();
    // Add more expectations for other elements as needed
  });

  it('navigates to detail page when "View Detail" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PlanetCard planet={mockPlanet} />
      </MemoryRouter>,
    );

    fireEvent.click(getByText("View Detail"));

    // Add expectations for the navigation
  });

  it('displays remove button when "showRemove" prop is true', () => {
    render(
      <MemoryRouter>
        <PlanetCard planet={mockPlanet} showRemove={true} />
      </MemoryRouter>,
    );

    expect(screen.getByTitle("Remove from wishlist")).toBeInTheDocument();
  });

  it('does not render anything when "planet" prop is undefined', () => {
    render(
      <MemoryRouter>
        <PlanetCard planet={undefined} />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId("planet-card")).not.toBeInTheDocument();
  });

  // Add more test cases as needed
});
