import { gettext as getText } from 'i18n'
import { DEVICE_WIDTH } from '../../../utils/constants'

const PADDING = px(100)

export const OTP_BUTTON = {
  x: px(0),
  y: px(80),
  w: DEVICE_WIDTH,
  h: px(80),
  text: getText("otpButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
  click_func: () => { hmApp.gotoPage({ url: 'page/gts4-mini/otp/otp.page' }) }
}

export const ABOUT_BUTTON = {
  x: px(0),
  y: OTP_BUTTON.y + PADDING,
  w: DEVICE_WIDTH,
  h: px(80),
  text: getText("aboutButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
}

export const ABOUT_TEXT = {
  x: px(0),
  y: ABOUT_BUTTON.y + PADDING,
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.TOP,
  text_style: hmUI.text_style.WRAP,
}