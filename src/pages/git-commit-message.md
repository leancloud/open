---
layout: post
title: Git Commit 日志风格指南
category: guide
lang: zh
pageOrder: 11
---

## 介绍

我们的所有项目都使用 Git 做版本管理，这篇文档用于规范我们的 commit 日志。主要内容参考了
[Conventional Commits](https://www.conventionalcommits.org) 和 [Angular Contributing Guide](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)，按照我们的情况进行了增删。


## 格式

日志的所有内容都使用 ASCII 字符，不要用中文或者 emoji，这样最大化兼容性，也便于程序处理。总体结构如下：

```
类型(可选的范畴): 简短描述

可选的详情

可选的注解
```

下面是一个完整的示例：

```
feat(auth): increase length of new API key

the length is increased from 24 to 32 for new API keys

close #12
```

## 各部分说明

### 标题

标题是每条 commit 日志的第一行，包含类型、范畴、描述三部分。

以下为可用的 commit 类型及意义。

| 类型       | 说明                                                                          |
|------------|-------------------------------------------------------------------------------|
| `feat`     | feature - 所有实现新功能、新行为的 commit 都属这个类型                        |
| `fix`      | 修正缺陷的 commit                                                             |
| `chore`    | 日常维护性的改动，例如 linter 的配置等                                        |
| `test`     | 与测试有关的改动                                                              |
| `refactor` | 不改变行为的对代码结构的改进                                                  |
| `style`    | 对代码风格的修正（仅限缩进、空行一类的简单改动，对结构有影响的用 `refactor`） |
| `cosm`     | cosmetic - 不改变行为的对界面的纯视觉上的改动                                 |
| `docs`     | 对文档的改进，包括对外文档和代码注释                                          |
| `build`    | 和构建流程、持续集成等有关的改动                                              |

我们的类型数量比其他类似规范的类型少，这是有意的精简。类型少既便于记忆，又能避免一些模凌两可的情况，可以降低决策成本。如果你以前使用过其他的规范，那么把这里不存在的类别归到最接近的即可。比如其他规范中的 `ci` 我们包含到 `build`里；再比如 `perf` 归到 `feat`，毕竟[性能也是一种 feature](https://blog.codinghorror.com/performance-is-a-feature/)。

`docs` 是指针对其他项目成员的注释和文档。如果这个项目就是文档性质的，比如静态博客、SDK 文档，那么新增针对外部用户的内容就应该算是 feature，使用 `feat`。

如果一个改动会破坏向前兼容性，影响到依赖本项目的其他系统（比如旧版的 SDK，前端、客户端，或者会发生 API 调用的其他子系统）的行为，请在类型后面加上感叹号，比如 `feat!: ...` 以便识别。此外请参见下面详情小节中关于 `BREAKING:` 的描述。

对于大部分功能单一的 repo，范畴部分（示例中的 `(auth)`）是不需要的。对于包含多方面的功能又暂时不便拆分的 repo，应该把范畴标准化并记录在 `README` 或 `CONTRIBUTING` 文件中。

描述部分是以小写字母开头的一个短句，只有专用名次首字母大写，缩略语大写，结尾不用句号。按照 Git 的习惯，整个标题应该不超过 72 个字符，所以标题中的描述要尽量简短。如果你发现无法限制在 72 个字符内，优先考虑把这个 commit 拆分成多个目的更单一的 commit。如果逻辑上无法拆分，就把详细信息放在下面的详情里，保持标题简短。

### 详情

详情和标题间隔一个空行。大部分 commit 应该保持目的单一，不需要详情部分。对于原因不是显而易见，或者原理需要解释的 commit，可以在这个部分说明。如果只是一个简单的句子，可以使用与标题描述部分相同的格式。如果超过一行，请按照常规的段落格式，包括句首字母大写，正确使用标点等。详情可以有多行、多段，每行不超过 72 个字符，行尾不要有空格，段落之间用空行隔开。

如果在当前 commit 中包含破坏向前兼容性的改动（见上面关于标题的描述），在详情中的第一段请以 `BREAKING: ` 开头，说明这个改动的具体影响和原因。比如：

```
feat!(api): limit array length to 256 elements

BREAKING: Array length limit is added to further limit request size. A
small number of existing apps may receive HTTP 413 "Payload too Large"
error.
```

### 注解

注解与详情以一个空行隔开，通常是一些与自动化工具集成需要的关键词和信息。比如可以[关闭 GitHub issue](https://help.github.com/en/articles/closing-issues-using-keywords)。GitHub 支持多个作用相同的关键词，我们统一用 `close`，并且使用较短的形式 `close` 而不是 `closed` 或 `closes`。
