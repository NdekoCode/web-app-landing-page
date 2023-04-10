export function validYoutubVideo(videoUrl: string): string {
  if (!videoUrl.includes('embed')) {
    const strArray = videoUrl.split('youtu.be');
    videoUrl = strArray[0] + 'youtu.be/embed/' + strArray[1] || '';
  }
  return videoUrl;
}
