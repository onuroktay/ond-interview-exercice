import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {
  MAT_LABEL_GLOBAL_OPTIONS, MatButtonModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import './rxjs-extensions';
import {AuthService} from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BooksComponent} from './books/books.component';
import {BooksService} from './services/books.service';
import {APP_BASE_HREF} from '@angular/common';
import {AuthGuard} from './services/auth.guard';
import { FilterpipePipe } from './filterpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    FilterpipePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuard, {provide: APP_BASE_HREF, useValue: '/'},
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
