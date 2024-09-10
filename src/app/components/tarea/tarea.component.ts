import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicioLocalStorageService } from '../../services/servicio-local-storage.service';
import { TareaModel } from '../../models/tarea-model';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.sass'
})
export class TareaComponent implements OnInit, AfterViewInit {

  lista_tareas_local : TareaModel[] = [];
  @ViewChild('nombre_tarea') nombre_tarea_ref !: ElementRef<HTMLInputElement>
  @ViewChild('descripcion_tarea') descripcion_tarea_ref !: ElementRef<HTMLTextAreaElement>

  constructor(
    private local_storage : ServicioLocalStorageService
  ){}

  ngOnInit(): void {
    this.lista_tareas_local = this.local_storage.mostrar_elementos();
  }

  ngAfterViewInit(): void {
    this.colocar_cursor();
  }

  

  agregar_tarea(){
    const nombre = this.nombre_tarea_ref.nativeElement.value;
    const descripcion = this.descripcion_tarea_ref.nativeElement.value;
    if (nombre && descripcion){
      const tarea: TareaModel =
        {
          nombre_tarea: nombre.trim(),
          descripcion: descripcion.trim(),
          fecha_inicio: '',
          fecha_vencimiento: '',
          prioridad: '',
          estado: '',
          responsable: '',
          progreso: '',
          resultado_esperado: '',
          visible: true
        }
      
      this.lista_tareas_local.push(tarea);
      try{
        this.local_storage.insertar_elementos(tarea);
      } catch (e){
        alert("Falta acompletar datos de la tarea");
      }
      
      console.log(this.lista_tareas_local);
    }else{
      alert("Falta acompletar datos de la tarea");
    }
    this.nombre_tarea_ref.nativeElement.value = '';
    this.descripcion_tarea_ref.nativeElement.value = '';
  }

  colocar_cursor():void{
    setTimeout(() => {
      this.nombre_tarea_ref.nativeElement.focus();
    }, 100);
  }


}
