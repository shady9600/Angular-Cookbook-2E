import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // Finds the first element matching the view query and assigns it to this property
  // Component type must be defined 
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;

  addNewPicture() {
    this.gallery.pictures.unshift(this.gallery.generateImage());
  }

  removeFirstPicture() {
    this.gallery.pictures.shift();
  }
}
