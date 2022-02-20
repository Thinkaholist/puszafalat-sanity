export default {
  title: 'URL with display',
  type: 'object',
  name: 'urlWithDisplay',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      name: 'displayText',
      type: 'string',
      title: 'Display text',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
