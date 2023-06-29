export type CharacterStatus = "Alive" | "Dead" | "unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";
export type ID = string | number;

export interface ILocation {
  id: ID;
  name: string;
  type: string;
  dimension: string;
  residents: ICharacter[];
}

export interface IEpisode {
  id: ID;
  name: String;
  air_date: String;
  episode: String;
  characters: ICharacter[];
}

export interface ICharacter {
  id?: ID;
  name?: string;
  status?: CharacterStatus;
  species?: string;
  type?: string;
  gender?: CharacterGender;
  origin?: ILocation;
  location?: ILocation;
  image?: string;
  episode?: IEpisode[];
}

export interface IInfo {
  pages: number;
  count: number;
  next: number | null;
  prev: number | null;
}
