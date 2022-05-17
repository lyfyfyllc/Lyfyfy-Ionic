export default function get_media_time(media) {

  let new_time = "";
  let mins = 0;
  let secs = 0;
  let hors = 0;

  if (Math.floor(media) > 0) {

    if (Math.floor(media) < 60) {
      secs = Math.floor(media);
    } else if (Math.floor(media) >= 3600) {
      hors = Math.floor(Math.floor(media) / 3600);
      mins = (Math.floor(media) - (3600 * hors));
      secs = mins;
      mins = (Math.floor(mins / 60));
      secs = secs - (60 * mins);
    } else if (Math.floor(media) >= 60) {
      mins = Math.floor(Math.floor(media) / 60);
      secs = Math.floor(media) - (60 * mins);
    }

  }

  if (secs < 10) secs = "0" + secs;
  if (mins < 10 && hors) mins = "0" + mins;

  if (hors) new_time = hors + ":" + mins + ":" + secs;
  else new_time = mins + ":" + secs;

  return new_time;

}
