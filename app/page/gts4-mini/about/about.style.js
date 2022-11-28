import { gettext as getText } from 'i18n'

const deviceInfo = hmSetting.getDeviceInfo()
const PADDING = px(10)

export const ABOUT_TEXT = {
  x: px(0),
  y: px(80),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.TOP,
  text_style: hmUI.text_style.WRAP,
}

export const BACK_BUTTON = {
  x: px(0), 
  w: deviceInfo.width,
  h: px(80),
  text: getText("backButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
  click_func: () => { hmApp.gotoPage({ url: "page/gts4-mini/home/index.page" }) }
}
