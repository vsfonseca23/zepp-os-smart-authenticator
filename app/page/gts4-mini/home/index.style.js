import { gettext as getText } from 'i18n'

const deviceInfo = hmSetting.getDeviceInfo()
const PADDING = px(10)

export const OTP_BUTTON = {
  x: px(0),
  y: px(80),
  w: deviceInfo.width,
  h: px(80),
  text: getText("otpButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
  click_func: () => { hmApp.gotoPage({ url: "page/gts4-mini/otp/otp.page" }) }
}

export const BLUETOOTH_TEST_BUTTON = {
  x: px(0),
  y: OTP_BUTTON.y + OTP_BUTTON.h + PADDING,
  w: deviceInfo.width,
  h: px(80),
  text: getText("bluetoothButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f
}

export const ABOUT_BUTTON = {
  x: px(0),
  y: BLUETOOTH_TEST_BUTTON.y + BLUETOOTH_TEST_BUTTON.h + PADDING,
  w: deviceInfo.width,
  h: px(80),
  text: getText("aboutButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
  click_func: () => { hmApp.gotoPage({ url: "page/gts4-mini/about/about.page" }) }
}