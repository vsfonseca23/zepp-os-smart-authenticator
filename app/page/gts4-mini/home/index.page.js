import { GITHUB_README_KEY } from "../../../utils/constants"
import { ABOUT_BUTTON, ABOUT_TEXT, OTP_BUTTON } from "./index.style"

const deviceInfo = hmSetting.getDeviceInfo()
const logger = DeviceRuntimeCore.HmLogger.getLogger('smart-authenticator')
const { messageBuilder } = getApp()._options.globalData

Page({
  state: {
    aboutWidget: null,
  },
  onInit() {
    logger.debug("called Page.onInit")
  },
  build() {
    hmUI.createWidget(hmUI.widget.BUTTON, { ...OTP_BUTTON })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...ABOUT_BUTTON,
      click_func: () => { this.requestAboutText() }
    })
  },
  onDestroy() {
    logger.debug("called Page.onDestroy")
  },
  requestAboutText() {
    logger.debug("called Page.requestAboutText")

    messageBuilder
      .request({
        method: 'GET',
        params: {
          whatToFetch: GITHUB_README_KEY
        }
      }).then((data) => this.showAboutText(data))
  },
  showAboutText(aboutText) {
    logger.debug("called Page.showAboutText")

    if (this.state.aboutWidget)
      hmUI.deleteWidget(this.state.aboutWidget)

    const { width, height } = hmUI.getTextLayout(aboutText, {
      text_size: px(36),
      text_width: deviceInfo.width,
      wrapped: 1
    })

    this.state.aboutWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...ABOUT_TEXT,
      w: width,
      h: height,
      text: aboutText
    })
  }
})