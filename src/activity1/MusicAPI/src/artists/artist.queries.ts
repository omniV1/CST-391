export const artistQueries = { 
    readArtists: `
    SELECT
    DISTINCT artists as artists
    FROM music.albums
    `
}