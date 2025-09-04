abstract class Media {
  abstract play(): void;
}

class Audio extends Media {
  play(): void {
    console.log('Playing audio');
  }
}

class Video extends Media {
  play(): void {
    console.log('Playing video');
  }
}

const media: Media[] = [new Audio(), new Video()];

media.forEach((m) => m.play());
