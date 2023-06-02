import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: Books[] = [
    new Books('El horror de Dunwich', 'Horror', 'H.P. Lovecraft', 12.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/dunwich-horror-lovecraft-9781447468554-cover-288x445.jpg', 3, 2),
    new Books('Las montañas de la locura', 'Comedia', 'Pepe Villuela', 19.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/at-mountains-of-madness-lovecraft-9781447468806-cover-288x445.jpg', 2, 1),
    new Books('Los mitos de Cthulhu', 'Horror', 'H.P. Lovecraft', 16.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/tales-in-cthulhu-mythos-lovecraft-9781447468912-cover-288x445.jpg', 5, 2),
    new Books('El llamado de Cthulhu', 'Horror', 'H.P. Lovecraft', 15.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/call-of-cthulhu-lovecraft-9781447418320-cover-288x445.jpg', 8, 4),
    new Books('El caso de Charles Dexter Ward', 'Horror', 'H.P. Lovecraft', 11.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/outsider-lovecraft-9781528717175-cover-288x445.jpg', 6, 4),

  ]

  removeCard(book: Books) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  CargarBook(_book: Books) {
    this.books.push(_book)
    console.log("Libro añadido correctamente - " + _book.title)
  }

}

