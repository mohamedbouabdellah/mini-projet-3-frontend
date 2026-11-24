import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Phone } from '../model/phone.model';
import { PhoneService } from '../services/phone.service';
import { RouterLink } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
    selector: 'app-phones',
    imports: [CommonModule, RouterLink],
    templateUrl: './phones.component.html',
    styleUrl: './phones.component.css'
})
export class PhonesComponent implements OnInit  {
  phones : Phone[]=[];
  constructor(private phoneservice: PhoneService , public authService: Auth , private cdr: ChangeDetectorRef ) {
    //this.phones = phoneservice.listephones();
  
   }
  
   ngOnInit():void {
        this.chargerPhones() ;
     }
    chargerPhones(){
        this.phoneservice.listephones().subscribe(phones => {
        console.log(phones);
        this.phones = phones;
        this.cdr.detectChanges();
        });
    }

    supprimerPhone(p: Phone){
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.phoneservice.supprimerphone(p.idPhone!).subscribe(() => {console.log("phone supprimé");
    this.chargerPhones();
    });
    }

}
