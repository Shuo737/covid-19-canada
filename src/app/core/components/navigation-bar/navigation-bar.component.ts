import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HOME, SOLUTIONS_PRODUCTS, CLIENTS_PARTNERS, ABOUT } from 'src/app/urls';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  triggerSearchInput: boolean = false;

  readonly homeUrl = `${HOME}`;
  readonly solutionsUrl = `/${SOLUTIONS_PRODUCTS}`;
  readonly clientsUrl = `/${CLIENTS_PARTNERS}`;
  readonly aboutUrl = `/${ABOUT}`;

  constructor() { }

  ngOnInit(): void {
    console.log('NavigationBarComponent: ngOnInit()');
  }

  triggerSearchBar(): void {
    this.triggerSearchInput = !this.triggerSearchInput;
  }

}
