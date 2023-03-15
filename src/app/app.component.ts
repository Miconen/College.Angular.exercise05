import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'success-ja-warning';
  successProps = _successProps;
  warningProps = _warningProps;
}

let _successProps = {
  title: "Success",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec placerat elit, eget blandit lectus. Donec ante velit, commodo ac nibh quis, sodales efficitur neque. Sed a feugiat ante, in ornare felis. Cras eget justo felis. Duis et turpis a odio porttitor scelerisque sed vel magna. Maecenas gravida tempus ex, a efficitur diam elementum id."
}

let _warningProps = {
  title: "Warning",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec placerat elit, eget blandit lectus. Donec ante velit, commodo ac nibh quis, sodales efficitur neque. Sed a feugiat ante, in ornare felis. Cras eget justo felis. Duis et turpis a odio porttitor scelerisque sed vel magna. Maecenas gravida tempus ex, a efficitur diam elementum id."
}
