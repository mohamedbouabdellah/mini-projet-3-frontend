import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Phone } from '../model/phone.model';
import { Marque } from '../model/marque.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../services/phone.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-update-phone',
    imports: [FormsModule, CommonModule],
    templateUrl: './update-phone.component.html',
    styles: ``
})


export class UpdatephoneComponent implements OnInit {
  currentphone  = new Phone();
  marques: Marque[]=[];
  updatedIdMarque!: number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private phoneservice: PhoneService, private cdr: ChangeDetectorRef
) {
}


ngOnInit(): void {
this.phoneservice.listeMarque().
subscribe(marques => {this.marques = marques;
console.log(marques);
this.cdr.detectChanges();
});
this.phoneservice.consulterphone(this.activatedRoute.snapshot.params['id']).
subscribe( phones =>{ this.currentphone = phones;
this.updatedIdMarque =this.currentphone.marque?.idMarque?? 0;

} ) ;
}

updatephone() {
this.currentphone.marque = this.marques.
 find(marques => marques.idMarque == this.updatedIdMarque)!;
this.phoneservice.updatephone(this.currentphone).subscribe(phone => {
this.router.navigate(['phones']); }
);
}

}
