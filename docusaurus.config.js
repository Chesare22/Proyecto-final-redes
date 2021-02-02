module.exports = {
  title: 'Proyecto final RySC',
  tagline: 'Inner Circle',
  customFields:{
    teamHeader: "Miembros del equipo",
    team: [
    "Diego Avila Morales",
    "Cesar Alejandro González Ortega",
    "Johan Caceres Quintal",
    "Carlos Pool Quintal",
    "Manuel Martin Rico"
  ]
  },
  url: 'https://chesare22.github.io',
  baseUrl: '/Proyecto-final-redes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Chesare22', // Usually your GitHub org/user name.
  projectName: 'Proyecto-final-redes', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Proyecto final RySC',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'QoS en una red de computadoras',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Inner Circle. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
