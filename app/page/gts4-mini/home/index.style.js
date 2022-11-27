import { gettext as getText } from 'i18n'
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

export const ABOUT_BUTTON = {
  x: px(0),
  y: px(80),
  w: DEVICE_WIDTH,
  h: px(80),
  text: getText("aboutButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
}

export const ABOUT_TEXT = {
  x: px(0),
  y: px(150),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.TOP,
  text_style: hmUI.text_style.WRAP,
}