import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminSidebarServiceService {
  visible = signal<boolean>(false);
  constructor() {}

  toggleSidebar() {
    this.visible.set(!this.visible());
  }
}
