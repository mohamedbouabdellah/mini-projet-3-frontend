import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Phone } from '../model/phone.model';
import { Marque } from '../model/marque.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../services/phone.service';

@Component({
    selector: 'app-add-phone',
    imports: [FormsModule],
    templateUrl: './add-phone.component.html',
    styleUrl: './add-phone.component.css'
})
export class AddphoneComponent implements OnInit {

  newphone = new Phone();
  marques!: Marque[];
  newIdMarque!: number | string;
  newMarque!: Marque;

  message! : string;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private phoneservice: PhoneService , private cdr : ChangeDetectorRef ) {
    //this.marques = this.phoneservice.listeMarque();
  }

  ngOnInit(): void {
    this.phoneservice.listeMarque().
    subscribe(marque => {this.marques = marque;
    console.log(marque);this.cdr.detectChanges();
    });
    }

  addphone(){
    this.newphone.marque = this.marques.find(marque => marque.idMarque == this.newIdMarque)!;
    this.phoneservice.ajouterphone(this.newphone)
    .subscribe(phone => {
    console.log(phone);
    this.router.navigate(['phones']);
    });
    }


}
