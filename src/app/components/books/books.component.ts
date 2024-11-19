import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
 books:Book[]=[];
 constructor(private bookServices:BookService){}

 ngOnInit(): void {
   this.GetAllBooks();
 }
 GetAllBooks(){
  this.bookServices.GetAll().subscribe(response=>{
    this.books=response;
    console.log("Get succ");
  })
 }
Delete(id:number){
  this.bookServices.Delete(id);
}

}
