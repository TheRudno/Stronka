import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.css']
})
export class TransformerComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = '../../../assets/images/transformator/2.webp';
    let caption = '';
    let thumb = '../../../assets/images/transformator/thumb/2.webp';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/transformator/3.webp';
    caption = '';
    thumb = '../../../assets/images/transformator/thumb/3.webp';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/transformator/4.webp';
    caption = '';
    thumb = '../../../assets/images/transformator/thumb/4.webp';
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
