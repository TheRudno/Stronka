import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realizations',
  templateUrl: './realizations.component.html',
  styleUrls: ['./realizations.component.css']
})
export class RealizationsComponent implements OnInit {

  public offerList: {title: string, imgPathList: string[]} [] = [];
  public index: number = null;

  constructor() {
    this.offerList.push({title: 'ArcelorMittal Kraków', imgPathList: ['../../../assets/images/realizations/arcelormittal-krakow.jpg']});
    this.offerList.push({title: 'Kaufland Jesenik', imgPathList: ['../../../assets/images/realizations/kaufland-jesenik.jpg']});
    this.offerList.push({title: 'Lidl Sternberk', imgPathList: ['../../../assets/images/realizations/lidl-sternberk.jpg']});

    this.offerList.push({title: 'CH Futurum Ostrava', imgPathList: ['../../../assets/images/realizations/ostrava-ch-futurum.jpg']});
    this.offerList.push({title: 'Bohuniovice', imgPathList: ['../../../assets/images/realizations/bohuniovice.jpg']});
    this.offerList.push({title: 'Bom Plast Ceska Trebova', imgPathList: ['../../../assets/images/realizations/ceska-trebova.jpg']});
    this.offerList.push({title: 'Gogolin', imgPathList: ['../../../assets/images/realizations/gogolin.jpg']});
    this.offerList.push({title: 'MSEM Prerov', imgPathList: ['../../../assets/images/realizations/msem-prerov.jpg']});
    this.offerList.push({title: 'Nova Seninka', imgPathList: ['../../../assets/images/realizations/nova-seninka.jpg']});
    this.offerList.push({title: 'Ostrava Unigeo', imgPathList: ['../../../assets/images/realizations/ostrava-uniego.jpg']});
    this.offerList.push({title: 'Styroprofile Bruntal', imgPathList: ['../../../assets/images/realizations/styroprofile-bruntal.jpg']});
    this.offerList.push({title: 'Visimpex Prerov', imgPathList: ['../../../assets/images/realizations/visimpex-prerov.jpg']});
    this.offerList.push({title: 'Taouros Metal Zivitice', imgPathList: ['../../../assets/images/realizations/zivitice.jpg']});
    if (this.offerList.length > 0) {
      this.index = 0;
      this.offerList.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  loadPictures(index: number) {
    this.index = index;
    console.log('index ' + this.index);
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
