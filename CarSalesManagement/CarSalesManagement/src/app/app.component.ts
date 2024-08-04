import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  menuItems: any[] = [];
  title = 'Car Sales Management';
  ngOnInit() {
    // Example of role-based dynamic menu items
    const userRole = 'admin'; // Replace with actual role check
    if (userRole === 'admin') {
      this.menuItems = [
        { label: 'Car Models', link: '/car-model' }
      ];
    } else {
      this.menuItems = [
        { label: 'View Car Models', link: '/car-model' }
      ];
    }
  }
}
