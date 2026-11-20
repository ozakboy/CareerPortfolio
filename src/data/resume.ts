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
  /** 所屬體系，用來在卡片上標示顏色與分類 */
  family: string
  version: string
  description: string
  nuget: string
  github: string
}

export interface Project {
  icon: string
  name: string
  subtitle: string
  description: string
  stack: string[]
  integrations: string[]
  highlights: string[]
  /** 正式網站；桌面 / 本機工具或未公開的專案不填 */
  url?: string
  /** 卡片縮圖，放在 public/projects/ 下的檔名；沒有圖的專案不填 */
  image?: string
  /** 沒有網址時顯示的型態標籤，例如「桌面應用」 */
  kind?: string
}

export interface TechStackRow {
  category: string
  technologies: string[]
}

export const profile = {
  name: 'ozakboy',
  fullName: '蔡承訓',
  title: '全端工程師',
  tagline: 'C# / .NET 10 × TypeScript / Vue / Nuxt',
  email: 'ozakboy@ozakboy.life',
  github: 'https://github.com/ozakboy',
  lineId: 'chengxun0729',
  lineUrl: 'https://line.me/ti/p/~chengxun0729',
  /** 首屏肖像（放在 public/，分割效果左右各顯示一半） */
  portrait: 'portrait.webp',
}

/** 首屏 Bento 磁磚的文案 */
export const hero = {
  headline: '把商業構想做成能上線、能長期維運的產品。',
  lead: '需求分析、系統架構、.NET 後端、Vue / Nuxt 前端、資料庫、Docker 部署與雲端維運，一個人完整交付；並把 AI 導入產品與開發流程。',
  chips: ['C# / .NET 10', 'TypeScript', 'Vue / Nuxt', 'PostgreSQL', 'Docker / CI-CD', 'AWS', 'MCP Server', '本地 LLM'],
  now: {
    label: '現在在做',
    name: 'TideTrade',
    description: '台股當沖 AI 輔助桌面交易系統，.NET 10 + WPF，接永豐金與群益行情，5,900+ 自動化測試。',
    meta: 'v0.32 · 持續更新',
  },
  ai: {
    label: 'AI 導入',
    title: '讓 AI 真正進到產品與流程裡',
    description: '為產品開發 MCP Server、自架本地 LLM 讓資料不外流，並自建跨專案的 AI 開發基礎設施。',
  },
  status: '可接案 · 台灣 · 遠端協作',
}

export const summary = {
  paragraphs: [
    '具備紮實軟體開發基礎的<strong>全端工程師</strong>，主力技術橫跨 <strong>C# / .NET 10</strong> 後端生態與 <strong>TypeScript / Vue / Nuxt</strong> 前端全端生態，能獨立完成從需求分析、系統架構設計、前後端開發、資料庫設計到容器化部署與雲端維運的完整產品開發週期。',
    '擅長將商業需求落地為可上線的系統，實戰經驗涵蓋 <strong>CRM 客戶經營平台、線上預約系統、社群評價平台、IoT 記錄型 PWA、品牌官網與內容管理系統</strong>，並深度整合 LINE、Telegram、Meta(Facebook)、Google、AI(Gemini) 等外部生態與 API。同時具備<strong>微服務架構與交易系統</strong>實戰：台股當沖桌面系統接永豐金 / 群益行情、幣安永續合約引擎，從行情落地、策略回測、風控閘門到帳務對帳完整自建。',
    '熟悉 Docker 容器化、CI/CD（GitHub Actions）、AWS 雲端（含 ARM/Graviton）、Nginx 反向代理與 SSL/CDN 等 DevOps 維運，並自行開發並發佈 <strong>29 個 NuGet 套件</strong>（交易、LINE、AI、HTTP 管線自成體系）。',
    '積極將 AI 導入開發流程與產品：以 <strong>AI Coding</strong>（Claude Code 等 AI Agent 工具）加速需求拆解、程式生成、重構與 code review，並自建跨專案的 AI 開發基礎設施（技能、護欄、多車道路由）；為產品開發 <strong>MCP Server</strong> 讓外部 AI 安全操作平台；具備<strong>本地 LLM</strong> 自架部署與 <strong>ComfyUI</strong> AI 圖像生成工作流建置經驗，能在資料不外流的前提下提供私有化 AI 方案。',
  ],
  highlights: [
    { label: '主要語言', value: 'C# (.NET 10 / .NET Framework)、TypeScript、JavaScript' },
    { label: '資料庫', value: 'PostgreSQL (含 PostGIS)、MSSQL、SQLite' },
    { label: '雲端 / 維運', value: 'AWS EC2、Docker、Nginx、GitHub Actions、Cloudflare' },
    { label: 'AI 應用', value: 'AI Coding（Claude Code）、MCP Server、本地 LLM、ComfyUI、Gemini API' },
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
      description: '整合 AI（如 Gemini）做內容分類、摘要與自動化處理；可自架本地 LLM 讓資料不外流，並以 ComfyUI 建立 AI 圖像生成流程，讓繁瑣作業自動完成。',
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

export const projects: { intro: string; items: Project[] } = {
  intro: '以下為近期完整交付的商業與個人專案，涵蓋 AI 輔助交易桌面系統、本機服務控制中心、AI 開發基礎建設、AI 社群經營平台、品牌官網、CRM、社群平台、PWA 與內容管理系統。',
  items: [
    {
      icon: '📈',
      name: 'TideTrade',
      subtitle: '台股當沖 AI 輔助桌面交易系統',
      kind: 'Windows 桌面應用',
      image: 'tidetrade.webp',
      description:
        '接永豐金 Shioaji 與群益 SKCOM 行情，Tick、五檔、K 線全部落在本機 SQLite；用 Claude 討論策略、生成 C# 策略碼，Roslyn 即時編譯後本地回測，盤中以 shadow → advisory → auto 三段放權執行，每一筆都過風控閘門，帳務面板即時顯示扣完當沖稅費的淨損益（個人專案，真錢上線）。',
      stack: ['C# 14 / .NET 10', 'WPF + CommunityToolkit.Mvvm（三螢幕佈局、面板可拆出獨立視窗）', 'SQLite + EF Core（Tick 批次落地、本地優先回補）', 'Roslyn 動態編譯策略（隔離 AssemblyLoadContext + 參照白名單）', 'TradingView Lightweight Charts（WebView2 內嵌）', '安裝程式與 App 內自動更新'],
      integrations: [
        '永豐金 Shioaji 官方本機 HTTP + SSE（行情訂閱、下單、委託回報、帳務對帳）',
        '群益 SKCOM（外匯與海外期貨行情，兩家資料互補）',
        '證交所 / 櫃買 OpenAPI（日 K 回補、處置股、注意股、暫停交易）',
        'AI Copilot 可切換 Claude Code CLI、ChatGPT 或本地模型',
        '開放 Claude Code 直接讀取執行中 App 的資料庫、日誌與即時狀態',
      ],
      highlights: [
        '三週內從 M0 骨架迭代到 v0.32，十一個子專案分層（Core / Market / Engine / Backtest / Ai / App…），自動化測試 5,900+ 個',
        'AI Copilot：自然語言建立與修改策略 → 產生 C# → 本地回測（勝率、獲利因子、MDD、穩健性檢驗、逐日進出場）→ 一鍵上盤中 shadow；Copilot 能自己查資料、自我迴圈優化策略',
        '風控閘門：單日虧損鎖單、單筆張數與持倉檔數上限、13:20 強制平倉、一鍵全平；內建個人交易限制（每日買進額度、損益平衡檔數）',
        '逐筆大單偵測含「散單合併」抓拆成小單的程式單；處置股 / 注意股自動擋下；到價通知、持倉走弱警示',
        '相依政策三層制：自研 Ozakboy.* 套件優先，TradeKit.Shioaji / Capital / Indicators、Ai.ClaudeCli 等隨專案同步發佈到 NuGet',
      ],
    },
    {
      icon: '🛰️',
      name: 'LocalNexus',
      subtitle: '本機服務與 AI 控制中心',
      kind: '本機服務',
      image: 'localnexus.webp',
      description:
        '跑在開發機上的控制台：把本機的 Web 站台、API、資料庫、Ollama / ComfyUI、cloudflared 隧道放在同一張拓撲圖上，看得到即時狀態與 CPU / 記憶體 / VRAM 用量，可一鍵啟停、依相依連動、更新隧道；服務閒置自動停、有請求自動喚醒，開機後不用再開一堆命令列視窗。',
      stack: ['.NET 10 ASP.NET Core Minimal API + SignalR', 'EF Core SQLite（設定表與執行期表分離）', 'Vue 3 + Vite + TypeScript + Tailwind v4 + Pinia', '自寫 SVG 拓撲圖 / 軌道總覽 / 儀表元件（不裝圖表函式庫）', 'xUnit + Vitest', 'Windows 工作排程器常駐（最高權限、免 UAC、單一程序同時提供 API 與前端）'],
      integrations: [
        'cloudflared（接管啟動、log 串流、GitHub Releases 一鍵更新與失敗自動回滾、畫面上新增對外網址含 DNS）',
        'Ollama（接管啟停、推論代理、模型拉取 / 刪除、GPU 監看、ComfyUI 忙碌時自動讓出顯示卡記憶體）',
        'Telegram 告警（異常與恢復、更新結果、Agent 啟動）',
        'Windows 系統 API（LISTENING Port 對應 PID、程序接手、服務控制、DPAPI）',
      ],
      highlights: [
        '三天內以 M0 → M8 八個里程碑交付 v0.7，每個里程碑先凍結規格（docs/specs）再施工，後端 1,276 + 前端 578 個測試，正式環境真機驗收',
        '服務常駐代理：Agent 常駐原 Port、服務改聽內部 Port，閒置自動停、請求進來自動喚醒並帶起上游，支援 WebSocket 與串流',
        '相依連動啟停（循環檢測、失敗回滾）、意外結束自動重啟、Agent 重啟後依 PID + 啟動時間重新接手既有程序，控制中心重啟不讓服務跟著斷',
        '安全設計：PIN 登入 BCrypt + 連錯鎖定、Host / Origin 白名單擋 CSRF 與 DNS rebinding、只執行資料庫裡已設定的啟動指令、憑證只存路徑、log 推前端前先遮罩',
      ],
    },
    {
      icon: '🧰',
      name: 'claude-harness',
      subtitle: '個人跨專案 AI 開發基礎設施',
      kind: '開發工具',
      image: 'claude-harness.webp',
      description:
        '把 AI 輔助開發的規範、技能、角色與護欄集中成一個 repo，安裝後所有專案的 Claude Code 自動繼承，同一份來源連動到 OpenAI Codex；以「五車道」路由把工作依成本與風險分派到主模型、月額 headless、Codex、本地模型與媒體生成，判斷留在主迴圈、雜活往便宜的車道送。',
      stack: ['Claude Code Skills / Agents / Hooks / Plugin（mods）', 'PowerShell + Bash 雙平台安裝腳本（junction 連結，改了即生效）', 'Node.js 路由、狀態與帳本工具（dispatch / status / ledger）', 'Claude Agent SDK headless 派工', 'Ollama / Strata 本地模型車道'],
      integrations: [
        'OpenAI Codex（AGENTS.md、hooks、子代理設定自動產生，審查車道）',
        'Anthropic Console 月額 headless 執行',
        '本地 LLM（Ollama Anthropic 相容端點、Strata），互動視窗與 headless 共用隔離設定目錄',
        'ComfyUI / Qwen3-TTS / ACE-Step 媒體生成車道',
        '上游開源 skill 自動收割與供應鏈安全掃描（13+ 來源）',
      ],
      highlights: [
        '43 個 skill、5 個 agent、5 道 hook 護欄（攔危險 git 指令、禁讀機密檔、Bash 後掃描控制字元、本地車道禁止連網），62 個版本持續演進',
        '經驗回收迴圈：專案踩坑先記 inbox，收尾時消化回流成 skill 與全域規範，四個月累積回流逾百件實戰經驗',
        'AI 分工路由：五車道取代三層，帳本跨程序鎖與預留額、額度錯誤自動冷卻、GPU 忙碌讓渡；以五題改檔基準挑選本地模型',
        '使用率記錄與冷熱分區、skill 收錄前靜態掃描加語意複核、每週自動收割上游',
      ],
    },
    {
      icon: '🌱',
      name: 'Sower',
      subtitle: '全自動 AI 社群帳號經營與代購銷售平台',
      url: 'https://sower.ozakboy.life/',
      image: 'sower.webp',
      description:
        '集中經營品牌的 Facebook / Instagram / Threads / TikTok：每天到點自動發文、文案配圖 AI 生成、留言由 AI 草擬回覆，人工審核必經；再往下接代購限量搶購、訂閱金流、信箱 AI 分類與 MCP 接口，讓外部 AI 用 Sower 帳號授權後直接產稿送審、建立待上架商品，把「AI 寫稿 → 人審 → 自動發布 → 留言經營 → 下單收款」串成一條線。',
      stack: ['C# / .NET 10 Web API + 背景排程（到點發文、留言輪詢）', 'Sower.Worker 本機 Windows 服務（Claude 產文、分級）', 'Vue 3 後台 SPA', 'PostgreSQL + EF Core', 'MCP Server + OAuth 2.1 授權伺服器', 'Telegram Bot', 'Docker Compose（healthcheck、煙霧測試、回滾點）'],
      integrations: [
        'Meta Graph API（Facebook 粉絲專頁、Instagram、Threads 發布、串文與留言；資料刪除 / 解除授權回呼）',
        'TikTok 內容發布 API',
        'PayUni 訂閱金流（首刷、月繳 / 年繳、dunning）與 LINE Pay 官方直連並存',
        'LINE 群組「#上架」：傳一句話加照片就上架並產出文案、下單連結與待審貼文',
        'Ollama 本地模型（Gemma4 26B 留言草稿）、Gmail 信箱 AI 分類（規則書衍生模型、近鄰記憶、風險複核）',
        'MCP 工具集：品牌資訊、送稿 / 驗稿 / 改稿 / 撤稿、狀態查詢、素材庫、商品草稿',
      ],
      highlights: [
        '人在迴圈（Human-in-the-loop）設計：AI 送進的稿件與留言回覆一律待審，營運者按下發布才真正上線，兼顧自動化與品牌安全',
        'MCP OAuth 2.1 授權伺服器：外部 AI 用 Sower 帳號授權連接，送出類工具一律寫進待審佇列，AI 不得直接發送',
        '留言回覆 AI：先看對方在做什麼、學人工已回的寫法、每週自動檢討；可指定帳號不讓 AI 回，本地模型批次處理完即釋放顯存',
        '代購限量搶購：矩陣上架、保留單倒數、候補遞補、庫存異動與低庫存告警、客人自助退貨與部分出貨',
        '依各平台字數 / 媒體上限逐平台驗證，長文自動切成 Threads 串文或 FB / IG 留言續篇；撞到平台配額不標失敗、恢復後優先補發',
        '200+ 個版本持續迭代（v0.201）：成員逐頁權限、平台 token 加密落庫、頻道健康探測、授權失效自動停手',
      ],
    },
    {
      icon: '🌸',
      name: 'Cellenya 妍雅',
      subtitle: '美容品牌官網 + 自助預約平台',
      url: 'https://www.cellenya.com/',
      image: 'cellenya.webp',
      description:
        '美容 / 醫美品牌官方網站結合線上自助預約系統，顧客可自行查詢美容師空檔、線上預約並接收 LINE 通知；後台管理預約、排班、行銷推播與內容（商業專案）。',
      stack: ['Nuxt 4 全端（Nitro，106 個 API 端點）', 'Vue 3.5 + PrimeVue 4', 'TypeScript', 'SQLite + Prisma 7', 'Vitest', 'Docker 多階段建置'],
      integrations: ['LINE（LIFF 會員綁定、Bot Webhook、Rich Menu 動態切換、多媒體行銷推播 + 分眾受眾估算）', 'SMTP Email', 'Nitro 排程任務'],
      highlights: [
        '自助預約時段計算引擎：純函式設計、嚴謹時區處理、多據點排班 + 衝突檢測，Vitest 完整覆蓋',
        '三類角色（會員 / 後台 / 員工）JWT + Cookie 認證體系',
        '深度 LINE 生態行銷漏斗',
      ],
    },
    {
      icon: '🤝',
      name: 'Cohort',
      subtitle: '客戶經營（CRM）平台（二代）',
      kind: '企業內部系統',
      image: 'cohort.webp',
      description:
        '整合 Meta(Facebook) 廣告名單匯入、LINE / Messenger 訊息自動回覆與發送、業務輪詢分配與黑名單防護的一站式客戶經營平台。',
      stack: ['微服務架構（4 個 .NET 10 服務）', 'Vue 3 + Vite 7 + Naive UI 後台 SPA', 'Nuxt 3 公開站', 'PostgreSQL 16 + EF Core 10', 'Docker Compose'],
      integrations: ['Meta Graph API v22.0（廣告名單 / Messenger）', 'LINE（LineBotSDK / Webhook）', 'NPOI Excel 匯出', 'Swagger'],
      highlights: [
        '多平台行銷自動化：廣告投放 → 名單 → 觸客 → 業務分配全流程',
        '微服務化與容器遷移：.NET 6 → 10、SQL Server → PostgreSQL',
        '自製 NuGet 套件（日誌 / 分頁 / 工具）提升跨專案重用',
      ],
    },
    {
      icon: '🚦',
      name: '幼明燈 YouMingDeng',
      subtitle: '幼兒園避雷與評價社群平台',
      url: 'https://youmingdeng.ozakboy.life/',
      image: 'youmingdeng.webp',
      description:
        '整合政府開放資料的幼兒園名冊與裁罰紀錄，建立「歷史裁罰永久保存庫」，以地圖三色燈號、AI 白話標籤、家長社群、補助試算與 LINE / Email 推播，協助家長挑選幼兒園。',
      stack: ['C# / .NET 10 ASP.NET Core MVC', 'PostgreSQL 16 + PostGIS 3.4', 'EF Core 10 + NetTopologySuite', 'Bootstrap 5 + jQuery', 'Docker Compose', 'AWS EC2（Graviton）'],
      integrations: ['Gemini AI（裁罰公文白話分類 / 摘要）', 'Google Maps Geocoding', 'LINE Login + Messaging API（Ozakboy.Line 套件、關鍵字自動回覆、AI 提案待審）', 'Google Search Console / Bing Webmaster API / IndexNow', '政府開放資料爬蟲（AngleSharp）', 'MCP 唯讀工具（搜尋成效、AI 可見度）'],
      highlights: [
        '每日自動化政府資料管線 + 對抗下架的永久保存庫',
        'PostGIS 地理空間查詢 + 可稽核的機械式三色燈號',
        'SEO 內容工程：縣市 / 行政區裁罰紀錄頁、裁罰月報、詳情頁機械式時間軸敘述，全部由程式依欄位組字、不含評價',
        '搜尋成效進站：Google 與 Bing 數據同表比對，伺服器端計數 14 個 AI 爬蟲與 9 個 AI 來源的可見度（只記名稱與路徑，不記 IP）',
        '後台 / 前台會員雙 Cookie 認證的工程細節（antiforgery / DataProtection 內部機制），742 個自動化測試',
      ],
    },
    {
      icon: '🍼',
      name: '小奶瓶日記 Feeding Memo',
      subtitle: '新生兒共同照護記錄 PWA',
      url: 'https://petitebottle.ozakboy.life/',
      image: 'feeding-memo.webp',
      description:
        '全家共同照護新生兒的記錄系統，記錄餵奶、排泄、睡眠、生長，並支援 Telegram 機器人快速記錄與定時提醒。',
      stack: ['Nuxt 4 全端 PWA', 'Vue 3 + Tailwind v4 + DaisyUI v5 + Pinia', 'PostgreSQL 16 + Drizzle ORM', '@vite-pwa/nuxt + Workbox', 'Docker', 'AWS EC2（Graviton）'],
      integrations: ['Telegram Bot（長輪詢）', 'Google OAuth 2.0', 'Web Push（VAPID）', 'Gmail SMTP', 'argon2 密碼雜湊'],
      highlights: [
        '單一全端整合多管道輸入（PWA + Telegram，統一 source 來源）',
        '以「家庭」為邊界的授權設計（ADR-001）',
        'Web Push + Telegram 雙通道的通知 / 排程體系',
      ],
    },
    {
      icon: '🏠',
      name: 'MyHome 韓滷',
      subtitle: '個人接案形象站 + 內容管理後台',
      url: 'https://www.ozakboy.life/',
      image: 'myhome.webp',
      description:
        '以 Nuxt SSR 單一應用打包的接案形象網站，前台展示服務 / 作品 / 文章 / 方案與六步免費報價精靈，後台提供完整 CRUD、報價需求管理與 SEO 設定，單一 Docker 容器即可上線。',
      stack: ['Nuxt 4 SSR', 'Vue 3 + PrimeVue 4', 'TypeScript', '檔案即資料庫（Markdown + JSON）', 'pnpm'],
      integrations: ['自製資料存取層（atomic write + per-file mutex），內容以 .md + frontmatter 便於 Git 版控', 'Docker 多階段 + GitHub Actions → GHCR（打 tag 自動發版、semver 標籤）', 'Telegram 推播（報價需求即時通知）', 'MCP 連線（OAuth 授權，AI 助理直接管理網站內容）', 'Cloudflare 邊緣快取（部署後自動清除）', 'Nginx Proxy Manager'],
      highlights: [
        '零資料庫全端架構：僅靠 ./data 目錄即可備份遷移',
        '單容器 SSR + 完整 CI/CD「打 tag 即發版」',
        '六步免費報價精靈：右側即時試算區間，送出存後台並推 Telegram；後台依狀態追蹤到結案',
        '效能與 SEO：每頁 HTML 從 202KB 降到 75KB、圖片上傳自動轉 WebP、結構化資料補齊、為 600+ 篇文章預先調整列表與內頁效能',
        '內建 CMS + SEO：JSON-LD、可注入追蹤碼、favicon 多尺寸自動產生；後台入口自訂路徑，未登入一律回 404',
      ],
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
      'WPF 桌面應用（MVVM、多螢幕可拆面板、安裝程式與自動更新）、Roslyn 動態編譯與隔離載入',
      'SignalR 即時推播、Windows 系統整合（Port 對應 PID、程序接手、工作排程器、DPAPI）',
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
      '券商與交易所串接：永豐金 Shioaji、群益 SKCOM、幣安 USDⓈ-M（行情、下單、回報、帳務對帳）',
      'SEO 數據串接：Google Search Console、Bing Webmaster、IndexNow',
    ],
  },
  {
    title: 'AI 應用 / AI 輔助開發',
    icon: '🧠',
    items: [
      'AI Coding：以 Claude Code 等 AI Agent 工具輔助需求拆解、程式生成、重構、測試與 code review，提升開發效率',
      '本地 LLM：自架開源大型語言模型推論服務，建置私有化、離線可用的 AI 應用，資料不外流',
      'ComfyUI：AI 圖像生成工作流（workflow）建置與自動化，整合至內容產製流程',
      'LLM API 整合：Gemini 等雲端模型串接，內容分類、摘要生成與自動化處理',
      'MCP Server 開發：OAuth 2.1 授權、待審模式、唯讀工具，讓外部 AI 安全操作自家平台',
      'AI 開發基礎設施：Claude Code skills / agents / hooks 護欄、Claude Agent SDK headless 派工、多車道成本路由',
      'Prompt 設計與 AI 功能落地：將 AI 能力嵌入 CRM、CMS、交易系統等既有系統',
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
  intro: '於 NuGet 發佈 29 個 .NET 套件（多數支援 netstandard2.0 ～ net10.0，XML 註解中英雙語），走「自研優先、不依賴第三方社群套件」路線，交易、LINE、AI、HTTP 管線各自成體系，並在自家專案中實戰驗證。每個套件都附 NuGet 與 GitHub 原始碼連結：',
  items: [
    // 交易系統
    {
      name: 'Ozakboy.TradeKit.Abstractions',
      family: '交易',
      version: '0.8.0',
      description: '交易所中立的合約交易抽象層：委託、持倉、帳戶、K 線、盤口、成交等不可變模型，交易規則（tickSize / stepSize / minNotional）校正與 IExchangeClient 等介面，所有會失敗的操作一律回傳 Result<T>。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TradeKit.Abstractions',
      github: 'https://github.com/ozakboy/Ozakboy.TradeKit.Abstractions',
    },
    {
      name: 'Ozakboy.TradeKit.Binance',
      family: '交易',
      version: '0.6.0',
      description: '幣安 USDⓈ-M 永續合約實作：建構在 Ozakboy.Http 簽章 / 限流 / 重試管線之上，下單永不重試、WebSocket K 線與標記價格、使用者資料流在本地狀態需對帳時主動通知，測試網與主網不可混用。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TradeKit.Binance',
      github: 'https://github.com/ozakboy/Ozakboy.TradeKit.Binance',
    },
    {
      name: 'Ozakboy.TradeKit.Shioaji',
      family: '交易',
      version: '0.3.2',
      description: '永豐金 Shioaji 官方本機 HTTP server 的 .NET 10 用戶端：監督官方 server 行程、憑證只走子行程環境變數不落檔不進日誌，提供帳號、商品與行情查詢。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TradeKit.Shioaji',
      github: 'https://github.com/ozakboy/Ozakboy.TradeKit.Shioaji',
    },
    {
      name: 'Ozakboy.TradeKit.Capital',
      family: '交易',
      version: '0.3.0',
      description: '群益證券 SKCOM 的 .NET 10 用戶端：海外外匯與海期報價、國內期貨歷史 K 線、國內期權即時報價與海外五檔 / 十檔；唯讀設計，不做下單與出入金。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TradeKit.Capital',
      github: 'https://github.com/ozakboy/Ozakboy.TradeKit.Capital',
    },
    {
      name: 'Ozakboy.TradeKit.Indicators',
      family: '交易',
      version: '0.3.0',
      description: '零相依技術指標函式庫，每個指標都提供批次與增量（streaming）兩種版本：SMA、EMA、RSI、ATR、MACD、Bollinger Bands、Donchian、ADX、VWAP，全程 decimal、常數記憶體、明確暖機期。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TradeKit.Indicators',
      github: 'https://github.com/ozakboy/Ozakboy.TradeKit.Indicators',
    },
    {
      name: 'Ozakboy.Wpf.Charting',
      family: '桌面',
      version: '0.1.0',
      description: 'WPF 高效能金融圖表控制項：以 DrawingVisual 分層繪製、依像素欄位降採樣並保留最高最低，10,000 根 K 線縮放平移維持 60 FPS；提供 K 線、指標折線、進出場標記與停損停利水平線。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Wpf.Charting',
      github: 'https://github.com/ozakboy/Ozakboy.Wpf.Charting',
    },
    {
      name: 'Ozakboy.Mvvm',
      family: '桌面',
      version: '0.1.0',
      description: '零相依的 .NET MVVM 基礎設施：ObservableObject、RelayCommand 與 AsyncRelayCommand，預設不可重入、直接 Execute 也會重查 CanExecute，例外記錄而不讓 dispatcher 崩潰。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Mvvm',
      github: 'https://github.com/ozakboy/Ozakboy.Mvvm',
    },
    // HTTP 與基礎建設
    {
      name: 'Ozakboy.Http',
      family: '基礎',
      version: '0.3.4',
      description: '建構在官方 HttpClientFactory 與 DelegatingHandler 之上的 HTTP 管線，取代 RestSharp / Flurl / Polly：順序固定的 HMAC 簽章、加權多桶限流、冪等感知重試與脫敏日誌四段處理器。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Http',
      github: 'https://github.com/ozakboy/Ozakboy.Http',
    },
    {
      name: 'Ozakboy.WebSockets',
      family: '基礎',
      version: '0.2.1',
      description: '建立在 BCL ClientWebSocket 之上的長命 WebSocket 客戶端：自動重連（退避加抖動）、重連後重放訂閱、閒置逾時存活偵測，有界背壓且缺口通知絕不靜默丟棄。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.WebSockets',
      github: 'https://github.com/ozakboy/Ozakboy.WebSockets',
    },
    {
      name: 'Ozakboy.Security',
      family: '基礎',
      version: '0.1.1',
      description: '.NET 憑證與敏感資料保護：Windows DPAPI 金鑰保護（介面優先、非 Windows 可替換）、日誌敏感字串 / URL 參數 / JSON 欄位遮罩、AES-GCM 設定檔加密與 PBKDF2 金鑰衍生。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Security',
      github: 'https://github.com/ozakboy/Ozakboy.Security',
    },
    {
      name: 'Ozakboy.Core.Abstractions',
      family: '基礎',
      version: '0.3.0',
      description: '零相依的 .NET 基礎型別：Result / Result<T> 明確結果型別、帶幣別的 Money 金額值型別、Precision 十進位步進值對齊、RetryPolicy 重試策略描述，全部以 decimal 運算。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Core.Abstractions',
      github: 'https://github.com/ozakboy/Ozakboy.Core.Abstractions',
    },
    // LINE
    {
      name: 'Ozakboy.Line',
      family: 'LINE',
      version: '0.5.0',
      description: 'LINE Login、Messaging API 與 Webhook 的 .NET 用戶端，建構在 Ozakboy.Http 管線之上：預期失敗以 Result<T> 回傳、憑證遮罩後才進日誌、POST 只在帶 X-Line-Retry-Key 時才重試，id_token 本地驗證。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Line',
      github: 'https://github.com/ozakboy/Ozakboy.Line',
    },
    {
      name: 'Ozakboy.Line.AspNetCore',
      family: 'LINE',
      version: '0.5.0',
      description: '把 Ozakboy.Line 接上 ASP.NET Core：AddLineLogin() 註冊建立在官方 OAuthHandler 之上的 LINE Login 認證方案，自動處理 PKCE、nonce、加好友引導與好友狀態宣告，並掛載 Webhook 端點。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Line.AspNetCore',
      github: 'https://github.com/ozakboy/Ozakboy.Line',
    },
    {
      name: 'Ozakboy.Line.Mcp',
      family: 'LINE',
      version: '0.5.0',
      description: '把 Ozakboy.Line 包成一組 MCP 工具，讓外部 AI 查詢官方帳號狀態、擬廣播、改自動回覆規則與圖文選單；鐵則「AI 不得直接發送」，送出類工具只寫進待審佇列，核准權留給宿主程式。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Line.Mcp',
      github: 'https://github.com/ozakboy/Ozakboy.Line',
    },
    // AI
    {
      name: 'Ozakboy.Ai.Abstractions',
      family: 'AI',
      version: '0.1.0',
      description: '與供應商無關的語言模型抽象層：IAiCompletionClient 以「純文字進、型別化物件出」為唯一契約，結構化輸出由目標型別自動產生 JSON Schema 附進提示，請求、結果與 token / 費用計量皆為不可變模型。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Ai.Abstractions',
      github: 'https://github.com/ozakboy/Ozakboy.Ai.Abstractions',
    },
    {
      name: 'Ozakboy.Ai.ClaudeCli',
      family: 'AI',
      version: '0.1.0',
      description: 'Ozakboy.Ai.Abstractions 的本地實作：把已安裝的 Claude Code CLI 當子行程執行（headless stream-json），提示走 stdin 避開命令列長度上限，型別化 JSON 輸出含一次修復回合、行程樹逾時與憑證清洗的子環境。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Ai.ClaudeCli',
      github: 'https://github.com/ozakboy/Ozakboy.Ai.ClaudeCli',
    },
    // 通知與郵件
    {
      name: 'Ozakboy.Notify.Telegram',
      family: '通知',
      version: '0.1.0',
      description: '建構在 Ozakboy.Http 之上的 Telegram Bot 告警推播，取代 Telegram.Bot：訊息分級（Info / Warning / Critical）、超過 4096 字元依行切分且不切斷字素、限流與 429 retry_after、token 遮罩。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Notify.Telegram',
      github: 'https://github.com/ozakboy/Ozakboy.Notify.Telegram',
    },
    {
      name: 'Ozakboy.Mail',
      family: '通知',
      version: '1.2.0',
      description: '一個設定區段、一次呼叫就能從 .NET 寄出系統郵件：同步 SendMail 與非同步 SendMailAsync，支援多收件人、副本與附件。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Mail',
      github: 'https://github.com/ozakboy/ozakboy.Mail',
    },
    {
      name: 'Ozakboy.FCM',
      family: '通知',
      version: '2.0.0',
      description: 'Google Firebase Cloud Messaging HTTP v1 推播套件：單一裝置、主題、條件與批次推播，主題訂閱 / 取消訂閱，支援 Android / iOS / Web 平台專屬設定。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.FCM',
      github: 'https://github.com/ozakboy/ozakboy.FCM',
    },
    {
      name: 'Ozakboy.Gmail',
      family: '通知',
      version: '2.1.0',
      description: '輕量、純非同步的 Gmail REST API 與 Google OAuth 2.0 客戶端，不依賴 Google.Apis：列出、讀取與寄送郵件、token 交換與更新，token 由你自己保管。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.Gmail',
      github: 'https://github.com/ozakboy/ozakboy.Gmail',
    },
    // 日誌
    {
      name: 'OzaLog',
      family: '日誌',
      version: '3.3.0',
      description: '精簡的 .NET 本地檔案 logger：一行靜態 API（LOG.Info_Log）、不需 DI 與 LoggerFactory、HFT 等級的非同步寫入管線，net8+ 零 NuGet 相依，為加密貨幣 tick 流場景設計。',
      nuget: 'https://www.nuget.org/packages/OzaLog',
      github: 'https://github.com/ozakboy/OzaLog',
    },
    {
      name: 'ozakboy.NLOG',
      family: '日誌',
      version: '2.1.0',
      description: 'OzaLog 的前身：輕量高效能的 .NET 日誌函式庫，非同步寫入、智慧檔案管理與豐富設定選項（原始碼已併入 OzaLog 儲存庫）。',
      nuget: 'https://www.nuget.org/packages/ozakboy.NLOG',
      github: 'https://github.com/ozakboy/OzaLog',
    },
    // 台灣在地
    {
      name: 'Ozakboy.TaiwanKit.TaiwanHolidays',
      family: '台灣',
      version: '1.0.1',
      description: '台灣國定假日與補班日查詢（2017–2027）：內嵌行政院人事總處官方行事曆資料，離線可用。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TaiwanKit.TaiwanHolidays',
      github: 'https://github.com/ozakboy/Ozakboy.TaiwanKit.TaiwanHolidays',
    },
    {
      name: 'Ozakboy.TaiwanKit.TwIdValidator',
      family: '台灣',
      version: '1.0.1',
      description: '台灣身分證（含居留證號）、統一編號與手機號碼驗證，回傳詳細失敗原因。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TaiwanKit.TwIdValidator',
      github: 'https://github.com/ozakboy/Ozakboy.TaiwanKit.TwIdValidator',
    },
    {
      name: 'Ozakboy.TaiwanKit.Ganzhi.NET',
      family: '台灣',
      version: '1.0.1',
      description: '農曆、二十四節氣（分鐘級精度）與干支四柱轉換（1901–2100）：國曆與農曆互轉、生肖、閏月處理。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.TaiwanKit.Ganzhi.NET',
      github: 'https://github.com/ozakboy/Ozakboy.TaiwanKit.Ganzhi.NET',
    },
    // 工具
    {
      name: 'Ozakboy.PageData',
      family: '工具',
      version: '1.2.1',
      description: '輕量彈性的 .NET 分頁函式庫：List<T>、IQueryable<T> 與 IEnumerable<T> 一個擴充方法就能分頁。',
      nuget: 'https://www.nuget.org/packages/Ozakboy.PageData',
      github: 'https://github.com/ozakboy/ozakboy.PageData',
    },
    {
      name: 'ozakboy.Help',
      family: '工具',
      version: '1.1.0',
      description: '把複雜語法簡單化的工具庫：日期時間處理、列舉擴充、JSON 處理與例外處理等常用功能。',
      nuget: 'https://www.nuget.org/packages/ozakboy.Help',
      github: 'https://github.com/ozakboy/ozakboy.Help',
    },
    {
      name: 'ozakboy.DirectoryTreeGenerator',
      family: '工具',
      version: '1.0.0',
      description: '把目錄結構產生成帶圖示的 Markdown 文件，方便寫專案說明與技術文件。',
      nuget: 'https://www.nuget.org/packages/ozakboy.DirectoryTreeGenerator',
      github: 'https://github.com/ozakboy/DirectoryTreeGenerator',
    },
    {
      name: 'Taiwan-news-crawlers',
      family: '工具',
      version: '1.4.11',
      description: '.NET 台灣新聞網站爬蟲，抓回來的新聞直接物件化，方便後續處理與分析。',
      nuget: 'https://www.nuget.org/packages/Taiwan-news-crawlers',
      github: 'https://github.com/ozakboy/Taiwan-news-crawlers',
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
  { category: '機器人 / 通訊', technologies: ['LINE（Messaging / LIFF / Rich Menu）', 'Telegram Bot', 'Discord Bot', 'Web Push', 'SMTP', 'Gmail API'] },
  { category: '桌面應用', technologies: ['WPF + CommunityToolkit.Mvvm', 'WebView2', 'Roslyn 動態編譯', 'Windows 工作排程器 / DPAPI'] },
  { category: '第三方服務', technologies: ['Meta Graph API', 'Google Maps / OAuth', '永豐金 Shioaji', '群益 SKCOM', '幣安 API', 'Search Console / Bing Webmaster', 'AngleSharp 爬蟲'] },
  { category: 'AI 應用', technologies: ['AI Coding（Claude Code）', 'Claude Agent SDK', 'MCP Server 開發', '本地 LLM（Ollama）', 'ComfyUI', 'Gemini API'] },
  { category: '測試 / 工具', technologies: ['MSTest / xUnit', 'Vitest', 'NPOI', 'Swagger / OpenAPI', 'PM2'] },
  { category: '領域應用', technologies: ['CRM', '線上預約', '社群平台', 'PWA', '當沖 / 合約交易系統', '微服務', '桌面工具', 'AI 應用'] },
]

export const navItems = [
  { id: 'summary', label: '職涯摘要' },
  { id: 'values', label: '我能做到什麼' },
  { id: 'projects', label: '專案實績' },
  { id: 'skills', label: '工作技能' },
  { id: 'opensource', label: '開源套件' },
  { id: 'stack', label: '技術棧' },
  { id: 'contact', label: '聯繫方式' },
]
