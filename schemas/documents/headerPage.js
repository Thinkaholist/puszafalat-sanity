export default {
  name: 'headerPage',
  title: 'Header',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'recipesMenuItemText',
      title: 'Recipes MenuItem Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'recipesMenuItemText.hu',
    },
  },
};
