import {Component, input} from '@angular/core';
import {GetLabelInterface} from '@core/interfaces';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  imports: [
    NgStyle
  ],
  templateUrl: './labels-selector.html',
  styleUrl: './labels-selector.css',
})
export class LabelsSelector {
  labels = input.required<GetLabelInterface[]>();
}
