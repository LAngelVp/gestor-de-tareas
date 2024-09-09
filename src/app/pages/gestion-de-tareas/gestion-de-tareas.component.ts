import { Component, OnInit } from '@angular/core';
import { TareaComponent } from "../../components/tarea/tarea.component";
import { ListaTareasComponent } from "../../components/lista-tareas/lista-tareas.component";
import { ServicioLocalStorageService } from '../../services/servicio-local-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-de-tareas',
  standalone: true,
  imports: [
    TareaComponent, 
    ListaTareasComponent,
    CommonModule
  ],
  templateUrl: './gestion-de-tareas.component.html',
  styleUrl: './gestion-de-tareas.component.sass'
})
export class GestionDeTareasComponent {



}
