import { Link } from 'react-router-dom'
import {
  FiHelpCircle,
  FiShuffle,
  FiFeather,
  FiBriefcase,
  FiMap,
  FiCode,
  FiCompass,
  FiFlag,
} from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader.jsx'
import GlowCard from '../components/GlowCard.jsx'
import useReveal from '../hooks/useReveal.js'
import SkillTransferPathways from '../components/humanbackup/SkillTransferPathways.jsx'
import AlternativePlanFeature from '../components/humanbackup/AlternativePlanFeature.jsx'
import AariServiceCards from '../components/humanbackup/AariServiceCards.jsx'
import AariOrderJourney from '../components/humanbackup/AariOrderJourney.jsx'
import AariRoadmap from '../components/humanbackup/AariRoadmap.jsx'
import SkillBridgeGrid from '../components/humanbackup/SkillBridgeGrid.jsx'
import DualPathDiagram from '../components/humanbackup/DualPathDiagram.jsx'
import PrinciplesGrid from '../components/humanbackup/PrinciplesGrid.jsx'
import {
  whatIfIntro,
  whatIfPossibilities,
  aariCustomers,
  itAariMessage,
  closingStatement,
} from '../data/humanBackup.js'

const CONTENTS = [
  { num: '01', label: 'The What-If Scenario', icon: FiHelpCircle, href: '#what-if' },
  { num: '02', label: 'Skill Transfer', icon: FiShuffle, href: '#skill-transfer' },
  { num: '03', label: 'My Alternative Plan', icon: FiFeather, href: '#alternative-plan' },
  { num: '04', label: 'Aari Business Model', icon: FiBriefcase, href: '#business-model' },
  { num: '05', label: 'Business Roadmap', icon: FiMap, href: '#roadmap' },
  { num: '06', label: 'IT Skills + Aari', icon: FiCode, href: '#skill-bridge' },
  { num: '07', label: '2030 Resilience Plan', icon: FiCompass, href: '#resilience-plan' },
  { num: '08', label: 'The Human Backup Principle', icon: FiFlag, href: '#principle' },
]

function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-void pt-28">
      <div className="absolute inset-0 bg-grid-lines bg-grid animate-grid-pan opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-violet/20 blur-[100px] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px] animate-float"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <h1 className="mt-8 max-w-4xl font-display text-[2.1rem] font-bold leading-[1.1] text-mist sm:text-5xl md:text-6xl lg:text-7xl">
          THE HUMAN
          <br />
          <span className="text-gradient-human">BACKUP PLAN</span>
        </h1>

        <p className="mt-6 font-display text-lg text-mist/70 md:text-xl">
          What If IT Is No Longer My Main Career?
        </p>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist/60 md:text-lg">
          Your career is not your identity. Your ability to adapt is. The last two pages looked at
          how work and job titles are shifting. This page looks inward — at what happens to skills,
          plans, and confidence if the specific IT career I&rsquo;m building toward doesn&rsquo;t
          arrive exactly as expected, and why I already have a real, thought-through answer to that.
        </p>
      </div>
    </section>
  )
}

function Contents() {
  const ref = useReveal()
  return (
    <section className="relative mx-auto max-w-7xl px-5 pt-8 md:px-10">
      <div ref={ref} className="reveal glass rounded-2xl p-6 md:p-8">
        <p className="font-mono text-[11px] tracking-[0.25em] text-violet/60">ON THIS PAGE</p>
        <nav className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENTS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl border border-white/5 bg-void/40 px-4 py-3 transition-colors hover:border-violet/30 hover:bg-deep/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist/50 transition-colors group-hover:border-orchid/30 group-hover:text-orchid">
                <item.icon size={15} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] text-violet/45">{item.num}</span>
                <span className="block truncate text-sm text-mist/70 group-hover:text-mist">{item.label}</span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default function HumanBackup() {
  const whatIfIntroRef = useReveal()
  const skillTransferIntroRef = useReveal()
  const businessModelIntroRef = useReveal()
  const roadmapIntroRef = useReveal()
  const bridgeIntroRef = useReveal()
  const resilienceIntroRef = useReveal()
  const principleIntroRef = useReveal()

  return (
    <>
      <Hero />
      <Contents />

      {/* SECTION 1 — THE WHAT-IF SCENARIO */}
      <section id="what-if" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="01"
          title="The What-If Scenario"
          description="What if the IT career I planned for no longer exists in the form I expected? That question isn't a prediction — it's a stress test for the plan."
          tone="human"
        />
        <div ref={whatIfIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>{whatIfIntro}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatIfPossibilities.map((item) => (
            <GlowCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="human" />
          ))}
        </div>
      </section>

      {/* SECTION 2 — SKILL TRANSFER */}
      <section id="skill-transfer" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="02"
          title="Skill Transfer"
          description="Technology skills rarely stay locked inside technology jobs. Click any pathway to see why the transfer works."
          tone="human"
        />
        <div ref={skillTransferIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            None of these pathways require starting over. Each one takes a combination of skills
            already being built inside an IT path and points to where else that combination is
            valuable.
          </p>
        </div>
        <SkillTransferPathways />
      </section>

      {/* SECTION 3 — MY ALTERNATIVE PLAN */}
      <section id="alternative-plan" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="03"
          title="My Alternative Plan"
          description="A real backup plan, not a hypothetical one."
          tone="human"
        />
        <AlternativePlanFeature />
      </section>

      {/* SECTION 4 — AARI BUSINESS MODEL */}
      <section id="business-model" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="04"
          title="Aari Business Model"
          description="Who the work is for, what is offered, and how an order moves from first message to a happy repeat customer."
        />
        <div ref={businessModelIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            Most customers arrive around occasions — a wedding, a festival, a family function —
            which means demand is seasonal and relationship-driven rather than constant, and the
            business model has to plan around that instead of against it.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {aariCustomers.map((c) => {
            const Icon = c.icon
            return (
              <span
                key={c.label}
                className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-200 md:text-sm"
              >
                <Icon size={14} />
                {c.label}
              </span>
            )
          })}
        </div>

        <p className="mt-12 font-mono text-[11px] tracking-[0.2em] text-amber-300/70">SERVICES OFFERED</p>
        <AariServiceCards />

        <p className="mt-14 font-mono text-[11px] tracking-[0.2em] text-amber-300/70">THE ORDER PROCESS</p>
        <AariOrderJourney />
      </section>

      {/* SECTION 5 — AARI BUSINESS ROADMAP */}
      <section id="roadmap" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="05"
          label="SECTION FIVE"
          title="Aari Business Roadmap"
          description="Eight phases from first stitch to a small studio. Click any phase to see what it actually involves."
        />
        <div ref={roadmapIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            This is a multi-year path, not a launch checklist — each phase is meant to be lived in
            for a while before moving to the next, and skipping ahead usually means redoing the
            skipped step later anyway.
          </p>
        </div>
        <AariRoadmap />
      </section>

      {/* SECTION 6 — IT SKILLS + AARI BUSINESS */}
      <section id="skill-bridge" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="06"
          label="SECTION SIX"
          title="IT Skills + Aari Business"
          description="What years of studying technology can quietly do for a craft business."
          tone="human"
        />
        <div ref={bridgeIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            This is one of the most important ideas in the whole project: an IT background isn&rsquo;t
            wasted effort if the career path changes — it becomes the infrastructure underneath a
            completely different business.
          </p>
        </div>
        <SkillBridgeGrid />
        <p className="mt-10 text-center font-display text-lg font-semibold text-mist/85 md:text-xl">
          &ldquo;{itAariMessage}&rdquo;
        </p>
      </section>

      {/* SECTION 7 — MY 2030 RESILIENCE PLAN */}
      <section id="resilience-plan" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="07"
          label="SECTION SEVEN"
          title="My 2030 Resilience Plan"
          description="Two parallel paths, built by the same person, from the same core skills."
          tone="human"
        />
        <div ref={resilienceIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            These paths are not in competition with each other, and pursuing one does not mean
            abandoning the other — Path A stays the primary goal, and Path B is what makes stepping
            away from Path A a choice instead of a crisis.
          </p>
        </div>
        <DualPathDiagram />
      </section>

      {/* SECTION 8 — THE HUMAN BACKUP PRINCIPLE */}
      <section id="principle" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="08"
          label="SECTION EIGHT"
          title="The Human Backup Principle"
          description="A closing principle, not a closing prediction."
          tone="human"
          align="center"
        />
        <div ref={principleIntroRef} className="reveal mx-auto mt-8 max-w-2xl text-center">
          {closingStatement.map((line) => (
            <p key={line} className="font-display text-xl font-semibold leading-relaxed text-mist md:text-2xl">
              {line}
            </p>
          ))}
        </div>

        <PrinciplesGrid />

        <div className="glass relative mt-16 overflow-hidden rounded-3xl p-8 text-center md:p-14">
          <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-mist sm:text-3xl">
              Your career is not your identity.
              <br />
              Your ability to adapt is.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist/60 md:text-base">
              This page isn&rsquo;t a hedge against IT — it&rsquo;s proof of a mindset that works
              whichever way 2030 actually turns out. The final page turns all of this outward, into
              a personal, editable plan.
            </p>
            <Link
              to="/your-2030"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-orchid px-8 py-4 font-display text-sm font-semibold text-void shadow-glow-violet transition-transform duration-300 hover:scale-[1.03]"
            >
              Build Your 2030
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
