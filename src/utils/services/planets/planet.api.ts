import { QueryFunction } from "@tanstack/react-query";
import instance from "../instance";
import { AxiosResponse } from "axios";

export type TGlobalRespon = {
  pageParams: number[];
  pages: TResponseData[];
};

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

export const fetchPlanet = async (pageParam: number) => {
  const response: AxiosResponse<TResponseData> = await instance.get(
    `/planets?page=${pageParam}`,
  );
  return response.data;
};

export const getPlanetById = async (id: string) => {
  const response: AxiosResponse<TPlanet> = await instance.get(`/planets/${id}`);
  return response.data;
};
