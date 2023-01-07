import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  showModal(){
    Swal.fire('Un Asesor se contactará contigo en la brevedad posible')
  }

  ngOnInit() {
  }

  constructor(
    private router: Router
  ) {
  }

  ir(){
    this.router.navigate(['/creditos']);
  }

}
