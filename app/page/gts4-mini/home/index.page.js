import { TEXT_STYLE } from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')

Page({
  build() {
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...HELLO,
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})