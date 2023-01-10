import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-ig-view1',
  templateUrl: './ig-view1.component.html',
  styleUrls: ['./ig-view1.component.scss']
})
export class IgView1Component implements OnInit {
  public northwindEmployees: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
