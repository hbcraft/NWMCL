# NWMCL - A nodejs web minecraft launcher!

## 简介

一个nodejs+web的mc启动器

后端使用nestjs

前端使用angular

使用yarn workspace将前端项目和后端项目合并到一个项目中

开发模式下后端使用@nestjs/serve-static提供一个重定向到前端项目的html文件跳转根目录到前端项目

production模式通过@nestjs/serve-static直接提供前端打包好的文件
