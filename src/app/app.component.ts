import { Component } from '@angular/core';
import { v4 as uuid} from 'uuid'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num = 5;
  list: string[] = [];

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
}
