import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = '../../../assets/images/housing/special/1.jpg';
    let caption = '';
    let thumb = '../../../assets/images/housing/special/1.jpg';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/housing/special/3.jpg';
    caption = '';
    thumb = '../../../assets/images/housing/special/3.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/housing/special/4.jpg';
    caption = '';
    thumb = '../../../assets/images/housing/special/4.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
  }

  ngOnInit() {
  }

}
