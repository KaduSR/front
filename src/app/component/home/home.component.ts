import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MatSidenavModule],
})
export class HomeComponent implements OnInit {
  constructor(private Router: Router) {}

  ngOnInit(): void {
    this.Router.navigate(['home']);
  }
}
