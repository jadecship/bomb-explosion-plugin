# 炸弹爆炸效果插件

这是一个简单的 JavaScript 插件，用于在网页上实现炸弹爆炸的动画效果。

## 安装

### 手动下载
你可以直接从本仓库的 `dist` 目录下载 `bomb-explosion.css` 和 `bomb-explosion.js` 文件，并将它们添加到你的项目中。

### 使用 CDN（待后续支持）
后续可以考虑将插件发布到 CDN 上，届时可以通过 CDN 链接引入插件。

## 使用方法

### 1. 引入文件
在你的 HTML 文件中引入 CSS 和 JavaScript 文件：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>使用炸弹爆炸插件</title>
    <link rel="stylesheet" href="dist/bomb-explosion.css">
</head>
<body>
    <!-- 你的页面内容 -->
    <script src="dist/bomb-explosion.js"></script>
</body>
</html>
```

### 2. 触发爆炸效果

#### 方法一：通过 HTML 按钮的 `onclick` 属性调用
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>使用炸弹爆炸插件</title>
    <link rel="stylesheet" href="dist/bomb-explosion.css">
</head>
<body>
    <button onclick="createExplosion()">触发炸弹爆炸</button>
    <script src="dist/bomb-explosion.js"></script>
</body>
</html>
```

#### 方法二：在 JavaScript 文件中使用事件监听器调用
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>使用炸弹爆炸插件</title>
    <link rel="stylesheet" href="dist/bomb-explosion.css">
</head>
<body>
    <button id="explode-btn">触发炸弹爆炸</button>
    <script src="dist/bomb-explosion.js"></script>
    <script>
        const explodeBtn = document.getElementById('explode-btn');
        explodeBtn.addEventListener('click', () => {
            createExplosion();
        });
    </script>
</body>
</html>
```

## 兼容性
该插件兼容现代浏览器，如 Chrome、Firefox、Safari 和 Edge 等。

## 贡献
如果你有任何改进建议或发现了 bug，请在本仓库提交 issue 或 pull request。

## 许可
本插件采用 MIT 许可。

你可以根据实际需求对插件进行进一步的优化和扩展。 
