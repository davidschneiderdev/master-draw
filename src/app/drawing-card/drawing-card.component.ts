import { DailyDrawingService } from '../metApi.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drawing } from '../drawing';

@Component({
  selector: 'app-drawing-card',
  templateUrl: './drawing-card.component.html',
  styleUrls: ['./drawing-card.component.scss']
})
export class DrawingCardComponent implements OnInit {

  drawing: Drawing = {
    id: 1,
    name: 'Da Vinci',
    image: 'https://images.metmuseum.org/CRDImages/cl/original/DP132217.jpg'
  };

  imageData : any;

  constructor(private api : DailyDrawingService, private http:HttpClient) { }

  ngOnInit(): void {
      this.getDailyDrawingInfo();
  }

  getDailyDrawingInfo() {
    this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Albrecht')
        .subscribe((data : any) => {
          let results = data.objectIDs[1];
          // console.log(results);
          this.http.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${results}`)
            .subscribe((imageDetails : any) => {
              console.log(imageDetails);
              this.imageData = imageDetails;
            })
        });
  }

}
