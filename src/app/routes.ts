import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BooksComponent} from './books/books.component';
import {AuthGuard} from './services/auth.guard';
/**
 * Created by onur on 20.02.18.
 */

export const ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent, canActivate: [AuthGuard]},
  {
    path: '**', redirectTo: 'login'
  }
];
