import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//import { ActivatedRoute,Router } from '@angular/router';
//import {ActivatedRouter, Router} from "@angular/router";
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { PersonService } from "../../../services/person.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dsplayedColums :string[] = ['id','name','lastname','documentType','documentNumber','birthday','actions'];
  personDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  

  constructor(
   
    private personService:PersonService,
    private router:Router,
    private activatedRouter: ActivatedRoute
    ) { 
      
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void{
    this.personService.getAll().subscribe(listPerson =>{
      this.personDataSource.data =listPerson ;
    })
  }
  back():void{
    this.router.navigate(['..'],{
      relativeTo:this.activatedRouter
    })
  }
  back1():void{
    this.router.navigate(['..'],{
      relativeTo:this.activatedRouter
    })
  }
  //guardar():void{
    //const person = this.formPerson.getRawValue();
    //this.personService.create(person).subscribe(x=>{
    //  alert('Se creo correctamente');
    //  this.back();
   // })
    
  //}
  //volver a desdocumentra por si no funciona
 editarPerson(person: any):void{
   this.router.navigate(['./update/',person.id],{
   relativeTo: this.activatedRouter
  })
    //alert('Editando persona' + person.id)
    //const person = this.formPerson.getRawValue();
    //this.personService.put(person.id).subscribe(x=>{
     // alert('Se modifico correctamente');  
     // this.back();
     //this.router.navigate(['./update'],{
      // relativeTo: this.activatedRoute
     // })
 }
  //editarPerson(person: any): void{
    ///alert('Editando persona' + person.id)
    //relativeTo: this.activatedRoute
  //}
  //editarPerson():void{
    //alert('Editando persona' + person.id)
   // this.router.navigate(['./update'],{
  //    relativeTo: this.activatedRoute
 //    })
  //}

  deletePerson(person: any):void{
      this.personService.delete(person.id).subscribe(x=>{
      alert('Se elimino correctamente');  
      this.back1();
  
    })
  }
  agregarPerson(): void{
    this.router.navigate(['./create'],{
      relativeTo: this.activatedRouter
    })
    
  }
}
