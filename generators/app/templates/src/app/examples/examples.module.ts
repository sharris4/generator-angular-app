import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule } from '@angular/material';

import { ApiExamplesComponent } from './api-examples/api-examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { UiExamplesComponent } from './ui-examples/ui-examples.component';

@NgModule({
  declarations: [UiExamplesComponent, ApiExamplesComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class ExamplesModule { }
