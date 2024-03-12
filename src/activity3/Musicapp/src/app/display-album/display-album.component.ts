import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/Album';

// The @Component decorator indicates that the following class is a component,
// provides metadata including the selector, the path to the template, and the path to the stylesheet.
@Component({
	selector: 'app-display-album', // Defines the custom HTML tag used to insert this component into other templates.
	templateUrl: './display-album.component.html', // Location of the component's template file.
	styleUrls: ['./display-album.component.css'], // Location of the component's styles.
})
export class DisplayAlbumComponent implements OnInit {
	// The @Input decorator marks the album property as an input,
	// allowing this component to receive an Album object from its parent component.
	@Input() album: Album | null = null;

	// Constructor for the component. Used for injecting dependencies,
	// but not needed here since there are no dependencies to inject.
	constructor() { }

	// The ngOnInit lifecycle hook. It's a good place for initialization logic.
	// This component doesn't need any initialization, so it's left empty.
	ngOnInit() { }
}
