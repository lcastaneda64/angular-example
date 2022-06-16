import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../services/candidatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidatos: any[] = [];
  buscar: string = "";

  constructor(private candidatosService: CandidatosService) { }

  ngOnInit(): void {
    this.candidatosService.getCantidatos().subscribe((candidatos: any) => {  
      console.log(candidatos.cont.apis);
      this.candidatos = candidatos.cont.apis;
  });
  }

  saludame() {
    console.log("¡Hola");
  }

  busqueda() {
    console.log(this.buscar);
    this.candidatosService.getCandidatosFiltro(this.buscar).subscribe((candidatos: any) => {
      this.candidatos = candidatos.cont.apis;
    });
  }

}
