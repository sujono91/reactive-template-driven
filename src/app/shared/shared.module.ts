import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SHARED_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: SHARED_MODULE,
  declarations: [DropdownComponent],
  exports: [
    ...SHARED_MODULE,
    DropdownComponent
  ]
})
export class SharedModule { }
