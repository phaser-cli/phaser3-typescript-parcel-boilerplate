# Phaser 3 + TypeScript + Parcel + Boilerplate

This repository provides a simple setup for getting started with Phaser 3 and
TypeScript, using Parcel to bundle your application.

## Getting Started

### Via Phaser CLI

You can easily bootstrap a new project via Phaser CLI. Simply run the command
below and chosoe "Phaser 3 + TypeScript + Parcel".

```sh
npx @phaser-cli/cli <your-project-name>
```

### Manually

Clone the repository into your workspace and install the dependencies.

```sh
# Clone repo
git clone https://github.com/phaser-cli/phaser3-typescript-parcel-boilerplate.git <your-project-name>
cd <your-project-name>

# Install dependencies
yarn install
# or
npm install
```

## Running

You can start running your game by using the following command. The application
will reload automatically as you make changes.

```sh
yarn start
```

## Building for Production

The following command builds your game into a collection of static files in the
`dist` directory that you can easily host as a production version of your
application.

```sh
yarn build
```

## Acknowledgements

This project is based on both the original Phaser CLI boilerplate and
digitsensitive's [Parcel boilerplate][0] for Phaser 3.

[0]:
  https://github.com/digitsensitive/phaser3-typescript/tree/master/src/boilerplates/parcel-boilerplate
