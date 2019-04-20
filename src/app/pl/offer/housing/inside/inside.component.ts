import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = '../../../assets/images/housing/inside/1.jpg';
    let caption = '';
    let thumb = '../../../assets/images/housing/inside/thumb/1.jpg';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/housing/inside/2.jpg';
    caption = '';
    thumb = '../../../assets/images/housing/inside/thumb/2.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/housing/inside/3.jpg';
    caption = '';
    thumb = '../../../assets/images/housing/inside/thumb/3.jpg';
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
