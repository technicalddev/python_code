import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Input() baseURL: string = '';
  constructor() {}

  ngOnInit(): void {}
}
