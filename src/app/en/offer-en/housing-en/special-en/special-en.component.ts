import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-en',
  templateUrl: './special-en.component.html',
  styleUrls: ['./special-en.component.css']
})
export class SpecialEnComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = './assets/images/housing/special/1.webp';
    let caption = '';
    let thumb = './assets/images/housing/special/thumb/1.webp';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = '../assets/images/housing/special/4.webp';
    caption = '';
    thumb = './assets/images/housing/special/thumb/4.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/special/3.webp';
    caption = '';
    thumb = './assets/images/housing/special/thumb/3.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/special/2.webp';
    caption = '';
    thumb = './assets/images/housing/special/thumb/2.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/special/5.webp';
    caption = '';
    thumb = './assets/images/housing/special/thumb/5.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/special/6.webp';
    caption = '';
    thumb = './assets/images/housing/special/thumb/6.webp';
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
