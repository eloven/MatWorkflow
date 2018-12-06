import { Component } from '@angular/core';
import { Themes } from './config/theme.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    darkTheme(t: string) {
        Themes.changeTheme(t);
    }
}
