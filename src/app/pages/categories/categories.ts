import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-categories',
  imports: [FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  name = '';
  keywords = '';

  API = 'http://localhost:8000/categories';

  constructor(private http: HttpClient) {}

  addCategory() {
    this.http.post(this.API, {
      name: this.name,
      keywords: this.keywords.split(',').map(k => k.trim())
    }).subscribe(() => alert('Category added'));
  }
}
