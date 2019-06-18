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
    let src = './assets/images/feedthrough/3.jpg';
    let caption = 'Jednoduchá ucpávka HSI 150-K';
    let thumb = './assets/images/feedthrough/thumb/3.jpg';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/feedthrough/2.jpg';
    caption = 'Systémové víko HSI 150-D3/58.';
    thumb = './assets/images/feedthrough/thumb/2.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/feedthrough/1.jpg';
    caption = 'Zemnicí průchodka HEA';
    thumb = './assets/images/feedthrough/thumb/1.jpg';
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
