# Texas Vaccine Updates


If you would like to contribute a crawler just follow the folder structure and add your file to `crawlers/`

### Install
```bash
npm install
```

### Run
```bash
npm start
```

### Test
```bash
npm test
```

Here is a `.env` file that will get you up and running. Just save it as `.env` in this project.
```
NODE_ENV=development
PORT=666
KEEP_ALIVE_URL=https://texas-vaccines.herokuapp.com/alive
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
HEB_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
ALBERTSONS_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
ALAMO_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
BELL_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
UNIVERSITY_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
FALLSHOSPITAL_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
CORYELL_WEBHOOK_URL=https://hooks.slack.com/services/BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH
```
Join the `#__test_channel__` in Slack to get working webhook URLs.
