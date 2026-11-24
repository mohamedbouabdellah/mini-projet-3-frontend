import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { PhoneService } from '../services/phone.service';
import { CommonModule } from '@angular/common';
import { UpdateMarque } from '../update-marque/update-marque';

@Component({
  imports: [CommonModule, UpdateMarque],
  selector: 'app-liste-marques',
  styles: ``,
  templateUrl: './liste-marques.html',
})
export class ListeMarques implements OnInit {
  marques!: Marque[];
  updatedMarque: Marque = { idMarque: null, nomMarque: '' };

  ajout: boolean = true;

  constructor(private phoneService: PhoneService , private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.chargerMarque();
  }
  marqueUpdated(marque: Marque) {
  if (this.ajout) {
    this.phoneService.ajouterMarque(marque).subscribe(() => {
      this.updatedMarque = { idMarque: null, nomMarque: '' };
      this.chargerMarque();
    });
  } else {
    this.phoneService.modifierMarque(marque).subscribe(() => {
      this.ajout = true;
      this.updatedMarque = { idMarque: null, nomMarque: '' };
      this.chargerMarque();
    });
  }
}

  chargerMarque() {
    this.phoneService.listeMarque().subscribe((marques) => {
      this.marques = marques;
      this.cdr.detectChanges();
    });
  }

  

  updateMarque(marque: Marque) {
    this.updatedMarque = marque;
    this.ajout = false;
  }
}