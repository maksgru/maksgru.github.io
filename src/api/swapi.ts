import axiosSwapi from './index';
import {
  SwapiFilmType,
  SwapiItemType,
  SwapiPeopleType,
  SwapiPlanetType,
  SwapiSpeciesType,
  SwapiStarshipType,
  SwapiVehicleType
} from '../types/swapi-types';

export type ResourcesResponseType = Array<SwapiItemType>;

// type SwapiResourcesResponseType = {
//   results: ResourcesResponseType
// }

export const getSwapiItemsFetch = async (search: string): Promise<ResourcesResponseType> => {
  const requests = [
    getPlanets(search),
    getPeople(search),
    getFilms(search),
    getSpecies(search),
    getVehicles(search),
    getStarships(search)
  ];
  const searchResponse = await Promise.allSettled(requests);

  // @ts-ignore
  const searchData: ResourcesResponseType = searchResponse.reduce((acc, item) => {
    return [...acc, ...item.status !== "rejected" ? item?.value.results : []];
  }, []);
  return searchData;
};

export const getPlanets = (search: string): Promise<{ results: SwapiPlanetType[] }> => axiosSwapi.get(`planets/?search=${search}`);
export const getPeople = (search: string): Promise<{ results: SwapiPeopleType[] }> => axiosSwapi.get(`people/?search=${search}`);
export const getFilms = (search: string): Promise<{ results: SwapiFilmType[] }> => axiosSwapi.get(`films/?search=${search}`);
export const getSpecies = (search: string): Promise<{ results: SwapiSpeciesType[] }> => axiosSwapi.get(`species/?search=${search}`);
export const getVehicles = (search: string): Promise<{ results: SwapiVehicleType[] }> => axiosSwapi.get(`vehicles/?search=${search}`);
export const getStarships = (search: string): Promise<{ results: SwapiStarshipType[] }> => axiosSwapi.get(`starships/?search=${search}`);
