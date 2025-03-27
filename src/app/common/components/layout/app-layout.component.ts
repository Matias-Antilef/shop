import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { LeftBarComponent } from '../left-bar/left-bar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, TopBarComponent, LeftBarComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
})
export class AppLayout {}
