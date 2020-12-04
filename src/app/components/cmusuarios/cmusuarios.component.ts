import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, Form } from '@angular/forms';
import { SusuariosService } from '../../service/catalogo_usuarios/susuarios.service';

@Component({
  selector: 'app-cmusuarios',
  templateUrl: './cmusuarios.component.html',
  styleUrls: ['./cmusuarios.component.css']
})
export class CmusuariosComponent implements OnInit {
  form: FormGroup;
  formData: FormData;
  response: any = [];
  submited: boolean = false;
  idUsuarioActualizado: any;
  @Input() set idUsuario(value) {
    this.idUsuarioActualizado = value;
    this.ngOnInit();
  };

  usu = {
    nombre: null,
    password: null,
    email: null
  }

  usuario: any;

  constructor(private susuarios: SusuariosService, private fB: FormBuilder) { }


  ngOnInit(): void {
    console.log(this.idUsuario, 'esto es en el componente actualizar');
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.susuarios.obtenerusuarioID(this.idUsuarioActualizado).then((resp: any) => {
      this.usuario = resp.usuarios;
      console.log(this.usuario);

    }).catch((err) => {
      console.log(err);

    })
  }

  modificaruser() {
    console.log(this.idUsuario);

    return this.susuarios.modificarusuario(this.idUsuarioActualizado, this.usuario).then((res: any) => {
      console.log(res);
      alert(res.msg);
      this.ngOnInit();
    }).catch(erro => {
      console.log(erro);
      alert('Ocurrio un error');
    });
  }








  addOther() {
    this.submited = false;
    this.form.reset();
  }

}
