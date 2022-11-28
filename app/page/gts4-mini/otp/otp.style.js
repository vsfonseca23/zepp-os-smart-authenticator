import { gettext as getText } from 'i18n'
import { DEVICE_WIDTH } from '../../../utils/constants'

const PADDING = px(100)

export const OTP_TEXT = {
  x: px(0),
  y: px(80),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER,
  align_v: hmUI.align.CENTER,
  text_style: hmUI.text_style.WRAP,
}

export const OTP_BACK_BUTTON = {
  x: px(0),
  y: OTP_TEXT.y + PADDING,
  w: DEVICE_WIDTH,
  h: px(80),
  text: getText("backButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
  click_func: () => { hmApp.goBack() }
}