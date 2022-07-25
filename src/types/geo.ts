export interface ILocation {
    id: number;
    lat: number;
    lng: number;
};

export interface IGeoReturn {
    city: string;
    principalSubdivision: string;
}

export interface IScooter {
    id: number;
    name: string;
    code: string;
    battery: number;
    distancy: number;
    picture: string;
}