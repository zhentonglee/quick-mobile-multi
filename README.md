### 安装依赖
```
npm install
```

### 本地开发
```
npm run serve
```

### 开发环境
```
npm run build:dev
```

### 测试环境
```
npm run build:test
```

### 正式环境
```
npm run build:prod
```

### 项目说明
- 该项目为多页应用，在 vue.config.js 里的 pages 字段配置页面
- 新增页面，参照现有页面结构以及命名
- 本地开发访问 http://localhost:8080/ + 相应的页面，如：http://localhost:8080/user-agreement

### 环境配置说明
- 根据打包命令的不同， BUILD_MODE 会被设置成不同的环境变量，在 vue.config.js 文件里判断 BUILD_MODE 的值来设置 process.env.VUE_APP_BASE_API
- 注意：BUILD_MODE 和 NODE_MODE 是不同的概念

### 移动端适配说明
- 采用postcss-pxtorem、amfe-flexible方案，打包时会把px转化为rem，rootValue设置为75，按设计稿750规格来取px值。
- 同时兼容PC端，设置html的font-size: 64PX，body的font-size: 24PX，#app的max-width: 640PX，PX大写不会被pxtorem转化。