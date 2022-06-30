
# Search & Save

### Overview
Search & Save is a basic property listing UI that displays a list of results and a list of saved properties.

Basic functionality allows the user to add a property from the results list into the saved list, and also remove a property from the saved list.

A property can't be added more than once to the saved list, and there is an empty state for both lists.

A few things to keep in mind:

1. There is currently no search function that displays the results

2. This is purely a frontend app - all data is mock data, served via [JSON Server](https://github.com/typicode/json-server)

***

### Requirements
* [Node.js](https://nodejs.org/) version 8.9 or above (v10+ recommended)

***

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

***

### Installation instructions

1.  Clone the repository

2.  Install dependencies
```sh

npm install

```
3. Start the server (this will use port 4000, but can be changed to use an alternative port by adjusting the p flag if preferred)
```sh

json-server -p 4000 db.json

```
4. In another terminal, serve with hot reload
```sh

npm run dev

```
5. Search & Save will be available at [http://localhost:3000](http://localhost:9009/)

***

### Useful commands

#### Compile and hot-reload 
```sh

npm run dev

```
#### Run unit tests with [Vitest](https://vitest.dev/)
```sh

npm run test:unit

```
#### Lint with [ESLint](https://eslint.org/)

```sh

npm run lint

```