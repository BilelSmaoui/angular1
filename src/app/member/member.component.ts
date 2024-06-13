import { Component } from '@angular/core';
import { Member } from 'src/Modeles/Member';
import { GLOBAL } from '../app_config';
import { Memberservice } from 'src/Services/Member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];


  dataSource:any[]=GLOBAL.DB.members
  constructor(private MS: Memberservice, private dialog: MatDialog){}
  delete(id:string):void{

// 1 er ouvrir le voite
const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  height: '400px',
  width: '600px',
});

// attendre le resu de l'util
dialogRef.afterClosed().subscribe(result => {
 if (result){ this.MS.ondelete(id).subscribe(()=>{
  this.MS.getAll();
});

 }
});


//si click sur confirm



 
 }
}
