import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LeftSidebarComponent, MainComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
isLeftSidebarCollapsed = signal<boolean>(false);
screenWidth = signal<number>(window.innerWidth);

@HostListener('window:resize')
onResize() {
  this.screenWidth.set(window.innerWidth);
  if (this.screenWidth() < 768) {
    this.isLeftSidebarCollapsed.set(true);
  }
}

ngOnInit(): void {
  this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
}

changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
  this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
}

}