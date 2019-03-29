import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedthrough',
  templateUrl: './feedthrough.component.html',
  styleUrls: ['./feedthrough.component.css']
})
export class FeedthroughComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = '../../../assets/images/feedthrough/1.jpg';
    let caption = '';
    let thumb = '../../../assets/images/feedthrough/1.jpg';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/feedthrough/2.jpg';
    caption = '';
    thumb = '../../../assets/images/feedthrough/2.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/feedthrough/3.jpg';
    caption = '';
    thumb = '../../../assets/images/feedthrough/3.jpg';
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
