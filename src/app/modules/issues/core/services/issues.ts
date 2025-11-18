import {Injectable, signal} from '@angular/core';
import {injectQuery} from '@tanstack/angular-query-experimental';
import {getLabelsAction} from '@actions/getLabels.action';
import {getIssuesAction} from '@actions/get-issues.action';
import {getIssueByIdAction} from '@actions/get-issue.action';

@Injectable({
  providedIn: 'root',
})
export class Issues {
  private label_tag = 'labels';
  private issues_tag = 'issues';
  private issue_id_tag = 'issue_by_id';

  private id_issue = signal<string|null>(null)

  public queryLabels = injectQuery(() => ({
    queryKey: [this.label_tag],
    queryFn: () => getLabelsAction()
  }))

  public queryIssues = injectQuery(() => ({
    queryKey: [this.issues_tag],
    queryFn: () => getIssuesAction()
  }))

  public queryIssueById = injectQuery(() => ({
    queryKey: [this.issue_id_tag,this.id_issue()],
    queryFn: () => getIssueByIdAction(this.id_issue()!),
    enabled: this.id_issue() !== null
  }))

  setIdIssue(id:string) {
    this.id_issue.set(id)
  }
}
