**Homebrew下载很慢怎么办**

>上次介绍到Homebrew能够很方便的再Mac平台下载应用。但在使用的过程中会感到很慢。这次来解决这个问题


#### 1.首先替换brew.git源
```bash
cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
```

url地址列表(随意挑选其中一个即可):
* 中科大：https://mirrors.ustc.edu.cn/brew.git
* 清华大学：https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
* GitHub镜像(默认)：https://github.com/Homebrew/brew.git

#### 2.替换homebrew-core.git源
```bash
cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

or

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

url地址列表(随意挑选其中一个即可):
* 中科大：https://mirrors.ustc.edu.cn/homebrew-core.git
* 清华大学：https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
* GitHub镜像(默认)：https://github.com/Homebrew/homebrew-core

> 本质上就是进到项目目录并替换源为国内机构维护的地址

