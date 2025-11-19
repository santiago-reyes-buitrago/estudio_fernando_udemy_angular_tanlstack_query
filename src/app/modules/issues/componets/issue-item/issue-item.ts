import {Component, computed, inject, input} from '@angular/core';
import {GetIssues} from '@core/interfaces';
import {RouterLink} from '@angular/router';
import {NgStyle} from '@angular/common';
import {Issues} from '@core/services/issues';

@Component({
  selector: 'issue-item',
  imports: [
    RouterLink,
    NgStyle
  ],
  templateUrl: './issue-item.html',
  styleUrl: './issue-item.css',
})
export class IssueItem {
  private issueService = inject(Issues);
  readonly issue = input.required<GetIssues>();
  protected isOpen =  computed<boolean>(() => this.issue().state === 'open');


  protected prepareIssue() {
    // this.issueService.prefectIssue(`${this.issue().number}`)
    this.issueService.setIssueData(this.issue())
  }
}
