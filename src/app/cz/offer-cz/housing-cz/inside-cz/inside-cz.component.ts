import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside-cz',
  templateUrl: './inside-cz.component.html',
  styleUrls: ['./inside-cz.component.css']
})
export class InsideCzComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = './assets/images/housing/inside/1.webp';
    let caption = '';
    let thumb = './assets/images/housing/inside/thumb/1.webp';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/inside/2.webp';
    caption = '';
    thumb = './assets/images/housing/inside/thumb/2.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/inside/3.webp';
    caption = '';
    thumb = './assets/images/housing/inside/thumb/3.webp';
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
