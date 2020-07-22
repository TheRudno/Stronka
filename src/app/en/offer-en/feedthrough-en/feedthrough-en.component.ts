import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedthrough-en',
  templateUrl: './feedthrough-en.component.html',
  styleUrls: ['./feedthrough-en.component.css']
})
export class FeedthroughEnComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = './assets/images/feedthrough/3.webp';
    let caption = 'Jednoduchá ucpávka HSI 150-K';
    let thumb = './assets/images/feedthrough/thumb/3.webp';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/feedthrough/2.webp';
    caption = 'Systémové víko HSI 150-D3/58.';
    thumb = './assets/images/feedthrough/thumb/2.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/feedthrough/1.webp';
    caption = 'Zemnicí průchodka HEA';
    thumb = './assets/images/feedthrough/thumb/1.webp';
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
