import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-clear-dept',
  templateUrl: './clear-dept.component.html',
  styleUrls: ['./clear-dept.component.scss'],
})
export class ClearDeptComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  constructor() {}

  ngOnInit(): void {}
}
