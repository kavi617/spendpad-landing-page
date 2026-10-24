'use client'

import { useRef, useState } from 'react'
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
  X,
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
  const [downloadStarted, setDownloadStarted] = useState(false)
  const [videoStarted, setVideoStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const showPreviousScreenshot = () => setScreenshotIndex((current) => (current - 1 + screenshots.length) % screenshots.length)
  const showNextScreenshot = () => setScreenshotIndex((current) => (current + 1) % screenshots.length)

  const celebrateDownload = () => {
    setDownloadStarted(true)
    // A short, cheerful three-note chime. Audio is started from the user's click.
    try {
      const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!AudioContextClass) return
      const context = new AudioContextClass()
      const now = context.currentTime
      ;[523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(frequency, now + index * 0.105)
        gain.gain.setValueAtTime(0.0001, now + index * 0.105)
        gain.gain.exponentialRampToValueAtTime(0.12, now + index * 0.105 + 0.018)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.105 + 0.24)
        oscillator.connect(gain)
        gain.connect(context.destination)
        oscillator.start(now + index * 0.105)
        oscillator.stop(now + index * 0.105 + 0.25)
      })
      window.setTimeout(() => { void context.close() }, 900)
    } catch { /* Sound may be unavailable; the visual animation still works. */ }
  }

  return (
    <>
    <main className={`min-h-screen overflow-hidden bg-[#f5f7f2] text-[#18251d] ${downloadStarted ? 'spendpad-page-celebrate' : ''}`}>
      <style jsx global>{`
            @keyframes spendpad-page-jiggle { 0%, 100% { transform: translate3d(0,0,0); } 12% { transform: translate3d(-3px,1px,0) rotate(-.08deg); } 24% { transform: translate3d(3px,-1px,0) rotate(.08deg); } 36% { transform: translate3d(-2px,0,0); } 48% { transform: translate3d(2px,1px,0); } 60% { transform: translate3d(-1px,0,0); } 72% { transform: translate3d(1px,-1px,0); } }
            .spendpad-page-celebrate { animation: spendpad-page-jiggle 560ms cubic-bezier(.36,.07,.19,.97) both; transform-origin: center; }
            @keyframes spendpad-welcome-in { from { opacity: 0; } to { opacity: 1; } }
            @keyframes spendpad-ring-expand { 0% { transform: scale(.65); opacity: 0; } 25% { opacity: .8; } 100% { transform: scale(1.45); opacity: 0; } }
            @keyframes spendpad-mark-arrive { 0% { transform: scale(.72) rotate(-7deg); opacity: 0; } 65% { transform: scale(1.06) rotate(2deg); opacity: 1; } 100% { transform: scale(1) rotate(0); opacity: 1; } }
            @keyframes spendpad-device-pulse { 0%, 100% { transform: translateY(0) rotate(0); } 18% { transform: translateY(-2px) rotate(-1.2deg); } 36% { transform: translateY(1px) rotate(1.2deg); } 54% { transform: translateY(-1px) rotate(-.6deg); } 72% { transform: translateY(0) rotate(0); } }
            .spendpad-welcome-overlay { animation: spendpad-welcome-in 300ms ease-out both; }
            .spendpad-welcome-ring { animation: spendpad-ring-expand 2.4s cubic-bezier(.16,1,.3,1) infinite; }
            .spendpad-welcome-ring-delay { animation-delay: 800ms; }
            .spendpad-welcome-mark { animation: spendpad-mark-arrive 700ms cubic-bezier(.16,1,.3,1) both, spendpad-device-pulse 2.8s ease-in-out 700ms infinite; }
            .spendpad-video-shell { position: relative; isolation: isolate; overflow: hidden; border-radius: 28px; background: #102b1c; box-shadow: 0 28px 70px -36px rgba(23,59,39,.45); }
            .spendpad-video-shell .commercial-video { display: block; width: 100%; height: auto; min-height: 220px; max-height: min(68vh, 680px); object-fit: contain; background: #102b1c; }
            .spendpad-video-launch { position: absolute; inset: 0; z-index: 2; display: block; width: 100%; height: 100%; min-height: 220px; border: 0; color: white; cursor: pointer; background: linear-gradient(180deg, rgba(10,29,18,.16), rgba(10,29,18,.56)); transition: background 250ms ease; }
            .spendpad-video-launch:hover { background: linear-gradient(180deg, rgba(10,29,18,.1), rgba(10,29,18,.68)); }
            .spendpad-video-play-orbit { position: absolute; left: 50%; top: 43%; width: 156px; height: 156px; border: 1px solid rgba(255,255,255,.55); border-radius: 999px; transform: translate(-50%,-50%); box-shadow: 0 0 0 12px rgba(255,255,255,.09), 0 0 0 25px rgba(255,255,255,.05); transition: transform 350ms cubic-bezier(.16,1,.3,1), box-shadow 350ms ease; }
            .spendpad-video-launch:hover .spendpad-video-play-orbit { transform: translate(-50%,-50%) scale(1.06); box-shadow: 0 0 0 16px rgba(255,255,255,.11), 0 0 0 32px rgba(255,255,255,.06); }
            .spendpad-video-play-core { position: absolute; left: 50%; top: 43%; transform: translate(-50%,-50%); display: grid; place-items: center; width: 112px; height: 112px; padding-left: 5px; border: 1px solid rgba(255,255,255,.72); border-radius: 999px; color: #1d6038; background: rgba(255,255,255,.96); box-shadow: 0 14px 50px rgba(0,0,0,.22); transition: transform 250ms ease; }
            .spendpad-video-launch:hover .spendpad-video-play-core { transform: translate(-50%,-50%) scale(1.07); }
            .spendpad-video-play-core svg { width: 40px; height: 40px; }
            .spendpad-video-play-caption { position: absolute; left: 16px; right: 16px; bottom: 14%; display: grid; gap: 5px; text-align: center; text-shadow: 0 2px 18px rgba(0,0,0,.55); }
            .spendpad-video-play-caption strong { font-size: clamp(17px, 2vw, 23px); font-weight: 650; letter-spacing: -.025em; }
            .spendpad-video-play-caption small { color: rgba(255,255,255,.84); font-size: 13px; }
            @media (max-width: 640px) { .spendpad-video-play-orbit { width: 112px; height: 112px; top: 40%; } .spendpad-video-play-core { width: 84px; height: 84px; top: 40%; } .spendpad-video-play-caption { bottom: 10%; } .spendpad-video-play-core svg { width: 32px; height: 32px; } .spendpad-video-play-caption small { max-width: 250px; padding: 0 12px; } .spendpad-video-shell .commercial-video { min-height: 190px; } }
            @media (prefers-reduced-motion: reduce) { .spendpad-welcome-overlay, .spendpad-welcome-ring, .spendpad-welcome-mark, .spendpad-page-celebrate { animation: none !important; } .spendpad-video-launch, .spendpad-video-play-core, .spendpad-video-play-orbit { transition: none !important; } }
      `}</style>
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
        <a href="/assets/spendpad.apk" download="SpendPad.apk" onClick={celebrateDownload} className="hidden items-center gap-2 rounded-full bg-[#267548] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-10px_#267548] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#267548] sm:flex">
          <Download aria-hidden="true" className="size-4" /> Download APK
        </a>
        <details className="relative sm:hidden">
          <summary className="flex size-10 list-none cursor-pointer items-center justify-center rounded-full border border-[#dce4dc] bg-white [&::-webkit-details-marker]:hidden"><Menu aria-hidden="true" className="size-5" /><span className="sr-only">Open navigation</span></summary>
          <nav className="absolute right-0 top-12 z-10 flex w-44 flex-col gap-1 rounded-2xl border border-[#dce4dc] bg-white p-2 text-sm shadow-xl" aria-label="Mobile navigation">
            <a className="rounded-xl px-3 py-2 hover:bg-[#edf5ed]" href="#features">Features</a><a className="rounded-xl px-3 py-2 hover:bg-[#edf5ed]" href="#screenshots">Screenshots</a><a className="rounded-xl px-3 py-2 hover:bg-[#edf5ed]" href="#faq">FAQ</a><a className="rounded-xl bg-[#267548] px-3 py-2 font-medium text-white" href="/assets/spendpad.apk" download="SpendPad.apk" onClick={celebrateDownload}>Download APK</a>
          </nav>
        </details>
      </header>

      <section id="top" className="hero-section mx-auto grid max-w-7xl items-center gap-5 px-4 pb-14 pt-8 sm:gap-12 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe3d1] bg-[#e9f5e8] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#267548]"><span className="size-2 rounded-full bg-[#58b77a]" /> Made for everyday spending</p>
          <h1 className="max-w-xl text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl">Know where your money goes.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#5c6a60]">SpendPad is a thoughtful, offline-first expense tracker for recording purchases, spotting patterns, and keeping your financial data close.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"><a href="/assets/spendpad.apk" download="SpendPad.apk" onClick={celebrateDownload} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#267548] px-6 py-3.5 font-semibold text-white shadow-[0_12px_24px_-12px_#267548] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#267548]"><Download aria-hidden="true" className="size-5" /> Get SpendPad</a><a href="#screenshots" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-semibold text-[#267548] hover:bg-[#eaf2e9]">See it in action <ArrowRight aria-hidden="true" className="size-4" /></a></div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5c6a60]"><span className="inline-flex items-center gap-2"><Check className="size-4 text-[#267548]" /> Works offline</span><span className="inline-flex items-center gap-2"><Check className="size-4 text-[#267548]" /> Stored on your device</span></div>
        </div>
        <InteractivePhone />
      </section>

      <section id="commercial" className="reveal-section border-y border-[#e1e9df] bg-white/60">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#267548]">See SpendPad in action</p>
          <div className="mt-5 sm:mt-6">
            <div className="commercial-video-wrap spendpad-video-shell">
              <video
                ref={videoRef}
                className="commercial-video"
                src="/assets/Spend-pad-comercial.mp4"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setVideoStarted(true)}
                aria-label="SpendPad commercial video"
              />
              {!videoStarted && (
                <button
                  type="button"
                  className="spendpad-video-launch"
                  aria-label="Play the SpendPad commercial"
                  onClick={() => {
                    const video = videoRef.current
                    if (video) {
                      void video.play().catch(() => setVideoStarted(false))
                    }
                  }}
                >
                  <span className="spendpad-video-play-orbit" aria-hidden="true" />
                  <span className="spendpad-video-play-core" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M8 5.8c0-.8.9-1.3 1.6-.9l9 6.2a1.1 1.1 0 0 1 0 1.8l-9 6.2c-.7.5-1.6 0-1.6-.9V5.8Z" fill="currentColor" /></svg></span>
                  <span className="spendpad-video-play-caption"><strong>See SpendPad in action</strong><small>A quick look at a calmer way to track spending</small></span>
                </button>
              )}
            </div>
          </div>
        </div>
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

      <section id="installation-guide" className="scroll-mt-24 border-t border-[#dce8dc] bg-[#f4f8f2]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#267548]">Quick setup</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#18251d] sm:text-4xl">Install SpendPad on Android</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#657267]">Follow these steps after the APK finishes downloading. You only need to do this once.</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { n: '01', title: 'Open your downloads', copy: 'When the download finishes, open your browser’s Downloads list or the Files app and find SpendPad.apk.' },
              { n: '02', title: 'Tap SpendPad.apk', copy: 'Tap the downloaded file. If Android asks you to allow installs from this source, open Settings and allow it for the app you used to open the APK.' },
              { n: '03', title: 'Install the app', copy: 'Return to the installer and tap Install. Wait for Android to finish installing SpendPad.' },
              { n: '04', title: 'Open SpendPad', copy: 'Tap Open, or find SpendPad on your home screen or in your app list. You can start recording expenses.' },
            ].map((step) => (
              <li key={step.n} className="rounded-2xl border border-[#dce8dc] bg-white p-6 shadow-sm">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#e5f3e6] text-sm font-bold text-[#267548]">{step.n}</span>
                <h3 className="mt-4 text-lg font-semibold text-[#18251d]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657267]">{step.copy}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-6 text-[#657267]">Safety tip: only install APK files you trust. If you enabled permission for this installation, you can turn it off again in Android Settings.</p>
          <a href="/assets/spendpad.apk" download="SpendPad.apk" onClick={celebrateDownload} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#267548] px-5 py-3 font-semibold text-white transition hover:bg-[#1d6039]">Download SpendPad again <Download className="size-4" /></a>
        </div>
      </section>

      <section id="faq" className="reveal-section border-t border-[#e1e9df] bg-white/60"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#267548]">Good to know</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Questions, answered.</h2></div><div className="flex flex-col">{[{q:'Does SpendPad work offline?',a:'Yes. SpendPad is designed to work offline, so you can record and review expenses without an internet connection.'},{q:'Where is my data stored?',a:'Your expense data is stored locally on your device. SpendPad does not claim automatic cloud sync.'},{q:'How do backups work?',a:'From Settings, you can export a JSON backup file and restore expenses from a backup file whenever you need to.'},{q:'What platforms are supported?',a:'SpendPad is a Flutter app. Exact platform availability will be listed here once confirmed.'}].map((item, index) => <details key={item.q} className="group border-b border-[#dce5dc] py-5" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">{item.q}<ChevronDown aria-hidden="true" className="size-5 shrink-0 text-[#267548] transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-3 leading-7 text-[#657267]">{item.a}</p></details>)}</div></div></section>

      <footer className="bg-[#173b27] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12"><div><a href="#top" className="flex items-center gap-3 font-semibold tracking-tight"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app_icon-BF3DX40BMiq72GhmySurltF5tiKY0C.png" alt="SpendPad app icon" className="size-9 rounded-xl" /><span className="text-lg">SpendPad</span></a><p className="mt-4 max-w-sm text-sm leading-6 text-[#bad0be]">A private, practical way to keep an eye on everyday spending.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#bad0be]"><a className="hover:text-white" href="#features">Features</a><a className="hover:text-white" href="#screenshots">Screenshots</a><a className="hover:text-white" href="#faq">FAQ</a><a className="hover:text-white" href="/assets/spendpad.apk" download="SpendPad.apk" onClick={celebrateDownload}>Download APK</a></div></div><div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-5 text-xs text-[#91ad96] sm:px-8 lg:px-12">© 2026 SpendPad. Your data stays close.</div>      </footer>
      </main>
      {downloadStarted && (
        <div className="spendpad-welcome-overlay" role="dialog" aria-modal="true" aria-labelledby="spendpad-welcome-title" style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <button type="button" aria-label="Close welcome animation" onClick={() => setDownloadStarted(false)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, background: 'rgba(12,24,16,.24)', backdropFilter: 'none', WebkitBackdropFilter: 'none', cursor: 'default' }} />
          <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '440px', maxHeight: 'calc(100dvh - 32px)', overflowY: 'auto', borderRadius: '30px', border: '1px solid rgba(255,255,255,.85)', background: '#fbfdf9', padding: '30px 28px', textAlign: 'center', boxShadow: '0 24px 80px -24px rgba(0,0,0,.32)' }}>
            <button type="button" onClick={() => setDownloadStarted(false)} aria-label="Close welcome animation" style={{ position: 'absolute', top: 12, right: 12, zIndex: 2, width: 36, height: 36, border: 0, borderRadius: 999, background: '#edf5ed', color: '#526057', cursor: 'pointer', fontSize: 22, lineHeight: 1 }}>×</button>
            <div style={{ position: 'relative', width: 144, height: 144, margin: '0 auto 22px', display: 'grid', placeItems: 'center' }}>
              <span className="spendpad-welcome-ring" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid #80c894' }} />
              <span className="spendpad-welcome-ring spendpad-welcome-ring-delay" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid #80c894' }} />
              <span className="spendpad-welcome-mark" style={{ position: 'relative', display: 'grid', placeItems: 'center', width: 96, height: 96, borderRadius: 28, background: '#e3f4e5', boxShadow: '0 12px 40px -18px rgba(38,117,72,.65)' }}>
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app_icon-BF3DX40BMiq72GhmySurltF5tiKY0C.png" alt="SpendPad app icon" style={{ width: 82, height: 82, borderRadius: 22 }} />
                <span style={{ position: 'absolute', right: -7, bottom: -7, display: 'grid', placeItems: 'center', width: 30, height: 30, borderRadius: '50%', border: '3px solid #fbfdf9', background: '#267548', color: 'white', fontSize: 18 }}>✓</span>
              </span>
            </div>
            <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#267548' }}>A little more clarity starts here</p>
            <h2 id="spendpad-welcome-title" style={{ margin: '0', fontSize: 'clamp(26px, 6vw, 34px)', lineHeight: 1.15, fontWeight: 700, letterSpacing: '-.04em', color: '#18251d' }}>Welcome to SpendPad!</h2>
            <p style={{ margin: '14px auto 0', maxWidth: 350, fontSize: 14, lineHeight: 1.7, color: '#5c6a60' }}>Thanks for choosing SpendPad. Your download is starting now. When SpendPad.apk finishes downloading, open the file on your Android device and follow the installation steps.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 24 }}>
              <button type="button" onClick={() => setDownloadStarted(false)} style={{ border: 0, borderRadius: 999, background: '#267548', padding: '12px 25px', color: '#fff', fontSize: 14, fontWeight: 650, cursor: 'pointer', boxShadow: '0 8px 22px -12px #267548' }}>Got it</button>
              <a href="#installation-guide" onClick={() => setDownloadStarted(false)} style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 999, padding: '12px 20px', color: '#267548', fontSize: 14, fontWeight: 650, textDecoration: 'none' }}>Installation guide</a>
            </div>
            <p style={{ margin: '18px 0 0', fontSize: 11, lineHeight: 1.5, color: '#829087' }}>Open SpendPad after installation to start tracking your spending.</p>
          </div>
        </div>
      )}
    </>
  )
}
