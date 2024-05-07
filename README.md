# 模版描述说明
一个通用的nodejs工程范式

## 文件夹描述
``` shell
├── README.md
├── api 接口集合
│   └── v1
│       └── version.js
├── app.js 程序入口
├── bin 启动入口
│   └── www
├── config 包含配置文件，它高速CLI如何连接数据库
│   └── config.json
├── controller 业务处理模块
│   └── version.js
├── middleware 中间件
│   ├── composeRouter.js
│   ├── datalizeVerify.js
│   ├── exception.js
│   └── routerResponse.js
├── migrations 包含所有迁移文件，通过model:generate自动生成，手动编辑更加丰富的参数
│   └── 20230529143334-create-version.js
├── models 包含你项目的所有模型，通过model:generate自动生成，手动编辑更加丰富的参数
│   ├── index.js
│   └── version.js
├── package.json 工程描述
├── seeders 所有种子文件，可以用来保存一些预置数据或测试文件
│   └── 20230529144724-versionInit.js
└── yarn.lock 版本锁
```
## 怎么开始
``` javascript
0. 创建数据库
 npx sequelize-cli db:create
1. 创建模型及迁移文件
 npx sequelize-cli model:generate --name Version --attributes version:STRING
2. 手动调整模型及迁移文件
3. 运行迁移,生成数据表
 npx sequelize-cli db:migrate
4. 新建种子文件 即测试数据或预制数据
 npx sequelize-cli seed:generate --name version
5. 手动编制测试或预制数据
6. 运行种子文件，将默认数据填充
 npx sequelize-cli db:seed:all
指定文件
sequelize db:seed --seed xxx

http://ww.qdxiaochuan.com/?id=58
```

