import { execute } from '../services/mysql.connector';
import { Track } from './tracks.model';
import { trackQueries } from './tracks.queries';

export const readTracks = async (albumId: number): Promise<Track[]> => {
  return execute<Track[]>(trackQueries.readTracks, [albumId]);
};

export const createTracks = async (track: Track, albumId: number): Promise<void> => {
  return execute<void>(trackQueries.createTracks, [albumId, track.title, track.number, track.video, track.lyrics]);
};

export const updateTrack = async (track: Track): Promise<void> => {
    return execute<void>(trackQueries.updateTracks, [track.title, track.number, track.video, track.lyrics, track.trackId]);
  };
  
