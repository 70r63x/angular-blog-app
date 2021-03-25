import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  busquedaStringForm: string

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  buscar(form: NgForm){
    if (!form.valid) {
      console.log("formulario invalido");
    } else {
      this.router.navigate(['/search', this.busquedaStringForm]);
    }

  }

}
