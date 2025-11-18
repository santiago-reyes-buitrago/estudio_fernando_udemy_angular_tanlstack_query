import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, tap} from 'rxjs';
import {Issues} from '@core/services/issues';
import {IssueComment} from '../../componets/issue-comment/issue-comment';

@Component({
  selector: 'app-issues',
  imports: [
    RouterLink,
    IssueComment
  ],
  templateUrl: './issues.html',
  styleUrl: './issues.css',
})
export default class IssuesPage {
  private router = inject(ActivatedRoute)
  private issuesService = inject(Issues)
  protected issueNumber = toSignal<string>(this.router.params.pipe(
    map(params => params['id'] ?? ''),
    tap(id => this.issuesService.setIdIssue(id))
    )
  )

  issueQuery = this.issuesService.queryIssueById
  issueCommentQuery = this.issuesService.queryIssueComment
}
