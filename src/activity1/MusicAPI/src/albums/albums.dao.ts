import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Album } from "./albums.model";
import { albumQueries } from './albumsQueries'; 

export const readAlbumns = async () => { 
    return execute<Album[]>(albumQueries.readAlbums, []); 

}; 

export const readAlbumsByArtist = async (artistName: string) => { 
    return execute<Album[]>(albumQueries.readAlbumsByArtist, [artistName]); 
}; 

export const readAlbumsByArtistSearch = async (search: string) => {
    console.log('search param', search); 
    return execute<Album[]>(albumQueries.readAlbumnsByArtistSearch, [search]); 
}; 

export const readAlbumsByAlbumDescriptionSearch = async (search: string) => {
console.log('search param', search); 
return execute<Album[]>(albumQueries.readAlbumnsByDescriptionSearch, [search]); 
}; 

export const readAlbumsByAlbumId = async (albumId: number) => { 
    return execute<Album[]>(albumQueries.readAlbumnsByAlbumId, [albumId]); 
}; 

export const createAlbum = async (album: Album) => { 
    return execute<OkPacket>(albumQueries.createAlbum,
        [album.title, album.artist, album.description, album.year, album.image]); 
}; 

export const updateAlbum = async (album: Album) => {
    return execute<OkPacket>(albumQueries.updateAlbum,
        [album.title, album.artist, album.description, album.year, album.image]);
};

export const deleteAlbum = async (albumId: number) => { 
    return execute<OkPacket>(albumQueries.deleteAlbum, [albumId]); 
}; 
