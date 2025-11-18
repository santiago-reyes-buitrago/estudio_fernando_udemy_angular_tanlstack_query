import {Component, computed, input} from '@angular/core';
import {GetIssues} from '@core/interfaces';
import {RouterLink} from '@angular/router';
import {NgStyle} from '@angular/common';

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
  readonly issue = input.required<GetIssues>();
  protected isOpen =  computed<boolean>(() => this.issue().state === 'open');

}
