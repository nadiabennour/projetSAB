import { Injectable } from "@angular/core";
import{Utilisateur} from "../shared/utilisateur";
@Injectable()
export class UtilisateurMockService {
private UTILISATEURS : Utilisateur[]= [];
constructor(){
    let u1 : Utilisateur = new Utilisateur('Ben ghorbel', 'naoures','benghorbel@gmail.com','24875796','dev');
    let u2 : Utilisateur = new Utilisateur('Bennour', 'nadia','nadiabenn@gmail.com','24876374','man');
this.UTILISATEURS.push(u1);
this.UTILISATEURS.push(u2);
}
public getUtilisateurs():Utilisateur[]{
    return this.UTILISATEURS;
}
}