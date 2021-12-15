export default {
  title: 'Puszafalat',
  name: 'puszafalat',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'URL identifier (slug)',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title.hu',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Rank (# Ordering)',
      name: 'rank',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Origin',
      name: 'origin',
      type: 'localeString',
    },
    {
      title: 'Story',
      name: 'story',
      type: 'localeText',
    },
    {
      title: 'Recipe',
      name: 'recipe',
      type: 'reference',
      to: [{ type: 'recipe' }],
    },
    {
      title: 'Song',
      name: 'song',
      type: 'reference',
      to: [{ type: 'song' }],
    },
    {
      title: 'Illustration',
      name: 'illustration',
      type: 'imageWithInfo',
    },
  ],
  preview: {
    select: {
      title: 'title.hu',
      media: 'illustration.image',
    },
  },
};
