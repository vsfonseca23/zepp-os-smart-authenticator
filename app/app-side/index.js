import { MessageBuilder } from '../shared/message'
import { GITHUB_README_KEY, GITHUB_README_URL } from '../utils/constants'

const messageBuilder = new MessageBuilder()

AppSideService({
  onInit() {
    messageBuilder.listen(() => { })

    messageBuilder.on('request', (ctx) => {
      const payload = messageBuilder.buf2Json(ctx.request.payload)
      const { method, params } = payload
      if (method === 'GET') {
        if (params.whatToFetch === GITHUB_README_KEY) {
          fetch(GITHUB_README_URL)
            .then((response) => {
              ctx.response({
                data: response.body
              })
            })
        } else {
          ctx.response({
            data: undefined
          })
        }
      } else {
        ctx.response({
          data: undefined
        })
      }
    })
  },
})