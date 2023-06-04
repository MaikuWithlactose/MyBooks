import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { find } from 'rxjs';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  localbooks: Books[] = [ ]

  constructor (public booksService:BooksService, public toast:ToastrService){
    this.localbooks = this.booksService.getAll();
  }
  
  findBook(findValue: string){

    if( findValue.length > 0 )
    {  
      let findedBook = this.booksService.getOne(parseFloat(findValue));
      if( findedBook ){
        alert("Invocando libro REF : "+ findValue)

        this.localbooks = [];
        this.localbooks.push(findedBook);

        return;
      }
      else
      {
        alert("Invocacion de libro fallida, no se ha encontrado : "+ findValue)
      }
    }
    else{
      alert("Valor de invocacion vacío, reiniciando listado.")
    }

    this.localbooks = this.booksService.getAll();
  }
  
  removeCard(book: Books) {

    let Check = this.booksService.delete(book.id_book)

    if(Check === true)
    {
      alert('Se ha desterrado este libro con éxito : '+ book.title);
      this.toast.success('Se ha desterrado este libro con éxito : '+ book.title,"EXITO",{positionClass: 'toast-top-right'});
      this.localbooks = this.booksService.getAll();
    }
    else{
      this.toast.error("Ha habido un error con el destierro de este libro : "+ book.title,"ERROR",{positionClass: 'toast-top-right'})
    }
  }


  soloNumeros(event: any) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;

    // Remover letras y comas del valor del input
    const newValue = inputValue.replace(/[a-zA-Z,]/g, '');
    // Actualizar el valor del input sin letras y comas
    input.value = newValue;
  }
}
