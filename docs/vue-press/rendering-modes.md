## Rendering modes

[Vue SSR Guide](https://ssr.vuejs.org/)

- By default, Vue components produce and manipulate DOM in the browser as output.
- However, it is also possible to render the same components into HTML strings on the server
send them directly to the browser, and hydrate the static markup into a fully interactive app
on the client.

### Why SSR?
- Better SEO. Search engine crawlers historically do not like SPAs, the JS needs to be
written carefully
- Faster time-to-content, especially for slower devices and internet, because
server-rendered markup is displayed immediately, it doesn't need to wait
for JS to finish loading for anything to display

### Why maybe not SSR?
- Browser vs server-specific constraints need to be considered
- More involved with build setup and deployment
- More server-side load, since rendering is required as opposed to just
serving the static files

[Full Nuxt lifecycle](https://nuxtjs.org/docs/concepts/nuxt-lifecycle)