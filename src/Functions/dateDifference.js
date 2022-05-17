export default function dateDifference($seconds) {
  $seconds = Number($seconds)

  // YEARS

  // MONTHS
  if ($seconds >= 2419200) {
    if (Math.floor($seconds / 2419200) == 1) return Math.floor($seconds / 2419200) + " month ago"
    else return Math.floor($seconds / 2419200) + " months ago"
  }

  // WEEKS
  if ($seconds >= 604800) {
    if (Math.floor($seconds / 604800) == 1) return Math.floor($seconds / 604800) + " week ago"
    else return Math.floor($seconds / 604800) + " weeks ago"
  }

  // DAYS
  if ($seconds >= 86400) {
    if (Math.floor($seconds / 86400) == 1) return Math.floor($seconds / 86400) + " day ago"
    else return Math.floor($seconds / 86400) + " days ago"
  }

  // HOURS
  else if ($seconds >= 3600) {
    if (Math.floor($seconds / 3600) == 1) return Math.floor($seconds / 3600) + " hour ago"
    else return Math.floor($seconds / 3600) + " hours ago"
  }

  // MINUTES
  else if ($seconds >= 60) {
    if (Math.floor($seconds / 60) == 1) return Math.floor($seconds / 60) + " minute ago"
    else return Math.floor($seconds / 60) + " minutes ago"
  }

  // SECONDS
  else if ($seconds < 60) {
    if ($seconds == 1) return $seconds + " second ago"
    else return $seconds + " seconds ago"
  }
}
