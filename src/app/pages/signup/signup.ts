import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router , RouterLink} from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  signup() {
    this.auth.signup({ email: this.email, password: this.password })
      .subscribe(() => this.router.navigate(['/login']));
  }
}
