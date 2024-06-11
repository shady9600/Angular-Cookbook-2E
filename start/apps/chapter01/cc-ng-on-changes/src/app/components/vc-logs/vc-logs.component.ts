import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnChanges {
  @Input() vName = '';
  logs: string[] = [];

  // initially runs before ngOnInit, and on every subsequent change detection
  ngOnChanges(changes: SimpleChanges): void {
    // get the changed value for vName input property
    const { currentValue } = changes['vName'];

    // check if first change or not
    if (changes['vName'].isFirstChange()) {
      this.logs.push(`initial version is ${currentValue.trim()}`)
    } else {
      this.logs.push(`version updated to ${currentValue.trim()}`)
    }
  }
}
