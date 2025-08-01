# 拼好图 - 图片合成与加密工具

拼好图是一个纯前端的图片处理工具，提供图片合成和图片加密两种核心功能。所有操作均在本地浏览器完成，不会上传任何图片到服务器，保障用户隐私安全。

## 功能特点

### 1. 图片合成
- 支持批量上传多张图片
- 提供扣黑色/白色背景功能
- 支持颜色反转操作
- 实时预览合成效果
- 一键下载合成结果

### 2. 图片加密
- 将单张图片拆分成多张加密图片
- 可自定义加密图片数量 (2-100张)
- 可调整加密强度 (像素块大小)
- 支持设置底片颜色 (白色/黑色/透明)
- 提供网格/列表两种视图模式
- 支持批量下载所有加密图片

### 3. 安全与隐私
- 所有图片处理均在本地浏览器完成
- 不收集、存储或传输任何用户数据
- 不保存用户的图片或个人信息

## 使用方法

### 图片合成
1. 点击或拖拽图片到上传区域
2. 选择扣色方式 (扣黑色/扣白色)
3. 如需调整，可使用颜色反转功能
4. 查看实时合成结果
5. 点击下载按钮保存合成图片

### 图片加密
1. 点击或拖拽单张图片到上传区域
2. 设置加密图片数量、加密强度和底片颜色
3. 点击"加密图片"按钮开始处理
4. 查看生成的加密图片
5. 点击"下载所有加密图片"按钮保存结果

## 技术栈
- HTML5 Canvas 图像处理
- CSS3 响应式布局
- JavaScript 交互逻辑
- 本地存储与文件操作
- 无服务器架构

## 项目结构
```
├── README.md            # 项目说明
├── index.html           # 图片合成页面
├── encrypt.html         # 图片加密页面
├── privacy.html         # 隐私说明页面
├── styles.css           # 样式文件
└── js/                  # JavaScript 文件夹
    ├── protect.js      # 保护代码 (禁止选择、右键等)
    ├── jszip.min.js    # ZIP 文件生成库
    └── FileSaver.min.js # 文件保存库
```

## 隐私说明
拼好图是一个纯前端应用，所有图片处理都在您的浏览器中进行，不会存储在任何服务器上。我们不会收集、存储或传输您的个人数据和图片信息。

## GitHub
[https://github.com/FQkun/pinhaotu](https://github.com/FQkun/pinhaotu)