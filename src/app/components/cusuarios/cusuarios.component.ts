import { Component, OnInit } from '@angular/core';
import {SusuariosService} from '../../service/catalogo_usuarios/susuarios.service';
@Component({
  selector: 'app-cusuarios',
  templateUrl: './cusuarios.component.html',
  styleUrls: ['./cusuarios.component.css']
})
export class CusuariosComponent implements OnInit {

  usu = {
    nombre:null,
    email:null,
    password:null
  }

  constructor(private susuarios: SusuariosService) { }

  ngOnInit(): void {
    this.susuarios.recuperarusuarios().then(res =>{
      console.log('Usuarios consultados con exito',res);
    }).catch(erro=>{
      console.log('Ha sucedido un error',erro);
    });
  }

  altauser(){
    console.log(this.usu)
    this.susuarios.altauser(this.usu).then(res=>{
      alert(res);
    }).catch(erro=>{
      console.log(erro)
      alert(erro);
    });
  }

}
