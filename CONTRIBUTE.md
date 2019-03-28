# Contributing Guide

> 如果您也想贡献代码，请详细阅读本篇文章。

## 代码

为了让代码整体显示更为规范，建议开发人员遵循以下约定。

### 代码提交

每段代码提交必须写message，格式建议如下：

- {更新类型}:  {更新标题}

  {更新描述}

### 类型枚举值

- feature: 功能
- chore: 小改动
- fix: 修复  如有对应issue，请贴上issue链接
- test: 测试
- build: 对内发布
- release: 对外发布
- ...(待添加)

[清晰的commits示例](https://github.com/vuejs/vue/commits/dev)

### 代码合并

分支上开发的代码强烈推荐使用rebase代替merge。这样查看commits的会显得清晰整洁。

> 注意：一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行衍合操作。

[分支的衍合](https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E8%A1%8D%E5%90%88)

### 代码发布

发布版本时推荐使用`git tag`做标识

[如何做版本标识](https://git-scm.com/docs/git-tag)

如果有疑问或建议，可以联系 mcchen.club@gmail.com
