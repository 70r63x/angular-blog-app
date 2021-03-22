import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = {
      nombre: '', apellido: '', bio: '', genero: ''
    }
  }

  ngOnInit(): void {
  }

  sendForm(form: NgForm){
    if (!form.valid) {
      console.log("formulario invalido");
    } else {
      
    }
  }

}
