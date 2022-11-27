import { gettext } from "i18n"
import { GITHUB_README_KEY } from "../../../utils/constants"

const logger = DeviceRuntimeCore.HmLogger.getLogger('smart-authenticator')
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()
const { messageBuilder } = getApp()._options.globalData
let messageWidget;

const sendMessage = () => {
  messageBuilder.request({
    method: 'GET',
    params: {
      whatToFetch: GITHUB_README_KEY
    }
  }).then(data => {
    createMessageWidget(data)
  })
}

const createMessageWidget = (message) => {
  hmUI.deleteWidget(messageWidget)
  messageWidget = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: 150,
    w: DEVICE_WIDTH,
    h: 800,
    color: 0xffffff,
    text_size: 20,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    text: message
  })
  logger.debug("finished!")
}

Page({
  build() {
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 80,
      w: DEVICE_WIDTH,
      h: 60,
      text: gettext("fetchGithubReadmeButton"),
      text_size: 20,
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