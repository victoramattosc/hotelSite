import { Component, OnInit } from '@angular/core';

interface Pessoas {
  value: string;
  viewValue: number;
}

interface Hoteis {
  valor: string;
  valoraVer: string;
}

@Component({
  selector: 'app-hoteis',
  templateUrl: './hoteis.component.html',
  styleUrls: ['./hoteis.component.scss']
})
export class HoteisComponent implements OnInit {

  pessoas: Pessoas[] = [
    {value: 'pessoa-1', viewValue: 1},
    {value: 'pessoa-2', viewValue: 2},
    {value: 'pessoa-3', viewValue: 3},
    {value: 'pessoa-4', viewValue: 4},
    {value: 'pessoa-5', viewValue: 5},
  ];


  hoteis: Hoteis[] = [
    {valor: 'hotel-1', valoraVer: 'Hotel Presidente'},
    {valor: 'hotel-2', valoraVer: 'Refúgio Harmonia'},
    {valor: 'hotel-3', valoraVer: 'Focos Hotel'},
    {valor: 'hotel-4', valoraVer: 'Novotel'},
    {valor: 'hotel-5', valoraVer: 'Wyndham'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
