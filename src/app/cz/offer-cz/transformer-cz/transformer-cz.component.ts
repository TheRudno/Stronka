import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transformer-cz',
  templateUrl: './transformer-cz.component.html',
  styleUrls: ['./transformer-cz.component.css']
})
export class TransformerCzComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = './assets/images/transformator/2.jpg';
    let caption = '';
    let thumb = './assets/images/transformator/thumb/2.jpg';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/transformator/3.jpg';
    caption = '';
    thumb = './assets/images/transformator/thumb/3.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/transformator/4.jpg';
    caption = '';
    thumb = './assets/images/transformator/thumb/4.jpg';
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
