# 网站内容管理指南 (Content Management Guide)

本网站采用了**数据驱动**的设计。所有的作品、成员信息、合作项目等内容都集中在一个数据文件中：`src/data/site-data.ts`。

您**不需要修改任何 UI 组件的代码**（如 `Home.tsx`, `MemberDetail.tsx` 等），只需要像填写 Excel 表格一样修改 `site-data.ts` 里的数据，整个网站的排版、路由跳转和动画都会自动更新。

---

## 1. 如何替换图片？

目前代码里的图片使用的是 `https://picsum.photos/...` 这样的在线占位图。

**替换步骤：**
1. 在项目根目录找到 `public` 文件夹。
2. 在 `public` 里面新建一个文件夹叫 `images`（即路径为 `public/images/`）。
3. 把您自己的图片（如 `project1.jpg`, `avatar.png`）放进去。
4. 在 `src/data/site-data.ts` 中，把对应的 `image` 或 `coverImg` 字段修改为本地路径。
   * **修改前**：`image: "https://picsum.photos/seed/work1/800/1200"`
   * **修改后**：`image: "/images/project1.jpg"`
   *(注意：路径开头一定要有 `/`，代表从 public 根目录读取)*

---

## 2. 首页作品 (Works) 增删改

在 `src/data/site-data.ts` 中找到 `export const works = [ ... ]` 数组。

### 增加作品
复制数组中的某一个 `{ ... }` 对象，粘贴到数组末尾，然后修改里面的信息：
```typescript
{
  id: "new-project", // 必须是唯一的英文/数字组合，用于生成网址
  title: {
    en: "New Project Name",
    zh: "新项目名称"
  },
  client: "Client Name",
  year: "2026",
  category: "Branding",
  image: "/images/new-project.jpg", // 替换为您的图片路径
  description: {
    en: "English description...",
    zh: "中文描述..."
  }
}
```

### 修改作品
直接在对应的中英文字段（如 `en: "..."`, `zh: "..."`）里修改文字，保存即生效。

### 删除作品
直接把 `works` 数组里的某个 `{ ... }` 对象整块删掉，首页对应的项目就会自动消失。

---

## 3. 个人页作品 (Members & Member Projects) 增删改

在 `src/data/site-data.ts` 中找到 `export const members = [ ... ]` 数组。每个成员对象里都有一个 `projects` 数组。

### 增加成员的个人作品
找到对应成员的 `projects: [ ... ]` 数组，复制并添加一个新的项目对象：
```typescript
{
  id: "member-new-project", // 必须唯一
  title: "Personal Project Title",
  year: "2026",
  role: "Art Director",
  image: "/images/member-project.jpg",
  description: "Project description..."
}
```

### 增加新成员
复制整个成员对象（包含 `id`, `name`, `role`, `bio`, `projects`），粘贴到 `members` 数组中，并修改对应信息。

---

## 4. 合作页 (Collab) 增删改

在 `src/data/site-data.ts` 中找到 `export const collab = { ... }` 对象。它包含两个数组：`pendingExhibitions`（待办展览）和 `postedProjects`（已发布项目）。

### 增加待办展览 (Pending Exhibitions)
在 `pendingExhibitions` 数组中添加：
```typescript
{
  id: "exhibition-3",
  title: "New Exhibition",
  date: "2026.10 - 2026.11",
  location: "Shanghai",
  description: "Exhibition details..."
}
```

### 增加已发布项目 (Posted Projects)
在 `postedProjects` 数组中添加：
```typescript
{
  id: "collab-3",
  title: "New Collab Project",
  collaborator: "Partner Name",
  image: "/images/collab-project.jpg",
  description: "Project details..."
}
```

---

## 给 Trae (AI 助手) 的提示
如果您使用 Trae 进行后续开发，可以直接把这个文档发给它，并告诉它：
> "请参考 `CONTENT_MANAGEMENT.md`，帮我在 `site-data.ts` 中添加一个首页作品，图片路径使用 `/images/test.jpg`，标题是..."
Trae 会立刻明白数据结构并帮您准确修改。
