import { DailyDrawingService } from './metApi.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DrawingCardComponent } from './drawing-card/drawing-card.component';
import { TabGroupComponent } from './tab-group/tab-group.component';

import { MatTabsModule } from '@angular/material/tabs'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatChipsModule} from '@angular/material/chips';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LeonardoImagesComponent } from './leonardo-images/leonardo-images.component';
import { RembrandtImagesComponent } from './rembrandt-images/rembrandt-images.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

const appRoutes: Routes = [
  { path: 'leonardo-images', component: LeonardoImagesComponent },
  { path: 'rembrandt-images', component: RembrandtImagesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DrawingCardComponent,
    TabGroupComponent,
    SidenavComponent,
    LeonardoImagesComponent,
    RembrandtImagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatChipsModule, 
    MatGridListModule,
    MatSlideToggleModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
