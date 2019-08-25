# Node API Design

## Pointers

### Added Script ( i.e devstart )

Babel wasn't transpiling the sub folder code and while running the nodemon i was facing error about import and `{`. I found an article and installed @babel-node plugin and changed the nodemon script.

```javascript
"devstart": "nodemon --exec babel-node src/index.js"
```

### Running MangoDb

Test would fail when mangodb wasn't running, followed the [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition) from here and started the mangodb on 127.0.0.1:27017 before running test.

```javascript
brew services start mongodb-community@4.2 // first time after installation
mongo // this should start next consecutive times
```
