import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DropdownModule
  ],
  exports: [CardModule,ButtonModule,ProgressSpinnerModule,ProgressBarModule,DropdownModule,CheckboxModule]
})
export class SharedModule { }
