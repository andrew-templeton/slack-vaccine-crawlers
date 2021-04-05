
const fetch = require('node-fetch');
const renderSlackMessage = require('../utils/renderSlackMessage');
const walmartURL = 'https://www.vaccinespotter.org/api/v0/states/TX.json';
const scheduleURL = 'https://www.walmart.com/pharmacy/clinical-services/immunization/scheduled?imzType=covid';


const PostAsBot = require('../utils/postAsBot')
const { WALMART_CHANNEL:channel } = process.env
const notify = async message => await PostAsBot({ ...message, channel })



let lastRunSlotCount = [];

const checkWalmart = async () => {
  console.log('Checking Walmart for vaccines...');
  try {
    const response = await fetch(walmartURL);
    const data = await response.json();


    const walmartStores = data.features.filter((location) => {
      const {provider_brand, appointments} = location.properties;
      return provider_brand === 'walmart' && appointments && appointments.length > 3;
    });

    if (lastRunSlotCount.length === 0) {
      lastRunSlotCount = walmartStores;
    }

    const slackFields = [];

    walmartStores.forEach((store) => {
      const {id, city, name, appointments, postal_code} = store.properties;
      const lastFound = lastRunSlotCount.find((locale) => locale.properties.id === id);
      const lastRunLength = lastFound && lastFound.properties && lastFound.properties.appointments && lastFound.properties.appointments && lastFound.properties.appointments.length || 0;

      if (appointments.length > (lastRunLength + 3)) {
        slackFields.push({
          type: 'mrkdwn',
          text: `<${scheduleURL}|${name}>:  *${appointments.length}* \n<https://google.com/maps/?q=${postal_code}|${city}, ${postal_code}>`,
        });
      }
    });

    if (slackFields.length > 10) {
      slackFields.length = 10; // Slack limits the number of fields to 10
    }

    if (slackFields.length > 0) {
      const slackMessage = renderSlackMessage(scheduleURL, slackFields);
      await notify(slackMessage);
    }

    lastRunSlotCount = walmartStores;
  } catch (e) {
    console.error(e);
  }
};

module.exports = checkWalmart;
