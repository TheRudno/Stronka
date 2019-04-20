import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switchgear',
  templateUrl: './switchgear.component.html',
  styleUrls: ['./switchgear.component.css']
})
export class SwitchgearComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = '../../../assets/images/switchgear/1.jpg';
    let caption = '';
    let thumb = '../../../assets/images/switchgear/thumb/1.jpg';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/switchgear/2.jpg';
    caption = '';
    thumb = '../../../assets/images/switchgear/thumb/2.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = '../../../assets/images/switchgear/3.jpg';
    caption = '';
    thumb = '../../../assets/images/switchgear/thumb/3.jpg';
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
