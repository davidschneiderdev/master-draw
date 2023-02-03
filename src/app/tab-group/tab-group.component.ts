import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  imagePath : any;

  tabNames = [
    { label:'Da Vinci', content: 'Da Vinci'},
    { label: 'Dürer', content: 'Dürer'},
    { label: 'Rembrandt', content: 'Rembrandt'},
    { label: 'Peter Paul Rubens', content: 'Peter Paul Rubens'}
  ];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  callApi(name : any) {
    this.http.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${name}`)
        .subscribe((data : any) => {
          let results = data.objectIDs[1];
          console.log(results);

          this.http.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${results}`)
            .subscribe((imageDetails : any) => {
              console.log(imageDetails);
              return imageDetails;
            })
        });
  }

}
