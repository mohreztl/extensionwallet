// Custom Vector SVG Logos for all 9 Cryptocurrencies
const TOKEN_SVGS = {
  BTC: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#F7931A"/><path d="M24.2 15.7c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.7-.4-.7 2.6c-.4-.1-.9-.2-1.4-.3l.7-2.6-1.7-.4-.7 2.7c-.4-.1-.7-.2-1-.3l-2.3-.6-.4 1.8s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.2c.1 0 .2.1.3.1-.1 0-.2-.1-.3-.1l-1.1 4.5c-.1.2-.3.5-.8.4 0 0-1.2-.3-1.2-.3l-.8 1.9 2.2.5c.4.1.8.2 1.2.3l-.7 2.8 1.7.4.7-2.7c.5.1.9.2 1.4.3l-.7 2.7 1.7.4.7-2.8c2.9.5 5 .3 5.9-2.3.7-2.1 0-3.3-1.5-4.1 1.1-.2 1.9-1 2.1-2.5zm-3.8 5.3c-.5 2.1-4 .9-5.1.7l.9-3.7c1.1.3 4.7.8 4.2 3zm.5-5.3c-.5 1.9-3.4.9-4.3.7l.8-3.3c.9.2 4 .7 3.5 2.6z" fill="#fff"/></svg>`,
  ETH: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#627EEA"/><path d="M18 7l-6.8 11.2L18 22.2l6.8-4L18 7z" fill="#fff" fill-opacity=".85"/><path d="M18 23.6l-6.8-4L18 29l6.8-9.4-6.8 4z" fill="#fff"/></svg>`,
  USDT: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#26A17B"/><path d="M19.9 16.4v-2.2h4.6v-3H11.5v3h4.6v2.2c-4.2.2-7.4 1.1-7.4 2.1s3.2 1.9 7.4 2.1v6.4h3.8v-6.4c4.2-.2 7.4-1.1 7.4-2.1s-3.2-1.9-7.4-2.1zm-1.9 3.2c-3.5 0-6.4-.6-6.4-1.3 0-.6 2.3-1.1 5.4-1.3v2c.3 0 .7.1 1 .1s.7 0 1-.1v-2c3.1.2 5.4.7 5.4 1.3 0 .7-2.9 1.3-6.4 1.3z" fill="#fff"/></svg>`,
  BNB: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#F0B90B"/><path d="M14.3 15.6L18 11.9l3.7 3.7 2.2-2.2L18 7.5l-5.9 5.9 2.2 2.2zm-4.8 2.4l2.2-2.2 2.2 2.2-2.2 2.2-2.2-2.2zm4.8 2.4L18 24.1l3.7-3.7 2.2 2.2L18 28.5l-5.9-5.9 2.2-2.2zm9.8-2.4l2.2-2.2 2.2 2.2-2.2 2.2-2.2-2.2zM18 15.8l2.2 2.2-2.2 2.2-2.2-2.2 2.2-2.2z" fill="#fff"/></svg>`,
  SOL: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#141824"/><path d="M10.5 22.8c.2-.2.5-.3.8-.3h15.2c.7 0 1 .8.5 1.3l-2.5 2.5c-.2.2-.5.3-.8.3H8.5c-.7 0-1-.8-.5-1.3l2.5-2.5zm0-12.5c.2-.2.5-.3.8-.3h15.2c.7 0 1 .8.5 1.3l-2.5 2.5c-.2.2-.5.3-.8.3H8.5c-.7 0-1-.8-.5-1.3l2.5-2.5zm15 6.1c-.2-.2-.5-.3-.8-.3H9.5c-.7 0-1 .8-.5 1.3l2.5 2.5c.2.2.5.3.8.3h15.2c.7 0 1-.8.5-1.3l-2.5-2.5z" fill="url(#solG)"/><defs><linearGradient id="solG" x1="8" y1="26" x2="28" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#9945FF"/><stop offset="1" stop-color="#14F195"/></linearGradient></defs></svg>`,
  XRP: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#23292F"/><path d="M24.6 10h2.6l-5.6 5.5c-2 2-5.2 2-7.2 0L8.8 10h2.6l4.3 4.2c1.3 1.3 3.3 1.3 4.6 0L24.6 10zM11.4 26H8.8l5.6-5.5c2-2 5.2-2 7.2 0L27.2 26h-2.6l-4.3-4.2c-1.3-1.3-3.3-1.3-4.6 0L11.4 26z" fill="#fff"/></svg>`,
  ADA: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#0033AD"/><circle cx="18" cy="18" r="3.2" stroke="#fff" stroke-width="1.8"/><circle cx="18" cy="10.5" r="1.5" fill="#fff"/><circle cx="18" cy="25.5" r="1.5" fill="#fff"/><circle cx="11.5" cy="14.2" r="1.5" fill="#fff"/><circle cx="24.5" cy="21.8" r="1.5" fill="#fff"/><circle cx="11.5" cy="21.8" r="1.5" fill="#fff"/><circle cx="24.5" cy="14.2" r="1.5" fill="#fff"/></svg>`,
  DOGE: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#C2A633"/><path d="M12 10h6.2c4.8 0 7.8 3.1 7.8 8s-3 8-7.8 8H12V10zm3.2 2.8v10.4h2.8c3 0 4.7-2 4.7-5.2 0-3.2-1.7-5.2-4.7-5.2h-2.8zM10 17h8v2h-8v-2z" fill="#fff"/></svg>`,
  TRX: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="11" fill="#EF0027"/><path d="M9.5 10.2l16.2 3.1-7.2 13.5L9.5 10.2zm2.8 2.2l5.8 10.7 4.7-8.8-10.5-1.9z" fill="#fff"/></svg>`,
};

// 9 Supported Tokens
const SUPPORTED_TOKENS = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    network: "Bitcoin",
    binancePair: "BTCUSDT",
    color: "#F7931A",
    fallbackPrice: 89500.0,
    defaultBuyPrice: 74200.0,
    fallbackChange: 2.15,
    demoAddress: "bc1qnovafoliodemo8x92k4m7w3p5r9t2v6y",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    network: "ERC20",
    binancePair: "ETHUSDT",
    color: "#627EEA",
    fallbackPrice: 3120.5,
    defaultBuyPrice: 2650.0,
    fallbackChange: 1.42,
    demoAddress: "0x71CNovaFolioDemo89A4E2b9F1029384756",
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    network: "Multi-Chain",
    binancePair: null,
    color: "#26A17B",
    fallbackPrice: 1.0,
    defaultBuyPrice: 1.0,
    fallbackChange: 0.01,
    demoAddress: "TNovafolioDemoTRC20Usdt9823471238",
  },
  {
    symbol: "BNB",
    name: "BNB",
    network: "BEP20",
    binancePair: "BNBUSDT",
    color: "#F0B90B",
    fallbackPrice: 645.2,
    defaultBuyPrice: 580.0,
    fallbackChange: 0.88,
    demoAddress: "0xBNBNaFolioDemo71C89A4E2b9F10293847",
  },
  {
    symbol: "SOL",
    name: "Solana",
    network: "Solana",
    binancePair: "SOLUSDT",
    color: "#9945FF",
    fallbackPrice: 192.4,
    defaultBuyPrice: 148.0,
    fallbackChange: 4.12,
    demoAddress: "SoLNovaFolioDemo9x82kLp3mQ7vR5tW2y",
  },
  {
    symbol: "XRP",
    name: "XRP",
    network: "XRP Ledger",
    binancePair: "XRPUSDT",
    color: "#38BDF8",
    fallbackPrice: 2.35,
    defaultBuyPrice: 1.65,
    fallbackChange: -0.95,
    demoAddress: "rNovaFolioDemoXRP827364519283",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    network: "Cardano",
    binancePair: "ADAUSDT",
    color: "#3B82F6",
    fallbackPrice: 0.98,
    defaultBuyPrice: 0.72,
    fallbackChange: 1.75,
    demoAddress: "addr1qnovafoliodemocardano92837465",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    network: "Dogecoin",
    binancePair: "DOGEUSDT",
    color: "#EAB308",
    fallbackPrice: 0.34,
    defaultBuyPrice: 0.22,
    fallbackChange: 3.6,
    demoAddress: "DNovaFolioDemoDogeCoin82736451",
  },
  {
    symbol: "TRX",
    name: "TRON",
    network: "TRC20",
    binancePair: "TRXUSDT",
    color: "#EF0027",
    fallbackPrice: 0.24,
    defaultBuyPrice: 0.19,
    fallbackChange: 0.45,
    demoAddress: "TNovafolioDemoTronAddress98273645",
  },
];

// Staking Pools (Section 2: Earn / Staking Simulator)
const STAKING_POOLS = [
  { symbol: "USDT", apy: 8.2, lockLabel: "Flexible Vault" },
  { symbol: "SOL", apy: 6.8, lockLabel: "Validator Staking" },
  { symbol: "TRX", apy: 5.2, lockLabel: "Super Representative" },
  { symbol: "ADA", apy: 4.5, lockLabel: "Epoch Delegation" },
  { symbol: "BNB", apy: 3.9, lockLabel: "BNB Vault" },
  { symbol: "ETH", apy: 3.4, lockLabel: "Liquid Staking" },
];

// Display Currencies
const CURRENCIES = {
  USD: { code: "USD", symbol: "$", rate: 1, decimals: 2 },
  EUR: { code: "EUR", symbol: "€", rate: 0.92, decimals: 2 },
  GBP: { code: "GBP", symbol: "£", rate: 0.79, decimals: 2 },
};

const STORAGE_KEY = "novafolio_simulator_state_v4";

const DEFAULT_STATE = {
  password: "MoHreZ1399####",
  currency: "USD",
  autoLockMinutes: 5,
  lastUnlockedActivityAt: 0,
  hideBalances: false,
  hideZeroTokens: false,
  activeWalletId: "portfolio-1",
  wallets: [
    {
      id: "portfolio-1",
      name: "Main Portfolio",
      balances: {
        BTC: 5,
        ETH: 12.5,
        USDT: 15000,
        BNB: 25,
        SOL: 120,
        XRP: 5000,
        ADA: 4000,
        DOGE: 10000,
        TRX: 15000,
      },
      avgBuyPrices: {
        BTC: 74200,
        ETH: 2650,
        USDT: 1.0,
        BNB: 580,
        SOL: 148,
        XRP: 1.65,
        ADA: 0.72,
        DOGE: 0.22,
        TRX: 0.19,
      },
      stakedBalances: {
        USDT: 5000,
        SOL: 50,
        ETH: 4,
        BNB: 10,
        ADA: 2000,
        TRX: 5000,
      },
    },
    {
      id: "portfolio-2",
      name: "Trading Sandbox",
      balances: {
        BTC: 0.45,
        ETH: 3.2,
        USDT: 4200,
        BNB: 4.5,
        SOL: 20,
        XRP: 0,
        ADA: 0,
        DOGE: 0,
        TRX: 0,
      },
      avgBuyPrices: {
        BTC: 82000,
        ETH: 2900,
        USDT: 1.0,
        BNB: 600,
        SOL: 170,
        XRP: 2.0,
        ADA: 0.85,
        DOGE: 0.3,
        TRX: 0.22,
      },
      stakedBalances: {
        USDT: 1000,
        SOL: 10,
        ETH: 0,
        BNB: 0,
        ADA: 0,
        TRX: 0,
      },
    },
  ],
  contacts: [
    {
      id: "c-1",
      name: "Hardware Cold Vault",
      symbol: "BTC",
      address: "bc1qcoldvaultdemo98237492837492",
    },
    {
      id: "c-2",
      name: "Exchange Deposit Desk",
      symbol: "USDT",
      address: "0x71CExchangeDeskDemo982734982734",
    },
  ],
  priceAlerts: [
    {
      id: "al-1",
      symbol: "BTC",
      condition: "above",
      targetPrice: 100000,
      triggered: false,
    },
    {
      id: "al-2",
      symbol: "ETH",
      condition: "below",
      targetPrice: 2500,
      triggered: false,
    },
  ],
  activityLog: [
    {
      id: "tx-init-1",
      type: "Receive",
      symbol: "BTC",
      details: "+5 BTC (Initial Allocation)",
      usdValue: 447500,
      timestamp: Date.now() - 3600 * 1000 * 5,
      hash: "0x94a1...e82b",
    },
    {
      id: "tx-init-2",
      type: "Stake",
      symbol: "SOL",
      details: "Staked 50 SOL @ 6.8% APY",
      usdValue: 9620,
      timestamp: Date.now() - 3600 * 1000 * 2,
      hash: "0x31f8...c019",
    },
  ],
};

let appState = structuredClone(DEFAULT_STATE);
let isUnlocked = false;
let selectedDetailSymbol = "BTC";
let selectedDetailTimeframe = "24H";
let selectedEarnMonths = 12;
let activeStakeSymbol = "SOL";
let marketData = {};

// Initialize fallback market data
SUPPORTED_TOKENS.forEach((t) => {
  marketData[t.symbol] = {
    price: t.fallbackPrice,
    change24h: t.fallbackChange,
  };
});

// Ensure wallet sub-objects exist after loading older state
function normalizeWallets() {
  if (!Array.isArray(appState.contacts)) appState.contacts = structuredClone(DEFAULT_STATE.contacts);
  if (!Array.isArray(appState.priceAlerts)) appState.priceAlerts = structuredClone(DEFAULT_STATE.priceAlerts);
  appState.wallets.forEach((w) => {
    if (!w.avgBuyPrices) {
      w.avgBuyPrices = {};
      SUPPORTED_TOKENS.forEach((t) => {
        w.avgBuyPrices[t.symbol] = t.defaultBuyPrice;
      });
    }
    if (!w.stakedBalances) {
      w.stakedBalances = { USDT: 0, SOL: 0, ETH: 0, BNB: 0, ADA: 0, TRX: 0 };
    }
  });
}

// Storage Helpers
async function loadState() {
  try {
    if (typeof browser !== "undefined" && browser.storage && browser.storage.local) {
      const res = await browser.storage.local.get(STORAGE_KEY);
      if (res && res[STORAGE_KEY]) {
        appState = { ...structuredClone(DEFAULT_STATE), ...res[STORAGE_KEY] };
        normalizeWallets();
        return;
      }
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      appState = { ...structuredClone(DEFAULT_STATE), ...JSON.parse(raw) };
      normalizeWallets();
    }
  } catch (err) {
    console.warn("Storage load fallback:", err);
  }
}

async function saveState() {
  try {
    if (typeof browser !== "undefined" && browser.storage && browser.storage.local) {
      await browser.storage.local.set({ [STORAGE_KEY]: appState });
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.warn("Storage save error:", err);
  }
}

function getActiveWallet() {
  return (
    appState.wallets.find((w) => w.id === appState.activeWalletId) ||
    appState.wallets[0]
  );
}

function showToast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    el.classList.add("hidden");
  }, 2200);
}

// Currency & Number Formatters
function formatFiat(usdValue, forceVisible = false) {
  if (appState.hideBalances && !forceVisible) return "••••••";
  const cur = CURRENCIES[appState.currency] || CURRENCIES.USD;
  const converted = usdValue * cur.rate;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cur.code,
    minimumFractionDigits: cur.decimals,
    maximumFractionDigits: cur.decimals,
  }).format(converted);
}

function formatUnitPrice(usdValue) {
  const cur = CURRENCIES[appState.currency] || CURRENCIES.USD;
  const converted = usdValue * cur.rate;
  const digits = converted < 1 ? 4 : 2;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cur.code,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(converted);
}

function formatTokenQty(qty) {
  if (appState.hideBalances) return "••••";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  }).format(qty);
}

// SVG Sparkline Generator
function buildSparklineSVG(seedStr, changePct, width = 96, height = 36, pointsCount = 16) {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash * 31 + seedStr.charCodeAt(i)) % 9973;
  }

  const isUp = changePct >= 0;
  const strokeColor = isUp ? "#10b981" : "#f43f5e";
  const pts = [];
  for (let i = 0; i < pointsCount; i++) {
    const progress = i / (pointsCount - 1);
    const wave = Math.sin(progress * Math.PI * 2.5 + hash) * 0.28 + Math.cos(progress * 5 + hash) * 0.15;
    const trend = (isUp ? progress : 1 - progress) * 0.55;
    const norm = Math.max(0.08, Math.min(0.92, 0.2 + trend + wave * 0.5));
    const x = (progress * (width - 6) + 3).toFixed(1);
    const y = (height - norm * (height - 8) - 4).toFixed(1);
    pts.push(`${x},${y}`);
  }

  const gradId = `sp_${seedStr.replace(/[^a-zA-Z0-9]/g, "")}_${width}`;
  const firstX = 3;
  const lastX = width - 3;
  const areaPoints = `${firstX},${height} ${pts.join(" ")} ${lastX},${height}`;

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="${height}" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${strokeColor}" stop-opacity="0.32"/>
          <stop offset="100%" stop-color="${strokeColor}" stop-opacity="0.0"/>
        </linearGradient>
      </defs>
      <polygon points="${areaPoints}" fill="url(#${gradId})" />
      <polyline points="${pts.join(" ")}" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>
  `;
}

// SVG Donut Chart Generator for Analytics Tab
function buildDonutChartSVG(slices) {
  const size = 94;
  const r = 34;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;

  if (!slices.length) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1c2539" stroke-width="12"/>
    </svg>`;
  }

  let offset = 0;
  const circles = slices.map((s) => {
    const dash = (s.pct / 100) * circumference;
    const gap = circumference - dash;
    const el = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.color}" stroke-width="12"
      stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}"
      stroke-dashoffset="${(-offset).toFixed(2)}"
      transform="rotate(-90 ${cx} ${cy})" />`;
    offset += dash;
    return el;
  });

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    ${circles.join("")}
    <text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="800">${slices.length} Assets</text>
  </svg>`;
}

// Deterministic SVG QR Code Generator
function buildDemoQrSVG(addressText) {
  const size = 15;
  const cells = [];
  let seed = 2166136261;
  for (let i = 0; i < addressText.length; i++) {
    seed ^= addressText.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }

  const isFinder = (r, c) =>
    (r < 4 && c < 4) || (r < 4 && c >= size - 4) || (r >= size - 4 && c < 4);

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      let filled = false;
      if (isFinder(r, c)) {
        const lr = r >= size - 4 ? r - (size - 4) : r;
        const lc = c >= size - 4 ? c - (size - 4) : c;
        filled = lr === 0 || lr === 3 || lc === 0 || lc === 3 || (lr >= 1 && lr <= 2 && lc >= 1 && lc <= 2);
      } else {
        const bit = Math.abs(Math.imul(seed ^ (r * 37 + c * 101), 2654435761)) % 11;
        filled = bit < 5;
      }
      if (filled) {
        cells.push(`<rect x="${c * 8 + 4}" y="${r * 8 + 4}" width="7" height="7" rx="1.5" fill="#0b0f19"/>`);
      }
    }
  }
  return `<svg viewBox="0 0 128 128" width="132" height="132" xmlns="http://www.w3.org/2000/svg">${cells.join("")}</svg>`;
}

// Record an Activity Log entry
async function logActivity(type, symbol, details, usdValue) {
  const randomHex = Array.from({ length: 4 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
  appState.activityLog.unshift({
    id: `tx-${Date.now()}`,
    type,
    symbol,
    details,
    usdValue,
    timestamp: Date.now(),
    hash: `0x${randomHex}...${Date.now().toString(16).slice(-4)}`,
  });
  if (appState.activityLog.length > 50) {
    appState.activityLog = appState.activityLog.slice(0, 50);
  }
  await saveState();
}

// Auto-Lock Timer Management
let inactivityTimer = null;

function touchActivity() {
  if (!isUnlocked) return;
  appState.lastUnlockedActivityAt = Date.now();
  saveState();
  scheduleAutoLock();
}

function scheduleAutoLock() {
  clearTimeout(inactivityTimer);
  const mins = Number(appState.autoLockMinutes);
  if (!isUnlocked || !mins || mins <= 0) return;
  inactivityTimer = setTimeout(() => {
    lockApp("Session locked due to inactivity");
  }, mins * 60 * 1000);
}

function lockApp(reasonText = null) {
  isUnlocked = false;
  clearTimeout(inactivityTimer);
  document.getElementById("dashboard-screen").classList.remove("active");
  document.getElementById("lock-screen").classList.add("active");
  if (reasonText) {
    document.getElementById("lock-subtitle").textContent = reasonText;
  }
}

// Evaluate Price Alerts against live Binance prices
async function evaluatePriceAlerts() {
  let newlyTriggered = null;
  appState.priceAlerts.forEach((alert) => {
    if (alert.triggered) return;
    const live = (marketData[alert.symbol] || {}).price;
    if (!live) return;
    if (alert.condition === "above" && live >= alert.targetPrice) {
      alert.triggered = true;
      newlyTriggered = alert;
    } else if (alert.condition === "below" && live <= alert.targetPrice) {
      alert.triggered = true;
      newlyTriggered = alert;
    }
  });

  if (newlyTriggered) {
    await saveState();
    const msg = `🔔 Alert: ${newlyTriggered.symbol} is ${newlyTriggered.condition} $${newlyTriggered.targetPrice}!`;
    const banner = document.getElementById("alert-banner");
    const bannerText = document.getElementById("alert-banner-text");
    if (banner && bannerText) {
      bannerText.textContent = msg;
      banner.classList.remove("hidden");
    }
    showToast(msg);
    try {
      if (typeof browser !== "undefined" && browser.notifications) {
        browser.notifications.create({
          type: "basic",
          iconUrl: "icon.png",
          title: "NovaFolio Price Alert",
          message: msg,
        });
      }
    } catch (_) {}
  }
}

// Fetch Live Market Prices from Binance
async function fetchLivePrices() {
  const refreshBtn = document.getElementById("refresh-prices-btn");
  const statusEl = document.getElementById("price-status");
  if (refreshBtn) refreshBtn.classList.add("spinning");

  try {
    const pairs = SUPPORTED_TOKENS.filter((t) => t.binancePair).map((t) => `"${t.binancePair}"`);
    const url = `https://api.binance.com/api/v3/ticker/24hr?symbols=[${pairs.join(",")}]`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    data.forEach((ticker) => {
      const token = SUPPORTED_TOKENS.find((t) => t.binancePair === ticker.symbol);
      if (token) {
        marketData[token.symbol] = {
          price: parseFloat(ticker.lastPrice),
          change24h: parseFloat(ticker.priceChangePercent),
        };
      }
    });
    marketData["USDT"] = { price: 1.0, change24h: 0.01 };

    if (statusEl) {
      const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      statusEl.textContent = `Live • ${now}`;
    }
    await evaluatePriceAlerts();
  } catch (err) {
    if (statusEl) {
      statusEl.textContent = "Offline • Ref Prices";
    }
  } finally {
    if (refreshBtn) refreshBtn.classList.remove("spinning");
    if (isUnlocked) renderAllViews();
  }
}

// Render All Views
function renderAllViews() {
  document.getElementById("currency-cycle-btn").textContent = appState.currency || "USD";
  document.getElementById("pref-currency-select").value = appState.currency || "USD";
  document.getElementById("pref-autolock-select").value = String(appState.autoLockMinutes ?? 5);

  renderHomeTab();
  renderAnalyticsTab();
  renderEarnTab();
  renderMarketTab();
  renderTokenDetailView();
  renderHubTab();
  updateSwapPreview();
}

// 1. Render Home (Portfolio) Tab
function renderHomeTab() {
  const wallet = getActiveWallet();
  if (!wallet) return;

  document.getElementById("active-wallet-name").textContent = wallet.name;
  const initials = wallet.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  document.getElementById("active-wallet-avatar").textContent = initials || "PF";
  document.getElementById("hide-zero-checkbox").checked = !!appState.hideZeroTokens;

  let totalUSD = 0;
  let weighted24hChangeUSD = 0;
  const rows = [];

  SUPPORTED_TOKENS.forEach((token) => {
    const qty = Number(wallet.balances[token.symbol] || 0);
    const mkt = marketData[token.symbol] || { price: token.fallbackPrice, change24h: 0 };
    const usdValue = qty * mkt.price;
    totalUSD += usdValue;
    weighted24hChangeUSD += usdValue * (mkt.change24h / 100);

    if (appState.hideZeroTokens && qty <= 0) return;

    const isPositive = mkt.change24h >= 0;
    const pctFormatted = `${isPositive ? "+" : ""}${mkt.change24h.toFixed(2)}%`;

    rows.push(`
      <div class="token-row" data-symbol="${token.symbol}" title="View ${token.name} details & chart">
        <div class="token-left">
          <div class="token-svg-wrap">${TOKEN_SVGS[token.symbol]}</div>
          <div class="token-info">
            <div class="token-title-line">
              <span class="token-symbol">${token.name}</span>
              <span class="token-network-tag">${token.symbol}</span>
            </div>
            <div class="token-price-line">
              <span>${formatUnitPrice(mkt.price)}</span>
              <span class="${isPositive ? "pct-up" : "pct-down"}">${pctFormatted}</span>
            </div>
          </div>
        </div>
        <div class="token-right">
          <span class="token-amount">${formatTokenQty(qty)} ${token.symbol}</span>
          <span class="token-usd">${formatFiat(usdValue)}</span>
        </div>
      </div>
    `);
  });

  document.getElementById("total-balance-display").textContent = formatFiat(totalUSD);

  const totalPct = totalUSD > 0 ? (weighted24hChangeUSD / totalUSD) * 100 : 0;
  const changeEl = document.getElementById("portfolio-24h-change");
  if (appState.hideBalances) {
    changeEl.textContent = "•••• (24h)";
    changeEl.className = "change-pill neutral";
  } else {
    const sign = weighted24hChangeUSD >= 0 ? "+" : "";
    changeEl.textContent = `${sign}${formatFiat(weighted24hChangeUSD)} (${sign}${totalPct.toFixed(2)}%)`;
    changeEl.className = `change-pill ${weighted24hChangeUSD > 0 ? "positive" : weighted24hChangeUSD < 0 ? "negative" : "neutral"}`;
  }

  document.getElementById("portfolio-sparkline").innerHTML = buildSparklineSVG(
    wallet.id,
    totalPct,
    96,
    36
  );

  const listEl = document.getElementById("token-list");
  listEl.innerHTML =
    rows.length > 0
      ? rows.join("")
      : `<div style="text-align:center;color:var(--text-muted);padding:26px 12px;font-size:12px;">No non-zero assets. Click "Balances" to edit holdings.</div>`;

  listEl.querySelectorAll(".token-row").forEach((row) => {
    row.addEventListener("click", () => {
      openTokenDetailView(row.dataset.symbol);
    });
  });
}

// 2. Render Analytics Tab (Donut Chart + Risk Score + Unrealized PnL)
function renderAnalyticsTab() {
  const wallet = getActiveWallet();
  if (!wallet) return;

  let totalValueUSD = 0;
  let totalCostUSD = 0;
  const assetBreakdown = [];

  SUPPORTED_TOKENS.forEach((t) => {
    const qty = Number(wallet.balances[t.symbol] || 0);
    const livePrice = (marketData[t.symbol] || { price: t.fallbackPrice }).price;
    const avgBuy = Number(wallet.avgBuyPrices?.[t.symbol] ?? t.defaultBuyPrice);
    const curVal = qty * livePrice;
    const costVal = qty * avgBuy;

    totalValueUSD += curVal;
    totalCostUSD += costVal;
    if (curVal > 0) {
      assetBreakdown.push({
        symbol: t.symbol,
        name: t.name,
        color: t.color,
        qty,
        livePrice,
        avgBuy,
        curVal,
        costVal,
        pnlUSD: curVal - costVal,
        pnlPct: costVal > 0 ? ((curVal - costVal) / costVal) * 100 : 0,
      });
    }
  });

  assetBreakdown.sort((a, b) => b.curVal - a.curVal);

  const slices = assetBreakdown.map((item) => ({
    symbol: item.symbol,
    color: item.color,
    pct: totalValueUSD > 0 ? (item.curVal / totalValueUSD) * 100 : 0,
  }));

  document.getElementById("donut-chart-box").innerHTML = buildDonutChartSVG(slices);

  const legendEl = document.getElementById("donut-legend");
  legendEl.innerHTML =
    slices.slice(0, 6).map((s) => `
      <div class="legend-item">
        <div class="legend-left">
          <span class="legend-dot" style="background:${s.color}"></span>
          <span>${s.symbol}</span>
        </div>
        <strong>${s.pct.toFixed(1)}%</strong>
      </div>
    `).join("") || `<span style="font-size:11px;color:var(--text-muted)">Empty portfolio</span>`;

  // Calculate Risk & Diversification Score
  const usdtSlice = slices.find((s) => s.symbol === "USDT");
  const stablePct = usdtSlice ? usdtSlice.pct : 0;
  const topPct = slices[0] ? slices[0].pct : 0;

  let riskLabel = "Balanced Growth";
  if (stablePct >= 50) riskLabel = "Conservative";
  else if (topPct >= 75) riskLabel = "High Concentration";
  else if (stablePct < 10 && slices.length >= 4) riskLabel = "Aggressive Crypto";

  document.getElementById("risk-score-badge").textContent = riskLabel;
  document.getElementById("risk-summary-line").textContent =
    `Stablecoin Ratio: ${stablePct.toFixed(1)}% • Top Asset Share: ${topPct.toFixed(1)}%`;

  // Total Cost & Unrealized PnL
  const totalPnlUSD = totalValueUSD - totalCostUSD;
  const totalPnlPct = totalCostUSD > 0 ? (totalPnlUSD / totalCostUSD) * 100 : 0;
  const sign = totalPnlUSD >= 0 ? "+" : "";

  document.getElementById("analytics-total-cost").textContent = formatFiat(totalCostUSD);
  const pnlEl = document.getElementById("analytics-total-pnl");
  pnlEl.textContent = appState.hideBalances
    ? "••••••"
    : `${sign}${formatFiat(totalPnlUSD)} (${sign}${totalPnlPct.toFixed(2)}%)`;
  pnlEl.className = `holding-fiat ${totalPnlUSD >= 0 ? "pct-up" : "pct-down"}`;

  // Per-Asset PnL List
  const pnlListEl = document.getElementById("analytics-pnl-list");
  pnlListEl.innerHTML =
    assetBreakdown.length > 0
      ? assetBreakdown
          .map((item) => {
            const s = item.pnlUSD >= 0 ? "+" : "";
            return `
              <div class="activity-item">
                <div class="activity-left">
                  <span class="activity-type">${item.name} (${item.symbol})</span>
                  <span class="activity-meta">Avg Buy: $${item.avgBuy.toLocaleString()} • Live: $${item.livePrice.toLocaleString()}</span>
                </div>
                <div class="activity-right">
                  <div class="activity-amount ${item.pnlUSD >= 0 ? "pct-up" : "pct-down"}">
                    ${s}${formatFiat(item.pnlUSD)} (${s}${item.pnlPct.toFixed(1)}%)
                  </div>
                  <div class="activity-fiat">Holding: ${formatTokenQty(item.qty)} ${item.symbol}</div>
                </div>
              </div>
            `;
          })
          .join("")
      : `<div style="text-align:center;color:var(--text-muted);padding:18px;font-size:11px;">Add holdings to view unrealized PnL breakdown.</div>`;
}

// 3. Render Earn / Staking Simulator Tab
function renderEarnTab() {
  const wallet = getActiveWallet();
  if (!wallet) return;

  let totalStakedUSD = 0;
  let totalAnnualYieldUSD = 0;

  const poolsHtml = STAKING_POOLS.map((pool) => {
    const token = SUPPORTED_TOKENS.find((t) => t.symbol === pool.symbol);
    const livePrice = (marketData[pool.symbol] || { price: token.fallbackPrice }).price;
    const stakedQty = Number(wallet.stakedBalances?.[pool.symbol] || 0);
    const availQty = Number(wallet.balances?.[pool.symbol] || 0);
    const stakedUSD = stakedQty * livePrice;
    const annualUSD = stakedUSD * (pool.apy / 100);

    totalStakedUSD += stakedUSD;
    totalAnnualYieldUSD += annualUSD;

    return `
      <div class="activity-item" data-stake-symbol="${pool.symbol}">
        <div class="token-left">
          <div class="token-svg-wrap">${TOKEN_SVGS[pool.symbol]}</div>
          <div class="activity-left">
            <div class="token-title-line">
              <span class="activity-type">${pool.symbol}</span>
              <span class="apy-pill">${pool.apy}% APY</span>
            </div>
            <span class="activity-meta">${pool.lockLabel} • Avail: ${formatTokenQty(availQty)}</span>
          </div>
        </div>
        <div class="activity-right">
          <div class="activity-amount">Staked: ${formatTokenQty(stakedQty)} ${pool.symbol}</div>
          <div class="activity-fiat">${formatFiat(stakedUSD)} • <button type="button" class="btn-tiny manage-stake-btn" data-pool-sym="${pool.symbol}">Stake / Unstake</button></div>
        </div>
      </div>
    `;
  });

  document.getElementById("earn-total-staked").textContent = formatFiat(totalStakedUSD);
  document.getElementById("earn-est-annual").textContent = `+${formatFiat(totalAnnualYieldUSD)} / yr`;

  // Compound projection for selectedEarnMonths
  const avgMonthlyRate = totalStakedUSD > 0 ? totalAnnualYieldUSD / totalStakedUSD / 12 : 0.05 / 12;
  const compoundGain =
    totalStakedUSD * (Math.pow(1 + avgMonthlyRate, selectedEarnMonths) - 1);
  const horizonLabel =
    selectedEarnMonths === 1 ? "1 Month" : selectedEarnMonths === 6 ? "6 Months" : "1 Year";
  document.getElementById("earn-projection-box").textContent =
    `Projected Compound Yield (${horizonLabel}): +${formatFiat(compoundGain)}`;

  const listEl = document.getElementById("earn-pools-list");
  listEl.innerHTML = poolsHtml.join("");

  listEl.querySelectorAll(".manage-stake-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openStakeModal(btn.dataset.poolSym);
    });
  });
}

function openStakeModal(symbol) {
  activeStakeSymbol = symbol;
  const wallet = getActiveWallet();
  const avail = Number(wallet.balances?.[symbol] || 0);
  const staked = Number(wallet.stakedBalances?.[symbol] || 0);
  const pool = STAKING_POOLS.find((p) => p.symbol === symbol);

  document.getElementById("stake-modal-title").textContent = `${symbol} Staking (${pool?.apy || 5}% APY)`;
  document.getElementById("stake-modal-info").textContent =
    `Available in Portfolio: ${avail} ${symbol} • Currently Staked: ${staked} ${symbol}`;
  document.getElementById("stake-amount-input").value = "";
  document.getElementById("stake-modal").classList.remove("hidden");
}

// 4. Open & Render Token Detail Sub-View
function openTokenDetailView(symbol) {
  selectedDetailSymbol = symbol;
  document.querySelectorAll(".tab-view").forEach((v) => v.classList.remove("active"));
  document.getElementById("tab-token-detail").classList.add("active");
  renderTokenDetailView();
}

function renderTokenDetailView() {
  const token = SUPPORTED_TOKENS.find((t) => t.symbol === selectedDetailSymbol) || SUPPORTED_TOKENS[0];
  const wallet = getActiveWallet();
  const mkt = marketData[token.symbol] || { price: token.fallbackPrice, change24h: 0 };
  const qty = Number(wallet.balances[token.symbol] || 0);
  const usdVal = qty * mkt.price;

  document.getElementById("detail-token-name").textContent = token.name;
  document.getElementById("detail-token-network").textContent = `${token.symbol} • ${token.network}`;
  document.getElementById("detail-token-icon").innerHTML = TOKEN_SVGS[token.symbol];
  document.getElementById("detail-live-price").textContent = formatUnitPrice(mkt.price);

  const isUp = mkt.change24h >= 0;
  const pill = document.getElementById("detail-24h-pill");
  pill.textContent = `${isUp ? "+" : ""}${mkt.change24h.toFixed(2)}% (${selectedDetailTimeframe})`;
  pill.className = `change-pill ${isUp ? "positive" : "negative"}`;

  document.getElementById("detail-chart-container").innerHTML = buildSparklineSVG(
    `${token.symbol}_${selectedDetailTimeframe}`,
    mkt.change24h,
    320,
    74,
    24
  );

  document.getElementById("detail-holding-qty").textContent = `${formatTokenQty(qty)} ${token.symbol}`;
  document.getElementById("detail-holding-fiat").textContent = formatFiat(usdVal);

  const tokenLogs = appState.activityLog.filter((item) => item.symbol === token.symbol);
  const logEl = document.getElementById("detail-activity-list");
  logEl.innerHTML =
    tokenLogs.length > 0
      ? tokenLogs.map(renderActivityItemHTML).join("")
      : `<div style="text-align:center;color:var(--text-muted);padding:16px;font-size:11px;">No simulated activity for ${token.symbol} yet.</div>`;
}

// 5. Render Market List
function renderMarketTab() {
  const query = (document.getElementById("market-search-input")?.value || "").trim().toLowerCase();
  const listEl = document.getElementById("market-list");
  if (!listEl) return;

  const filtered = SUPPORTED_TOKENS.filter(
    (t) => t.name.toLowerCase().includes(query) || t.symbol.toLowerCase().includes(query)
  );

  listEl.innerHTML = filtered
    .map((token) => {
      const mkt = marketData[token.symbol] || { price: token.fallbackPrice, change24h: 0 };
      const isUp = mkt.change24h >= 0;
      return `
        <div class="token-row" data-market-symbol="${token.symbol}">
          <div class="token-left">
            <div class="token-svg-wrap">${TOKEN_SVGS[token.symbol]}</div>
            <div class="token-info">
              <div class="token-title-line">
                <span class="token-symbol">${token.symbol}</span>
                <span class="token-network-tag">${token.name}</span>
              </div>
              <div class="token-price-line">
                <span class="${isUp ? "pct-up" : "pct-down"}">${isUp ? "+" : ""}${mkt.change24h.toFixed(2)}% 24h</span>
              </div>
            </div>
          </div>
          <div class="mini-spark">${buildSparklineSVG(token.symbol, mkt.change24h, 58, 24, 10)}</div>
          <div class="token-right">
            <span class="token-amount">${formatUnitPrice(mkt.price)}</span>
            <span class="token-usd">${token.network}</span>
          </div>
        </div>
      `;
    })
    .join("");

  listEl.querySelectorAll(".token-row").forEach((row) => {
    row.addEventListener("click", () => {
      openTokenDetailView(row.dataset.marketSymbol);
    });
  });
}

// 6. Render Hub Tab (History, Price Alerts, Contacts / Address Book)
function renderActivityItemHTML(item) {
  const timeStr = new Date(item.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return `
    <div class="activity-item">
      <div class="activity-left">
        <span class="activity-type">${item.type} • ${item.symbol}</span>
        <span class="activity-meta">${timeStr} • ${item.hash}</span>
      </div>
      <div class="activity-right">
        <div class="activity-amount">${item.details}</div>
        <div class="activity-fiat">${formatFiat(item.usdValue, true)}</div>
      </div>
    </div>
  `;
}

function renderHubTab() {
  // 1) Activity Log
  const logContainer = document.getElementById("activity-log-list");
  if (logContainer) {
    logContainer.innerHTML =
      appState.activityLog.length > 0
        ? appState.activityLog.map(renderActivityItemHTML).join("")
        : `<div style="text-align:center;color:var(--text-muted);padding:24px;font-size:11.5px;">No simulated transactions recorded yet.</div>`;
  }

  // 2) Price Alerts List
  const alertsEl = document.getElementById("price-alerts-list");
  if (alertsEl) {
    alertsEl.innerHTML =
      appState.priceAlerts.length > 0
        ? appState.priceAlerts
            .map((a) => {
              const live = (marketData[a.symbol] || { price: 0 }).price;
              return `
                <div class="activity-item">
                  <div class="activity-left">
                    <span class="activity-type">${a.symbol} ${a.condition === "above" ? "≥" : "≤"} $${a.targetPrice.toLocaleString()}</span>
                    <span class="activity-meta">Live: $${live.toLocaleString()} • Status: ${a.triggered ? "🔔 Triggered" : "Active"}</span>
                  </div>
                  <button type="button" class="delete-wallet-btn" data-del-alert="${a.id}">Delete</button>
                </div>
              `;
            })
            .join("")
        : `<div style="text-align:center;color:var(--text-muted);padding:18px;font-size:11px;">No active price alerts.</div>`;

    alertsEl.querySelectorAll("[data-del-alert]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        appState.priceAlerts = appState.priceAlerts.filter((x) => x.id !== btn.dataset.delAlert);
        await saveState();
        renderHubTab();
      });
    });
  }

  // 3) Contacts / Address Book List
  const contactsEl = document.getElementById("contacts-list");
  if (contactsEl) {
    contactsEl.innerHTML =
      appState.contacts.length > 0
        ? appState.contacts
            .map(
              (c) => `
              <div class="activity-item">
                <div class="activity-left">
                  <span class="activity-type">${c.name} (${c.symbol})</span>
                  <span class="activity-meta">${c.address.slice(0, 14)}...${c.address.slice(-6)}</span>
                </div>
                <div style="display:flex;gap:5px;">
                  <button type="button" class="btn-tiny" data-send-contact="${c.id}">Send</button>
                  <button type="button" class="delete-wallet-btn" data-del-contact="${c.id}">✕</button>
                </div>
              </div>
            `
            )
            .join("")
        : `<div style="text-align:center;color:var(--text-muted);padding:18px;font-size:11px;">Address book is empty.</div>`;

    contactsEl.querySelectorAll("[data-send-contact]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const contact = appState.contacts.find((c) => c.id === btn.dataset.sendContact);
        if (contact) {
          openSendModal(contact.symbol, contact.address);
        }
      });
    });

    contactsEl.querySelectorAll("[data-del-contact]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        appState.contacts = appState.contacts.filter((c) => c.id !== btn.dataset.delContact);
        await saveState();
        renderHubTab();
      });
    });
  }
}

// Populate Swap & Hub Selectors
function initSymbolSelectors() {
  const fromSel = document.getElementById("swap-from-symbol");
  const toSel = document.getElementById("swap-to-symbol");
  const alertSel = document.getElementById("alert-symbol-select");
  const contactSel = document.getElementById("contact-symbol-select");

  const optionsHtml = SUPPORTED_TOKENS.map((t) => `<option value="${t.symbol}">${t.symbol}</option>`).join("");
  if (fromSel) fromSel.innerHTML = optionsHtml;
  if (toSel) {
    toSel.innerHTML = optionsHtml;
    toSel.value = "USDT";
  }
  if (alertSel) alertSel.innerHTML = optionsHtml;
  if (contactSel) contactSel.innerHTML = optionsHtml;
  updateSwapPreview();
}

function updateSwapPreview() {
  const fromSel = document.getElementById("swap-from-symbol");
  const toSel = document.getElementById("swap-to-symbol");
  const amountInput = document.getElementById("swap-from-amount");
  const toPreview = document.getElementById("swap-to-preview");
  const availLabel = document.getElementById("swap-avail-label");
  const rateLabel = document.getElementById("swap-rate-label");
  const previewEl = document.getElementById("swap-preview");
  if (!fromSel || !toSel) return;

  const wallet = getActiveWallet();
  const fromSym = fromSel.value || "BTC";
  const toSym = toSel.value || "USDT";
  const avail = Number(wallet.balances[fromSym] || 0);
  availLabel.textContent = `Avail: ${avail} ${fromSym}`;

  const fromPrice = (marketData[fromSym] || { price: 1 }).price;
  const toPrice = (marketData[toSym] || { price: 1 }).price;
  const unitRate = fromPrice / toPrice;
  rateLabel.textContent = `1 ${fromSym} ≈ ${unitRate < 1 ? unitRate.toFixed(5) : unitRate.toFixed(2)} ${toSym}`;

  const qty = parseFloat(amountInput.value) || 0;
  if (qty <= 0) {
    toPreview.value = "";
    previewEl.textContent = "Enter an amount to calculate live conversion.";
    return;
  }

  const received = qty * unitRate;
  toPreview.value = received.toFixed(5);
  previewEl.textContent = `Converting ${qty} ${fromSym} (${formatFiat(qty * fromPrice, true)}) → ${received.toFixed(5)} ${toSym}`;
}

function switchTab(tabId) {
  document.querySelectorAll(".tab-view").forEach((v) => v.classList.remove("active"));
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".bottom-nav-5 .nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
}

// Modals: Wallets, Holdings + Avg Buy Price, Send, Receive QR
function openWalletsModal() {
  const container = document.getElementById("wallets-list-container");
  container.innerHTML = appState.wallets
    .map((w) => {
      let sum = 0;
      SUPPORTED_TOKENS.forEach((t) => {
        const qty = Number(w.balances[t.symbol] || 0);
        const price = (marketData[t.symbol] || { price: t.fallbackPrice }).price;
        sum += qty * price;
      });
      const isCurrent = w.id === appState.activeWalletId;
      return `
        <div class="wallet-item ${isCurrent ? "active-wallet" : ""}" data-wallet-id="${w.id}">
          <div class="wallet-item-info">
            <span class="wallet-item-name">${w.name} ${isCurrent ? "✓" : ""}</span>
            <span class="wallet-item-sub">${formatFiat(sum)}</span>
          </div>
          ${
            appState.wallets.length > 1
              ? `<button class="delete-wallet-btn" data-delete-id="${w.id}">Delete</button>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  container.querySelectorAll(".wallet-item").forEach((item) => {
    item.addEventListener("click", async (e) => {
      if (e.target.closest(".delete-wallet-btn")) return;
      appState.activeWalletId = item.dataset.walletId;
      await saveState();
      renderAllViews();
      closeModal("wallets-modal");
    });
  });

  container.querySelectorAll(".delete-wallet-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.deleteId;
      if (appState.wallets.length <= 1) return;
      appState.wallets = appState.wallets.filter((w) => w.id !== targetId);
      if (appState.activeWalletId === targetId) {
        appState.activeWalletId = appState.wallets[0].id;
      }
      await saveState();
      openWalletsModal();
      renderAllViews();
    });
  });

  document.getElementById("wallets-modal").classList.remove("hidden");
}

function openSettingsModal(focusSymbol = null) {
  const wallet = getActiveWallet();
  document.getElementById("settings-wallet-label").textContent = `Editing: ${wallet.name}`;

  const container = document.getElementById("balance-inputs-container");
  container.innerHTML = SUPPORTED_TOKENS.map((t) => {
    const currentQty = Number(wallet.balances[t.symbol] || 0);
    const currentBuy = Number(wallet.avgBuyPrices?.[t.symbol] ?? t.defaultBuyPrice);
    return `
      <div class="balance-input-row-3">
        <div class="balance-input-label">
          ${TOKEN_SVGS[t.symbol]}
          <span>${t.symbol}</span>
        </div>
        <input
          type="number"
          step="any"
          min="0"
          data-balance-symbol="${t.symbol}"
          value="${currentQty}"
          title="Simulated Quantity"
        />
        <input
          type="number"
          step="any"
          min="0"
          data-buyprice-symbol="${t.symbol}"
          value="${currentBuy}"
          title="Average Buy Price (USD)"
        />
      </div>
    `;
  }).join("");

  document.getElementById("settings-modal").classList.remove("hidden");

  if (focusSymbol) {
    const input = container.querySelector(`input[data-balance-symbol="${focusSymbol}"]`);
    if (input) {
      input.focus();
      input.select();
    }
  }
}

function openSendModal(defaultSymbol = "BTC", prefillAddress = "") {
  const wallet = getActiveWallet();
  const sel = document.getElementById("send-symbol-select");
  sel.innerHTML = SUPPORTED_TOKENS.map(
    (t) =>
      `<option value="${t.symbol}" ${t.symbol === defaultSymbol ? "selected" : ""}>${t.symbol} — Avail: ${Number(wallet.balances[t.symbol] || 0)}</option>`
  ).join("");

  const picker = document.getElementById("send-contact-picker");
  picker.innerHTML =
    `<option value="">📖 Address Book...</option>` +
    appState.contacts
      .map((c) => `<option value="${c.address}" data-contact-sym="${c.symbol}">${c.name} (${c.symbol})</option>`)
      .join("");

  document.getElementById("send-address-input").value = prefillAddress;
  document.getElementById("send-amount-input").value = "";
  document.getElementById("send-modal").classList.remove("hidden");
}

function openReceiveModal(defaultSymbol = "BTC") {
  const sel = document.getElementById("receive-symbol-select");
  sel.innerHTML = SUPPORTED_TOKENS.map(
    (t) =>
      `<option value="${t.symbol}" ${t.symbol === defaultSymbol ? "selected" : ""}>${t.name} (${t.symbol} • ${t.network})</option>`
  ).join("");
  renderReceiveModalContent(defaultSymbol);
  document.getElementById("receive-modal").classList.remove("hidden");
}

function renderReceiveModalContent(symbol) {
  const token = SUPPORTED_TOKENS.find((t) => t.symbol === symbol) || SUPPORTED_TOKENS[0];
  document.getElementById("receive-address-text").textContent = token.demoAddress;
  document.getElementById("receive-qr-box").innerHTML = buildDemoQrSVG(token.demoAddress);
}

function closeModal(id) {
  document.getElementById(id)?.classList.add("hidden");
}

// Initialize App & Event Listeners
document.addEventListener("DOMContentLoaded", async () => {
  await loadState();
  initSymbolSelectors();

  // Track user interactions for Auto-Lock timer
  ["click", "keydown", "mousemove"].forEach((evt) => {
    document.addEventListener(evt, () => {
      if (isUnlocked) touchActivity();
    });
  });

  // Dismiss Alert Banner
  document.getElementById("dismiss-alert-banner").addEventListener("click", () => {
    document.getElementById("alert-banner").classList.add("hidden");
  });

  // Unlock form
  document.getElementById("unlock-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const entered = document.getElementById("password-input").value;
    const errorEl = document.getElementById("lock-error");

    if (entered === appState.password) {
      errorEl.classList.add("hidden");
      isUnlocked = true;
      document.getElementById("password-input").value = "";
      document.getElementById("lock-screen").classList.remove("active");
      document.getElementById("dashboard-screen").classList.add("active");
      touchActivity();
      renderAllViews();
      fetchLivePrices();
    } else {
      errorEl.classList.remove("hidden");
    }
  });

  // Lock button
  document.getElementById("lock-app-btn").addEventListener("click", () => {
    lockApp("Enter your passcode to unlock your simulated portfolio");
  });

  // Cycle Currency button in header
  document.getElementById("currency-cycle-btn").addEventListener("click", async () => {
    const keys = Object.keys(CURRENCIES);
    const nextIdx = (keys.indexOf(appState.currency) + 1) % keys.length;
    appState.currency = keys[nextIdx];
    await saveState();
    renderAllViews();
    showToast(`Display currency: ${appState.currency}`);
  });

  // Refresh prices button
  document.getElementById("refresh-prices-btn").addEventListener("click", fetchLivePrices);

  // Toggle balance visibility
  document.getElementById("toggle-visibility-btn").addEventListener("click", async () => {
    appState.hideBalances = !appState.hideBalances;
    await saveState();
    renderAllViews();
  });

  // Hide zero balances checkbox
  document.getElementById("hide-zero-checkbox").addEventListener("change", async (e) => {
    appState.hideZeroTokens = e.target.checked;
    await saveState();
    renderHomeTab();
  });

  // Bottom Navigation Bar (5 Tabs)
  document.querySelectorAll(".bottom-nav-5 .nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
      renderAllViews();
    });
  });

  // Sub-tabs inside Trade Tab (Swap / Market)
  document.querySelectorAll(".trade-subtab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".trade-subtab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll("#tab-trade .subtab-pane").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tradesub)?.classList.add("active");
    });
  });

  // Sub-tabs inside Hub Tab (History / Alerts / Contacts / Settings)
  document.querySelectorAll(".hub-subtab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".hub-subtab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll("#tab-hub .subtab-pane").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.hubsub)?.classList.add("active");
    });
  });

  // Analytics Edit Buy Prices button
  document.getElementById("analytics-edit-cost-btn").addEventListener("click", () => openSettingsModal());

  // Earn Compound Horizon Pills (1M / 6M / 1Y)
  document.querySelectorAll("#earn-horizon-pills .tf-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#earn-horizon-pills .tf-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedEarnMonths = Number(btn.dataset.months);
      renderEarnTab();
    });
  });

  // Claim Daily Staking Yield
  document.getElementById("claim-all-rewards-btn").addEventListener("click", async () => {
    const wallet = getActiveWallet();
    let totalClaimedUSD = 0;

    STAKING_POOLS.forEach((pool) => {
      const staked = Number(wallet.stakedBalances?.[pool.symbol] || 0);
      if (staked > 0) {
        const dailyReward = staked * (pool.apy / 100 / 365);
        wallet.balances[pool.symbol] = Number(wallet.balances[pool.symbol] || 0) + dailyReward;
        const price = (marketData[pool.symbol] || { price: 1 }).price;
        totalClaimedUSD += dailyReward * price;
      }
    });

    if (totalClaimedUSD <= 0) {
      showToast("Stake assets first to claim daily rewards");
      return;
    }

    await logActivity("Staking Yield", "MULTI", `Claimed daily staking rewards`, totalClaimedUSD);
    await saveState();
    renderAllViews();
    showToast(`Claimed +${formatFiat(totalClaimedUSD, true)} staking yield!`);
  });

  // Stake / Unstake Modal Form
  document.getElementById("stake-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const wallet = getActiveWallet();
    const action = document.getElementById("stake-action-select").value;
    const qty = parseFloat(document.getElementById("stake-amount-input").value) || 0;
    const sym = activeStakeSymbol;
    const price = (marketData[sym] || { price: 1 }).price;

    if (qty <= 0) return;

    if (action === "stake") {
      const avail = Number(wallet.balances[sym] || 0);
      if (avail <= 0) {
        showToast(`No available ${sym} to stake`);
        return;
      }
      const move = Math.min(qty, avail);
      wallet.balances[sym] = avail - move;
      wallet.stakedBalances[sym] = Number(wallet.stakedBalances[sym] || 0) + move;
      await logActivity("Stake", sym, `Staked ${move} ${sym}`, move * price);
      showToast(`Staked ${move} ${sym}`);
    } else {
      const staked = Number(wallet.stakedBalances[sym] || 0);
      if (staked <= 0) {
        showToast(`No staked ${sym} to unstake`);
        return;
      }
      const move = Math.min(qty, staked);
      wallet.stakedBalances[sym] = staked - move;
      wallet.balances[sym] = Number(wallet.balances[sym] || 0) + move;
      await logActivity("Unstake", sym, `Unstaked ${move} ${sym}`, move * price);
      showToast(`Unstaked ${move} ${sym}`);
    }

    closeModal("stake-modal");
    renderAllViews();
  });

  // Token Detail View Actions
  document.getElementById("detail-back-btn").addEventListener("click", () => switchTab("tab-home"));
  document.getElementById("detail-edit-qty-btn").addEventListener("click", () =>
    openSettingsModal(selectedDetailSymbol)
  );
  document.getElementById("detail-send-btn").addEventListener("click", () =>
    openSendModal(selectedDetailSymbol)
  );
  document.getElementById("detail-receive-btn").addEventListener("click", () =>
    openReceiveModal(selectedDetailSymbol)
  );
  document.getElementById("detail-swap-btn").addEventListener("click", () => {
    document.getElementById("swap-from-symbol").value = selectedDetailSymbol;
    document.getElementById("swap-to-symbol").value = selectedDetailSymbol === "USDT" ? "BTC" : "USDT";
    updateSwapPreview();
    switchTab("tab-trade");
  });

  document.querySelectorAll("#detail-timeframe-pills .tf-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#detail-timeframe-pills .tf-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedDetailTimeframe = btn.dataset.tf;
      renderTokenDetailView();
    });
  });

  // Market Search Input
  document.getElementById("market-search-input").addEventListener("input", renderMarketTab);

  // Home Quick Action Buttons
  document.getElementById("home-send-btn").addEventListener("click", () => openSendModal("BTC"));
  document.getElementById("home-receive-btn").addEventListener("click", () => openReceiveModal("BTC"));
  document.getElementById("home-swap-btn").addEventListener("click", () => switchTab("tab-trade"));
  document.getElementById("quick-edit-btn").addEventListener("click", () => openSettingsModal());
  document.getElementById("open-settings-btn").addEventListener("click", () => openSettingsModal());

  // Wallets Modal
  document.getElementById("wallet-dropdown-btn").addEventListener("click", openWalletsModal);
  document.getElementById("pref-open-wallets-btn").addEventListener("click", openWalletsModal);
  document.getElementById("pref-open-balances-btn").addEventListener("click", () => openSettingsModal());

  document.getElementById("create-wallet-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("new-wallet-name");
    const name = nameInput.value.trim();
    if (!name) return;

    const newWallet = {
      id: `portfolio-${Date.now()}`,
      name,
      balances: { BTC: 0, ETH: 0, USDT: 1000, BNB: 0, SOL: 0, XRP: 0, ADA: 0, DOGE: 0, TRX: 0 },
      avgBuyPrices: { BTC: 85000, ETH: 3000, USDT: 1, BNB: 620, SOL: 180, XRP: 2.1, ADA: 0.9, DOGE: 0.3, TRX: 0.22 },
      stakedBalances: { USDT: 0, SOL: 0, ETH: 0, BNB: 0, ADA: 0, TRX: 0 },
    };

    appState.wallets.push(newWallet);
    appState.activeWalletId = newWallet.id;
    nameInput.value = "";
    await saveState();
    openWalletsModal();
    renderAllViews();
    showToast(`Created "${name}"`);
  });

  // Save Balances & Avg Buy Prices in Settings Modal
  document.getElementById("save-settings-btn").addEventListener("click", async () => {
    const wallet = getActiveWallet();
    const balInputs = document.querySelectorAll("#balance-inputs-container input[data-balance-symbol]");
    balInputs.forEach((input) => {
      const sym = input.dataset.balanceSymbol;
      const val = parseFloat(input.value);
      wallet.balances[sym] = isNaN(val) || val < 0 ? 0 : val;
    });

    const buyInputs = document.querySelectorAll("#balance-inputs-container input[data-buyprice-symbol]");
    buyInputs.forEach((input) => {
      const sym = input.dataset.buypriceSymbol;
      const val = parseFloat(input.value);
      if (!isNaN(val) && val >= 0) {
        wallet.avgBuyPrices[sym] = val;
      }
    });

    await logActivity("Holdings Update", "MULTI", `Updated ${wallet.name} balances & buy prices`, 0);
    await saveState();
    closeModal("settings-modal");
    renderAllViews();
    showToast("Holdings & buy prices saved");
  });

  // Swap Tab Logic
  document.getElementById("swap-from-symbol").addEventListener("change", updateSwapPreview);
  document.getElementById("swap-to-symbol").addEventListener("change", updateSwapPreview);
  document.getElementById("swap-from-amount").addEventListener("input", updateSwapPreview);

  document.getElementById("swap-flip-btn").addEventListener("click", () => {
    const fromSel = document.getElementById("swap-from-symbol");
    const toSel = document.getElementById("swap-to-symbol");
    const tmp = fromSel.value;
    fromSel.value = toSel.value;
    toSel.value = tmp;
    updateSwapPreview();
  });

  document.getElementById("swap-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const wallet = getActiveWallet();
    const fromSym = document.getElementById("swap-from-symbol").value;
    const toSym = document.getElementById("swap-to-symbol").value;
    const qty = parseFloat(document.getElementById("swap-from-amount").value) || 0;

    if (fromSym === toSym || qty <= 0) return;

    const currentFrom = Number(wallet.balances[fromSym] || 0);
    if (currentFrom <= 0) {
      showToast(`No ${fromSym} available in portfolio`);
      return;
    }

    const deduct = Math.min(qty, currentFrom);
    const fromPrice = (marketData[fromSym] || { price: 1 }).price;
    const toPrice = (marketData[toSym] || { price: 1 }).price;
    const addAmount = (deduct * fromPrice) / toPrice;

    wallet.balances[fromSym] = Math.max(0, currentFrom - deduct);
    wallet.balances[toSym] = Number(wallet.balances[toSym] || 0) + addAmount;

    await logActivity(
      "Swap",
      fromSym,
      `${deduct} ${fromSym} → ${addAmount.toFixed(4)} ${toSym}`,
      deduct * fromPrice
    );
    document.getElementById("swap-from-amount").value = "";
    renderAllViews();
    showToast(`Swapped ${deduct} ${fromSym} to ${toSym}`);
  });

  // Send Contact Picker auto-fill
  document.getElementById("send-contact-picker").addEventListener("change", (e) => {
    const val = e.target.value;
    if (!val) return;
    document.getElementById("send-address-input").value = val;
    const opt = e.target.selectedOptions[0];
    if (opt && opt.dataset.contactSym) {
      document.getElementById("send-symbol-select").value = opt.dataset.contactSym;
    }
  });

  // Send Simulator Form
  document.getElementById("send-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const wallet = getActiveWallet();
    const sym = document.getElementById("send-symbol-select").value;
    const addr = document.getElementById("send-address-input").value.trim();
    const qty = parseFloat(document.getElementById("send-amount-input").value) || 0;
    const currentBal = Number(wallet.balances[sym] || 0);

    if (qty <= 0 || currentBal <= 0) {
      showToast(`Insufficient ${sym} balance`);
      return;
    }

    const deduct = Math.min(qty, currentBal);
    const price = (marketData[sym] || { price: 1 }).price;
    wallet.balances[sym] = Math.max(0, currentBal - deduct);

    await logActivity(
      "Send",
      sym,
      `-${deduct} ${sym} to ${addr.slice(0, 8)}...`,
      deduct * price
    );
    closeModal("send-modal");
    renderAllViews();
    showToast(`Simulated send: ${deduct} ${sym}`);
  });

  // Receive Simulator Modal
  document.getElementById("receive-symbol-select").addEventListener("change", (e) => {
    renderReceiveModalContent(e.target.value);
  });

  document.getElementById("copy-address-btn").addEventListener("click", async () => {
    const addr = document.getElementById("receive-address-text").textContent;
    try {
      await navigator.clipboard.writeText(addr);
    } catch (_) {}
    showToast("Demo address copied!");
  });

  document.getElementById("sim-deposit-btn").addEventListener("click", async () => {
    const sym = document.getElementById("receive-symbol-select").value;
    const wallet = getActiveWallet();
    const price = (marketData[sym] || { price: 1 }).price;
    wallet.balances[sym] = Number(wallet.balances[sym] || 0) + 1;
    await logActivity("Receive", sym, `+1 ${sym} (Simulated Deposit)`, price);
    renderAllViews();
    showToast(`+1 ${sym} added to ${wallet.name}`);
  });

  // Create Price Alert Form
  document.getElementById("create-alert-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const symbol = document.getElementById("alert-symbol-select").value;
    const condition = document.getElementById("alert-condition-select").value;
    const targetPrice = parseFloat(document.getElementById("alert-target-price").value);
    if (isNaN(targetPrice) || targetPrice <= 0) return;

    appState.priceAlerts.unshift({
      id: `al-${Date.now()}`,
      symbol,
      condition,
      targetPrice,
      triggered: false,
    });
    document.getElementById("alert-target-price").value = "";
    await saveState();
    await evaluatePriceAlerts();
    renderHubTab();
    showToast(`Alert added for ${symbol}`);
  });

  // Create Address Book Contact Form
  document.getElementById("create-contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name-input").value.trim();
    const symbol = document.getElementById("contact-symbol-select").value;
    const address = document.getElementById("contact-address-input").value.trim();
    if (!name || !address) return;

    appState.contacts.unshift({
      id: `c-${Date.now()}`,
      name,
      symbol,
      address,
    });
    document.getElementById("contact-name-input").value = "";
    document.getElementById("contact-address-input").value = "";
    await saveState();
    renderHubTab();
    showToast(`Saved "${name}" to Contacts`);
  });

  // Preferences & Security handlers
  document.getElementById("pref-currency-select").addEventListener("change", async (e) => {
    appState.currency = e.target.value;
    await saveState();
    renderAllViews();
    showToast(`Currency set to ${appState.currency}`);
  });

  document.getElementById("pref-autolock-select").addEventListener("change", async (e) => {
    appState.autoLockMinutes = Number(e.target.value);
    await saveState();
    scheduleAutoLock();
    showToast(
      appState.autoLockMinutes > 0
        ? `Auto-lock set to ${appState.autoLockMinutes} min`
        : "Auto-lock disabled"
    );
  });

  document.getElementById("pref-save-password-btn").addEventListener("click", async () => {
    const newPass = document.getElementById("pref-new-password").value.trim();
    if (!newPass) return;
    appState.password = newPass;
    document.getElementById("pref-new-password").value = "";
    await saveState();
    showToast("Passcode updated!");
  });

  document.getElementById("clear-history-btn").addEventListener("click", async () => {
    appState.activityLog = [];
    await saveState();
    renderAllViews();
    showToast("Activity log cleared");
  });

  // Close buttons on modals
  document.querySelectorAll(".close-modal-btn, [data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(btn.dataset.close);
    });
  });

  // Auto-refresh live prices every 15 seconds while unlocked
  setInterval(() => {
    if (isUnlocked) {
      fetchLivePrices();
    }
  }, 15000);
});
