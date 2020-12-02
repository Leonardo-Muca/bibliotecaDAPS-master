import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SplibrosService } from '../../service/prestamos_libros/splibros.service';

@Component({
  selector: 'app-cplibros',
  templateUrl: './cplibros.component.html',
  styleUrls: ['./cplibros.component.css']
})
export class CplibrosComponent implements OnInit {
  form: FormGroup;
  formData: FormData;
  response: any = [];
  submited: boolean = false;

  lib = {
    titulo: null,
    autor: null,
    editorial: null,
    disponible: null
  }

  libros: any;

  constructor(private splibros: SplibrosService, private fB: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this.splibros.recuperarlibros().then((res: any) => {
      console.log(res);
      this.libros = res.libros;
    }).catch(erro => {
      console.log('Ha sucedido un error', erro);
    });
  }
}
