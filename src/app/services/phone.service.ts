import { Injectable } from '@angular/core';
import { Phone } from '../model/phone.model';
import { Marque } from '../model/marque.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  
  

  phones : Phone[]=[]; 
  marques: Marque[]=[];
  phonesRecherche! : Phone[];

  phone! : Phone;

  constructor(private http : HttpClient) {
    /*this.marques = [
      { idmarque: 1, nommarque: 'Samsung' },
      { idmarque: 2, nommarque: 'Apple' },
      { idmarque: 3, nommarque: 'Xiaomi' },
      { idmarque: 4, nommarque: 'Asus' }
    ];*/

    /*this.phones = [
      { idphone: 1,  nomphone: 'Galaxy S22', prixphone: 1800 , dateCreation: new Date(2022, 1, 9), marque: this.marques[0] },
      { idphone: 2,  nomphone: 'iPhone 14', prixphone: 3200 , dateCreation: new Date(2022, 8, 7), marque: this.marques[1] },
      { idphone: 3,  nomphone: 'Redmi Note 13', prixphone: 800 , dateCreation: new Date(2024, 0, 15), marque: this.marques[2] },
      { idphone: 4,  nomphone: 'L’Asus ROG Phone 9 Pro', prixphone: 2500 , dateCreation: new Date(2024, 10, 19), marque: this.marques[3] }
    ]; */
   }


   ajouterMarque(marque: Marque): Observable<Marque> {
  return this.http.post<Marque>(
    environment.apiURL + '/marque',
    marque,
    httpOptions
  );
}
modifierMarque(marque: Marque): Observable<Marque> {
  return this.http.put<Marque>(
    environment.apiURL + '/marque',
    marque,
    httpOptions
  );
}

    listeMarque():Observable<Marque[]>{
      return this.http.get<Marque[]>(environment.apiURL+"/marque");
    }

    consulterMarque(id: number): Marque {
      return this.marques.find(m => m.idMarque == id)!;
    }




    listephones(): Observable<Phone[]>{
      return this.http.get<Phone[]>(environment.apiURL);
    }

    ajouterphone( phone: Phone):Observable<Phone>{
      return this.http.post<Phone>(environment.apiURL, phone, httpOptions);
    }

    supprimerphone(id : number) {
        const url = `${environment.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

     consulterphone(id: number): Observable<Phone> {
      const url = `${environment.apiURL}/${id}`;
      return this.http.get<Phone>(url);
}



     trierphones(){
      this.phones = this.phones.sort((n1,n2) => {
        if (n1.idPhone! > n2.idPhone!) {
            return 1;
        }
       if (n1.idPhone! < n2.idPhone!) {
            return -1;
        }
      return 0;
    });
    }


        
updatephone(phone :Phone) : Observable<Phone>
{
return this.http.put<Phone>(environment.apiURL, phone, httpOptions);
}




    rechercherParMarque(idmarque: number): Phone[]{
    this.phonesRecherche = [];

    this.phones.forEach((cur, index) => {
        if (idmarque === cur.marque?.idMarque) {
          console.log("cur " + cur);
          this.phonesRecherche.push(cur);
        }
      });
      
      return this.phonesRecherche;
    }
    
    
    
  }
  
  
 