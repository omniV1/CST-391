import { Router } from 'express'; 
import * as AlbumsController from './albums.controller'; 

const router = Router(); 

router.route('/albums')
  .get(AlbumsController.readAlbumns)
  .post(AlbumsController.createAlbum)
  .put(AlbumsController.updateAlbum);

router.route('/albums/:artist')
  .get(AlbumsController.readAlbumsByArtistSearch);

router.route('/albums/search/artist/:search')
  .get(AlbumsController.readAlbumsByArtistSearch);

router.route('/albums/search/description/:search')
  .get(AlbumsController.readAlbumsByAlbumDescriptionSearch);

router.route('/albums/:albumId')
  .delete(AlbumsController.deleteAlbum);

export default router;
