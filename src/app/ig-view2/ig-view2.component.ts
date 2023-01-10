import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-ig-view2',
  templateUrl: './ig-view2.component.html',
  styleUrls: ['./ig-view2.component.scss']
})
export class IgView2Component implements OnInit {
  public northwindEmployees: any = null;
  public financialGlobalElectricityDemand: any = null;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.financialService.getData('GlobalElectricityDemand').subscribe(data => this.financialGlobalElectricityDemand = data);
  }
}
