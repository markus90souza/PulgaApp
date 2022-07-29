export type ILocation = {
  id: number
  latitude: number
  longitude: number
}

export type IGeolocationResponse = {
  city: string;
  principalSubdivision: string;
}

export type IScooterLocation = {
  id: number;
  name: string;
  code: string;
  battery: number;
  distancy: number;
  picture: string;
}