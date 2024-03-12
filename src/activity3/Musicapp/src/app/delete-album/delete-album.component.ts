import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

// The @Component decorator provides the Angular metadata for the DeleteAlbumComponent.
@Component({
  selector: 'app-delete-album', // The HTML tag for this component.
  templateUrl: './delete-album.component.html', // The HTML layout for this component.
  styleUrls: ['./delete-album.component.css'] // The CSS styling for this component.
})
export class DeleteAlbumComponent implements OnInit {
  // Properties indicating the state of the deletion process.
  isDeleting: boolean = false;
  isDeleted: boolean = false;
  deleteError: boolean = false;

  // The constructor injects services for use in the component.
  constructor(
    private route: ActivatedRoute, // Provides access to information about a route associated with the component.
    private musicService: MusicServiceService, // Provides the music service for operations.
    private router: Router // Provides the navigation functionality.
  ) { }

  // Angular's ngOnInit lifecycle hook for initialization logic.
  ngOnInit() {
    // Extract the 'artist' and 'id' parameters from the current route.
    const artist = this.route.snapshot.paramMap.get('artist');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Check for the presence of 'artist' and 'id' and proceed to delete the album if both are available.
    if (artist && id) {
      this.deleteAlbum(id, artist);
    }
  }
  deleteAlbum(id: number, artist: string) {
    this.isDeleting = true;
    const result = this.musicService.deleteAlbum(id, artist);
    this.isDeleting = false;
    
    // Check if deletion was successful
    if (result === 0) {
      this.isDeleted = true;
      console.log('Album successfully deleted');
      setTimeout(() => this.router.navigate(['/list-albums']), 2000);
    } else {
      // Handle the case where deletion failed
      this.deleteError = true;
      console.log('Error deleting album');
    }
  }
  
}
