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
    'assets/images/carousel/3.webp',
    'assets/images/carousel/4.webp',
    'assets/images/carousel/5.webp',
    'assets/images/carousel/6.webp'
    ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
  }


  ngOnInit() {
  }

}
