export default {
  title: 'Puszafalat',
  name: 'puszafalat',
  type: 'document',
  icon: () => '🌽',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeStringRequired',
      validation: (Rule) => Rule.required(),
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
      type: 'localeStringRequired',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Story',
      name: 'story',
      type: 'localeText',
    },
    {
      title: 'Illustration',
      name: 'illustration',
      type: 'imageWithInfo',
    },
    {
      title: 'Recipe name',
      name: 'recipeName',
      type: 'localeStringRequired',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Recipe note',
      name: 'recipeNote',
      type: 'localeString',
      description: 'Pl. Laci bácsi kedvence',
    },
    {
      title: 'Simple Explanation',
      name: 'simpleExplanation',
      type: 'localeString',
      description: 'What is this food with simple words?',
    },
    {
      title: 'Food Type',
      name: 'foodType',
      type: 'reference',
      to: [{ type: 'courseType' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Making',
      name: 'making',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Song title',
      name: 'songTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Song lyrics',
      name: 'songLyrics',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'BandCamp Track Embed Code',
      name: 'bandcampTrack',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.hu',
      subtitle: 'rank',
      media: 'illustration.image',
    },
  },
};
