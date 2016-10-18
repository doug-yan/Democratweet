module.exports = {

  beforeAll: (done) => {
    // TODO: add asynchronous init code here, or delete the whole block
    done()
  },

  // Replies to the "ping" command
  ping: (data, {reply}) => {
    reply('pong', data)
  }

}
