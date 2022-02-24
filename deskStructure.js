import S from '@sanity/desk-tool/structure-builder';
// import React from 'react';

export default () =>
  S.list()
    .title('Contents')
    .items([
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'homePage',
            'recipesPage',
            'puszafalatPage',
            'footerPage',
            'headerPage',
            'siteSettings',
          ].includes(item.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .icon(() => '🏠')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Recipes Page')
        .icon(() => '🍽')
        .child(
          S.document().schemaType('recipesPage').documentId('recipesPage')
        ),
      S.listItem()
        .title('Puszafalat Page')
        .icon(() => '⭐️')
        .child(
          S.document().schemaType('puszafalatPage').documentId('puszafalatPage')
        ),
      S.listItem()
        .title('Header')
        .icon(() => '🎩')
        .child(S.document().schemaType('headerPage').documentId('headerPage')),
      S.listItem()
        .title('Footer')
        .icon(() => '👣')
        .child(S.document().schemaType('footerPage').documentId('footerPage')),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
