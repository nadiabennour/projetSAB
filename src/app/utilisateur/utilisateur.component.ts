import{Component, OnInit} from "@angular/core";
import{UtilisateurMockService} from "./utilisateur.mock.service";
import{Utilisateur} from "../shared/utilisateur";
@Component({
    selector: 'app-utilisateur',
    templateUrl: './utilisateur.component.html',
    styles:  ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{
    utilisateurs: Utilisateur[];
    constructor(private utilisateurservice:UtilisateurMockService){

    }

ngOnInit(){
    this.utilisateurs= this.utilisateurservice.getUtilisateurs();
}
}