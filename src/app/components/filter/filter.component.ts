import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  @Input() maxPrice!: number;
  @Input() minPrice!: number;
  @Output() filterData = new EventEmitter<any>();
  filter: FormGroup;

  constructor() {
  this.filter = new FormGroup({
      nome: new FormControl(null),
      priceMax: new FormControl(this.maxPrice),
      priceMin: new FormControl(this.minPrice)
    });
  }

  ngOnInit() {
    this.filter.valueChanges.subscribe(changes => {
      const data = {
        'nome': this.filter.get('nome')!.value,
        'priceMax': this.filter.get('priceMax')!.value,
        'priceMin': this.filter.get('priceMin')!.value
      };

      this.filterData.emit(data);
    });
  }

  ngOnChanges() {
    this.filter.get('priceMax')?.setValue(this.maxPrice);
    this.filter.get('priceMin')?.setValue(this.minPrice);
  }
}
