import { useEffect, useState } from 'react'

import officialLogo from './assets/logo.png'

const navItems = ['Portfolio', 'Studio', 'Canvas', 'Join us']

const storyImages = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
]

const featuredProjects = [
  {
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    className: 'col-span-1 md:col-span-2',
  },
  {
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    className: 'col-span-1',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    className: 'col-span-1',
  },
]

function App() {
  const [storyIndex, setStoryIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStoryIndex((current) => (current + 1) % storyImages.length)
    }, 3500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f3f1ee] text-[#111111]">
      <header className="mx-auto flex w-full max-w-[1800px] items-center justify-between gap-8 border-b border-black/10 px-8 py-6 lg:px-12">
        <div aria-label="Unboxed Studios home" className="flex items-center">
          <img src={officialLogo} alt="Unboxed Studios" className="h-auto w-65 md:w-[320px]" />
        </div>

        <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/80 no-underline">
              {item}
            </a>
          ))}
        </nav>

        <button type="button" className="rounded-full bg-black px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#f3f1ee] transition hover:translate-y-[-1px]">
          Start a Project <span aria-hidden="true">→</span>
        </button>
      </header>

      <main className="mx-auto w-full max-w-[1800px] px-8 pb-16 lg:px-12">
        <section aria-label="Agency statement" className="flex justify-center text-center pt-30 pb-40">
          <h1 className="font-['Cormorant_Garamond'] text-[clamp(4.5rem,8vw,13rem)] leading-none tracking-[-0.07em] text-black">
            Decisive brands lead
            <span className="block italic">defining moments</span>
          </h1>
        </section>

        <section aria-label="Featured work" className="grid h-[420px] grid-cols-1 gap-5 md:grid-cols-4">
          {featuredProjects.map((project) => (
            <article key={project.image} className={`${project.className} overflow-hidden rounded-[32px] bg-[#e7e1d6]`}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: 'center 15%',
                  transform: 'scale(1.08)',
                }}
              />
            </article>
          ))}
        </section>

        <section className="mt-24 grid gap-8 md:grid-cols-[0.9fr_1.4fr_0.8fr] md:items-start">
          <div className="min-h-[18rem] rounded-[28px] bg-cover bg-center shadow-[inset_0_0_0_1px_rgba(17,17,17,0.08)]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80')" }} />

          <div className="flex flex-col items-start justify-center pt-4">
            <div className="mb-6 inline-flex min-w-[12rem] items-center justify-center border border-black/80 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-black">
              INSIDE UNBOXED
            </div>

            <h2 className="font-['Cormorant_Garamond'] text-[clamp(3.2rem,5vw,7rem)] leading-[0.8] tracking-[-0.07em] text-black">
              An assembly of
              <span className="block italic">explorers, thinkers,</span>
              <span className="block italic">and builders</span>
            </h2>

            <p className="mt-6 max-w-[760px] text-[1.05rem] leading-[1.6] text-black/70">
              Our team is made up of a talented mix of Africa&apos;s finest brand
              leaders, designers and strategists, shaping great brands since 2015.
              Our work sparks big ideas, shapes compelling brands, and drives
              business growth by deepening bonds, inspiring loyalty, and commanding
              premium value.
            </p>
          </div>

          <div className="min-h-[15rem] rounded-[28px] bg-cover bg-center shadow-[inset_0_0_0_1px_rgba(17,17,17,0.08)]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80')" }} />
        </section>
      </main>

      <section aria-label="Brand story" className="mx-auto w-full max-w-[1800px] px-8 pb-8 pt-6 lg:px-12">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="font-['Cormorant_Garamond'] text-[clamp(2.6rem,5vw,6rem)] leading-[0.95] tracking-[-0.06em] text-black">
            Since 2015, we&apos;ve put brand at the
            <span className="block">centre of defining business decisions.</span>
          </p>

          <p className="mt-5 font-['Cormorant_Garamond'] text-[clamp(2.1rem,3vw,3.2rem)] italic tracking-[-0.04em] text-black/60">
            Meet FourthCanvas
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[900px] overflow-hidden rounded-[18px] border border-black/10 bg-[#efefee] shadow-[0_24px_50px_rgba(17,17,17,0.08)]">
          <div
            className="aspect-[1.45/1] w-full bg-cover bg-center grayscale transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url(${storyImages[storyIndex]})` }}
            aria-live="polite"
          />
        </div>
      </section>

      <footer className="mt-8 bg-black px-8 pb-12 pt-8 text-[#f5f5f3] lg:px-12">
        <div className="mx-auto flex w-full max-w-[700px] flex-col items-center gap-4 pt-4 text-center">
          <a href="mailto:hello@fourthcanvas.co" className="text-[14px] font-medium uppercase tracking-[0.02em] text-[#f5f5f3] no-underline">
            hello@fourthcanvas.co
          </a>
          <div className="text-[12px] font-medium uppercase tracking-[0.02em] text-[#f5f5f3]">LAGOS, NIGERIA</div>
          <div className="text-[12px] font-medium uppercase tracking-[0.02em] text-[#f5f5f3]">©2015-2026 FOURTHCANVAS. ALL RIGHTS RESERVED.</div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-[12px] font-medium uppercase tracking-[0.02em] text-[#f5f5f3]">
            <a href="#" className="text-[#f5f5f3] no-underline">TWITTER (X)</a>
            <a href="#" className="text-[#f5f5f3] no-underline">INSTAGRAM</a>
            <a href="#" className="text-[#f5f5f3] no-underline">LINKEDIN</a>
          </div>

          <div className="mt-4 text-[12px] font-medium uppercase tracking-[0.02em] text-[#f5f5f3]">
            <a href="#" className="text-[#f5f5f3] no-underline">PRIVACY POLICY</a>
          </div>
        </div>

        <button type="button" className="mx-auto mt-12 block w-full max-w-[1580px] rounded-full border-2 border-[#f5f5f3] bg-black px-8 py-6 font-['Cormorant_Garamond'] text-[clamp(3.2rem,7vw,10rem)] leading-[0.9] tracking-[-0.07em] text-[#f5f5f3] transition hover:translate-y-[-1px]">
          Start a project
        </button>
      </footer>
    </div>
  )
}

export default App
