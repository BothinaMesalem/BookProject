import { Component } from '@angular/core';
import { AddBook } from '../../models/book';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  addbook: AddBook = new AddBook();
  
  constructor(private bookServices: BookService) {}
  
  Add() {
    this.bookServices.Add(this.addbook).subscribe(
      response => {
        console.log("Add Success", response);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}