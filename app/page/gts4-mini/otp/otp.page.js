
import { BACK_BUTTON } from "./otp.style"

const logger = DeviceRuntimeCore.HmLogger.getLogger('smart-authenticator')

Page({
  state: {
  },
  onInit() {
    logger.debug("called OtpPage.onInit")
  },
  build() {
    hmUI.createWidget(hmUI.widget.BUTTON, { ...BACK_BUTTON })
  },
  onDestroy() {
    logger.debug("called OtpPage.onDestroy")
  }
})