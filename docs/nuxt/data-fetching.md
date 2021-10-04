---
prev:
    text: Folder Structure
    link: /nuxt/folder-structure
next:
    text: Modules
    link: /nuxt/modules
---
## Data Fetching

Functions run during server-side render on initial load and on client-side
thereafter.
Functions have access to Vuex, Axios, route parameters, and error handling.

`asyncData(context)`

- Used only on pages.
- On client-side, blocks route navigation until resolved.
- Returned data merged with component data.

`fetch(context)`

- Used on any component.
- Non-blocking.
- Access to component options via `this`.
