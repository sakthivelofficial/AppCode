import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-fee",
  templateUrl: "./add-fee.component.html",
  styleUrls: ["./add-fee.component.scss"],
})
export class AddFeeComponent implements OnInit {
  studentName = "Sakthi";
  contact = "1234567890";
  email = "test@gmail.com";
  constructor() {}

  ngOnInit() {}
}
