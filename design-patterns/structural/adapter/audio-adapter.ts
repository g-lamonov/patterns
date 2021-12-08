interface MediaPlayer {
  play?: (audioType: string, fileName: string) => void;
}

interface AdvancedMediaPlayer {
  playVLC?: (fileName: string) => void;
  playMp4?: (fileName: string) => void;
}

class VLCPlayer implements AdvancedMediaPlayer {
  playVLC(fileName: string) {
    console.log("Playing vlc file", fileName);
  }
}
class Mp4Player implements AdvancedMediaPlayer {
  playMp4(fileName: string) {
    console.log("Playing mp4 file", fileName);
  }
}

class MediaAdapter {
  advancedMediaPlayer: AdvancedMediaPlayer;
  constructor(audioType: string) {
    switch (audioType) {
      case 'vlc':
        this.advancedMediaPlayer = new VLCPlayer();
        break;
      case 'mp4':
        this.advancedMediaPlayer = new Mp4Player();
        break;
      default:
        console.log(`Media not supported - ${audioType}`);
    }
  }

  play(audioType: string, fileName: string) {
    switch (audioType) {
      case 'vlc':
        this.advancedMediaPlayer.playVLC(fileName);
        break;
      case 'mp4':
        this.advancedMediaPlayer.playMp4(fileName);
        break;
      default:
        console.log(`Media not supported - ${audioType}`);
    }
  }
}

export class AudioPlayer implements MediaPlayer {
  play(audioType: string, fileName: string) {
    switch (audioType) {
      case 'vlc': case 'mp4':
        let player = new MediaAdapter(audioType);
        break;
      case 'mp3':
        console.log("Playing mp3 file", fileName);
        break;
      default:
        console.log(`Media not supported - ${audioType}`);
    }
  }
}
