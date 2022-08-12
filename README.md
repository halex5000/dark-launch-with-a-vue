# A Dark Launch with a Vue



If you're building a modern web application there is a huge field of candidates for your runtime, your build, and your hosting.

Vue can be an excellent choice for a number of reasons.

1. Popularity - the more mainstream a tool, the easier it is to recruit, retain, and find support.

   [https://next.vuetifyjs.com/en/introduction/why-vuetify/]:

   > Since its initial release in 2014, [Vue.js](https://vuejs.org/) has grown to be one of the most popular JavaScript frameworks in the world. One of the reasons for this popularity is the wide use of components which enable developers to create concise modules to be used and re-used throughout their application. UI libraries are collections of these modules that implement a specific style guideline and provide the necessary tools to build expansive web applications.

2. Speed - Fast is first.

   [https://vuejs.org/about/faq.html#is-vue-fast]:

   > In stress-testing scenarios, Vue out-performs React and Angular by a decent margin in the [js-framework-benchmark](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts-results/table.html). It also goes neck-and-neck against some of the fastest production-level non-Virtual-DOM frameworks in the benchmark.

3. Scalability & Composability - the best things grow bigger over time, you will need to scale.

   [https://vuejs.org/about/faq.html#does-vue-scale]:

   > - [Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html) provide a modularized development model that allows different parts of an application to be developed in isolation.
   > - [Composition API](https://vuejs.org/guide/reusability/composables.html) provides first-class TypeScript integration and enables clean patterns for organizing, extracting and reusing complex logic.
   > - [Comprehensive tooling support](https://vuejs.org/guide/scaling-up/tooling.html) ensures a smooth development experience as the application grows.

Additionally, finding ways to focus more of your energy on what you **need** to build and less energy on non-differentiating things is more important than ever as the appetite for software solutions to so many problems grow.

As we ship faster, we haven't lost the need to ship safe, and as the next evolution in software delivery, feature flagging is the missing link in enabling the fastest, safest, and best way to learn from your delivery and your users.

In this post, we're going to lay out how to launch a new Vue app, mixin just the right amount of tools that make life so much easier, and wire in feature flagging with LaunchDarkly so we can ship changes faster and safer than ever.



## The setup

This is a highly opinionated toolset because highly opinionated toolsets tend to offer the most acceleration when you stay within their bounds, so this is exactly what we're going to do!

### 1. It's got to be Veautiful

UI Component libraries are a great way to turbo charge your delivery, keep things beautiful, and reduce your decision fatigue.

Whether you have a great eye for design or you prefer to offload that work, a UI component library is a super foundation to build from as they're often founded in a design system which has guidance on how to consistenly communicate an experience to your users.

At the time of this writing, the list of UI component libraries supporting Vue 3 is not long, but there are some candidates. Ideally, we want something that integrates easily with our builder and bundler, something that offers lots of helpers, and something that mostly gets out of our way and just makes things beautiful. 

Enter [Veautify](https://next.vuetifyjs.com/en/).

> [https://next.vuetifyjs.com/en/introduction/why-vuetify/#what-is-vuetify3f]:
>
> Vuetify is a complete UI framework built on top of Vue.js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences. Vuetify is designed from the ground up to be easy to learn and rewarding to master with almost a hundred carefully crafted components from the [Material Design specification](https://material.io/)



### 2. It's got to be Velocious

Building and Bundling web applications is complicated. You're trying to achieve the smallest bundle size so your app loads quickly for your user and you'd love to not have to worry so much about bundling, it would be nice if you didn't have to master bundling and building just to get your app out the door.

[Webpack](https://webpack.js.org/) has been around for a long time, is incredibly popular, offers an amazing amount of customization, and loads of examples and info out there. It can be a bear to get right and there is a lot to learn. [NPM](https://www.npmjs.com/package/webpack) boasts an impressive 24 million downloads a week. A challenge many face with Webpack is the complexity of configuration and slow build speed, which hampers development time.

[Parcel](https://parceljs.org/) is another entry in the bundling space which boasts `zero-config` and 10-20X faster build times than Javascript based tooling as it's written in Rust, but is far less popular based on [NPM stats](https://www.npmjs.com/package/parcel) with about 100k weekly downloads.

[Vite](https://vitejs.dev/) seeks to solve the pain of slow building and bundling at development time and be a first-class choice in bundling and building and it delivers. While it's much younger than it's counterparts, it appears to be gaining massive popularity, with about [1.5 million weekly downloads](https://www.npmjs.com/package/vite), and for good reason. It is lightning fast and ridiculously easy to use.

For this project we'll use Vite because [it easily integrates with Vue and Vuetify](https://next.vuetifyjs.com/en/getting-started/installation/#vite), plus it's as fast as greased lightning.

### 3. It's got to be (V)easy

While we can run locally, running locally always feels a little like playtime because you run into the "it works on my machine" problem. It's hard to show others because your friends, family, and co-worker can't get to your http://localhost:8080 link for some reason.

Netlify makes an astoundingly easy platform on which to run, but you have to be comfortable with the idea of a pipeline and there is some delay in the feedback loop and some complication in getting it all right. For this endeavor, we'll skip Netlify and pick another way to run that reduces the opportunities for hiccups in our delivery.

Replit is an amazing option for running an app you can share with others, develop on, and rapidly iterate, live. 
In this project, we're going to include the necessary files to make a Repl and an ultra quick run through of how to get live in Replit with this project so you can share this with friends!



## LFG!

### Prerequisites

- Node.js 16+
- NPM 7+
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)
- A little comfort with the command line

#### Three simple steps:

1. Create the app
   ```shell
   # https://next.vuetifyjs.com/en/getting-started/installation/#vite
   # npm 7+, extra double-dash is needed:
   npm create vite@latest dark-launch-with-a-vue -- --template vue
   ```

2. Install Vuetify
   ```shell
   cd dark-launch-with-a-vue
   vue add vuetify
   # select Vite Preview (Vuetify 3 + Vite) when prompted
   ```

3. Install LaunchDarkly SDK
   ```shell
   npm install launchdarkly-vue-client-sdk
   ```

    <small>:warning:if you run into any issues here, just delete your node_modules folder and try again.</small>

### Wherever we go, we are running!

Start your app and everything we do from here will be hot reloaded as we build.

```shell
npm run dev
```

You should now have this running at http://localhost:3000. 
It doesn't really look anything like we want, but it's a start and it's working.

<img src="./public/blog-images/Veautify-starter-pic.png" alt="CleanShot 2022-08-12 at 11.00.37@2x" style="zoom:25%; float:left" />

### New App Who This?

We've installed LaunchDarkly, but Vue doesn't know about it. We need to connect them, so we're going to change `src/main.js` to wire things together. (copy and paste the code below and replace the starter code in `main.js`)

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { LDPlugin } from 'launchdarkly-vue-client-sdk'

const app = createApp(App);

// Vite puts the environment variables in this variable and to prevent leaking of environment variables not
// meant for the client, they have to be prefixed with VITE 
// or else Vite wouldn't add them to it's environment #yoursecretissafewithvite
if (import.meta.env.VITE_CLIENT_ID) {
  
  // we're telling the LaunchDarkly SDK the client ID with which it should retrieve flags
  const clientSideID = import.meta.env.VITE_CLIENT_ID;
  
  // this didn't have to be a named variable, but I wanted to be extra clear about what I was doing here
  // here are the docs about the plugin options: 
  // https://launchdarkly.github.io/vue-client-sdk/index.html#LDPluginOptions
  const launchDarklyPluginOptions = { 
    clientSideID,
    //user, // our user is anonymoust (by default) but you can read more about user here
  };
  
  app.use(LDPlugin, launchDarklyPluginOptions)
}

loadFonts()

app.use(vuetify)
app.mount('#app')
```

Nothing has changed yet. Note the conditional check for the environment variable.

<details><summary>Let's get your client ID from LaunchDarkly</summary>

  Get your LaunchDarkly Client-Side ID from the [LaunchDarkly console](https://app.launchdarkly.com/)

   - :sunglasses:  Super cool way
     - `CMD+K` or `CTRL+K`, typing "copy" and selecting `Copy SDK key for the current environment` and selecting **"Client-side ID"** from the list. 
        <details><summary>Click here to see how</summary>

          ![](./public/blog-images/retrieve-client-id-without-save.gif)
        </details>

   - :hand: Manual way 
      - You can find the Client-Side ID under `Account Settings > Projects > <Your Project Name>`
      - Click your project name
      - Click the `Client-side ID` for the key you want
        (This will add it to your clipboard for easy copy and paste.)

**:warning: Potential gotcha**: 
    make sure you got the **"Client-side ID"** from the LaunchDarkly console and not one of the other keys! 
</details>

We add it to the app with just a few keystrokes

```shell
# back in your terminal, in the dark-launch-with-a-vue directory

# this will make the terminal wait for your client ID to be pasted 
read client_id

# paste your client ID into the terminal and hit enter

# this will write your client ID to your .env file, which is ignored by the .gitignore
echo "VITE_CLIENT_ID=$client_id" > .env  

# let's make sure your .env isn't committed in git so we don't accidentally share your client ID in your repo
echo ".env" >> .gitignore
```



### Let's Go Launching in the Dark!

First step, let's turn the lights out:

Replace the contents of `src/plugins/vuetify.js` with this code: (copy and paste)

```javascript
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  }
})
```

Much better!
<img src="/Users/ahardman/development/dark-launch-with-a-vue/public/blog-images/Veautify-dark.png" alt="CleanShot 2022-08-12 at 11.34.04@2x" style="zoom:25%;" />

Let's dark launch a new UI now and see some real feature flagging power from LaunchDarkly.

For starters, we'll add a banner so we can know that LaunchDarkly is working correctly. 
That way we'll have a good litmus test on every page to see that LaunchDarkly is working.

#### We're having a banner moment

Replace the code in `App.vue` in `./src` and fill it in with this:

```vue
<template>
  <v-app>
    <v-app-bar>
      <v-toolbar dark v-if="isLaunchDarklyReady" color="#405BFF">
        <v-toolbar-title align="center">Features Powered by LaunchDarkly</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import HelloWorld from './components/HelloWorld.vue'
  import { useLDReady } from 'launchdarkly-vue-client-sdk';

  let isLaunchDarklyReady = ref(false);
  try {
    isLaunchDarklyReady = useLDReady();
  } catch (error) {
    console.error('error checking LD Ready', error);
  }
</script>
```

We're using the `v-if` directive from Vue to conditionally render our toolbar only if our `reactive` object `isLaunchDarklyReady` is truthy. We're using [Vue's Composables](https://vuejs.org/guide/reusability/composables.html#what-is-a-composable) pattern to track the state of the LaunchDarkly client.

> In the context of Vue applications, a "composable" is a function that leverages Vue's Composition API to encapsulate and reuse ***\*stateful logic\****.

Our composable, `useLDReady` returns a reactive object so Vue can observe and subscribe to state changes in that object powering the conditional rendering of our banner.

You should now see our "subtle" banner:
![CleanShot 2022-08-12 at 12.08.51@2x](./public/blog-images/LaunchDarkly-banner.png)

Let's prove it works. If we comment out line 25 of `src/main.js` this will remove the LaunchDarkly plugin from Vue.

![CleanShot 2022-08-12 at 12.14.20@2x](./public/blog-images/LaunchDarkly-missing-banner.png)

Perfect! Let's revert the change to `src/main.js` commit our changes because we have a working app and then we'll get to some shipping and flagging.

```shell
# in our project directory
git init
git add .
git commit -m 'nbd, just dark launching a Vue app'

# optional side-quest
# requires github cli
gh repo create

```

