# MatWorkFlow

> best for angular

### MatWorkFlow For Angular ^7.1.0

    material2 + angular7 + pwa + ssr + ngrx + websql + storage

### Folder

    projects
        ngx-table             -- 开发项目依赖包
    resource
        icon-icomoon          -- 项目依赖资源
    src
        app
            componnents
            config
            core
            lib
            models
            ngrx
            pages
            schematic         -- cli 生成组件
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
    [x] Module Build
    [x] Route Build
    [x] User Service
    [x] Http Service And Http Interceptor
    [x] Use Fetch API
    [ ] LocalStorage And Session
    [ ] Filebase Clould
    [ ] Ngrx And Route-Cache
    [ ] Animate
    [ ] Themes
    [ ] Doc Page


### production

##### You need PM2 Manage node-app
[PM2](https://pm2.io/doc/en/runtime/guide/installation/)


