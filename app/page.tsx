'use client'

import { useState } from 'react'
import {
  ArchiveRestore,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  FolderKanban,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from 'lucide-react'

const screenshots = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-home-VnEjEpMt6JdiLs7sSzmpFNuBn7XvL6.png',
    alt: 'SpendPad home screen showing monthly spending and recent activity',
    title: 'A clear view of today',
    copy: 'See your month, recent activity, and top category at a glance.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-history-KUFUnC8x52as5NaQ90820e6V04Ppof.png',
    alt: 'SpendPad transactions screen with search, filters, and an expense list',
    title: 'Find any transaction',
    copy: 'Search by note or category, then filter your history your way.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03-insights-oNzjdSNcVQZYRj8Hl5MjhpxtieA9HB.png',
    alt: 'SpendPad insights screen showing total spending and averages',
    title: 'Understand your patterns',
    copy: 'Simple summaries make everyday spending easier to understand.',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-settings-0YYyTebKRn1z99vvZpHpJiMxXxTDM9.png',
    alt: 'SpendPad settings screen with data and backup options',
    title: 'Your data, in your hands',
    copy: 'Export, restore, and manage your app from one calm settings screen.',
  },
]

const features = [
  { icon: WalletCards, eyebrow: 'Capture', title: 'Log expenses without friction', copy: 'Record what you spent, add a note, and keep moving. SpendPad is made for the small purchases that add up.' },
  { icon: FolderKanban, eyebrow: 'Organize', title: 'Make spending easy to sort', copy: 'Use categories to give every transaction a home, and rename or remove them whenever your habits change.' },
  { icon: BarChart3, eyebrow: 'Understand', title: 'See the story in your spending', copy: 'Review totals, averages, largest expenses, and category breakdowns without a wall of complicated charts.' },
]

function InteractivePhone() {
  const [screen, setScreen] = useState<'home' | 'history' | 'insights'>('home')
  const [showAdd, setShowAdd] = useState(false)
  const [expense, setExpense] = useState('')

  const addExpense = () => {
    if (!expense.trim()) return
    setShowAdd(false)
    setExpense('')
    setScreen('home')
  }

  return (
    <div className="interactive-phone-wrap">
      <div className="phone-orbit phone-orbit-one" />
      <div className="phone-orbit phone-orbit-two" />
      <div className="interactive-phone">
        <div className="phone-notch" />
        <div className="phone-status"><span>9:41</span><span>● ◼</span></div>
        <div className="phone-screen">
          <div className="phone-topline"><div><p className="phone-kicker">Good evening</p><h3>SpendPad</h3></div><button type="button" aria-label="Add expense" onClick={() => setShowAdd(true)} className="phone-add"><Plus /></button></div>
          {screen === 'home' && <div className="phone-content phone-fade"><div className="phone-total"><span>SPENT THIS MONTH</span><strong>₹42.50</strong><small>▣ ₹42.50 today　↗ ₹4.72/day avg</small></div><div className="phone-mini-grid"><div><span>Transactions</span><b>1</b></div><div><span>Top category</span><b>Food</b></div></div><h4>Recent activity</h4><div className="phone-transaction"><span className="food-icon">✦</span><div><b>coffee</b><small>Food · 09 Oct</small></div><strong>₹42.50</strong></div></div>}
          {screen === 'history' && <div className="phone-content phone-fade"><div className="phone-search"><Search /><span>Search expenses</span></div><div className="phone-pills"><span>✓ All time</span><span>Oct</span></div><h4>Transactions <small>1 found</small></h4><div className="phone-transaction"><span className="food-icon">✦</span><div><b>coffee</b><small>Food · 09 Oct</small></div><strong>₹42.50</strong></div></div>}
          {screen === 'insights' && <div className="phone-content phone-fade"><div className="phone-tabs"><span>Week</span><span className="active">Month</span><span>3 months</span></div><div className="phone-insight-total"><span>Total spending</span><strong>₹42.50</strong><small>− No previous-period spending to compare</small></div><h4>Spending over time</h4><div className="phone-chart"><i /><i /><i /><i /><i /><i /><i /></div></div>}
          <nav className="phone-nav"><button type="button" onClick={() => setScreen('home')} className={screen === 'home' ? 'active' : ''}>⌂<small>Home</small></button><button type="button" onClick={() => setScreen('history')} className={screen === 'history' ? 'active' : ''}>▤<small>History</small></button><button type="button" onClick={() => setScreen('insights')} className={screen === 'insights' ? 'active' : ''}>⌁<small>Insights</small></button></nav>
        </div>
        {showAdd && <div className="phone-modal"><div className="phone-modal-card"><span className="phone-kicker">NEW TRANSACTION</span><h4>What did you spend?</h4><input autoFocus value={expense} onChange={(event) => setExpense(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) addExpense() }} placeholder="e.g. ₹120 lunch" /><div><button type="button" onClick={() => setShowAdd(false)}>Cancel</button><button type="button" onClick={addExpense}>Add expense</button></div></div></div>}
      </div>
    </div>
  )
}

export default function Page() {
  const [screenshotIndex, setScreenshotIndex] = useState(0)

  const showPreviousScreenshot = () => setScreenshotIndex((current) => (current - 1 + screenshots.length) % screenshots.length)
  const showNextScreenshot = () => setScreenshotIndex((current) => (current + 1) % screenshots.length)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7f2] text-[#18251d]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="SpendPad home">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app_icon-BF3DX40BMiq72GhmySurltF5tiKY0C.png" alt="SpendPad app icon" className="size-10 rounded-xl shadow-sm" />
          <span className="text-lg">SpendPad</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[#526057] md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-[#21633e]" href="#features">Features</a>
          <a className="transition-colors hover:text-[#21633e]" href="#screenshots">Screenshots</a>
          <a className="transition-colors hover:text-[#21633e]" href="#faq">FAQ</a>
        </nav>
        <a href="/assets/spendpad.apk" className="hidden items-center gap-2 rounded-full bg-[#267548] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-10px_#267548] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#267548] sm:flex">
          <Download aria-hidden="true" className="size-4" /> Download APK
        </a>
        <details className="relative sm:hidden">
          <summary className="flex size-10 list-none cursor-pointer items-center justify-center rounded-full border border-[#dce4dc] bg-white [&::-webkit-details-marker]:hidden"><Menu aria-hidden="true" className="size-5" /><span className="sr-only">Open navigation</span></summary>
          <nav className="absolute right-0 top-12 z-10 flex w-44 flex-col gap-1 rounded-2xl border border-[#dce4dc] bg-white p-2 text-sm shadow-xl" aria-label="Mobile navigation">
            <a className="rounded-xl px-3 py-2 hover:bg-[#edf5ed]" href="#features">Features</a><a className="rounded-xl px-3 py-2 hover:bg-[#edf5ed]" href="#screenshots">Screenshots</a><a className="rounded-xl px-3 py-2 hover:bg-[#edf5ed]" href="#faq">FAQ</a><a className="rounded-xl bg-[#267548] px-3 py-2 font-medium text-white" href="/assets/spendpad.apk">Download APK</a>
          </nav>
        </details>
      </header>

      <section id="top" className="hero-section mx-auto grid max-w-7xl items-center gap-5 px-4 pb-14 pt-8 sm:gap-12 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe3d1] bg-[#e9f5e8] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#267548]"><span className="size-2 rounded-full bg-[#58b77a]" /> Made for everyday spending</p>
          <h1 className="max-w-xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">Know where your money goes.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#5c6a60]">SpendPad is a thoughtful, offline-first expense tracker for recording purchases, spotting patterns, and keeping your financial data close.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"><a href="/assets/spendpad.apk" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#267548] px-6 py-3.5 font-semibold text-white shadow-[0_12px_24px_-12px_#267548] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#267548]"><Download aria-hidden="true" className="size-5" /> Get SpendPad</a><a href="#screenshots" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold text-[#267548] hover:bg-[#eaf2e9]">See it in action <ArrowRight aria-hidden="true" className="size-4" /></a></div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5c6a60]"><span className="inline-flex items-center gap-2"><Check className="size-4 text-[#267548]" /> Works offline</span><span className="inline-flex items-center gap-2"><Check className="size-4 text-[#267548]" /> Stored on your device</span></div>
        </div>
        <InteractivePhone />
      </section>

      <section id="features" className="reveal-section border-y border-[#e1e9df] bg-white/60"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#267548]">A simpler way to stay aware</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Less bookkeeping. More clarity.</h2></div><div className="stagger-grid mt-14 grid gap-5 md:grid-cols-3">{features.map(({ icon: Icon, eyebrow, title, copy }) => <article key={title} className="rounded-3xl border border-[#dce7dc] bg-[#fbfcf9] p-7"><div className="flex size-12 items-center justify-center rounded-2xl bg-[#dff2e1] text-[#267548]"><Icon aria-hidden="true" className="size-6" /></div><p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#7b887d]">{eyebrow}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-3 leading-7 text-[#657267]">{copy}</p></article>)}</div><div className="mt-5 grid gap-5 rounded-3xl bg-[#173b27] p-7 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10"><div><div className="flex items-center gap-3"><ArchiveRestore className="size-5 text-[#a9e9b4]" /><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a9e9b4]">Backup without the cloud</p></div><h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Bring your data with you.</h3><p className="mt-3 max-w-2xl leading-7 text-[#c1d8c4]">Export your expenses as a JSON backup whenever you choose, then restore it later from Settings. No automatic cloud backup—just a file you control.</p></div><ShieldCheck aria-hidden="true" className="hidden size-20 text-[#5fbd78]/50 md:block" /></div></div></section>

      <section id="screenshots" className="reveal-section mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#267548]">Inside SpendPad</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Calm by design.</h2>
          </div>
          <p className="max-w-sm leading-7 text-[#657267]">A focused interface that gives your spending room to make sense.</p>
        </div>
        <div className="screenshot-carousel mt-10 sm:mt-14">
          <div className="screenshot-carousel-track stagger-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((shot, index) => (
              <figure key={shot.src} className={'screenshot-slide group ' + (index === screenshotIndex ? 'screenshot-slide-active' : '')}>
                <div className="overflow-hidden rounded-[2rem] border border-[#dbe6db] bg-[#e9eee8] p-2 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full rounded-[1.5rem]" />
                </div>
                <figcaption className="px-2 pt-5"><h3 className="font-semibold">{shot.title}</h3><p className="mt-1 text-sm leading-6 text-[#68756b]">{shot.copy}</p></figcaption>
              </figure>
            ))}
          </div>
          <div className="screenshot-carousel-controls" aria-label="Screenshot carousel controls">
            <button type="button" onClick={showPreviousScreenshot} aria-label="Previous screenshot"><ChevronLeft /></button>
            <div className="screenshot-dots">
              {screenshots.map((shot, index) => <button key={shot.src} type="button" onClick={() => setScreenshotIndex(index)} aria-label={'Show ' + shot.title} className={index === screenshotIndex ? 'active' : ''} />)}
            </div>
            <button type="button" onClick={showNextScreenshot} aria-label="Next screenshot"><ChevronRight /></button>
          </div>
        </div>
      </section>

      <section id="faq" className="reveal-section border-t border-[#e1e9df] bg-white/60"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#267548]">Good to know</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Questions, answered.</h2></div><div className="flex flex-col">{[{q:'Does SpendPad work offline?',a:'Yes. SpendPad is designed to work offline, so you can record and review expenses without an internet connection.'},{q:'Where is my data stored?',a:'Your expense data is stored locally on your device. SpendPad does not claim automatic cloud sync.'},{q:'How do backups work?',a:'From Settings, you can export a JSON backup file and restore expenses from a backup file whenever you need to.'},{q:'What platforms are supported?',a:'SpendPad is a Flutter app. Exact platform availability will be listed here once confirmed.'}].map((item, index) => <details key={item.q} className="group border-b border-[#dce5dc] py-5" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">{item.q}<ChevronDown aria-hidden="true" className="size-5 shrink-0 text-[#267548] transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-3 leading-7 text-[#657267]">{item.a}</p></details>)}</div></div></section>

      <footer className="bg-[#173b27] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12"><div><a href="#top" className="flex items-center gap-3 font-semibold tracking-tight"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app_icon-BF3DX40BMiq72GhmySurltF5tiKY0C.png" alt="SpendPad app icon" className="size-9 rounded-xl" /><span className="text-lg">SpendPad</span></a><p className="mt-4 max-w-sm text-sm leading-6 text-[#bad0be]">A private, practical way to keep an eye on everyday spending.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#bad0be]"><a className="hover:text-white" href="#features">Features</a><a className="hover:text-white" href="#screenshots">Screenshots</a><a className="hover:text-white" href="#faq">FAQ</a><a className="hover:text-white" href="/assets/spendpad.apk">Download APK</a></div></div><div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-5 text-xs text-[#91ad96] sm:px-8 lg:px-12">© 2026 SpendPad. Your data stays close.</div>      </footer>
      </main>
  )
}
