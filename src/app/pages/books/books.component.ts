import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: Books[] = [
    new Books('Capitan Calzoncillos', 'Literatura Clásica', 'Guillermo del Toro', 10.99, 'https://m.media-amazon.com/images/I/41gWxcomr2L.jpg', 1,1),
    new Books('¡Pom Pom Pompibol!', 'Comedia', 'Pepe Villuela', 19.99, 'https://66.media.tumblr.com/51a249d97bcf89b1acb44ba341615e8d/tumblr_inline_nu077pdd631s0669x_540.jpg', 2,1)]
  
  // books: Books[] = []

  // CargarBook(_title:string, _type:string, _author:string, _price:number, _photo:string, _id_book:number=0, )
  // {
  //   this.books.push(new Books(_title, _type, _author, _price, _photo, _id_book))
  //   console.log("Libro añadido correctamente - "+ _title)
  // }

  CargarBook(_book: Books)
  {
    this.books.push(_book)
    console.log("Libro añadido correctamente - "+ _book.title )
  }

  }

