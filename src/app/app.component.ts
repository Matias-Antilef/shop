import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `<router-outlet />`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-project';
}
