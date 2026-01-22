import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard {

  file!: File;
  API = 'http://localhost:8000/transactions';

  constructor(private http: HttpClient, private auth: Auth,   private router: Router) {}
    showDropdown: boolean = false;
    isAdmin(): boolean {
    return this.auth.isAdmin();
  }

  toggleDropdown() { this.showDropdown = !this.showDropdown; }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post(`${this.API}/upload`, formData)
      .subscribe(() => alert('Upload successful'));
  }

  download() {
    window.open(`${this.API}/export`);
  }

    goToCategories() {
    this.router.navigate(['/categories']);
  }

  goToAdminUsers() {
    this.router.navigate(['/admin-users']);
  }

  logout() {
    this.auth.logout();
  }
}
