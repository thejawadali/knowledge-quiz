import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import { createToast, ToastType } from "mosha-vue-toastify"
import "mosha-vue-toastify/dist/style.css"

dayjs.extend(duration)
dayjs.extend(relativeTime)

export function reloadBrowser(redirectURL?: string) {
  window.location.href = redirectURL || window.location.href
}




export const toast = (description: string, type: ToastType) => {
  createToast(
    { description },
    {
      position: "bottom-right",
      showIcon: true,
      timeout: 3000,
      hideProgressBar: true,
      transition: "slide",
      type
    }
  )
}