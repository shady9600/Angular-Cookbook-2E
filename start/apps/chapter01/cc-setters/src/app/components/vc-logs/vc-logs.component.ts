import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent {
  @Input()
  get vName() {
    return this._vName;
  }
  // runs any logic we need when the input changes
  set vName(name: string) {
    if (!name) return;
    if (!this._vName) {
      this.logs.push(`initial version is ${name.trim()}`)
    } else {
      this.logs.push(`version changed to ${name.trim()}`)
    }
    this._vName = name;
    
  }

  // modify internal private value; template accesses getter
  private _vName!: string;

  logs: string[] = [];


}
