<p align="center">
    <a href="#">
        <img alt="叫到帮" src="https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_weapp_customer/master/images/%E5%8F%AB%E5%88%B0%E5%B8%AELOGO%20-%2001.png" width="300">
    </a>
</p>

<p align="center">
    叫到帮的客户端小程序源码，使用了 mpx 框架，能够多端适配。
</p>

<p align="center">
    <img alt="brage" src="https://img.shields.io/github/issues/Sanzro-Lee/HELPER_FACTION_official_weapp_customer" width="auto">
    <img alt="brage" src="https://img.shields.io/github/forks/Sanzro-Lee/HELPER_FACTION_official_weapp_customer" width="auto">
    <img alt="brage" src="https://img.shields.io/github/stars/Sanzro-Lee/HELPER_FACTION_official_weapp_customer" width="auto">
    <img alt="brage" src="https://img.shields.io/github/license/Sanzro-Lee/HELPER_FACTION_official_weapp_customer" width="auto">
</p>

## 简介

叫到帮小程序就是帮助大家解决 🧰 各种问题的，其中包括室内装修、电器维修、货物搬迁等问题，有这些问题就找叫到帮！（此项目暂未完成 ❎ ）

<!-- ## 扫码体验

<img alt="叫到帮客户端二维码" src="https://github.com/helperfaction/image/Qrcode.png" width="200"> -->

## 安装使用

```bash
# 请先自行安装 node
# 安装mpx脚手架工具
npm i -g @mpxjs/cli

# 进入项目
cd HELPER_FACTION_official_weapp_customer

# 安装依赖
npm i

# development
npm run watch

# production
npm run build

# 依赖更新：
npm outdate

npm-check -u

# 此代码更新依赖将出现无法运行的问题，故暂停所有维护。
```

```
npm script规范 [build|watch]:[dev|prod]:[cross|web|none]

build默认prod，watch默认dev。另单独提供了build:dev和watch:prod，用于单次构建分析看未压缩代码分析问题和持续压缩代码便于大体积项目真机调试。

建议自行调整cross的目标。npm-run-all是为了兼容windows下无法同时执行两个npm script，若不需要转web平台，可考虑去掉。
```

使用小程序开发者工具打开项目文件夹 📁 下dist中对应平台的文件夹 📁 即可预览效果。

<!-- ## 文档

https://helperfaction.github.io/docs -->

## 设计图展示

<img alt="设计图展示" src="https://raw.githubusercontent.com/Sanzro-Lee/HELPER_FACTION_official_weapp_customer/master/images/%E5%8F%AB%E5%88%B0%E5%B8%AE_ui_design.png" width="auto">

## 生态周边

|项目|版本|描述|状态|
|--|--|--|--|
|[服务端](https://github.com/Sanzro-Lee/HELPER_FACTION_official_weapp_service/tree/master)|v1.5|叫到帮小程序服务端|未完成 ❎|
|[后台系统](https://github.com/Sanzro-Lee/HELPER_FACTION_official_background_management_system)|v2.0|叫到帮后台系统|未完成 ❎|
|[官方网站源码](https://github.com/Sanzro-Lee/HELPER_FACTION_official_website)|v2.0|叫到帮官网源代码|已完成 ✅|
