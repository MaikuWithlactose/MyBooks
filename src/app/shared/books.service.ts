import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // private books: Books[] = [];
  books: Books[] = [
    new Books('El horror de Dunwich', 'Horror', 'H.P. Lovecraft', 12.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/dunwich-horror-lovecraft-9781447468554-cover-288x445.jpg', 3, 2),
    new Books('Las montañas de la locura', 'Comedia', 'Pepe Villuela', 19.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/at-mountains-of-madness-lovecraft-9781447468806-cover-288x445.jpg', 2, 1),
    new Books('Los mitos de Cthulhu', 'Horror', 'H.P. Lovecraft', 16.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/tales-in-cthulhu-mythos-lovecraft-9781447468912-cover-288x445.jpg', 5, 2),
    new Books('El llamado de Cthulhu', 'Horror', 'H.P. Lovecraft', 15.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/call-of-cthulhu-lovecraft-9781447418320-cover-288x445.jpg', 8, 4),
    new Books('El caso de Charles Dexter Ward', 'Horror', 'H.P. Lovecraft', 11.99, 'https://www.readandcobooks.co.uk/wp-content/uploads/outsider-lovecraft-9781528717175-cover-288x445.jpg', 6, 4),
  ]

  constructor() { }


  getAll(): Books[] {
    return this.books;
  }

  getOne(id_libro: number): Books | undefined {
    let BookResult = this.books.find( (bookFinded) => (bookFinded.id_book === id_libro));
    if(BookResult === undefined)
    {
      console.log("Error: No ha encontrado el libro")
      alert("Error: No ha encontrado el libro")
    }

    return BookResult;

  }

  add(book: Books): void {
    this.books.push(book);
  }

  edit(book: Books): boolean {
    const index = this.books.findIndex(b => b.id_book === book.id_book);
    if (index !== -1) {
      this.books[index] = book;
      return true;
    }
    return false;
  }

  delete(id_book: number): boolean {
    const index = this.books.findIndex(book => book.id_book === id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }

  
}