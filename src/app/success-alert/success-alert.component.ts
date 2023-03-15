import { Component, OnInit, Input } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {

  @Input() props = { title: "", content: "" };

  faIcon = faThumbsUp;

  constructor() { }

  ngOnInit(): void {
  }

}
