// Importing Angular core decorators and lifecycle interface
import { Component, OnInit } from '@angular/core';
// ActivatedRoute is used to access the route parameters passed in the URL
import { ActivatedRoute } from '@angular/router';
// MusicServiceService is a custom service that handles HTTP requests related to music operations
import { MusicServiceService } from '../service/music-service.service';

// The @Component decorator defines metadata for the component, including the CSS selector,
// the URL to the HTML template, and the URL for the component-specific styles.
@Component({
  selector: 'app-delete-album', // The custom HTML tag that will be used for this component.
  templateUrl: './delete-album.component.html', // The layout of the component.
  styleUrls: ['./delete-album.component.css'] // The styles applied to the component.
})
// DeleteAlbumComponent implements the OnInit lifecycle hook interface, which requires
// the ngOnInit method to be defined.
export class DeleteAlbumComponent implements OnInit {
  
  // The constructor initializes the component with injected services.
  // ActivatedRoute is used for accessing route parameters.
  // MusicServiceService is a service class for making HTTP requests to the server.
  constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

  // ngOnInit is a lifecycle hook called by Angular to indicate that Angular is done creating the component.
  ngOnInit() {
    // Using the snapshot of the current route information to access the 'artist' parameter.
    let artist = this.route.snapshot.paramMap.get('artist');
    // Parsing the 'id' route parameter to a number. The '!' postfix asserts that the value is non-null.
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);

    // Calling the deleteAlbum method of the service, passing the parsed id.
    // A callback function is defined which logs to the console once the deletion is successful.
    this.service.deleteAlbum(id, () => {
      console.log("Album deleted successfully");
    });
  }
}
