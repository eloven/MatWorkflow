# MatWorkFlow

Best Angular

### MatWorkFlow For Angular ^7.1.0

    material2 + angular7 + pwa + ssr + ngrx + websql + storage

### quick components
[![MatWorkFlow](https://github.com/guobin211/MatWorkflow/blob/master/images/shcematic.jpg)](https://github.com/guobin211/MatWorkflow)

### quick plugin
[![MatWorkFlow](https://github.com/guobin211/MatWorkflow/blob/master/images/plugin.jpg)](https://github.com/guobin211/MatWorkflow)

### Folder

    server.ts                 -- nodejs server
    projects
        ngx-table             -- ngx lib
    resource
        icon-icomoon          -- static assets
    src
        app
            componnents
            config
            core
            lib
            models
            ngrx
            pages
            schematic
            service
            shared
            styles
            utils
        app.component
        app.routing.module
        app.module
        app.server.module

### How to use browser

    1. git clone
    2. npm install
    3. ng serve
    4. ng build --prod

### How to use ssr

    1. npm i express
    2. npm i webpack
    3. npm run build:ssr
    4. node dist/server.js

### How to create projects library

    1. ng generate library [ngx-name] --prefix tm

    2. ng generate component [name] --project=ngx-table

### How to build projects with name

    1. ng build ngx-table


### About Plan

    [x] Framwork
    [x] Route Module
    [x] Use Service
    [x] Http Service And Http Interceptor
    [x] Use Fetch API
    [x] LocalStorage And Session
    [x] Filebase Clould
    [x] Animate
    [ ] Ngrx And Route-Cache
    


### production
##### You need PM2 Manage node-app
[PM2](https://pm2.io/doc/en/runtime/guide/installation/)


