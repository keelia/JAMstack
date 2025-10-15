# 📘 JAMstack Study Notes

## What is JAMstack

**JAMstack = JavaScript + APIs + Markup**

> Fast and secure sites and apps delivered by **pre-rendering files** and serving them directly from a **CDN**, removing the need to manage or run web servers.

## Core Concepts

**1. Pre-rendering files**

- Use the information we already know ahead of time — e.g. product data — and pre-generate HTML pages during **build time**.
- This allows search engines to crawl content easily (because the HTML is ready).
- Dynamic data (e.g., stock levels, authentication, shopping cart features) can then be **added on the client side** via JavaScript APIs.
- So the base content is **static and SEO-friendly**, while dynamic parts are added on the browser. This gives both **SEO benefits** and **runtime interactivity**.

**2. Serve from a CDN**

- Deploy all generated static files (HTML, CSS, JS, images) to a CDN for fast global delivery.
- Users are served from the nearest CDN edge, improving performance and reliability.

**3. No web servers to manage**

- The JAMstack eliminates the need for a traditional application server (e.g., Apache, Node backend).
- All rendering logic happens either at **build time** or **in the browser**, not on request via a centralized web server.

## Examples of JAMstack

### Example 1 – All Static

Pure HTML/CSS/JS pages, no dynamic data.

### Example 2 – Adding JavaScript (Client-side Rendering)

Add interactivity using JavaScript to fetch and display data from APIs directly in the browser.

### Example 3 – Using a Static Site Generator (SSG)

Make builds automated and repeatable by generating HTML from templates at build time.

**Concept:**
Server-side rendering at build time.

**Purpose:**
Generate HTML templates automatically.

**Tools:**
[Eleventy (11ty)](https://www.11ty.dev/) is used as the SSG.

**Why Eleventy?**

- Simple architecture
- Flexible templating system
- No unnecessary framework or magic
- Pure JavaScript, lightweight

**Prerequisites:**

- **Git** – version control and deployment
- **GitHub** – stores code and tracks changes
- **Node.js** – runs JavaScript locally (for SSG build) - local development
- **Netlify** – automates build, deployment, and hosting

**Typical Workflow:**

1. `npm init`
2. Install Eleventy: `npm install @11ty/eleventy`
3. Develop locally using `npx eleventy --serve` (built-in dev server)
4. When ready, run `npx eleventy` to build the static site
5. Deploy the output (e.g., `\_site/` `\_dist/`) to Netlify
6. Set up Git integration so Netlify auto-builds whenever you push code

### Example 4 – Building with Data from an API

**Two ways to use API data:**

1. **Client-side fetching**: Use JavaScript in the browser to request data and render it dynamically.

2. **Build-time fetching**: Fetch data during build, and embed it into the static HTML.

At build time, the SSG can **fetch and include external data** from APIs, e.g.:

- Headless CMS content
- E-commerce product data
- News, social, or weather feeds

**Advantages of build-time fetching:**

- Reduces API usage (data requested only once per build)
- Provides faster user experience
- Improves reliability (no runtime API failures)
- Can rebuild periodically or only when data changes

### Example 5 – Personalization / Localization

Use Eleventy pagination to build localized versions of pages at build time.

**Steps:**

1. Create localized templates (e.g. `localized.njk`) and generate views per locale.
2. Configure redirects in `\_redirects` for **CDN-level routing** (e.g. send French user to `/fr/index.html`).
3. Deploy to Netlify — [CDN handles routing automatically based on `_redirects`](https://docs.netlify.com/manage/routing/redirects/redirect-options/#redirect-by-country-or-language).

This allows **personalization and localization** without running dynamic servers.

### Example 6 – Client-side API Calls with Progressive Enhancement

Example: calling a weather API.

- API keys should **not** be exposed in frontend code.
- Instead of running your own server/backend, use serverless functions (e.g., [Netlify Functions](<(https://docs.netlify.com/build/functions/lambda-compatibility/?data-tab=JavaScript)>)).
- These are small backend scripts(functions) deployed on **AWS Lambda** that proxy API calls securely..
- This way, you hide API keys and avoid managing servers.

> ⚠️ Note: Serverless functions execute **at request time**, not at build time — so they’re not technically “static.”
> However, they fit the JAMstack philosophy because there’s still **no server to manage.**

## Rendering Models

| Rendering Type                   | Where        | When       | Description                                                                      |
| -------------------------------- | ------------ | ---------- | -------------------------------------------------------------------------------- |
| **CSR (Client-Side Rendering)**  | Browser      | After load | JS executes in the browser to render views dynamically                           |
| **SSR (Server-Side Rendering)**  | Server       | On request | HTML generated/rendered at request time on the server(e.g. traditional web apps) |
| **SSG (Static Site Generation)** | Build server | Build time | HTML pre-rendered and deployed as static files                                   |

**JAMstack** could combines **SSG + CSR** and **serverless functions** for dynamic features.

## Choosing an SSG

Consider:

- Language support
- Workflow and developer experience (how you build and deploy)
- Rendering performance (how fast pages render) - how quick the rendering in the browser, different SSG can have diff profile
- Architecture flexibility (plugins, APIs)
- Output control - - how much control for its output
- Ecosystem and community adoption

## Personalization on JAMstack

Traditional personalization uses server logic (e.g., fetching from DB per request).
In JAMstack, personalization can be achieved:

- Client-side (JS personalization)
- CDN-level (routing rules, e.g., Netlify redirects)
- Incremental builds for updated data(regenerate only changed pages)

This moves logic **closer to the user**, at the browser or CDN layer.

## Progressive Enhancement Principles

1. Identify what’s critical to user experience.
2. Deliver as much as possible with minimal dependencies.
3. Detect browser capabilities and enhance when possible.

## Benefits of JAMstack

- Simpler infrastructure - no servers to manage
- Easier deployment (e.g via Git + build automation)
- Faster performance - CDN delivery
- Better developer experience — simpler workflows
- Better user experience - reliable, speed, secure

## Transitioning from Traditional Stack to JAMstack

How to move from a big monolithic architechture acorss to starting use the JAM stack

- Start small — for example, add Netlify redirects[repo](https://github.com/keelia/netlify-proxy-demo/tree/main) or migrate static pages.
- Introduce a static site generator for some sections.
- Introduce APIs and serverless functions.
- Gradually move rendering to the build step or CDN layer.

Eventually, most of your infrastructure can be simplified to **code → build → CDN.**

## Summary

JAMstack = a modern web architecture focusing on:

- Pre-rendering at build time
- APIs for dynamic data
- JavaScript for interactivity
- CDN delivery for performance
- Optional serverless functions for backend logic

It replaces traditional server-rendered systems with **build automation, CDN hosting, and decoupled APIs.**

### JAMstack Architecture Diagram

![Architecture Diagram](/jamstack.png)

### JAMstack EcoSystem

![JAMstack EcoSystem](/jamstackEcoSystem.png)

## Questions

| #   | Question                                        | Correct Answer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **JAM vs SSR**                                  | JAMstack is an _architecture pattern_ (JavaScript + APIs + Markup). It can include **client-side rendering (CSR)**, **server-side rendering at build time (SSG)**, and even **serverless functions**. SSR at request time is less common but can coexist with JAMstack(where frameworks like Next.js allow for a mix of static generation (SSG) and SSR on a per-page basis. This hybrid model allows developers to use the speed of JAMstack's pre-rendered sites for most pages while using SSR for pages with dynamic, real-time content, creating a more flexible application that combines performance and dynamic capabilities. )                                               |
| 3   | **SSR vs SSG**                                  | SSR = HTML rendered at request time or build time. SSG = HTML pre-rendered at build time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4   | **Is Next.js a JAMstack implementation?**       | Next.js can be used to implement a JAMstack architecture, but it is not exclusively a JAMstack implementation. Next.js is a React framework that offers various rendering options:Static Site Generation (SSG), Server-Side Rendering (SSR) at request time, Incremental Static Regeneration (This allows for static pages to be regenerated in the background after deployment, offering a balance between static performance and dynamic content updates). Therefore, while Next.js's SSG capabilities make it a strong choice for building JAMstack applications, its flexibility with SSR and ISR means it can also be used to build applications that are not strictly JAMstack. |
| 5   | **CRA React app = CSR?**                        | Yes. Create-React-App produces static assets served by a web server and renders content client-side.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6   | **SSG vs Webpack**                              | Webpack is a bundler for JS/CSS. SSG generates HTML from templates and data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 7   | **SSG vs Vite vs Webpack**                      | SSG is a build strategy for pre-rendering HTML pages, while Webpack/Vite are JavaScript bundlers that build your code. Vite is a modern build tool known for its speed during development due to its use of native ES modules and fast [esbuild](https://esbuild.github.io/getting-started/#install-esbuild), while Webpack is a more traditional and highly configurable bundler that works by pre-bundling everything upfront. Vite can be used to build SSG projects, often with tools like Rollup, and is generally easier to set up than Webpack.                                                                                                                                |
| 8   | **Where to place SSG dependency?**              | In `devDependencies`, since it’s only needed for building.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 9   | **axios — devDep or dep?**                      | `dependencies`, because it’s used at runtime (client or function).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 10  | **require vs import**                           | Use `import` in modern Node (ES modules, `.mjs`); use `require()` in older CommonJS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 11  | **Can JAMstack be client-side or server-side?** | Yes. JAMstack applications primarily leverage **CSR**, **SSG** (which involves pre-rendering content during a build process) and **serverless functions**, as long as it follows the JS + API + Markup principle and doesn’t rely on a traditional server. However, the JAMstack ecosystem has evolved to incorporate techniques that blur the lines, including server-side rendering (SSR) and incremental static regeneration (ISR).                                                                                                                                                                                                                                                |
| 12  | **SSR build time vs request time purpose?**     | Build time = pre-render for SEO and performance. Request time = render dynamic or personalized data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 14  | **Serverless function = API on CDN/cloud?**     | Yes. They run on cloud providers (e.g., AWS Lambda) and can be deployed via CDNs (e.g., Netlify Edge Functions).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 15  | **What is a Headless CMS?**                     | A CMS that exposes content via an API instead of rendering HTML itself. Examples: Strapi, Contentful, Sanity. [Netlify guide](https://www.netlify.com/blog/complete-guide-to-headless-cms/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
