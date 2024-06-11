import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  addNotification() {
    this.count++;
    this.countChange.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countChange.emit(this.count);
  }

  resetCount() {
    this.count = 0;
    this.countChange.emit(this.count);
  }
}
