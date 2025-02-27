import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  private coches =[
    {id: 1, marca: "Chevrolet", modelo: "Camaro SS", color: "Amarillo y negro"},
    {id: 2, marca: "Toyota", modelo: "trueno", color: "blanco y negro"},
    {id: 3, marca: "Toyota", modelo: "Supra", color: "Blanco"},
    {id: 4, marca: "Nissan", modelo: "Gtr", color: "Naranja"},
    {id: 5, marca: "Nissan", modelo: "Skyline", color: "Morado"},
    {id: 6, marca: "Ford", modelo: "Mustang", color: "Negro"},
    {id: 7, marca: "Mazda", modelo: "RX-7", color: "Verde"},
  ]
  constructor() { }

  getCoche(){
    return this.coches;
  }

  addCoche(marca: string, modelo: string, color: string){
    let newCoche = {id: this.coches.length +1, marca, modelo, color};
    this.coches.push(newCoche);
  }

  deleteCoche(idCoche: number){
    this.coches = this.coches.filter(coche => coche.id !== idCoche);
  }

  updateCoche(idCoche: number, newMarca: string, newModelo: string, newColor: string){
    const coche = this.coches.find(coche => coche.id === idCoche);

    if (coche) {
      coche.marca = newMarca;
      coche.modelo = newModelo;
      coche.color = newColor;
    }
  }
}
