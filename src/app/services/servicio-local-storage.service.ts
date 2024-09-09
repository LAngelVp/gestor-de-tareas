import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea-model';

@Injectable({
  providedIn: 'root'
})
export class ServicioLocalStorageService {
  private keyTarea = 'tareas';

  lista: any[] = [];

  insertar_elementos(objeto: TareaModel): void{
    const tareas = this.mostrar_elementos();
    tareas.push(objeto);
    console.log(tareas);
    localStorage.setItem(this.keyTarea, JSON.stringify(tareas));
  }

  // Mostrar todos los elementos almacenados en localStorage
  mostrar_elementos(): TareaModel[] {
    const tareas = localStorage.getItem(this.keyTarea);
    return tareas ? JSON.parse(tareas) : [];
  }

  eliminar_elemento(posicion: number): void {
    const tareas = this.mostrar_elementos();

    if (posicion >= 0 && posicion < tareas.length){
      tareas.splice(posicion, 1);
      localStorage.setItem(this.keyTarea, JSON.stringify(tareas));
    }
  }

}
