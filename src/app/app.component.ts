import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, NavbarComponent],
  template:
    `<app-navbar>
      <!-- Content of the application -->
    </app-navbar>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'csv-exporter';
}
