// NgModule is Angular's decorator that allows us to define metadata for the module.
import { NgModule } from '@angular/core';
// RouterModule and Routes are part of Angular's routing library to enable navigation between views.
import { RouterModule, Routes } from '@angular/router';
// Importing component classes that will be connected to routes.
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';

// Define the routes array. Each object in this array corresponds to a route definition.
const routes: Routes = [
  // Route for creating a new album.
  { path: 'create', component: CreateAlbumComponent },
  // Route for listing all artists.
  { path: 'list-artists', component: ListArtistsComponent },
  // Route for listing all albums.
  { path: 'list-albums', component: ListAlbumsComponent },
  // Route for displaying a single album by its id.
  { path: 'display/:id', component: DisplayAlbumComponent },
  // Route for editing an album, which includes both artist and album id in the URL.
  { path: 'edit/:artist/:id', component: EditAlbumComponent },
  // Route for deleting an album by its id.
  { path: 'delete/:id', component: DeleteAlbumComponent }
];

// The @NgModule decorator defines the AppRoutingModule class as an Angular module.
@NgModule({
  // Imports RouterModule and initializes it with the routes array. enableTracing is enabled for debugging route operations.
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // enableTracing is useful for debugging purposes.
  // Exports RouterModule so it's available throughout the app.
  exports: [RouterModule]
})
// AppRoutingModule class will be imported into the root module to provide configured routes.
export class AppRoutingModule { }
