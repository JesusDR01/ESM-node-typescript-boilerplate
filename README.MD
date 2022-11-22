# TypeScript NodeJS Boilerplate *ESM*

To use this boilerplate, either clone it using `git clone`, download it as ZIP or use [GitHub Repository Import](https://github.com/new/import).

The following are configured:

- TypeScript
- Yarn
- Jest
- ESLINT
- Custom base path starting from `src/`. Example: `import { hi } from 'models/testfile'`
- Auto reload with `nodemon` and building with webpack
- Prettier


And the following scripts:

- `build` - compiles source code into JS, outputs to `dist`
- `test` - runs tests using Jest
- `start` - compiles the server, then uses `node` to run it from the compiled files
- `dev` - runs the server in dev mode, and automatically refreshes
- `lint` - runs ESLint

### Motivation

Using some libraries you could be forced to migrate your `tsconfig.json` from [commonJS to ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In example, [chalk](https://www.npmjs.com/package/chalk).

We can solve this problem in two ways:

1. Downgrade specific library to be compatible with commonJS (use require internally) 
2. Using `tsconfig-paths-webpack-plugin`
