import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { events } from 'src/Modeles/Evt';

@Injectable({
  providedIn: 'root'
})
export class EvtService {

  constructor(private httpClient :HttpClient) { }
getAll(): Observable<events[]>{
return   this.httpClient.get<events[]>('http://localhost:3000/events')
}
saveDate(data:events):Observable<void>{
  return this.httpClient.post<void>('http://localhost:3000/events',data);
}


getEventbyID(id:string):Observable<events>
{
  return this.httpClient.get<events>(`http://localhost:3000/events/${id}`)
}}
