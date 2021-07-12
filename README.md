# Nuxt Skeleton

A Nuxt setup for web development with Windi CSS.

For more on Nuxt.js, check out https://nuxtjs.org/ to get started. 

For more on Windi CSS, check out https://windicss.org/guide/ to get started. 

# Installing Dependencies

1. Navigate to the project root and open a terminal from there, for example:

    ```
    /var/www/project-path/
    ```

2. Install with NPM:

    ```bash
    $ npm install
    ```

    For more on Composer, check out https://docs.npmjs.com/ to get started. 

# Developing for SSR or Static Sites

1. After installing the dependencies, compile with the following run script:

    ```bash
    $ npm run dev
    ```

2. Access the dev pages at http://localhost:3000/ as follows:

    * http://localhost:3000/ for the Home page

    * http://localhost:3000/about/ for the About page

    Then start developing the rest of pages inside `/src/pages/` following these two preceding examples.

# Building for SSR

1. After completing the development, compile with the following run script:

    ```bash
    $ npm run build
    ```

2. Access the application at the `/dist/` folder.

# Handling Static & Processed Assets

1. Use the `/assets/images/` folder for images that you want to be processed. Then in your HTML tags, use `~/assets/images/` to request your images, for example:
    
    ```
    <img src="~/assets/images/...-unsplash.jpg">
    ```

2. Use the `/static/` folder for images that you do NOT want to be processed. Then in your HTML tags, use `/` to request your images, for example:

    ```
    <img src="/...-unsplash.jpg">
    ```

# Handling Dynamic Static and Processed Assets

1. Use the `/assets/images/` folder for images that you want to be processed. Then in your `<script>` and `<template>` blocks, use one of the following global methods to request your images, for example:

    1. Using the `$getAsset` method (plugin):
    
        ```
        // script
        async asyncData ({ route, $getAsset }) {
          let { data } = await axios.get(route.path)
          return {
            thumbnail: $getAsset(data.thumbnail)
          }
        }

        // template
        <img :src="thumbnail">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block:

        ```
        <img :src="$getAsset(data.thumbnail)" v-if="data.thumbnail">
        ```

    2. Using the `getAsset` method (module):
    
        ```
        // script
        import { getAsset } from '@/modules/utils'

        async asyncData ({ route }) {
          let { data } = await axios.get(route.path)
          return {
            thumbnail: getAsset(data.thumbnail)
          }
        }

        // template
        <img :src="thumbnail">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block - only when this method is installed in the local `methods` property:

        ```
        import { getAsset } from '@/modules/utils'
        ...
        methods: {
          getAsset (file) {
            return getAsset(file)
          }
        },

        <img :src="getAsset(data.thumbnail)">
        ```

        It is recommended to import global methods explicitly where they are required only rather than making them globally everywhere.

2. Use the `/static/` folder for images that you do NOT want to be processed. Then in your `<script>` and `<template>` blocks, use one of the following global methods to request your images, for example:


    1. Using the `$getStatic` method (plugin):
    
        ```
        // script
        async asyncData ({ route, $getStatic }) {
          let { data } = await axios.get(route.path)

          return {
            static: getStatic(data.static),
          }
        }

        // template
        <img :src="static">
        ```

    2. Using the `getStatic` method (module):
    
        ```
        // script
        import { getStatic} from '@/modules/utils'

        async created () {
          let { data } = await axios.get(route.path)

          return {
            static: getStatic(data.static),
          }
        }

        // template
        <img :src="static">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block - only when this method is installed in the local `methods` property:

        ```
        import { getStatic } from '@/modules/utils'
        ...
        methods: {
          getStatic (file) {
            return getStatic(file)
          }
        },

        <img :src="getStatic(data.static)">
        ```

        It is recommended to import global methods explicitly where they are required only rather than making them globally everywhere.
