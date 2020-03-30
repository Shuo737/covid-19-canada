import { Component, OnInit } from '@angular/core';

const debriefPhotoPath = 'assets/images/company_logo.jpg';

@Component({
    selector: 'app-content-clients-partners',
    templateUrl: './clients-partners.component.html',
    styleUrls: ['./clients-partners.component.scss']
})

export class ClientsPartnersComponent {
    readonly debriefPhotoPath = `${debriefPhotoPath}`;
}
