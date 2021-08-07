import { Component, OnInit } from '@angular/core';
import { UiService } from '../service/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data!: any;
  constructor(private service: UiService) {}

  ngOnInit(): void {
    this.service.retrieveMedicineStock().subscribe((data) => this.data = data);
  }
}
