module.exports = {
    lang: 'en-US',
    title: 'Vue Ecosystem Presentation',
    description: 'A look at some projects which enhance the Vue experience',

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'TobiasBester/vue-ecosystem-presentation',
        editLink: false,
        sidebar: [
            {
                text: 'VuePress',
                link: '/vue-press/',
                children: [
                    {
                        text: 'What is it?',
                        link: '/vue-press/',
                        children: []
                    },
                    {
                        text: 'Features',
                        link: '/vue-press/features',
                        children: []
                    }
                ]
            },
            {
                text: 'Nuxt',
                link: '/nuxt/',
                children: [
                    {
                        text: 'What is it?',
                        link: '/nuxt/',
                        children: []
                    },
                    {
                        text: 'Problems with Vue',
                        link: '/nuxt/vue-problems',
                        children: []
                    },
                    {
                        text: 'Rendering modes',
                        link: '/nuxt/rendering-modes',
                        children: []
                    }
                ]
            }
        ]
    },
    plugins: [
        '@vuepress/search'
    ]
}