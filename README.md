# snowpack-plugin-content-replace

A plugin for snowpack that replaces strings in output files.

## Setup

```
npm install --save-dev snowpack-plugin-content-replace
```

```js
// snowpack.config.mjs
export default {
  plugins: [
    ['snowpack-plugin-content-replace',
      {
        'replacements': {
          'default.hbs': {
            // '{{asset "built/assets/css/screen.css"}}' will be replaced with '{{asset "css/screen.css"}}'
            '{{asset "built/assets/css/screen.css"}}': '{{asset "css/screen.css"}}',
            '{{asset "built/assets/js/index.js"}}' : '{{asset "built/assets/js/index.js"}}'
          }
        }
      }
    ],
  ],
};
```

## Plugin Options

| Name    | Type         | Description                                                                 |
| :------ | :----------: | :-------------------------------------------------------------------------: |
| replacements | `object` | Defines the replacements the plugin should do. Keys are the filename, values is an object with the form pattern -> replacement. See above for an example. |
