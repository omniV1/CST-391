export const artistQueries = { 
    readArtists: `
    SELECT
    DISTINCT artist as artists
    FROM music.albums
    `
}