import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // Sets an initial value
  // Can be subscribed to by many listeners
  // Subscribers will receive any updates to the value
  count$ = new BehaviorSubject(10);

  setCount(value: number) {
    // As soon as value is updated, component subscribers re-render changes
    this.count$.next(value);
  }
}
