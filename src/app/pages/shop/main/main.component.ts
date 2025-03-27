import { Component } from '@angular/core';
import { ItemComponent } from '../components/item/item.component';

@Component({
  selector: 'app-main',
  imports: [ItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
