# LongQiCool — 协作与合入纪律

本文件只约束 **本仓库**（博客站点）。改完只 `push` 这一个项目，不要把 Obsidian 整库或其它目录误提交进来。

## 合入 `main` 前必须走 PR（禁止直推）

1. 从最新 `main` 拉分支：`git fetch origin && git checkout main && git pull`，再 `git checkout -b <topic-branch>`
2. 在分支上改代码，本地至少 **`yarn build`**（与 CI / Vercel 构建等价，先本地绿再推）
3. `git push -u origin <topic-branch>`
4. 开 PR：`gh pr create --fill`（或网页）
5. **循环看 PR 直到全绿**：`gh pr checks --watch`（或 `gh pr checks <PR号> --watch`；PR 网页里同步看 **GitHub Actions** 与 **Vercel**）。任一项红：**只在当前分支上修**，push 更新同一 PR，**不要**把未修复内容合进 `main`
6. **仅当 CI/CD（含 Vercel 预览/检查）全部通过** 再合并：`gh pr merge`（merge / squash 与习惯一致）

生产站挂在 **Vercel**；一次合并进 `main` 即触发部署。先让 PR 上构建全过再合，可避免主分支红、线上报错。

直推 `main` 仅用于紧急热修且需事后补 PR；默认一律 **分支 → PR → 等 CI/CD 绿 → 合并**。
