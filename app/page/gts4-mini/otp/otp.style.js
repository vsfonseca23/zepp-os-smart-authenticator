import { gettext as getText } from 'i18n'

const deviceInfo = hmSetting.getDeviceInfo()

export const BACK_BUTTON = {
  x: px(0),
  y: px(80),
  w: deviceInfo.width,
  h: px(80),
  text: getText("backButton"),
  text_size: px(36),
  normal_color: 0x305EE4,
  press_color: 0x21419f,
  click_func: () => { hmApp.gotoPage({ url: "page/gts4-mini/home/index.page" }) }
}
