import { Component, OnInit, Input } from '@angular/core';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit {

  @Input() props = { title: "", content: "" };

  faIcon = faSkullCrossbones;

  constructor() { }

  ngOnInit(): void {
  }

}
