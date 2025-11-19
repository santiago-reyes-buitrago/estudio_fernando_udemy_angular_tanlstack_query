import {Component, inject, input} from '@angular/core';
import {GetLabelInterface} from '@core/interfaces';
import {NgStyle} from '@angular/common';
import {Issues} from '@core/services/issues';

@Component({
  selector: 'issues-labels-selector',
  imports: [
    NgStyle
  ],
  templateUrl: './labels-selector.html',
  styleUrl: './labels-selector.css',
})
export class LabelsSelector {
  private issueService = inject(Issues);
  labels = input.required<GetLabelInterface[]>();

  get SelectedLabelsActive() {
    return this.issueService.selectedLabels()
  }

  protected handleLabelSelected(name: string) {
    this.issueService.updateSelectedLabels(name)
  }
}
