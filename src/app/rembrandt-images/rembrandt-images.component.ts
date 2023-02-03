import { DailyDrawingService } from '../metApi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rembrandt-images',
  templateUrl: './rembrandt-images.component.html',
  styleUrls: ['./rembrandt-images.component.scss']
})
export class RembrandtImagesComponent implements OnInit {

  imageData : any;

  constructor(private dailyDrawingService : DailyDrawingService) { }

  ngOnInit(): void {
    this.getImages('Rembrandt');
  }

  getImages(artistName : string): void {
    this.dailyDrawingService.searchImages(artistName)
    .subscribe((res : any) => {
      const imageId = res.objectIDs[0]
      this.dailyDrawingService.getImage(imageId)
        .subscribe((res : any) => {
          this.imageData = res;
          console.log(res);
        })
    })
  }

}
