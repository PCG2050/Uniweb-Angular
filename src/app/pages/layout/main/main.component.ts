import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { ReturnStatement } from '@angular/compiler';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
   isLeftSidebarCollapsed = input.required<boolean>();
   screenwidth = input.required<number>();
   sizeClass = computed(() => {
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
    if(isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenwidth() > 768 ? 'body-trimmed' : 'body-md-screen';
    
   });
}
