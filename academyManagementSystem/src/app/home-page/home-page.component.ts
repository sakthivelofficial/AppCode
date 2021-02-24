import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public positionOptions: TooltipPosition[] = ['left']; // Tooltip postion
  public position = new FormControl(this.positionOptions[0]); 
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  gotologinpage(){
    this.router.navigate(['/Login'])
  }
}
