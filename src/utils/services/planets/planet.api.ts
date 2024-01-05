import { AxiosResponse } from "axios";
import instance from "../instance";

export type TResponseData = {
  count: number;
  next: string;
  previous: string | null;
  results: TPlanet[];
};
export type TPlanet = {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export const fetchPlanet = async (): Promise<TResponseData> => {
  const response: AxiosResponse<TResponseData> = await instance.get("/planets");
  // Axios automatically throws an error for non-2xx responses, so no need to check ok property
  return response.data;
};