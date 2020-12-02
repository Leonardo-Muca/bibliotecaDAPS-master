import { Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { ClibrosComponent } from './components/clibros/clibros.component';
import { CusuariosComponent } from './components/cusuarios/cusuarios.component';
import { CplibrosComponent } from './components/cplibros/cplibros.component';

export const ROUTES: Routes = [
    { path: 'books-list', component: BooksListComponent },
    { path: 'cusuarios', component: CusuariosComponent },
    { path: 'clibros', component: ClibrosComponent },
    { path: 'cplibros', component: CplibrosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'books-list' }
]