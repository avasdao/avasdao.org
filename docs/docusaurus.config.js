// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: `Ava's DAO`,
    tagline: 'Best Crypto Experience (CX) For Your Money®',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://avasdao.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/avasdao/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        image: 'img/poster.jpg',    // NOTE: This is a Social Card image.
        navbar: {
            title: `Ava's DAO Docs`,
            logo: {
                alt: `Ava's DAO Logo`,
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'welcome',
                    position: 'left',
                    label: 'Welcome! Hoş geldin! 欢迎！',
                },
                {
                    href: 'https://avasdao.org/roadmap',
                    label: 'Roadmap',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Welcome! Hoş geldin! 欢迎！',
                            to: '/welcome',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/AvasDAO',
                        },
                        {
                            label: 'Discord (Nexa Ecosystem)',
                            href: 'https://discord.com/channels/993441205474041886/1150793798671147018',
                        },
                        {
                            label: 'Telegram',
                            href: 'https://t.me/Nexa_Socials',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/avasdao/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Ava's DAO. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
}

module.exports = config
