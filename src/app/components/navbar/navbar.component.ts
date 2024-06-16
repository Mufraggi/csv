import {Component, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatSidenavContent,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatIcon,
    MatToolbar,
    MatIconButton,
    MatListItem
  ],
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>My Angular App</span>
    </mat-toolbar>

    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item href="#">Home</a>
          <a mat-list-item href="#">About</a>
          <a mat-list-item href="#">Contact</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

}
