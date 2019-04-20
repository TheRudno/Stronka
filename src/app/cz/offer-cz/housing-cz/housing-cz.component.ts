import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housing-cz',
  templateUrl: './housing-cz.component.html',
  styleUrls: ['./housing-cz.component.css']
})
export class HousingCzComponent implements OnInit {

  public albums: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(public lightbox: Lightbox, public router: Router) {
    let src = './assets/images/housing/1.JPG';
    let caption = 'ARMES-W';
    let thumb = './assets/images/housing/thumb/1.JPG';
    let album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/2.jpg';
    caption = 'ARMES-Z';
    thumb = './assets/images/housing/thumb/2.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
    src = './assets/images/housing/3.jpg';
    caption = 'ARMES-S';
    thumb = './assets/images/housing/thumb/3.jpg';
    album = {src, caption, thumb};
    this.albums.push(album);
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  ngOnInit() {


  }

}
