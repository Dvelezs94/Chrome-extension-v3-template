const mix = require("laravel-mix")

// Typescript
mix.ts('src/js/content.ts', 'public/build/js')
mix.ts('src/js/popup.ts', 'public/build/js')

// sass
mix.sass('src/styles/base.sass', 'public/build/styles')

// HTML
mix.copy('src/html/popup.html', 'public/build/html')