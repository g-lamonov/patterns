export interface IResource {
  title: () => string;
  body: () => string;
  link: () => string;
  image: () => string;
}

export class ArtistResource implements IResource {
  artist: any
  constructor(artist: any) {
    this.artist = artist;
  }

  title() {
    return this.artist.name
  }
  body() {
    return this.artist.bio
  }
  image() {
    return this.artist.image
  }
  link() {
    return this.artist.slug
  }
}

export class SongResource implements IResource {
  song: any
  constructor(song: any) {
    this.song = song;
  }

  title() {
    return this.song.name
  }
  body() {
    return this.song.lyrics
  }
  image() {
    return this.song.coverImage
  }
  link() {
    return this.song.spotifyLink
  }
}