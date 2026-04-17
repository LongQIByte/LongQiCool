# LongQiCool — 协作与合入纪律

## 合入 `main` 前必须走 PR（禁止直推）

1. 从最新 `main` 拉分支：`git fetch origin && git checkout -b <topic-branch>`
2. 在分支上改代码、本地 `yarn build`（或至少跑 CI 同等命令）
3. `git push -u origin <topic-branch>`
4. 用 GitHub CLI 开 PR：`gh pr create --fill`（或指定 title/body）
5. **等待 CI 绿**：`gh pr checks <PR号或URL> --watch`（或网页看 Actions）
6. **仅当全部通过** 才合并：`gh pr merge --merge`（或 squash，与团队约定一致）
7. CI 若红：**在分支上修到绿**，再 push 更新 PR，**不要**在未修复时合进 `main`

直推 `main` 仅用于紧急热修且需事后补 PR 的情况；默认一律走 PR + CI。
