import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HOME, INDIVIDUAL_DETAIL, ABOUT } from 'src/app/urls';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  triggerSearchInput: boolean = false;

  readonly homeUrl = `${HOME}`;
  readonly detailsUrl = `/${INDIVIDUAL_DETAIL}`;
  readonly aboutUrl = `/${ABOUT}`;

  constructor() { }

  ngOnInit(): void {
    console.log('NavigationBarComponent: ngOnInit()');
  }

  triggerSearchBar(): void {
    this.triggerSearchInput = !this.triggerSearchInput;
  }

}
