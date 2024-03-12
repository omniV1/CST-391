import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/Album';

// @Component decorator defines the component metadata, including the selector, HTML template, and CSS.
@Component({
  selector: 'app-edit-album', // The component's CSS element selector
  templateUrl: './edit-album.component.html', // Location of the template file for this component
  styleUrls: ['./edit-album.component.css'] // Location of the CSS styles for this component
})

// EditAlbumComponent allows users to edit details of an album.
export class EditAlbumComponent implements OnInit {
  // The album to edit, initialized later via the music service using route parameters.
  album!: Album;

  // A raw string representation of the album's tracks, for display or editing purposes.
  tracksRaw: string = "";

  // Flag indicating whether the form was submitted.
  wasSubmitted: boolean = false;

  // Injecting necessary services: ActivatedRoute for accessing route parameters,
  // MusicServiceService for album data operations, and Location for navigating back.
  constructor(private route: ActivatedRoute, private service: MusicServiceService, private location: Location) { }

  // ngOnInit lifecycle hook retrieves the album to be edited using the route parameters.
  ngOnInit() {
    // Extracting artist name and album id from the route's parameters.
    let artist = this.route.snapshot.paramMap.get('artist');
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log("The ID is " + id);
    console.log("The Artist is " + artist);
    
    // The commented-out block below is intended to fetch the album details using the music service.
    // It constructs a raw string of track details for editing. This functionality needs to be replaced
    // or updated to work with the current version of the MusicServiceService.
/*
    this.service.getAlbum(artist, id, (album: Album) => {
      this.album = album;
      this.album.Tracks.forEach((track) => {
        this.tracksRaw += track.Title;
        if (track.Lyrics) this.tracksRaw += ';' + track.Lyrics;
        if (track.Video) this.tracksRaw += ';' + track.Video;
        this.tracksRaw += '\n';
      });
    });
*/
  }

  // onCancel navigates back to the previous location.
  public onCancel() {
    console.log("I am going back");
    this.location.back();
  }

  // onSubmit is intended to submit the updated album details. The commented-out block should call
  // the music service to update the album, then set wasSubmitted to true.
  public onSubmit() {
    // The service call to update the album is commented out. This needs implementation to properly
    // update the album information in the backend or data service.
/*
    this.service.updateAlbum(this.album, (status: any) => {
      console.log("The return from updateAlbum() was " + status);
      this.wasSubmitted = true;
    });
*/
  }

}
