import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HOME, INDIVIDUAL_DETAIL, ABOUT } from '../../../urls';

const debriefPhotoPath = 'assets/images/GeoAI.jpg';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  sidenav: MatSidenav;
  readonly homeUrl = `${HOME}`;
  readonly detailUrl = `/${INDIVIDUAL_DETAIL}`;
  readonly about = `/${ABOUT}`;

  readonly debriefPhotoPath = `${debriefPhotoPath}`;

  constructor() { }

  ngOnInit(): void {
    console.log('NavComponent: ngOnInit()');
  }

}
