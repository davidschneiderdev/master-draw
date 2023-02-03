import { DailyDrawingService } from '../metApi.service';
import { Component, OnInit } from '@angular/core';
import { DRAWINGS } from '../mock-drawings';
import { Drawing } from '../drawing';

@Component({
  selector: 'app-leonardo-images',
  templateUrl: './leonardo-images.component.html',
  styleUrls: ['./leonardo-images.component.scss']
})
export class LeonardoImagesComponent implements OnInit {

  imageData : any;

  constructor(private dailyDrawingService: DailyDrawingService) { }

  ngOnInit(): void {
    this.getImages('Leonardo');
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
