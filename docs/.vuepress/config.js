module.exports = {
    lang: 'en-US',
    title: 'Vue Ecosystem Presentation',
    description: 'A look at some projects which enhance the Vue experience',

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'TobiasBester/vue-ecosystem-presentation',
        editLink: false,
        contributors: false,
        lastUpdated: false,
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
                    },
                    {
                        text: 'Project Initialization',
                        link: '/nuxt/project-init',
                        children: []
                    },
                    {
                        text: 'Folder Structure',
                        link: '/nuxt/folder-structure',
                        children: []
                    },
                    {
                        text: 'Data Fetching',
                        link: '/nuxt/data-fetching',
                        children: []
                    },
                    {
                        text: 'Modules',
                        link: '/nuxt/modules',
                        children: []
                    },
                    {
                        text: 'Build and Deploy',
                        link: '/nuxt/build-and-deploy',
                        children: []
                    },
                    {
                        text: 'Next for Nuxt',
                        link: '/nuxt/next-for-nuxt',
                        children: []
                    }
                ]
            },
            {
                text: 'Vuetify Alternatives',
                link: '/vuetify-alternatives/',
                children: [
                    {
                        text: 'What is Vuetify?',
                        link: '/vuetify-alternatives/',
                        children: []
                    },
                    {
                        text: 'Viability Check',
                        link: '/vuetify-alternatives/viability-check',
                        children: []
                    },
                    {
                        text: 'Search Results',
                        link: '/vuetify-alternatives/search-results',
                        children: []
                    }
                ]
            },
            {
                text: 'Vite',
                link: '/vite/',
                children: [
                    {
                        text: 'Vite',
                        link: '/vite/',
                        children: []
                    },
                    {
                        text: 'Features',
                        link: '/vite/features',
                        children: []
                    }
                ]
            },
            {
                text: 'Honorable Mentions',
                link: '/more-stuff',
                children: []
            }
        ]
    },
    plugins: [
        '@vuepress/search'
    ]
}