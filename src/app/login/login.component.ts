import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../service/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: UiService, private router: Router) {}

  onSubmit(user: any): void {
    this.service.authenticate(user).subscribe(
      (data) => {
        this.service.token = data.jwt;
        this.router.navigateByUrl('/home');
      },
      (error) => console.log('Error')
    );
    console.log(user);
  }

  ngOnInit(): void {}
}
