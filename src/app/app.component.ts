import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count = 0
  num = 5;
  list: string[] = [];

  constructor(
    private _apiSer: ApiService
  ) {}

  generate() {
    this.list = [];
    if (this.num < 1) {
      this.num = 1;
    }
    if (this.num > 100) {
      this.num = 100;
    }
    for (let i = 0; i < this.num; i++) {
      const id = uuid();
      this.list.push(id);
    }
  }

  ngOnInit(): void {
    this._apiSer.setCount().subscribe();
    this._apiSer.getCount().subscribe((res: any) => {
      this.count = res;
    })
  }
}
