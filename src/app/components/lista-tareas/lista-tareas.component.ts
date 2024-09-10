import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../../models/tarea-model';
import { ServicioLocalStorageService } from '../../services/servicio-local-storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.sass'
})
export class ListaTareasComponent implements OnInit {
  lista_tareas: TareaModel[] = [];
  visible : boolean = false;

  constructor(private local_storage: ServicioLocalStorageService){}

  ngOnInit(): void {
    this.lista_tareas = this.local_storage.mostrar_elementos()
  }

  eliminar_elemento(posicion: number): void{
    this.local_storage.eliminar_elemento(posicion);
    this.lista_tareas = this.local_storage.mostrar_elementos();
  }

  actualizar_esado_tarea(tarea: TareaModel):void {
    this.local_storage.actualizar_elemento(tarea);
    this.lista_tareas = this.local_storage.mostrar_elementos();
  }
}
