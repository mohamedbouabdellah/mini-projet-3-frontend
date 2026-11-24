import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-recherche-par-marque',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recherche-par-marque.html',
})
export class RechercheParMarqueComponent implements OnInit {
  phones: Phone[]=[] ;
  allPhones: Phone[]=[];
  marques: Marque[]=[] ;
  selectedMarqueId!: number;

  constructor(private phoneService: PhoneService , private cdr : ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.phoneService.listeMarque().subscribe(marque => {this.marques = marque ; this.cdr.detectChanges(); });
    this.phoneService.listephones().subscribe(phones => {
    this.phoneService.phones = phones;
  });
  }

  onChange(): void {
    this.phones = this.phoneService.rechercherParMarque(this.selectedMarqueId);

  }

  supprimerphone(id: number): void {
    if (confirm('Etes-vous sûr ?')) {
      this.phoneService.supprimerphone(id).subscribe(() => {
        this.phoneService.phones = this.phoneService.phones.filter(phone => phone.idPhone !== id);
        this.onChange();
        this.cdr.detectChanges();
      });
    }
  }
}
