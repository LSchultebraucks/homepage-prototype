import { Component, OnInit } from '@angular/core';

import { AuthService } from "./auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}