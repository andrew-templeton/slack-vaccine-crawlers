
const SLACK_API = 'https://slack.com/api/chat.postMessage'
const Axios = require('Axios')
const SlackInboundSecret = require('./src/slackInboundSecret')

const authConfig = async () => ({ headers: { Authorization: `Bearer ${(await SlackInboundSecret()).en}` } })

const postAsBot = async ({ channel, blocks }) => (await Axios.post(SLACK_API, { channel, blocks }, await authConfig())).data

module.exports = postAsBot
