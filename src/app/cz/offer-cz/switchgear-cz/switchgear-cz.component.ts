import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switchgear-cz',
  templateUrl: './switchgear-cz.component.html',
  styleUrls: ['./switchgear-cz.component.css']
})
export class SwitchgearCzComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = './assets/images/switchgear/1.webp';
    let caption = '';
    let thumb = './assets/images/switchgear/thumb/1.webp';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/switchgear/2.webp';
    caption = '';
    thumb = './assets/images/switchgear/thumb/2.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/switchgear/3.webp';
    caption = '';
    thumb = './assets/images/switchgear/thumb/3.webp';
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
