import { Component, OnInit } from '@angular/core';
import { CocheService } from 'src/app/services/coche.service';

@Component({
  selector: 'app-coche-list',
  templateUrl: './coche-list.component.html',
  styleUrls: ['./coche-list.component.css']
})
export class CocheListComponent implements OnInit{

  coches: any[] = [];
  newMarca: string = '';
  newModelo: string = '';
  newColor: string = '';
  constructor (private CocheService: CocheService){}
  ngOnInit(){
    this.coches = this.CocheService.getCoche();
  }

  addCoche(){
    if (this.newMarca.trim() && this.newModelo.trim() && this.newColor.trim()) {
      this.CocheService.addCoche(this.newMarca, this.newModelo, this.newColor);
      this.newMarca ='';
      this.newModelo ='';
      this.newColor ='';
    }
  }

  deleteCoche(idCoche: number){
    this.CocheService.deleteCoche(idCoche);
    this.coches = this.CocheService.getCoche();
  }

  

  updateCoche(idCoche: number){
    const coche = this.coches.find(coche => coche.id === idCoche);
    if (coche) {
      const newMarca = prompt("Nueva marca del coche: ", coche.marca);
      const newModelo = prompt("Nuevo modelo del coche: ", coche.modelo);
      const newColor = prompt("Nuevo color del coche: ", coche.color);

      if (newMarca !== null && newModelo !== null && newColor !== null) {
        this.CocheService.updateCoche(idCoche, newMarca, newModelo, newColor);
      }
    }
  }

  cocheDetails(idCoche: number){
    const coche = this.coches.find(coche => coche.id === idCoche);

    if (coche) {
      const listitem: HTMLLIElement = document.createElement("li");
      listitem.textContent = `${coche.id}, ${coche.marca}, ${coche.modelo}, ${coche.color}.`;
      const list = document.getElementById("lista");
      if (list) {
        list.appendChild(listitem);
      }else{
        alert("No se encontró ninguna lista <ul> en el documento.");
      }
    }
  }
}
