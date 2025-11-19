import {Component, computed, inject} from '@angular/core';
import {Issues} from '@core/services/issues';
import {LabelsSelector} from '../../componets/labels-selector/labels-selector';
import {IssueItem} from '../../componets/issue-item/issue-item';
import {State} from '@core/interfaces';

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
  private issuesService = inject(Issues)

  protected readonly State = State;

  get LabelQuery() {
    return this.issuesService.queryLabels
  }

  get IssuesQuery() {
    return this.issuesService.queryIssues
  }

  get FilterStateActive() {
    return this.issuesService.selectedState()
  }

  handleSelectedState(state: State) {
    this.issuesService.updateSelectedState(state)
  }
}
