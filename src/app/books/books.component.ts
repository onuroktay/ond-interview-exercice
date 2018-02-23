import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from '../services/books.service';
import {Subscription} from 'rxjs/Subscription';
import {Book} from '../model/book';
import {FilterpipePipe} from '../filterpipe.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {

    this.subscription = this.booksService.getBooks().subscribe(
      books => {
        console.log(typeof(books));
        this.books = books.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
