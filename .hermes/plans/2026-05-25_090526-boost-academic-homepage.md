# Plan: 炫酷升级 GitHub Pages 个人学术主页

## Goal

将 XuZikang.github.io 的个人学术主页从简洁、带学术风格的 Minimal Mistakes 主题升级为视觉上更炫酷、更现代、更具交互感的个人品牌页面，同时保持内容完整性、SEO 和 Google Scholar 集成不变。

## Current Context

- **框架**: Jekyll（Minimal Mistakes 主题深度定制版）
- **内容**: 单页 `_pages/about.md`，所有内容通过 `---` 分割锚点区域
- **样式**: `assets/css/main.scss` 基于 Minimal Mistakes 的 Sass 体系，自定义部分较少
- **交互**: `collapse.js` 提供简单的折叠功能
- **图标**: Font Awesome + Academicons + MathJax
- **托管**: GitHub Pages（静态 HTML，无后端支持）
- **限制**: 不能引入需要 Node/构建步骤的框架（React/Vue），只能通过 CSS/JS 增强

## Proposed Approach

所有增强均通过 **渐进增强** 实现——在不破坏现有内容和功能的前提下增加视觉效果。核心手段：

1. **CSS 自定义属性 (variables)** 实现主题切换与统一配色
2. **轻量 JS 库** (vanilla JS 优先，如 AOS.js、particles.js 精简版) 实现动画
3. **CSS 动画 & 过渡** 实现 hover 效果、入场动效、渐变背景
4. **localStorage** 持久化用户偏好（主题模式）

无构建步骤、无 npm、零配置额外依赖（CDN 加载）。

## Step-by-step Plan

### Step 1: 深色/浅色主题切换 + 全局 CSS 变量化

**Files changed:**
- `assets/css/main.scss` — 重构：抽取所有颜色为 CSS 变量，定义 `.light-theme` / `.dark-theme` 两套变量值
- `_includes/head/custom.html` — 内联一个 `<script>` 块，在 `<html>` 上设置 `data-theme`，优先读取 localStorage
- `_includes/scripts.html` — 加载 theme-toggle.js

**New files:**
- `assets/js/theme-toggle.js` — 切换 `data-theme` 属性 + localStorage 持久化 + 主题切换按钮逻辑
- `_includes/theme-toggle.html` — 主题切换按钮的 HTML（月/日图标）

**Details:**
- `.dark-theme` 使用深色背景 (#0a0a0f / #12121a)、柔和字体色 (#e0e0e0)、高亮色 (#64b5f6)，处理卡片、链接、按钮等所有颜色
- `.light-theme` 保持现有浅色风格稍做现代化（增加微阴影、圆角）
- 切换按钮放在导航栏 masthead 右侧
- CSS 过渡 `color 0.3s, background-color 0.3s` 平滑主题切换

### Step 2: 现代化导航栏 + 玻璃拟态效果

**Files changed:**
- `assets/css/main.scss` — 导航栏 `sticky`, `backdrop-filter: blur(20px)`, 透明背景+毛玻璃
- `_includes/masthead.html` — 添加主题切换按钮 HTML（引用 `_includes/theme-toggle.html`）

**Details:**
- 导航栏固定在顶部，滚动时保持可见
- 半透明背景 + `backdrop-filter: blur()` 实现毛玻璃效果
- 导航项增加 hover 下划线动画

### Step 3: 入场滚动动画 (AOS)

**Files changed:**
- `_includes/head/custom.html` — 添加 AOS CDN CSS 链接 (unpkg cdn)
- `_includes/scripts.html` — 添加 AOS JS CDN 链接 + `AOS.init()` 调用

**Details:**
- 每个 `---` 分隔的区域（#about-me, #-news, #-publications 等）添加 `data-aos="fade-up"` 属性
- 入场时从底部淡入+上移
- 可选：AOS 配置 `duration: 800`, `once: true`（只动画一次，不重复）

### Step 4: 渐变标题 + 头像装饰

**Files changed:**
- `assets/css/main.scss` — 添加渐变色文本效果（`background-clip: text`）用于页面内 `h1` 标题
- 头像（sidebar avatar）增加发光光环效果

**Details:**
- 标题 "😊 About Me" 等使用渐变：`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- 头像增加圆形容器阴影 + hover 旋转/缩放效果

### Step 5: 出版物卡片视觉升级

**Files changed:**
- `assets/css/main.scss` — `.paper-box` 增强：卡片阴影、hover 上浮效果、圆角、边框微光

**Details:**
- `.paper-box` 增加 `border-radius: 12px`、`box-shadow`、hover 时 `transform: translateY(-2px)` 和更强阴影
- 每篇论文的徽章（Oral, Early Accepted）增加渐变背景和脉冲动画
- GitHub Stars 徽章调整间距和颜色

### Step 6: 时间线可视化（Education & News）

**Files changed:**
- `assets/css/main.scss` — 新增时间线样式（`.timeline` 类）
- `_pages/about.md` — Education 和 News 区域的 HTML 结构调整为时间线结构

**Details:**
- 左侧竖线 + 时间节点圆点
- 每条记录为卡片形式，hover 时高亮
- 用 `::before` 伪元素实现时间线竖线，无需额外 HTML 结构

### Step 7: 背景动态粒子 / 网格 / 微光

**New files (optional, moderate):**
- `assets/js/particles-bg.js` — 极简纯 JS 粒子背景（不依赖外部库），约 60 行

**Files changed:**
- `_layouts/default.html` — 在 body 开头嵌入 `<div id="bg-particles">` 容器
- `assets/css/main.scss` — 粒子容器样式：`position: fixed; z-index: -1`

**Details:**
- 纯 canvas 实现的稀疏粒子，缓慢浮动
- 深色模式下可见（浅色模式可关闭或调淡）
- 性能考虑：粒子数 ≤ 20，不使用外部库

### Step 8: 移动端适配检查

**Files changed:**
- `assets/css/main.scss` — 确保所有新增样式在移动端正确响应

**Details:**
- AOS 在小屏设备上禁用或降低动画距离
- 时间线在移动端调整间距
- 导航栏在移动端的行为测试

## Files Likely to Change

| File | Change |
|---|---|
| `assets/css/main.scss` | Major: CSS variables, theme colors, glass nav, timeline, paper-box, headings, particles |
| `_includes/head/custom.html` | AOS CSS CDN, theme inline script |
| `_includes/scripts.html` | AOS JS, theme-toggle.js, particles-bg.js |
| `_layouts/default.html` | Add `<div id="bg-particles">` container |
| `_includes/masthead.html` | Add theme toggle button |
| `_pages/about.md` | Restructure News & Education sections for timeline; add `data-aos` attributes to section wrappers |
| `_data/navigation.yml` | Minimal or no changes |

## New Files

| File | Content |
|---|---|
| `assets/js/theme-toggle.js` | Theme switch logic + localStorage |
| `assets/js/particles-bg.js` | Lightweight canvas particles |
| `_includes/theme-toggle.html` | Toggle button HTML (sun/moon icons) |

## Tests / Validation

1. `bundle exec jekyll serve -l` — 本地启动确认无构建错误
2. 手动检查：
   - 深色/浅色切换是否正常工作，localStorage 是否持久化
   - 所有 section 滚动动画是否流畅
   - 出版物卡片 hover 效果
   - 时间线布局是否正确
   - 导航栏毛玻璃效果
   - 移动端响应式布局（Chrome DevTools 手机模式）
   - Google Scholar 统计是否正常加载
   - MathJax 公式是否仍然渲染
3. `curl -s localhost:4000 | grep -c "404"` — 确认无 404

## Risks, Tradeoffs, and Open Questions

| Risk | Mitigation |
|---|---|
| AOS 库加载可能影响首屏性能 | 使用 CDN 缓存 + `defer` 加载 + mobile 端降低动画 |
| 深色模式高对比度不够 | 使用 WCAG AA 标准色（对比度 ≥ 4.5:1），并测试常用显示器 |
| 粒子背景影响低端设备性能 | 粒子数 ≤ 20，低帧率回退，`prefers-reduced-motion` 媒体查询完全禁用 |
| 毛玻璃效果在 Firefox 下不同 | `backdrop-filter` 需要 `-webkit-backdrop-filter` 前缀 |
| 主题切换闪烁（FOUC） | 关键主题色在 `<head>` 内联 `<script>` 中 immediately 设置 |

**Open Questions:**
- 是否需要保留现有的 collapse.js 功能？(Yes — 保持向后兼容)
- glide/banner 动效是否需要？（暂不需要 —— 保持学术简洁感）
- 是否要增加 "Skills" 进度条区域？（可选，目前 about.md 中没有技能列表，可后续在 About Me 中增加）

## Execution Order

```
Step 1 (CSS variables + theme toggle) → Step 7 (particles) → Step 3 (AOS) → 
Step 2 (glass nav) → Step 4 (gradient + avatar) → Step 5 (paper cards) → 
Step 6 (timeline) → Step 8 (mobile check)
```

每个步骤都是独立的，可以阶段性部署。Step 1 是老基础步骤（影响全局颜色），建议最先实施。