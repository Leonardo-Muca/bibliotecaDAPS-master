import { Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import {CusuariosComponent} from './components/cusuarios/cusuarios.component';

export const ROUTES: Routes = [
    {path: 'books-list', component: BooksListComponent},
    {path: 'usuarios', component: CusuariosComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'books-list' }
    
]