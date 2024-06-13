import { Component, OnInit } from '@angular/core';
import { events } from 'src/Modeles/Evt';
import { EvtService } from 'src/Services/evt.service';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';
import { DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  displayedColumns: string[] = ['1', '2', '3', '4',];


constructor(private ES:EvtService,private dialog: MatDialog){}
dataSource!: events[];

ngOnInit(): void {
    this.fetch();
}


fetch():void{
this.ES.getAll().subscribe((x)=>{this.dataSource=x}); 

}


open(){
//lancer le modal
const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // 1.cas : get eventByID => event trouvve => je l envoi vers modal
    // 2.cas : j envoi ID

const DialogRef=this.dialog.open(ModalCompComponent,dialogConfig);

DialogRef.afterClosed().subscribe(
  (data) => {console.log("Dialog output:", data);
  // appeler le service SaveDate(data)
this.ES.saveDate(data).subscribe(()=>{
  this.fetch();
})///////////////////
  }
);    



}
open1(id:string){
  //ouvrir la boite
  const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // 1.cas : get eventByID => event trouvve => je l envoi vers modal
    this.ES.getEventbyID(id).subscribe((events)=>{
      dialogConfig.data=events
      this.dialog.open(ModalCompComponent,dialogConfig);
    })
    // 2.cas : j envoi ID

const DialogRef=this.dialog.open(ModalCompComponent,dialogConfig);

DialogRef.afterClosed().subscribe(
  data => {console.log("Dialog output:", data)
  // appeler le service SaveDate(data)
this.ES.saveDate(data).subscribe(()=>{
  this.fetch();
})///////////////////
  }
);   
  
  }






}
