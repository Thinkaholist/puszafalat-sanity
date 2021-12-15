export default {
  title: 'Recipe',
  name: 'recipe',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Simple Explanation',
      name: 'simpleExplanation',
      type: 'localeString',
      description: 'What is this food with simple words?',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
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
      title: 'Image',
      name: 'image',
      type: 'imageWithInfo',
    },
  ],
  preview: {
    select: {
      title: 'name.hu',
      media: 'image.image',
    },
  },
};
