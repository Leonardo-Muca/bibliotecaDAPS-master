import { Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';

export const ROUTES: Routes = [
    {path: 'books-list', component: BooksListComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'books-list' }
]