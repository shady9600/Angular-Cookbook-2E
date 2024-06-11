import { Component, inject } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent {
  notificationService = inject(NotificationsService);

  // Get the initial value and any changes from the service
  notificationsCount$ = this.notificationService.count$;

  addNotification() {
    const currentValue = this.notificationsCount$.getValue();
    this.notificationService.setCount(currentValue + 1);
  }

  removeNotification() {
    const currentValue = this.notificationsCount$.getValue()
    if (currentValue == 0) {
      return;
    }
    this.notificationService.setCount(currentValue - 1);
  }

  resetCount() {
    this.notificationService.setCount(0);
  }
}
