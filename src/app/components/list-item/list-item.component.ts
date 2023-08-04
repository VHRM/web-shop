import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item!: Product;
  @Output() selectedItem = new EventEmitter<number>();

  selectItem() {
    this.selectedItem.emit(this.item.id);
  }
}
