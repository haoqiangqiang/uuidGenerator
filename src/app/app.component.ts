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
  hintText = '';
  hintShow = false;

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

  onCopy(data: string) {
    let timer: any;
    navigator.clipboard.writeText(data).then(() => {
      this.hintShow = true;
      this.hintText = "复制成功！"
      !!timer && clearTimeout(timer);
      timer = setTimeout(() => {
        this.hintShow = false;
      }, 500)
    })
  }

  ngOnInit(): void {
    this._apiSer.setCount().subscribe();
    this._apiSer.getCount().subscribe((res: any) => {
      this.count = res;
    })
  }
}
