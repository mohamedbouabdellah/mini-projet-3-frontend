import { Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { AddphoneComponent } from './add-phone/add-phone.component';
import { UpdatephoneComponent } from './update-phone/update-phone.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { RechercheParNomPipe } from './recherche-par-nom/recherche-par-nom-pipe';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { phoneGuard } from './guard/phone-guard';
import { ListeMarques } from './liste-marques/liste-marques';

export const routes: Routes = [
    {path: "phones", component : PhonesComponent},
    {path: "add-phone", component : AddphoneComponent , canActivate:[phoneGuard]},
    {path: "updatephone/:id",  component: UpdatephoneComponent, canActivate:[phoneGuard]},
    {path: "rechercheParMarque", component : RechercheParMarqueComponent},
    {path: "rechercheParNom", component : RechercheParNom},
    {path: "rechercheParNomPipe", component : RechercheParNomPipe},
    {path: 'login', component: Login},
    {path: 'app-forbidden', component: Forbidden},
    {path: "listeMarques", component : ListeMarques},
    {path: "", redirectTo: "phones", pathMatch: "full"}
];
