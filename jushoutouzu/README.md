# 舉手投足我就是騙 — R5 Quickplay

此目錄是 GitHub Pages 快速測試版。目標不是「有網頁」，而是 **點網址 → 等待載入完成 → PLAY NOW → 立刻開始測一局**。

## Quickplay
- 第一個 scripted encounter：18 秒。
- 18 分鐘局：14 段 scripted encounter，加上 5/10 分鐘精英、15 分鐘 Boss、18 分鐘通關。
- 開局 32 FLOW、8/24 XP，讓第一次升級與流派爆發更快成形。
- 高 FLOW / 高連殺 / encounter 期間持續出現 arena pulse、speed cut、radial spokes。
- boot loader 會逐一驗證 6 個 game chunks；少檔或 HTTP 錯誤會直接顯示，不再黑畫面。
- 靜態測試版目前因 GitHub connector 無法直接上傳聊天附件中的大型 GLB 二進位，使用內建 humanoid bone fallback avatar。
- 完整工作區仍保留兩個原始 GLB，並優先走 GLB + locomotion retarget；線上版與完整版本的玩法、武器、BUILD、VFX、音效與 Director 共用同一條 R5 邏輯。

## Play
GitHub Pages:
https://niwi7yming4.github.io/WEIMONGMINIGAME/jushoutouzu/

## Deployment
`.github/workflows/jushoutouzu-pages.yml` 會在 main 更新時把 `jushoutouzu/` 當作 Pages artifact 發布，不需要 Jekyll 或 build step。

授權：All Rights Reserved.
