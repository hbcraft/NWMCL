import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  theme: 'dark' | 'light' = 'light'
  get darkThemeIcon() {
    return `icon-dark${this.theme === 'dark' ? '-active' : ''}`
  }
  constructor (
    private _iconService: NzIconService
  ) {
    this._iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_2690818_s26qnadqq3n.js'
    })
  }

  changeTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark'
  }
}
