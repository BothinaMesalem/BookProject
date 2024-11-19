import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { EditbookComponent } from './components/editbook/editbook.component';

export const routes: Routes = [
    {path:"book",component:BooksComponent},
    {path:"addbook",component:AddbookComponent},
    {path: 'edit-book/:id',component: EditbookComponent},
    {path:" ",component:BooksComponent}
      
];
