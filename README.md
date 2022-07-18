# Chrome extension v3 Template

This is a base template for chrome extensions.

It uses manifest v3 now that v2 is going to be deprecated by 2023 

## Quickstart

1. `npm install` to install all dependencies

1. Perform your changes under `src` or `public` folders

1. run `npm run build`

1. Install / reload extension on chrome under `chrome://extensions` (make sure you install from the `public` folder)

## Main features

- **Content Script**: Content script is defined by default

- **Popup**: Small popup window opens when you click the extension icon

## Packages:

- **Typescript**: Typescript is used in favor of javascript

- **Laravel-mix**: Laravel-mix is used in favor of webpacker in order to transform
typescript, sass, and other dependencies into highly-optimized code for the web

- **\*-loader**: Loaders for laravel-mix to work

