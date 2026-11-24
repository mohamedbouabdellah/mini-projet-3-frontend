import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone.service';

@Component({
  imports: [CommonModule, FormsModule ],
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom {
  phones!: Phone[] ;
  allphones!: Phone[] ;
  searchTerm! : string;
  marques! : Marque[] ;

  constructor(private phoneService : PhoneService) {
  }
ngOnInit(): void {
  this.phones = [];
  this.phoneService.listephones().subscribe(
    phones => {
      this.allphones = phones;
    }
  );
  this.phoneService.listeMarque().subscribe(marque => this.marques = marque);
}

onKeyUp(filterText : string){
this.phones = this.allphones.filter(item =>
item.nomPhone?.toLowerCase().includes(filterText));
}




}
