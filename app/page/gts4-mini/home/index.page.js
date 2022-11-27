import { WELCOME } from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('smart-authenticator')

Page({
  build() {
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...WELCOME,
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})