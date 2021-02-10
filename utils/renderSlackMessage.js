module.exports = (url, locations) => {
  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: 'Vaccines are available! 💉 @channel',
          emoji: true,
        },
      },
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: 'Click here to schedule:',
          emoji: true,
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Schedule',
            emoji: true,
          },
          value: 'vaccine',
          url,
          action_id: 'button-action',
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        fields: locations,
      },
    ],
  };
};
