# Work7

> best prictice for angualr

### MatWorkFlow For Angular ^7.1.0

    material2 + angular7 + pwa + ssr + ngrx + websql + storage

### Folder

    '''
    projects
        ngx-table
    resource
        icon-icomoon
    src
        app
            api
            componnents
            config
            controllers
            core
            database
            functions
            lib
            models
            ngrx
            pages
            service
            settings
            shared
            styles
            test
            tools
            utils
        app.component
        app.routing.module
        app.module
        app.server.module
    '''


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


### production

##### You need PM2 Manage node-app
[PM2](https://pm2.io/doc/en/runtime/guide/installation/)


