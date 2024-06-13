import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modeles/Member';
import { Memberservice } from 'src/Services/Member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  idcourant !:string;
  constructor(private MS: Memberservice,private router: Router
    , private activatedRoute:ActivatedRoute
  ) 
    // injection de dependance: consiste a cree une instance prive du service dans le composant
  
  {}
  form !: FormGroup; dataglobal!: Member;
  ngOnInit(): void {
    // chercher id dans la route 
  this.idcourant= this.activatedRoute.snapshot.params['id'];
  if(!!this.idcourant) // si existe et a une valeur 
{
  this.MS.getMemberById(this.idcourant).subscribe((data)=>{
    this.initForm2(data)
    this.dataglobal=data ;}) 

}
    //1. si id existe => edit => getMembernyId(id)=> initForm(member)
    // 2. sinom ==> create => initForm()
   else   this.initForm();
  }
initForm()
{
  
  
this.form=new FormGroup({
  id: new FormControl(null,Validators.required),
  cin: new FormControl(null,Validators.required),
  name: new FormControl(null,Validators.required),
  type: new FormControl(null,Validators.required),
  Cv: new FormControl(null,Validators.required),
  createDate: new FormControl(null,Validators.required)

})}

initForm2(data: Member)
  {
    this.form= new FormGroup({
      cin: new FormControl(data.cin, Validators.required),
      name: new FormControl(data.name, Validators.required),
      cv: new FormControl(data.Cv, Validators.required),
      type: new FormControl(data.type, Validators.required),
      createdDate: new FormControl(data.createDate, Validators.required),
    })}




sub():void{
  if(!!this.idcourant) // si il existe et a une valeur 
  //appel a la fonction update du service 
{
this.MS.update(this.idcourant,this.form.value).subscribe(()=>{
//redirection
this.router.navigate(['/'])

}
)





console.log(this.form.value);}
// appel a la methode de service (save) a travers une instance du service
else 
this.MS.Save(this.form.value).subscribe(()=>{
  //redirection
  this.router.navigate(['/'])
})

}
}

