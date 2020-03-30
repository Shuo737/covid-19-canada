import { Component, OnInit } from '@angular/core';

const debriefPhotoPath = 'assets/images/company_logo.jpg';

@Component({
    selector: 'app-content-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {
    readonly debriefPhotoPath = `${debriefPhotoPath}`;
}
