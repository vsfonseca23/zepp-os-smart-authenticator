import { DEVICE_WIDTH, OTP_START_TOKEN_GENERATION, OTP_STOP_TOKEN_GENERATION } from "../../../utils/constants"
import { OTP_BACK_BUTTON, OTP_TEXT } from "./otp.style"

const logger = DeviceRuntimeCore.HmLogger.getLogger('smart-authenticator')
const { messageBuilder } = getApp()._options.globalData

Page({
  state: {
    tokenWidget: null,
  },
  onInit() {
    logger.debug("called OtpPage.onInit")

    messageBuilder.on('call', ({ payload: buf }) => {
      logger.debug("called messageBuilder.call")
      const data = messageBuilder.buf2Json(buf)

      if (this.state.tokenWidget)
        hmUI.deleteWidget(this.state.tokenWidget)

      const { width, height } = hmUI.getTextLayout(data, {
        text_size: px(36),
        text_width: DEVICE_WIDTH,
        wrapped: 1
      })

      this.state.tokenWidget = hmUI.createWidget(hmUI.widget.TEXT, {
        ...OTP_TEXT,
        w: width,
        h: height,
        text: data
      })
    })

    messageBuilder.request({ method: OTP_START_TOKEN_GENERATION })
  },
  build() {
    logger.debug("called OtpPage.build")
    hmUI.createWidget(hmUI.widget.BUTTON, { ...OTP_BACK_BUTTON })
  },
  onDestroy() {
    logger.debug("called OtpPage.onDestroy")
    messageBuilder.request({ method: OTP_STOP_TOKEN_GENERATION })
  },
})