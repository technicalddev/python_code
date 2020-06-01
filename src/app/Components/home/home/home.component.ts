import { Component, OnInit } from '@angular/core';
import { homeSection, secondSection } from '../mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeSection: any = {};
  secondSection: any = {};
  constructor() {}

  ngOnInit(): void {
    this.homeSection = homeSection;
    this.secondSection = secondSection;
  }
}
