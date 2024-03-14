// Import statements to include Angular core functionalities, the service for music data retrieval, and model classes.
import { Component, OnInit, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';

@Component({
	selector: 'app-edit-albums', // Defines how this component is identified in HTML templates (as <app-list-albums>).
	templateUrl: './edit-albums.component.html', // Points to the HTML file that represents the component's template.
	styleUrls: ['./edit-albums.component.css'] // Specifies the styles specific to this component.
})
export class EditAlbumComponent implements OnInit {
	// The artist for whom albums are to be displayed. This property is set by the parent component.
	@Input() artist: Artist | null = null;

	// Array to hold the list of albums retrieved for the specified artist.
	albums: Album[] = [];

	// Property to track which album, if any, is currently selected by the user.
	selectedAlbum: Album | null = null;

	// The constructor for this component. The MusicServiceService is injected to fetch album data.
	constructor(private service: MusicServiceService) { }

	// ngOnInit is a lifecycle hook executed after Angular has initialized the component's inputs and views.
	// It checks if an artist is selected and fetches the corresponding albums.
	ngOnInit() {
		// Checks if an artist has been provided as input from the parent component.
		if (this.artist) {
			// Calls the service to retrieve albums for the specified artist and assigns them to the 'albums' property.
			this.albums = this.service.getAlbums(this.artist.Name);
		}
	}

	// Handler for when an album is selected from the list.
	// It updates the 'selectedAlbum' property and logs the album's title.
	public onSelectAlbum(album: Album) {
		console.log("Selected Album of " + album.Title); // Logs the title of the selected album.
		this.selectedAlbum = album; // Updates the selectedAlbum property to reflect the user's selection.
	}
}
