import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Issues} from '@core/services/issues';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-issues-list-page',
  imports: [
    RouterLink,
    JsonPipe
  ],
  templateUrl: './issues-list-page.html',
  styleUrl: './issues-list-page.css',
})
export default class IssuesListPage {
  issuesService = inject(Issues)

  get LabelQuery(){
    return this.issuesService.queryLabels
  }
}
