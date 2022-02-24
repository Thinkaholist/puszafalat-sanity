export default {
  title: 'Feedback',
  name: 'ticket',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],

  icon: () => '🎫',
  fields: [
    {
      title: 'Típus',
      name: 'type',
      type: 'string',
      description: 'Milyen kategóriájú a visszajelzés?',
      options: {
        list: [
          { title: '🐛 Hibabejelentés', value: '🐛 bug' },
          { title: '🗣 Visszajelzés', value: '🗣 feedback' },
          { title: '💡 Ötlet, új funkció', value: '💡 feature' },
          { title: '🔥 Ég a ház!', value: '🔥 fire' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Cím',
      name: 'title',
      type: 'string',
      description: 'Egy két szóban, hogy miről van szó',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Leírás',
      name: 'description',
      type: 'text',
      description: 'Hosszabb kifejtés',
    },
    {
      title: 'Megoldódott?',
      name: 'isSolved',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      isSolved: 'isSolved',
      created: '_createdAt',
    },
    prepare: ({ title, type, isSolved, created }) => {
      const typeEmojis = {
        bug: '🐛',
        feedback: '🗣',
        feature: '💡',
        fire: '🔥',
      };
      const typeText = type.split(' ')[1];

      return {
        title,
        subtitle: created,
        media: () => (isSolved ? '✅' : typeEmojis[typeText]),
      };
    },
  },
};
