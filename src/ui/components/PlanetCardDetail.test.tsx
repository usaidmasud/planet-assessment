import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { TPlanet } from "../../utils/services/planets/planet.api";
import PlanetCardDetail from "./PlanetCardDetail";

import { useAppDispatch } from "../../utils/redux/hooks";

jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
  },
}));

jest.mock("../../utils/redux/hooks", () => ({
  ...jest.requireActual("../../utils/redux/hooks"),
  useAppDispatch: jest.fn(),
}));

describe("PlanetCardDetail", () => {
  const mockPlanet = {
    name: "Test Planet",
    rotation_period: 24,
    orbital_period: 365,
    diameter: 10000,
    population: 1000000,
    terrain: "Test Terrain",
    surface_water: 50,
    climate: "Test Climate",
    gravity: "Test Gravity",
    created: "2022-01-07T12:00:00Z",
    edited: "2022-01-07T13:30:00Z",
    url: "https://example.com/1/",
  } as TPlanet;

  const mockDispatch = jest.fn();
  (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

  it("renders planet card with correct information", () => {
    render(
      <MemoryRouter>
        <PlanetCardDetail planet={mockPlanet} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Rotation Period")).toBeInTheDocument();
    expect(screen.getByText("Rotation Period")).toBeInTheDocument();
    expect(screen.getByText("Orbital Period")).toBeInTheDocument();
    expect(screen.getByText("Diameter")).toBeInTheDocument();
    expect(screen.getByText("Population")).toBeInTheDocument();
    expect(screen.getByText("Terrain")).toBeInTheDocument();
    expect(screen.getByText("Surface Water")).toBeInTheDocument();

    // Add more expectations for other elements as needed
  });

  // Add more test cases as needed
});
