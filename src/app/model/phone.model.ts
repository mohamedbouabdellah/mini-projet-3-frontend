import { Marque } from './marque.model';

export class Phone {
    idPhone? : number;
    nomPhone? : string;
    prixPhone? : number;
    dateCreation?: Date | null;
    marque?: Marque;
}
