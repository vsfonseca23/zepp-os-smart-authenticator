import { gettext } from "i18n"
import { GITHUB_README_KEY } from "../../../utils/constants"

const logger = DeviceRuntimeCore.HmLogger.getLogger('smart-authenticator')
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()
const { messageBuilder } = getApp()._options.globalData
let messageWidget;

const sendMessage = () => {
  messageBuilder
    .request({
      method: 'GET',
      params: {
        whatToFetch: GITHUB_README_KEY
      }
    }).then((data) => createMessageWidget(data))
}

const createMessageWidget = (message) => {
  hmUI.deleteWidget(messageWidget)
  
  const { width, height } = hmUI.getTextLayout(message, {
    text_size: px(36),
    text_width: DEVICE_WIDTH,
    wrapped: 1
  })

  messageWidget = hmUI.createWidget(hmUI.widget.TEXT, {
    x: px(0),
    y: px(150),
    w: width,
    h: height,
    color: 0xffffff,
    text_size: px(36),
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.WRAP,
    text: message
  })
}

Page({
  build() {
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: px(0),
      y: px(80),
      w: DEVICE_WIDTH,
      h: px(80),
      text: gettext("fetchGithubReadmeButton"),
      text_size: px(36),
      normal_color: 0x305EE4,
      press_color: 0x21419f,
      click_func: sendMessage
    })
  },
  onInit() {
    messageBuilder.on('call', ({ payload: buf }) => {
      const data = messageBuilder.buf2Json(buf)
      logger.debug("onCall: ", data)
    })
  },
  onDestroy() {
  },
})