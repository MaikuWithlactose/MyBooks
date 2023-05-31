import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: Books[] = [
    new Books('Title 1', 'Type 1', 'Author 1', 10.99, 'photo1.jpg', 1, 1),
    new Books('Title 2', 'Type 2', 'Author 2', 19.99, 'photo2.jpg', 2, 1)]
}
