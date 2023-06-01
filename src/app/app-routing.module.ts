import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBooksComponent } from './pages/add-books/add-books.component'

import { FormRegisterComponent } from './component/register/form-register.component';
import { CardComponent } from './component/card/card.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: "register", component: FormRegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: 'books', component: BooksComponent }, 
  { path: 'card', component: CardComponent }, 
  { path: 'addbooks', component: AddBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
