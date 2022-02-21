const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'A generált weboldal állapota a Netlify-on',
        description:
          'A weboldalad azért tud olyan gyors lenni, mert előre elkészül a szerveren (ún. build folyamat), statikus. Ha kész vagy a változtatásokkal, a "Deploy" gombbal szükséges egy új "oldalépítést" (build) generálnod. (Elég egyszer megnyomni a gombot). A Netlify badge sárgára fog változni (Building). Pár perc az egész! Ha a Netlify gomb ismét zöld lesz (Success), az oldalépítés sikeres volt, és a változtatásokat látnod kell a weboldaladon. Ha esetleg az építés sikertelen volt, a gomb pirosra változik(Failed), ebben az esetben semmilyen változás nem történik a weboldaladon, a régi verzió ugyanúgy él tovább. Szólj, és megnézzük, hol a hiba. A "view" link a weboldalra visz, az "admin"-ra kattintva pedig a Netlify build folyamatot lehet nyomon követni.',
        sites: [
          {
            title: isDevelopment ? 'DEV Weboldal' : 'Éles Weboldal',
            apiId: isDevelopment
              ? 'acc5798e-23f0-42e3-b773-6d2a8f886fd2'
              : 'd3fc8059-09eb-4a5f-9359-5ec2a24a8935',
            buildHookId: isDevelopment
              ? '61f6817ec78544f819b42f0f'
              : '61f6845f00f5259c3b5c435d',
            name: isDevelopment ? 'puszafalat-dev' : 'puszafalat',
          },
          // {
          //   title: 'DEV Weboldal',
          //   apiId: 'acc5798e-23f0-42e3-b773-6d2a8f886fd2',
          //   buildHookId: '61f6817ec78544f819b42f0f',
          //   name: 'puszafalat-dev',
          // },
        ],
      },
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'Sanity repo',
            value: 'https://github.com/Thinkaholist/puszafalat-sanity',
            category: 'Code',
          },
          {
            title: 'Gatsby repo',
            value: 'https://github.com/Thinkaholist/puszafalat-frontend',
            category: 'Code',
          },
          {
            title: 'Frontend Deploy',
            value: 'https://puszafalat.eu',
            category: 'apps',
          },
        ],
      },
      layout: {
        width: 'medium',
        height: 'auto',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
    {
      name: 'cats',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
  ],
};
