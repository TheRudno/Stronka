import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class SliderComponent implements OnInit {
  images = [
    'assets/images/carousel/3.jpg',
    'assets/images/carousel/4.jpg',
    'assets/images/carousel/5.jpg',
    'assets/images/carousel/6.jpg'
    ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
  }


  ngOnInit() {
  }

}
