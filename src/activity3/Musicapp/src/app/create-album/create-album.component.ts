import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { MusicServiceService } from '../service/music-service.service';

// The @Component decorator indicates that this class is an Angular component.
// It includes metadata such as the component's selector, template file, and styles.
@Component({
	selector: 'app-create-album', // The component's custom HTML tag
	templateUrl: './create-album.component.html', // The location of the component's template file
	styleUrls: ['./create-album.component.css'], // The location of the component's styles
})
export class CreateAlbumComponent implements OnInit {
    // The album property is initialized with a new Album object.
    // A random ID is generated for the new album.
	album: Album = new Album(Math.floor(Math.random() * 1000000), '', '', '', 0, '', []);
    
    // This property will hold the raw string input for tracks from the user.
	tracksRaw: string = '';

    // This flag indicates whether the album submission has been attempted.
	wasSubmitted: boolean = false;

    // Injecting the MusicServiceService into the component for album creation functionality.
	constructor(private service: MusicServiceService) { }

    // ngOnInit is a lifecycle hook for additional initialization tasks.
	ngOnInit() { }

    // This method handles the form submission event.
	public onSubmit() {
        // Parsing the raw track data input by the user into Track objects.
		const tracks: Track[] = this.parseTracks(this.tracksRaw);

        // Assigning the parsed tracks to the album's Tracks property.
		this.album.Tracks = tracks;

        // Calling the service to create a new album with the current album data.
		const status = this.service.createAlbum(this.album);

        // Logging the status of the album creation.
		console.log('The return from createAlbum() was ' + status);

        // Setting the wasSubmitted flag to true to indicate that the form was submitted.
		this.wasSubmitted = true;
	}

    // This method parses the raw string of tracks into an array of Track objects.
	private parseTracks(rawTracks: string): Track[] {
		const tracks: Track[] = [];
		const lines = rawTracks.split('\n');

        // For each line in the rawTracks string, a new Track object is created.
		lines.forEach((line, index) => {
			const [title, lyrics, video] = line.split(':');
            // Pushing a new Track object to the tracks array with a random ID and track number based on the line index.
			tracks.push(new Track(Math.floor(Math.random() * 1000000), index + 1, title, lyrics || '', video || ''));
		});

		return tracks;
	}
}
