import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router , RouterLink} from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe(res => {
        this.auth.saveToken(res.access_token);
        this.router.navigate(['/dashboard']);
      });
  }
}
