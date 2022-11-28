
import { ABOUT_TEXT, BACK_BUTTON } from "./about.style"
import { gettext as getText } from 'i18n'

const logger = DeviceRuntimeCore.HmLogger.getLogger('smart-authenticator')
const deviceInfo = hmSetting.getDeviceInfo()
const aboutText = getText("aboutMsg")
const PADDING = px(100)

Page({
  state: {
  },
  onInit() {
    logger.debug("called AboutPage.onInit")
  },
  build() {
    logger.debug("called AboutPage.build")

    const { width, height } = hmUI.getTextLayout(aboutText, {
      text_size: px(36),
      text_width: deviceInfo.width,
      wrapped: 1
    })

    const aboutWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...ABOUT_TEXT,
      w: width,
      h: height,
      text: aboutText
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      y: aboutWidget.y + aboutWidget.h + PADDING,
      ...BACK_BUTTON,
    })    
  },
  onDestroy() {
    logger.debug("called AboutPage.onDestroy")
  }
})