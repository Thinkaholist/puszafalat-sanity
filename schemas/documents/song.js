export default {
  title: 'Song',
  name: 'song',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Lyrics',
      name: 'lyrics',
      type: 'localeText',
    },
    {
      title: 'BandCamp Track Embed Code',
      name: 'bandcampTrack',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title.hu',
    },
  },
};
