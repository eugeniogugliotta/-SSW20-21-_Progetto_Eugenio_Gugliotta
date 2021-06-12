import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostItKeyValueService } from './postit-keyvalue-service.service';
import { PostitviewComponent } from './postitview/postitview.component';
import { NewpostitComponent } from './postitview/newpostit/newpostit.component';
import { NewkeyKeyvalueService } from './newkey-keyvalue-service.service';
import { UploadpostitKeyvalueServiceService } from './postitview/uploadpostit-keyvalue-service.service';
import { DeletepostitComponent } from './postitview/deletepostit/deletepostit.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  declarations: [ AppComponent, PostitviewComponent, NewpostitComponent, DeletepostitComponent ],
  bootstrap:    [ AppComponent, ],
  providers: [PostItKeyValueService, NewkeyKeyvalueService, UploadpostitKeyvalueServiceService]
})
export class AppModule { }
