import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../../services/person.service";
import {ActivatedRoute, Router} from "@angular/router";
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:number=0;
  formPerson: FormGroup;
  documentTypes: any[] = [];
  constructor(
    public formBuilder: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private activatedRouter: ActivatedRoute
    
    
  ) { 
    this.formPerson = formBuilder.group({
      id: [{value:null,disabled:false},[Validators.required]],
      name: [{value:null,disabled:false},[Validators.required]],
      lastname: [{value:null,disabled:false},[Validators.required]],
      documentNumber:[{value:null,disabled:false},[Validators.required]],
      documentTypeId:[{value:null,disabled:false},[Validators.required]],
      birthday:[{value:null,disabled:false},[]]
    })
  }

  ngOnInit(): void {
    this.personService.getTypeDocument().subscribe(documentTypes => {
      this.documentTypes = documentTypes;
    })
    this.id=this.activatedRouter.snapshot.params['id'];
    this.getPerson();
    
  }
  getPerson(): void{
    this.personService.getByid(this.id).subscribe(person =>{
      //this.personDataSource.data =listPerson ;
      console.log(person)
      this.formPerson.controls['id'].setValue(person.id);
      this.formPerson.controls['name'].setValue(person.name); 
      this.formPerson.controls['lastname'].setValue(person.lastname);
      this.formPerson.controls['documentTypeId'].setValue(person.documentTypeId); 
      this.formPerson.controls['documentNumber'].setValue(person.documentNumber);  
      //this.formPerson.controls['birthday'].setValue(person.birthday); 
    })
  }
  cancelar():void{
    this.back();
  }
  back():void{
    this.router.navigate(['/person'],{
      relativeTo:this.activatedRouter
    })
  }
  modificar():void{
    const person = this.formPerson.getRawValue();
    console.log(person)
    this.personService.update(person).subscribe(x=>{
      alert('Se creo correctamente');
      this.back();
    })
    
  }
}
