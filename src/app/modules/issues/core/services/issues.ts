import { Injectable } from '@angular/core';
import {injectQuery} from '@tanstack/angular-query-experimental';
import {getLabelsAction} from '@actions/getLabels.action';

@Injectable({
  providedIn: 'root',
})
export class Issues {
  private label_tag = 'labels';

  public queryLabels = injectQuery(() => ({
    queryKey: [this.label_tag],
    queryFn: () => getLabelsAction()
  }))
}
