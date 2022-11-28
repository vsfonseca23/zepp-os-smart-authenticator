import { BLUETOOTH_TEST_COMMAND, } from "../../../utils/constants"
import { ABOUT_BUTTON, BLUETOOTH_TEST_BUTTON, OTP_BUTTON } from "./index.style"
import { gettext as getText } from 'i18n'

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
      ...BLUETOOTH_TEST_BUTTON,
      click_func: () => { this.bluetoothTest() }
    })
    hmUI.createWidget(hmUI.widget.BUTTON, { ...ABOUT_BUTTON })
  },
  onDestroy() {
    logger.debug("called Page.onDestroy")
  },
  bluetoothTest() {
    logger.debug("called Page.bluetoothTest")

    messageBuilder
      .request({
        command: BLUETOOTH_TEST_COMMAND
      })
      .then((data) => {
        logger.debug("received data", data)
        hmUI.showToast({ text: data })
      })
  }
})