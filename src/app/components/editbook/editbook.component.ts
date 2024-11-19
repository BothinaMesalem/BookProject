import { Component, OnInit } from '@angular/core';
import { AddBook, Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editbook',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  book: Book = new Book(); 
  bookId: number = 0;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.bookId) {
      this.bookService.GetById(this.bookId).subscribe(
        (response: Book) => {
          this.book = response;
        },
        (error) => {
          console.error('Error fetching book details:', error);
        }
      );
    }
  }

  Update() {
    const addBook: AddBook = {
      title: this.book.title,
      author: this.book.author,
      genre: this.book.genre,
      publishedYear: this.book.publishedYear
    };

    this.bookService.Update(addBook, this.bookId).subscribe(
      (response) => {
        console.log('Book updated successfully:', response);
        this.router.navigate(['/books']); 
      },
      (error) => {
        console.error('Error updating book:', error);
      }
    );
  }
}
