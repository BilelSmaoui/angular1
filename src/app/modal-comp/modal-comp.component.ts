import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { events } from 'src/Modeles/Evt';

@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent implements OnInit {
  events!: events;
// @Inject(MAT_DIALOG_DATA) data: assure que le modal recoit le contenu de la variable envoye par le compo original
  constructor(private dialogRef: MatDialogRef<ModalCompComponent>, @Inject(MAT_DIALOG_DATA) data:events){
    console.log(data);
    this.events=data
  }
  form! : FormGroup;
  ngOnInit(){
    this.initForm();

  }
initForm(){
  this.form=new FormGroup({

id: new FormControl(this.events.id,[Validators.required]),
title: new FormControl(this.events.tittle,[Validators.required]),
dateDebut: new FormControl(this.events.dateDebut,[Validators.required]),
dateFin: new FormControl(this.events.dateFin,[Validators.required])

  })

}

save() {
  this.dialogRef.close(this.form.value);
  //appel de fonction du service (saveEvent POST)


  
}

close() {
  this.dialogRef.close();
}
}

