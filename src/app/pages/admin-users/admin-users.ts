import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers implements OnInit {

  users: any[] = [];
  loading = true;

  API = 'http://localhost:8000/users';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${this.API}/all`).subscribe({
      next: (res) => {
        this.users = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  grantAdmin(userId: string) {
    this.http.put(`${this.API}/${userId}/role`, {
      role: 'admin'
    }).subscribe(() => alert('Admin access granted'));
  }
}
