import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marque } from '../model/marque.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-update-marque',
  styles: ``,
  templateUrl: './update-marque.html',
})
export class UpdateMarque implements OnInit {
  @Input()
  marque! : Marque;

  @Input()
  ajout!:boolean;


  @Output()
  marqueUpdated = new EventEmitter<Marque>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateMarque ",this.marque);
  }
  saveMarque(){
    this.marqueUpdated.emit(this.marque);
  }
}
