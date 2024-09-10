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
  tareas_filtradas : TareaModel[] = [];
  estado_filtro : string = 'Todo';

  constructor(private local_storage: ServicioLocalStorageService){}

  ngOnInit(): void {
    this.lista_tareas = this.local_storage.mostrar_elementos();
    this.filtrar_tareas();
  }

  eliminar_elemento(posicion: number): void{
    this.local_storage.eliminar_elemento(posicion);
    this.lista_tareas = this.local_storage.mostrar_elementos();
    this.filtrar_tareas();
  }

  actualizar_esado_tarea(tarea: TareaModel):void {
    this.local_storage.actualizar_elemento(tarea);
    this.lista_tareas = this.local_storage.mostrar_elementos();
    this.filtrar_tareas();
  }

  filtrar_tareas(): void {
    switch (this.estado_filtro) {
      case 'Completada':
        this.tareas_filtradas = this.lista_tareas.filter(tarea => tarea.estado === 'Completada');
        break;
      case 'En Proceso':
        this.tareas_filtradas = this.lista_tareas.filter(tarea => tarea.estado === 'En Proceso');
        break;
      case 'Sin Iniciar':
        this.tareas_filtradas = this.lista_tareas.filter(tarea => tarea.estado === 'Sin Iniciar');
        break;
      default:
        this.tareas_filtradas = this.lista_tareas;
        break;
    }
  }

  cambiarFiltro(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.estado_filtro = selectElement.value;
    this.filtrar_tareas();
  }

  get totalTareasFiltradas(): number {
    return this.tareas_filtradas.length;
  }
}
