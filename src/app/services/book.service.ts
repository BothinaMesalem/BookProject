import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBook, Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private getall="https://localhost:7013/Api/Book/GetAll";
  private add="https://localhost:7013/Api/Book/Add";
  private delete="https://localhost:7013/Api/Book/Delete"
  private updateUrl = `https://localhost:7013/Api/Book/Edit`;
  private getidurl="https://localhost:7013/Api/Book/Getbyid"
  constructor(private httpclinet:HttpClient) { }
  GetAll(){
    return this.httpclinet.get<Book[]>(this.getall);
  }
  Add(book:AddBook){
   return this.httpclinet.post(this.add,book);
  }
  Delete(id:number){
  return this.httpclinet.delete(`${this.delete}/${id}`)
  }
  Update(book: AddBook,id:number) {
    return this.httpclinet.put(`${this.updateUrl}/${id}`, book);
  }
  GetById(id:number){
   return this.httpclinet.get<Book>(`${this.getidurl}/${id}`)
  }
}
