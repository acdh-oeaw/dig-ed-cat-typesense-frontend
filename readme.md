# Catalogue of Digital Editions

This is a web application to browse digital editions and look up related institutions.

The app is a Nuxt.js rework of [dig-ed-cat-static](https://github.com/csae8092/dig-ed-cat-static),
which is a static version of [dig_ed_cat](https://github.com/acdh-oeaw/dig_ed_cat), which is a
rework of [digEds_cat](https://github.com/gfranzini/digEds_cat) by Greta Franzini, who is also
gathering and curating the catalogue data.

## Deployment

The latest live build is available at
[acdh-oeaw.github.io/dig-ed-cat-typesense-frontend](https://acdh-oeaw.github.io/dig-ed-cat-typesense-frontend),
commits to the main branch will automatically be deployed to this URL.

## How to run

Prerequisites:

- [Node.js v18](https://nodejs.org/en/download)

Set required environment variables in `.env.local`:

```bash
cp .env.example .env.local
```

Also, set environment variables required by github actions. use
["variables"](https://github.com/acdh-oeaw/template-app-nuxt/settings/variables/actions) for every
environment variable prefixed with `NUXT_PUBLIC_`, and
["secrets"](https://github.com/acdh-oeaw/template-app-nuxt/settings/secrets/actions) for all others.

Install dependencies:

```bash
pnpm install
```

Run a development server on [http://localhost:3000](http://localhost:3000):

```bash
pnpm run dev
```
