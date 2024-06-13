import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';

@Injectable({  // permettre au service d etre injecter ds tt 
  providedIn: 'root'
})
export class Memberservice {

  constructor(private httpClient: HttpClient ) { }
  //Fonction ADD
// obsservable  c est ke thread le plus utilise dans angular
ondelete(id:string): Observable<void>
{return this.httpClient.delete<void>(`http://localhost:3000/members/${id}`)           }
  Save(member: Member): Observable<void>
  {
//envoyer une requete en mode post vers le back end
return this.httpClient.post<void>('http://localhost:3000/members', member)
  }
  getAll():Observable<[Member]>{
    return this.httpClient.get<[Member]>('http://localhost:3000/members')
  }
  getMemberById(id:string): Observable<Member>
  {
    return this.httpClient.get<Member>(`http://localhost:3000/members/${id}`)
  }

update(idcourant:string,a:any): Observable<void>
{
return this.httpClient.put<void>(`http://localhost:3000/members/${idcourant}`,a);

}

}
