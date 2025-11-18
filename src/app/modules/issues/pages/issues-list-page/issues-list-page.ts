import {Component, inject} from '@angular/core';
import {Issues} from '@core/services/issues';
import {LabelsSelector} from '../../componets/labels-selector/labels-selector';
import {IssueItem} from '../../componets/issue-item/issue-item';

@Component({
  selector: 'app-issues-list-page',
  imports: [
    LabelsSelector,
    IssueItem
  ],
  templateUrl: './issues-list-page.html',
  styleUrl: './issues-list-page.css',
})
export default class IssuesListPage {
  issuesService = inject(Issues)

  get LabelQuery() {
    return this.issuesService.queryLabels
  }

  get IssuesQuery() {
    return this.issuesService.queryIssues
  }
}
