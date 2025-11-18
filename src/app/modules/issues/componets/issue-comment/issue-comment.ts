import {Component, input} from '@angular/core';
import {GetIssues} from '@core/interfaces';
import {MarkdownModule} from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  imports: [MarkdownModule],
  templateUrl: './issue-comment.html',
  styleUrl: './issue-comment.css',
})
export class IssueComment {
  issue = input.required<GetIssues>();
}
