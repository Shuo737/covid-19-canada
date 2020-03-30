import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

const recognitionPhotoPath = 'assets/images/recognition-pic0.png';
const drone0PhotoPath = 'assets/images/DJI_Matrice_600_Pro.png';
const drone1PhotoPath = 'assets/images/DJI_mg-1.png';
const drone2PhotoPath = 'assets/images/DJI_phantom_4_pro.png';
const drone3PhotoPath = 'assets/images/GDU_sage.png';
const drone4PhotoPath = 'assets/images/Lidar_Sensor.png';
const drone5PhotoPath = 'assets/images/30X_zoominCamera.png';
const drone6PhotoPath = 'assets/images/Thermal_camera.png';


@Component({
    selector: 'app-content-products-solutions',
    templateUrl: './products-solutions.component.html',
    styleUrls: ['./products-solutions.component.scss']
})

export class ProductsSolutionsComponent implements OnInit {
    @ViewChild('nav') slider: NgImageSliderComponent;
    lazyLoadingImg: boolean = false;
    readonly recognitionPhotoPath = `${recognitionPhotoPath}`;
    readonly droneTitleImg = `${drone0PhotoPath}`;
    readonly speed: number = 1;
    readonly slideShowImgs: Array<object> = [{
        image: drone0PhotoPath,
        thumbImage: drone0PhotoPath,
        title: 'DJI Matrice 600 Pro'
    }, {
        image: drone1PhotoPath,
        thumbImage: drone1PhotoPath,
        title: 'DJI Mg-1'
    }, {
        image: drone2PhotoPath,
        thumbImage: drone2PhotoPath,
        title: 'DJI Phantom 4 Pro'
    }, {
        image: drone3PhotoPath,
        thumbImage: drone3PhotoPath,
        title: 'GDU Saga'
    }, {
        image: drone4PhotoPath,
        thumbImage: drone4PhotoPath,
        title: 'Lidar Sensor (Velodyne 32)'
    }, {
        image: drone5PhotoPath,
        thumbImage: drone5PhotoPath,
        title: '30X Zommin Camera'
    }, {
        image: drone6PhotoPath,
        thumbImage: drone6PhotoPath,
        title: 'Thermal Camera (Zenmuse XT Series)'
    }];

    ngOnInit(): void {}
}
