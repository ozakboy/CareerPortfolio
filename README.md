
### 職涯摘要

具備紮實軟體開發基礎的**全端工程師**，主力技術橫跨 **C# / .NET 10** 後端生態與 **TypeScript / Vue / Nuxt** 前端全端生態，能獨立完成從需求分析、系統架構設計、前後端開發、資料庫設計到容器化部署與雲端維運的完整產品開發週期。

擅長將商業需求落地為可上線的系統，實戰經驗涵蓋 **CRM 客戶經營平台、線上預約系統、社群評價平台、IoT 記錄型 PWA、品牌官網與內容管理系統**，並深度整合 LINE、Telegram、Meta(Facebook)、Google、AI(Gemini) 等外部生態與 API。同時具備**微服務架構、高頻交易系統、即時報價訊號串接（股票 / 期貨 / 虛擬貨幣）**的開發能力。

熟悉 Docker 容器化、CI/CD（GitHub Actions）、AWS 雲端（含 ARM/Graviton）、Nginx 反向代理與 SSL/CDN 等 DevOps 維運，並自行開發並發佈多個 NuGet / 開源套件。

* **主要語言**：C# (.NET 10 / .NET Framework)、TypeScript、JavaScript
* **資料庫**：PostgreSQL (含 PostGIS)、MSSQL、SQLite
* **雲端 / 維運**：AWS EC2、Docker、Nginx、GitHub Actions、Cloudflare

---

### 工作技能

#### 專案開發與架構設計

* 熟悉完整專案開發流程，能有效規劃、設計、執行專案
* 具備需求分析、系統架構設計與技術選型能力
* 微服務架構設計與單體 / SSR 全端架構實戰經驗
* 撰寫架構決策紀錄（ADR）、版本控管與技術升級遷移規劃
* 良好溝通協調能力，能與團隊協作完成商業專案

#### 後端開發（.NET 生態）

* 熟悉 C# / .NET 10、ASP.NET Core MVC 與 Web API
* Entity Framework Core 10（Npgsql、NetTopologySuite 空間擴充、Migration）
* 背景服務與排程（IHostedService / BackgroundService）
* Cookie / JWT 雙認證方案、DataProtection 金鑰管理
* Swagger / OpenAPI 文件、Microsoft.Extensions DI 設定綁定

#### 後端 / 全端開發（Node 生態）

* 熟悉 Nuxt 3 / Nuxt 4（Nitro server engine）檔案式路由 API
* TypeScript（strict 模式）、Node.js 20 / 22
* ORM：Prisma、Drizzle ORM、EF Core
* 後端輸入驗證（Zod）、密碼雜湊（bcrypt / argon2）
* Server middleware 角色授權、排程任務（Nitro scheduled tasks）

#### 前端 / 網頁開發

* 熟悉 Vue 3、Vue Router、Pinia 狀態管理
* SSR / SSG 渲染（Nuxt）、Vite 建置工具
* UI 框架：PrimeVue、Naive UI、Bootstrap 5
* 樣式：Tailwind CSS / DaisyUI、SCSS / Sass（SoC 關注點分離）
* 表單驗證（VeeValidate）、PWA / Service Worker（Workbox）

#### 資料庫管理

* PostgreSQL 16（含 PostGIS 地理空間查詢）
* MSSQL、SQLite（better-sqlite3）
* 資料表設計、Migration、Seed、索引與查詢優化
* 應用層快取（MemoryCache）、檔案式儲存層設計（atomic write + mutex）

#### 即時通訊 / 機器人整合

* **LINE**：Messaging API、LIFF 會員綁定、Rich Menu 動態切換、Webhook、行銷推播（圖文卡 / 輪播 / imagemap / 分眾受眾估算）
* **Telegram Bot**：長輪詢、ReplyKeyboard / callback 互動、定時提醒推播
* **Discord Bot**：開發平台與 API 整合
* **Web Push**（VAPID）、Email（SMTP / nodemailer）通知

#### 第三方 / AI 服務串接

* Meta Graph API（Facebook / IG 廣告名單、Messenger）
* Google：Maps Geocoding API、OAuth 2.0 登入
* AI 整合：Gemini（裁罰公文白話分類、摘要生成）
* 網站爬蟲與資料管線（AngleSharp、政府開放資料）
* 報價訊號串接：股票 / 期貨 / 虛擬貨幣

#### DevOps / 伺服器維運

* Docker 多階段建置、Docker Compose 多服務編排
* CI/CD：GitHub Actions（tag 觸發 → 自動 build/push 至 GHCR）
* AWS EC2（含 ARM64 / Graviton 原生映像）
* Nginx / Nginx Proxy Manager / OpenResty 反向代理
* SSL（Let's Encrypt 自動憑證）、Cloudflare CDN
* IP / Domain / SSL 購買與配置、PM2、healthcheck、volume 持久化
* Windows Server 與 Linux Ubuntu Server 系統管理

---

### 專案實績

#### 🌸 Cellenya 妍雅 — 美容品牌官網 + 自助預約平台

> 美容 / 醫美品牌官方網站結合線上自助預約系統，顧客可自行查詢美容師空檔、線上預約並接收 LINE 通知；後台管理預約、排班、行銷推播與內容（商業專案）。

* **技術棧**：Nuxt 4 全端（Nitro，106 個 API 端點）、Vue 3.5 + PrimeVue 4、TypeScript、SQLite + **Prisma 7**、Vitest、Docker 多階段建置
* **外部整合**：LINE（LIFF 會員綁定、Bot Webhook、Rich Menu 動態切換、多媒體行銷推播 + 分眾受眾估算）、SMTP Email、Nitro 排程任務
* **技術亮點**：自助預約時段計算引擎（純函式設計、嚴謹時區處理、多據點排班 + 衝突檢測，Vitest 完整覆蓋）；三類角色（會員 / 後台 / 員工）JWT + Cookie 認證體系；深度 LINE 生態行銷漏斗

#### 🤝 Cohort — 客戶經營（CRM）平台（二代）

> 整合 Meta(Facebook) 廣告名單匯入、LINE / Messenger 訊息自動回覆與發送、業務輪詢分配與黑名單防護的一站式客戶經營平台。

* **技術棧**：微服務架構（4 個 **.NET 10** 服務）、Vue 3 + Vite 7 + Naive UI 後台 SPA、Nuxt 3 公開站、**PostgreSQL 16 + EF Core 10**、Docker Compose
* **外部整合**：Meta Graph API v22.0（廣告名單 / Messenger）、LINE（LineBotSDK / Webhook）、NPOI Excel 匯出、Swagger
* **技術亮點**：多平台行銷自動化（廣告投放 → 名單 → 觸客 → 業務分配全流程）；微服務化與容器遷移（.NET 6→10、SQL Server→PostgreSQL）；自製 NuGet 套件（日誌 / 分頁 / 工具）提升跨專案重用

#### 🚦 幼明燈 YouMingDeng — 幼兒園避雷與評價社群平台

> 整合政府開放資料的幼兒園名冊與裁罰紀錄，建立「歷史裁罰永久保存庫」，以地圖三色燈號、AI 白話標籤、家長社群、補助試算與 LINE / Email 推播，協助家長挑選幼兒園。

* **技術棧**：**C# / .NET 10** ASP.NET Core MVC、**PostgreSQL 16 + PostGIS 3.4**、EF Core 10 + NetTopologySuite、Bootstrap 5 + jQuery、Docker Compose、AWS EC2（Graviton）
* **外部整合**：Gemini AI（裁罰公文白話分類 / 摘要）、Google Maps Geocoding、LINE Login + Messaging API、政府開放資料爬蟲（AngleSharp）
* **技術亮點**：每日自動化政府資料管線 + 對抗下架的永久保存庫；PostGIS 地理空間 + 可稽核的機械式三色燈號；後台 / 前台會員雙 Cookie 認證的工程細節（antiforgery / DataProtection 內部機制）

#### 🍼 小奶瓶日記 Feeding Memo — 新生兒共同照護記錄 PWA

> 全家共同照護新生兒的記錄系統，記錄餵奶、排泄、睡眠、生長，並支援 Telegram 機器人快速記錄與定時提醒。

* **技術棧**：Nuxt 4 全端 **PWA**、Vue 3 + **Tailwind v4 + DaisyUI v5** + Pinia、**PostgreSQL 16 + Drizzle ORM**、@vite-pwa/nuxt + Workbox、Docker、AWS EC2（Graviton）
* **外部整合**：Telegram Bot（長輪詢）、Google OAuth 2.0、Web Push（VAPID）、Gmail SMTP、argon2 密碼雜湊
* **技術亮點**：單一全端整合多管道輸入（PWA + Telegram，統一 source 來源）；以「家庭」為邊界的授權設計（ADR-001）；Web Push + Telegram 雙通道的通知 / 排程體系

#### 🏠 MyHome 韓滷 — 個人接案形象站 + 內容管理後台

> 以 Nuxt SSR 單一應用打包的接案形象網站，前台展示服務 / 作品 / 文章，後台提供完整 CRUD 與 SEO 管理，單一 Docker 容器即可上線。

* **技術棧**：Nuxt 4 SSR、Vue 3 + PrimeVue 4、TypeScript、**檔案即資料庫**（Markdown + JSON）、pnpm
* **資料層**：自製資料存取層（atomic write + per-file mutex），內容用 `.md` + frontmatter 便於 Git 版控
* **部署**：Docker 多階段 + **GitHub Actions → GHCR**（打 tag 自動發版、semver 標籤）、Nginx Proxy Manager
* **技術亮點**：零資料庫全端架構（僅靠 `./data` 目錄備份遷移）；單容器 SSR + 完整 CI/CD「打 tag 即發版」；內建 CMS + SEO（JSON-LD、可注入追蹤碼、favicon 多尺寸自動產生）

> 📌 _LoanInsight（貸見解）等專案技術摘要整理中，後續補上。_

---

### 開源 / 自製套件

於 GitHub 發佈多個 .NET 套件，提升開發效率與跨專案重用：

* **OzaLog** — 輕量級 .NET 本地檔案 logger，HFT 等級非同步管線、零相依（net8+），專為加密貨幣 tick 流場景設計
* **ozakboy.PageData** — 支援 `List<T>` / `IQueryable<T>` / `IEnumerable<T>` 的彈性分頁函式庫
* **ozakboy.Help** — 將複雜語法簡化封裝的 .NET Core 工具庫
* **ozakboy.Mail / ozakboy.FCM** — 郵件發送與推播封裝
* **Taiwan-news-crawlers** — .NET 台灣新聞爬蟲，數據物件化

---

### 技術棧總覽

| 類別 | 技術 |
| --- | --- |
| 程式語言 | C# (.NET 10 / .NET Framework)、TypeScript、JavaScript |
| 後端框架 | ASP.NET Core MVC / Web API、Nuxt 3 / 4（Nitro） |
| 前端框架 | Vue 3、Vue Router、Pinia、Vite |
| UI / 樣式 | PrimeVue、Naive UI、Bootstrap 5、Tailwind CSS / DaisyUI、SCSS |
| 資料庫 | PostgreSQL (PostGIS)、MSSQL、SQLite |
| ORM / 資料存取 | Entity Framework Core、Prisma、Drizzle ORM、檔案式儲存層 |
| 認證 / 安全 | JWT、Cookie、OAuth 2.0、bcrypt / argon2、Zod、DataProtection |
| 容器 / CI-CD | Docker、Docker Compose、GitHub Actions、GHCR |
| 雲端 / 網路 | AWS EC2（ARM/Graviton）、Nginx / Nginx Proxy Manager、OpenResty、Cloudflare CDN、Let's Encrypt SSL |
| 機器人 / 通訊 | LINE（Messaging / LIFF / Rich Menu）、Telegram Bot、Discord Bot、Web Push、SMTP |
| 第三方 / AI | Meta Graph API、Google Maps / OAuth、Gemini AI、AngleSharp 爬蟲 |
| 測試 / 工具 | Vitest、NPOI、Swagger / OpenAPI、PM2 |
| 領域應用 | CRM、線上預約、社群平台、PWA、高頻交易、微服務、報價串接 |

---

### 聯繫方式

* **信箱**：awc0450056@gmail.com
* **Telegram**：

<img src="https://github.com/user-attachments/assets/956f56c6-e06b-4165-ae94-89e51358fa6e" width="300" height="300">
