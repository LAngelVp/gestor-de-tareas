import { Component } from '@angular/core';
import { TareaComponent } from "../../components/tarea/tarea.component";
import { ListaTareasComponent } from "../../components/lista-tareas/lista-tareas.component";

@Component({
  selector: 'app-gestion-de-tareas',
  standalone: true,
  imports: [TareaComponent, ListaTareasComponent],
  templateUrl: './gestion-de-tareas.component.html',
  styleUrl: './gestion-de-tareas.component.sass'
})
export class GestionDeTareasComponent {

}
