import { Photo } from "./photo";

export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    introducion: string;
    lookingFor: string;
    intersts: string;
    city: string;
    country: string;
    photos: Photo[];
  }
  
