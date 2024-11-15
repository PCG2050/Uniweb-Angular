import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink:'dashboard',
      icon:'fa fa-home',
      label:'Dashboard',
    },
    {
      routeLink:'personal-details',
      icon:'fa fa-user',
      label:'Personal Details',
    },
    {
      routeLink:'academic-details',
      icon:'fa fa-school',
      label:'Academic Details',
    },
    {
      routeLink:'processing-fee-payment',
      icon:'fa fa-school',
      label:'Processing Fee Payment',
    },
    {
      routeLink:'reports',
      icon:'bi bi-printer',
      label:'Reports',
    },
    {
      routeLink:'signout',
      icon:'bi bi-box-arrow-right',
      label:'Sign Out',
    }
  ];
  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
