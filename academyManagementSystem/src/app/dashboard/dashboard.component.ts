import { Component, OnInit } from "@angular/core";
import { dashboradcards } from "../app-constants";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  dashboradcards = dashboradcards;

  // Pie Chart Variables
  view: any[] = [300, 250];
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
 // legendPosition: string = "below";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };
  // Pie Chart ends

  constructor() {}

  ngOnInit() {
    this.dashboradcards.forEach((c) => {
      if (c.isPieChar) {
        c.PieValue.forEach((v) => (c.count += v.value));
      }
    });
  }
}
