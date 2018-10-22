export interface DropdownItem {
  key: string | number;
  value: string;
}

export interface Dropdown {
  data: Array<DropdownItem>;
}
