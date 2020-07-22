import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-en',
  templateUrl: './outside-en.component.html',
  styleUrls: ['./outside-en.component.css']
})
export class OutsideEnComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = './assets/images/housing/outside/1.webp';
    let caption = '';
    let thumb = './assets/images/housing/outside/thumb/1.webp';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/outside/2.webp';
    caption = '';
    thumb = './assets/images/housing/outside/thumb/2.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/outside/3.webp';
    caption = '';
    thumb = './assets/images/housing/outside/thumb/3.webp';
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
