/**
 * 履歷內容資料來源。
 * 頁面所有文字皆由此檔案提供，之後要更新履歷只需修改這裡。
 */

export interface SkillGroup {
  title: string
  icon: string
  items: string[]
}

export interface ValueItem {
  title: string
  description: string
}

export interface OpenSourceItem {
  name: string
  description: string
  url?: string
}

export interface TechStackRow {
  category: string
  technologies: string[]
}

export const profile = {
  name: 'ozakboy',
  title: '全端工程師',
  tagline: 'C# / .NET 10 × TypeScript / Vue / Nuxt',
  email: 'ozakboy@ozakboy.life',
  github: 'https://github.com/ozakboy',
  telegramQr: 'https://github.com/user-attachments/assets/956f56c6-e06b-4165-ae94-89e51358fa6e',
  resumePdf: 'https://github.com/ozakboy/CareerPortfolio/blob/main/README.pdf',
}

export const summary = {
  paragraphs: [
    '具備紮實軟體開發基礎的<strong>全端工程師</strong>，主力技術橫跨 <strong>C# / .NET 10</strong> 後端生態與 <strong>TypeScript / Vue / Nuxt</strong> 前端全端生態，能獨立完成從需求分析、系統架構設計、前後端開發、資料庫設計到容器化部署與雲端維運的完整產品開發週期。',
    '擅長將商業需求落地為可上線的系統，實戰經驗涵蓋 <strong>CRM 客戶經營平台、線上預約系統、社群評價平台、IoT 記錄型 PWA、品牌官網與內容管理系統</strong>，並深度整合 LINE、Telegram、Meta(Facebook)、Google、AI(Gemini) 等外部生態與 API。同時具備<strong>微服務架構、高頻交易系統、即時報價訊號串接（股票 / 期貨 / 虛擬貨幣）</strong>的開發能力。',
    '熟悉 Docker 容器化、CI/CD（GitHub Actions）、AWS 雲端（含 ARM/Graviton）、Nginx 反向代理與 SSL/CDN 等 DevOps 維運，並自行開發並發佈多個 NuGet / 開源套件。',
  ],
  highlights: [
    { label: '主要語言', value: 'C# (.NET 10 / .NET Framework)、TypeScript、JavaScript' },
    { label: '資料庫', value: 'PostgreSQL (含 PostGIS)、MSSQL、SQLite' },
    { label: '雲端 / 維運', value: 'AWS EC2、Docker、Nginx、GitHub Actions、Cloudflare' },
  ],
}

export const values: { intro: string; items: ValueItem[] } = {
  intro: '一個人就能扛起完整產品落地，從一句商業構想到正式上線維運，不必拼湊多個外包。',
  items: [
    {
      title: '從 0 到 1 打造產品',
      description: '聽懂你的商業需求，規劃系統架構並一手包辦前端、後端、資料庫與上線部署，交付能直接營運的完整系統。',
    },
    {
      title: '量身打造商業系統',
      description: 'CRM 客戶經營、線上預約、社群評價平台、品牌官網與內容管理（CMS）、行動 PWA 等，依你的業務流程客製，不是套版。',
    },
    {
      title: '打通行銷與客戶經營全流程',
      description: '串接 Meta(Facebook) 廣告名單、LINE / Telegram 自動回覆與推播、Email 通知，把「廣告 → 名單 → 觸客 → 成交」自動化，省下人力。',
    },
    {
      title: '導入 AI 提升效率',
      description: '整合 AI（如 Gemini）做內容分類、摘要與自動化處理，讓繁瑣作業自動完成。',
    },
    {
      title: '資料整合與自動化',
      description: '開發爬蟲與資料管線，自動蒐集、清洗、保存外部資料，化為可用的商業資訊。',
    },
    {
      title: '穩定上線與長期維運',
      description: '以 Docker + CI/CD 自動化部署，搭配雲端伺服器、反向代理、SSL 憑證與監控，確保系統長期穩定運作。',
    },
    {
      title: '既有系統升級與維護',
      description: '協助老舊系統技術升級、效能優化、資料庫遷移與功能擴充，延長系統壽命。',
    },
    {
      title: '彈性溝通與交付',
      description: '能用非技術語言說明方案與進度，依預算與時程提供合適的技術選擇。',
    },
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    title: '專案開發與架構設計',
    icon: '🧭',
    items: [
      '熟悉完整專案開發流程，能有效規劃、設計、執行專案',
      '具備需求分析、系統架構設計與技術選型能力',
      '微服務架構設計與單體 / SSR 全端架構實戰經驗',
      '撰寫架構決策紀錄（ADR）、版本控管與技術升級遷移規劃',
      '良好溝通協調能力，能與團隊協作完成商業專案',
    ],
  },
  {
    title: '後端開發（.NET 生態）',
    icon: '⚙️',
    items: [
      '熟悉 C# / .NET 10、ASP.NET Core MVC 與 Web API',
      'Entity Framework Core 10（Npgsql、NetTopologySuite 空間擴充、Migration）',
      '背景服務與排程（IHostedService / BackgroundService）',
      'Cookie / JWT 雙認證方案、DataProtection 金鑰管理',
      'Swagger / OpenAPI 文件、Microsoft.Extensions DI 設定綁定',
    ],
  },
  {
    title: '後端 / 全端開發（Node 生態）',
    icon: '🟢',
    items: [
      '熟悉 Nuxt 3 / Nuxt 4（Nitro server engine）檔案式路由 API',
      'TypeScript（strict 模式）、Node.js 20 / 22',
      'ORM：Prisma、Drizzle ORM、EF Core',
      '後端輸入驗證（Zod）、密碼雜湊（bcrypt / argon2）',
      'Server middleware 角色授權、排程任務（Nitro scheduled tasks）',
    ],
  },
  {
    title: '前端 / 網頁開發',
    icon: '🎨',
    items: [
      '熟悉 Vue 3、Vue Router、Pinia 狀態管理',
      'SSR / SSG 渲染（Nuxt）、Vite 建置工具',
      'UI 框架：PrimeVue、Naive UI、Bootstrap 5',
      '樣式：Tailwind CSS / DaisyUI、SCSS / Sass（SoC 關注點分離）',
      '表單驗證（VeeValidate）、PWA / Service Worker（Workbox）',
    ],
  },
  {
    title: '資料庫管理',
    icon: '🗄️',
    items: [
      'PostgreSQL 16（含 PostGIS 地理空間查詢）',
      'MSSQL、SQLite（better-sqlite3）',
      '資料表設計、Migration、Seed、索引與查詢優化',
      '應用層快取（MemoryCache）、檔案式儲存層設計（atomic write + mutex）',
    ],
  },
  {
    title: '即時通訊 / 機器人整合',
    icon: '🤖',
    items: [
      'LINE：Messaging API、LIFF 會員綁定、Rich Menu 動態切換、Webhook、行銷推播（圖文卡 / 輪播 / imagemap / 分眾受眾估算）',
      'Telegram Bot：長輪詢、ReplyKeyboard / callback 互動、定時提醒推播',
      'Discord Bot：開發平台與 API 整合',
      'Web Push（VAPID）、Email（SMTP / nodemailer）通知',
    ],
  },
  {
    title: '第三方 / AI 服務串接',
    icon: '🔗',
    items: [
      'Meta Graph API（Facebook / IG 廣告名單、Messenger）',
      'Google：Maps Geocoding API、OAuth 2.0 登入',
      'AI 整合：Gemini（裁罰公文白話分類、摘要生成）',
      '網站爬蟲與資料管線（AngleSharp、政府開放資料）',
      '報價訊號串接：股票 / 期貨 / 虛擬貨幣',
    ],
  },
  {
    title: 'DevOps / 伺服器維運',
    icon: '🚀',
    items: [
      'Docker 多階段建置、Docker Compose 多服務編排',
      'CI/CD：GitHub Actions（tag 觸發 → 自動 build/push 至 GHCR）',
      'AWS EC2（含 ARM64 / Graviton 原生映像）',
      'Nginx / Nginx Proxy Manager / OpenResty 反向代理',
      'SSL（Let\'s Encrypt 自動憑證）、Cloudflare CDN',
      'IP / Domain / SSL 購買與配置、PM2、healthcheck、volume 持久化',
      'Windows Server 與 Linux Ubuntu Server 系統管理',
    ],
  },
]

export const openSource: { intro: string; items: OpenSourceItem[] } = {
  intro: '於 GitHub 發佈多個 .NET 套件，提升開發效率與跨專案重用：',
  items: [
    {
      name: 'OzaLog',
      description: '輕量級 .NET 本地檔案 logger，HFT 等級非同步管線、零相依（net8+），專為加密貨幣 tick 流場景設計',
      url: 'https://github.com/ozakboy/OzaLog',
    },
    {
      name: 'ozakboy.PageData',
      description: '支援 List<T> / IQueryable<T> / IEnumerable<T> 的彈性分頁函式庫',
      url: 'https://github.com/ozakboy/ozakboy.PageData',
    },
    {
      name: 'ozakboy.Help',
      description: '將複雜語法簡化封裝的 .NET Core 工具庫',
      url: 'https://github.com/ozakboy/ozakboy.Help',
    },
    {
      name: 'ozakboy.Mail / ozakboy.FCM',
      description: '郵件發送與推播封裝',
      url: 'https://github.com/ozakboy?tab=repositories',
    },
    {
      name: 'Taiwan-news-crawlers',
      description: '.NET 台灣新聞爬蟲，數據物件化',
      url: 'https://github.com/ozakboy/Taiwan-news-crawlers',
    },
  ],
}

export const techStack: TechStackRow[] = [
  { category: '程式語言', technologies: ['C# (.NET 10 / .NET Framework)', 'TypeScript', 'JavaScript'] },
  { category: '後端框架', technologies: ['ASP.NET Core MVC / Web API', 'Nuxt 3 / 4（Nitro）'] },
  { category: '前端框架', technologies: ['Vue 3', 'Vue Router', 'Pinia', 'Vite'] },
  { category: 'UI / 樣式', technologies: ['PrimeVue', 'Naive UI', 'Bootstrap 5', 'Tailwind CSS / DaisyUI', 'SCSS'] },
  { category: '資料庫', technologies: ['PostgreSQL (PostGIS)', 'MSSQL', 'SQLite'] },
  { category: 'ORM / 資料存取', technologies: ['Entity Framework Core', 'Prisma', 'Drizzle ORM', '檔案式儲存層'] },
  { category: '認證 / 安全', technologies: ['JWT', 'Cookie', 'OAuth 2.0', 'bcrypt / argon2', 'Zod', 'DataProtection'] },
  { category: '容器 / CI-CD', technologies: ['Docker', 'Docker Compose', 'GitHub Actions', 'GHCR'] },
  { category: '雲端 / 網路', technologies: ['AWS EC2（ARM/Graviton）', 'Nginx / Nginx Proxy Manager', 'OpenResty', 'Cloudflare CDN', "Let's Encrypt SSL"] },
  { category: '機器人 / 通訊', technologies: ['LINE（Messaging / LIFF / Rich Menu）', 'Telegram Bot', 'Discord Bot', 'Web Push', 'SMTP'] },
  { category: '第三方 / AI', technologies: ['Meta Graph API', 'Google Maps / OAuth', 'Gemini AI', 'AngleSharp 爬蟲'] },
  { category: '測試 / 工具', technologies: ['Vitest', 'NPOI', 'Swagger / OpenAPI', 'PM2'] },
  { category: '領域應用', technologies: ['CRM', '線上預約', '社群平台', 'PWA', '高頻交易', '微服務', '報價串接'] },
]

export const navItems = [
  { id: 'summary', label: '職涯摘要' },
  { id: 'values', label: '我能做到什麼' },
  { id: 'skills', label: '工作技能' },
  { id: 'opensource', label: '開源套件' },
  { id: 'stack', label: '技術棧' },
  { id: 'contact', label: '聯繫方式' },
]
