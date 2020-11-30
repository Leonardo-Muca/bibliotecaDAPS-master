import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para hacer funcionar rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClibrosComponent } from '../app/components/clibros/clibros.component';
import { CusuariosComponent } from '../app/components/cusuarios/cusuarios.component';
import { CplibrosComponent } from '../app/components/cplibros/cplibros.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NavbarComponent,
    ClibrosComponent,
    CusuariosComponent,
    CplibrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
