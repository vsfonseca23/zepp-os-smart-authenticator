import { MessageBuilder } from '../shared/message'
//import { authenticator } from '../utils';
import {
  GITHUB_GET_README,
  GITHUB_README_URL,
  OTP_START_TOKEN_GENERATION,
  OTP_STOP_TOKEN_GENERATION,
} from '../utils/constants'

const messageBuilder = new MessageBuilder()
const secret = 'ASDFASDFASDFASDF';

AppSideService({
  state: {
    otpLoop: false
  },
  onInit() {
    console.log("called AppSideService.onInit")
    messageBuilder.listen(() => { })
    messageBuilder.on('request', (ctx) => {
      console.log("called messageBuilder.on.request")

      const payload = messageBuilder.buf2Json(ctx.request.payload)
      const { method } = payload

      if (method === GITHUB_GET_README) {
        fetch(GITHUB_README_URL)
          .then((response) => ctx.response({ data: response.body }))
      } else if (method === OTP_START_TOKEN_GENERATION) {
        // this.state.otpLoop = true
        // this.resetOTPLoop()
        ctx.response({ data: true })
      } else if (method === OTP_STOP_TOKEN_GENERATION) {
        // this.state.otpLoop = false
        // this.resetOTPLoop()
        ctx.response({ data: false })
      } else
        ctx.response({ data: undefined })

    })
  },
  onRun() { console.log("called AppSideService.onRun") },
  onDestroy() { console.log("called AppSideService.onDestroy") },
  resetOTPLoop() {
    console.log("reseting OTP loop:", this.state.otpLoop)
    messageBuilder.call({ data: token })
    // while (this.state.otpLoop) {
    //   setTimeout(() => {
    //     //let token = authenticator.generate(secret)        
    //     let token = Math.random()
    //     console.log("sending token", token)
    //     messageBuilder.call({ data: token })
    //   }, 1000);
    // }
  }
})