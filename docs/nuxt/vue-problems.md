---
prev:
    text: What is it?
    link: /nuxt/
next:
    text: Rendering modes
    link: /nuxt/rendering-modes
---
## Problems with Vue
From [VueMastery](https://www.vuemastery.com/) Nuxt course.

1. Building from scratch is difficult and tiring
2. Folder structure is not standardized
3. Routing config is monotonous
4. Configuration is not standardized
5. Not SEO friendly
6. Slow initial load
7. Difficult to change behavior of framework

- Do number 6 first, talk about Universal mode, include "diagram"
- Then do number 1, talk about the nuxt-create-app options and the generated files
  - Demo some of the folder types, e.g. layouts, middleware, components
  - Comes with Vuex, vue-router, axios
- Do number 2 and demo the routing. Show the generated routes.js
  - Routes can still be configured via the [nuxt.config.js](https://nuxtjs.org/docs/configuration-glossary/configuration-router/)
- From previous step, move onto nuxt.config.js
  - Where you can change defaults, configure plugins and modules
  - Talk about `store` folder and automatic Vuex module generation and namespacing
  - Discuss asyncData() and fetch() and how it has access to Vuex context, route params, and error
- Elaborate briefly on SEO improvements and show meta/head definition
- Talk about 7. -> modules.
  - Is where specific modules can be updated or created
  - Modules can add exact functionality you need without you needing to
  implement it
    - Google Analytics, CMS, Firebase, Vuetify
    - But you probably need the specific Nuxt plugin to get it to work
      - TS, ESLint, i18n, dotenv
  - [Nuxt Modules](https://nuxtjs.org/modules)
- Talk about build options
  - Universal mode, statically generated
  - [NuxtJS docs](https://nuxtjs.org/integrations/) have details on
  various platform-specific deployment options
  - Talk a bit about Vercel and Surge as options I've used