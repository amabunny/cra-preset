/// <reference types="react-scripts" />
/// <reference types="./types" />

declare module '*.module.less' {
  const classes: { [key: string]: string }
  export = classes
}

declare module 'less-vars-to-js'
