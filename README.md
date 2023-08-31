# Catalogue of Digital Editions 

Dig-ed-cat-typesense-frontend is a web application to browse digital editions and look up related institutions.


This is a nuxt rework of 
[dig-ed-cat-static](https://github.com/csae8092/dig-ed-cat-static), which is a static version of
[dig_ed_cat](https://github.com/acdh-oeaw/dig_ed_cat), which is a rework of
[digEds_cat](https://github.com/gfranzini/digEds_cat) by Greta Franzini, who is also gathering and curating the catalogue data.

## Live build

The latest live build is available at [acdh-oeaw.github.io/dig-ed-cat-typesense-frontend](https://acdh-oeaw.github.io/dig-ed-cat-typesense-frontend), commits to the main branch will automatically be deployed to this URL.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
or
npm run serve
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Typesense configuration schema

The Typesense index used by this application is configured [here](https://github.com/csae8092/dig-ed-cat-indexer).
