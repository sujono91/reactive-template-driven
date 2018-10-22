import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Dropdown, DropdownItem } from './dropdown.interface';
import { MakeProvider, AbstractValueAccessor } from '../abstract-value-accessor';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    MakeProvider(DropdownComponent)
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends AbstractValueAccessor {
  @Input() config: Dropdown;

  constructor() {
    super();
  }

  onSelect (item: DropdownItem) {
    this.writeValue(item);
  }
}
