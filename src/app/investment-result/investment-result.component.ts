import { Component, inject } from '@angular/core';
import {CurrencyPipe} from "@angular/common";

import {InvestmentService} from "../investment-service";

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  results =  this.investmentService.resultsData.asReadonly();
}
