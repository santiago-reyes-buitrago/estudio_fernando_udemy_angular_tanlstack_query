import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, tap} from 'rxjs';
import {Issues} from '@core/services/issues';

@Component({
  selector: 'app-issues',
  imports: [],
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
}
