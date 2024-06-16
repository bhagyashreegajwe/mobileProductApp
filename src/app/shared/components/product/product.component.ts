import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile.interface';
import { mobileProducts } from '../../const/mobile';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productArr : Array<Imobile> = mobileProducts

  constructor() { }

  ngOnInit(): void {
  }

}
