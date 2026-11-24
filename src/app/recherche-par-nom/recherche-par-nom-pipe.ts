import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone.service';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  imports: [CommonModule, FormsModule , SearchFilterPipe],
  selector: 'app-recherche-par-nom-pipe',
  styles: ``,
  templateUrl: './recherche-par-nom-pipe.html',
})
export class RechercheParNomPipe {
  phones: Phone[]=[] ;
  allphones: Phone[]=[] ;
  searchTerm! : string;
  marques : Marque[]=[] ;

  constructor(private phoneService : PhoneService ) {
    this.phoneService.listeMarque().subscribe(marque => this.marques = marque); 
  }
ngOnInit(): void {
  this.phoneService.listephones().subscribe(phones => {
      this.phones = phones;
      this.allphones = phones;
      
    }
  );


  
}




}
