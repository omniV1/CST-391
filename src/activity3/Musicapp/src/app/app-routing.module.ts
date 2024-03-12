import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component imports for each route
import { CreateAlbumComponent } from './create-album/create-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';

// Define the routes for the application.
// Each route associates a path with a component that will be rendered when the path is navigated to.
const routes: Routes = [
	{ path: 'create', component: CreateAlbumComponent },
	{ path: 'list-artists', component: ListArtistsComponent },
	{ path: 'list-albums', component: ListAlbumsComponent },
	{ path: 'display/:id', component: DisplayAlbumComponent },
	{ path: 'edit/:artist/:id', component: EditAlbumComponent },
	{ path: 'delete/:artist/:id', component: DeleteAlbumComponent }
  ];
  
// Decorator that marks a class as an NgModule and configures it with the routes.
// RouterModule.forRoot creates a module with all the router providers and directives.
// It also takes an array of Routes which will be used to configure the router.
@NgModule({
	 
	 
	imports: [RouterModule.forRoot(routes)],// Importing RouterModule and registering the routes.
	exports: [RouterModule] // Exporting RouterModule so it's available throughout the app.
})
export class AppRoutingModule { }
