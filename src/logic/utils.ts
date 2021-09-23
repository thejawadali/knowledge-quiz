import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(duration)
dayjs.extend(relativeTime)

export function reloadBrowser(redirectURL?: string) {
  window.location.href = redirectURL || window.location.href
}
