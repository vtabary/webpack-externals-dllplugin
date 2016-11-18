# Webpack with externals and DllPlugin

A project to show the difference between a bundle built as a classic umd bundle and a bundle built as a dll.

## How to use

Install the dependencies :

```
$ npm install
```

Bundle both versions of the bundle :

```
$ npm run build
```

To bundle the classic umd version only :

```
$ npm run build:umd
```

To bundle the dllplugin version only :

```
$ npm run build:dllplugin
```

## Check the differences

```
$ npm run diff
```

Or you can view what I get in the file ```dist/bundles.diff```.

## Try it in a browser

Access to the file ```example/index.html``` through a webserver.

It tries to import the bundle through [SystemJs](https://github.com/systemjs/systemjs).

If the dllplugin bundle was correct, you should answer to 2 alerts, but, for the second, you get an error in the console.
