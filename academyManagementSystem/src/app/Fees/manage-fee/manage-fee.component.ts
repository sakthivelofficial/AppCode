import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-fee',
  templateUrl: './manage-fee.component.html',
  styleUrls: ['./manage-fee.component.scss']
})
export class ManageFeeComponent implements OnInit {
rows = [
  {
    "id": 0,
    "name": "Ramsey Cummings",
    "gender": "male",
    "age": 52,
    "address": {
      "state": "South Carolina",
      "city": "Glendale"
    }
  },
  {
    "id": 1,
    "name": "Stefanie Huff",
    "gender": "female",
    "age": 70,
    "address": {
      "state": "Arizona",
      "city": "Beaverdale"
    }
  },
  {
    "id": 2,
    "name": "Mabel David",
    "gender": "female",
    "age": 52,
    "address": {
      "state": "New Mexico",
      "city": "Grazierville"
    }
  }]
  constructor() { }

  ngOnInit() {
  }

}
