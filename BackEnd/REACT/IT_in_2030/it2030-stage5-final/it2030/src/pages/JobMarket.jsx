import { Link } from 'react-router-dom'
import {
  FiCompass,
  FiTrendingUp,
  FiRefreshCw,
  FiActivity,
  FiHeart,
  FiLayers,
  FiSliders,
  FiShield,
} from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader.jsx'
import GlowCard from '../components/GlowCard.jsx'
import SkillMeter from '../components/SkillMeter.jsx'
import useReveal from '../hooks/useReveal.js'
import ExpandingCareers from '../components/jobmarket/ExpandingCareers.jsx'
import EvolvingCareerFlow from '../components/jobmarket/EvolvingCareerFlow.jsx'
import AutomationExposure from '../components/jobmarket/AutomationExposure.jsx'
import SkillStack from '../components/jobmarket/SkillStack.jsx'
import SkillCalculator from '../components/jobmarket/SkillCalculator.jsx'
import ResilienceIndex from '../components/jobmarket/ResilienceIndex.jsx'
import { landscapeConcepts, landscapeNote, risingHumanSkills } from '../data/jobMarket.js'

const CONTENTS = [
  { num: '01', label: 'Job Landscape', icon: FiCompass, href: '#landscape' },
  { num: '02', label: 'Expanding Careers', icon: FiTrendingUp, href: '#expanding' },
  { num: '03', label: 'Evolving Careers', icon: FiRefreshCw, href: '#evolving' },
  { num: '04', label: 'Automation Exposure', icon: FiActivity, href: '#automation' },
  { num: '05', label: 'Human Skills', icon: FiHeart, href: '#human-skills' },
  { num: '06', label: 'The Skill Stack', icon: FiLayers, href: '#skill-stack' },
  { num: '07', label: 'Skill Calculator', icon: FiSliders, href: '#calculator' },
  { num: '08', label: 'Resilience Index', icon: FiShield, href: '#resilience' },
]

function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-void pt-28">
      <div className="absolute inset-0 bg-grid-lines bg-grid animate-grid-pan opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25" aria-hidden="true">
        {[14, 38, 62, 86].map((left, i) => (
          <div
            key={left}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-signal/35 to-transparent"
            style={{ left: `${left}%` }}
          >
            <div
              className="h-1/3 w-full animate-scan-line bg-gradient-to-b from-cyan/70 to-transparent"
              style={{ animationDelay: `${i * 1.1}s`, animationDuration: `${4 + i}s` }}
            />
          </div>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <h1 className="mt-8 max-w-4xl font-display text-[2.1rem] font-bold leading-[1.1] text-mist sm:text-5xl md:text-6xl lg:text-7xl">
          THE 2030
          <br />
          <span className="text-gradient-signal">JOB MARKET</span>
        </h1>

        <p className="mt-6 font-display text-lg text-mist/70 md:text-xl">
          Which Careers Grow, Change and Automate?
        </p>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist/60 md:text-lg">
          The previous page looked at how work changes task by task. This page zooms out to the
          career level: which roles are expanding, how familiar IT jobs are evolving, which specific
          tasks carry real automation exposure, and which skills — human and technical — are worth
          building on purpose between now and 2030.
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
        <p className="font-mono text-[11px] tracking-[0.25em] text-sky/55">ON THIS PAGE</p>
        <nav className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENTS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl border border-white/5 bg-void/40 px-4 py-3 transition-colors hover:border-signal/30 hover:bg-deep/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist/50 transition-colors group-hover:border-cyan/30 group-hover:text-cyan">
                <item.icon size={15} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] text-sky/45">{item.num}</span>
                <span className="block truncate text-sm text-mist/70 group-hover:text-mist">{item.label}</span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default function JobMarket() {
  const landscapeRef = useReveal()
  const expandingIntroRef = useReveal()
  const evolvingIntroRef = useReveal()
  const humanSkillsIntroRef = useReveal()
  const stackIntroRef = useReveal()
  const calculatorIntroRef = useReveal()
  const resilienceIntroRef = useReveal()

  return (
    <>
      <Hero />
      <Contents />

      {/* SECTION 1 — THE FUTURE JOB LANDSCAPE */}
      <section id="landscape" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="01"
          title="The Future Job Landscape"
          description="Emerging roles, evolving roles, hybrid careers, and AI-augmented professionals are all part of the same shift — not separate categories."
        />
        <div ref={landscapeRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>{landscapeNote}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landscapeConcepts.map((item) => (
            <GlowCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      {/* SECTION 2 — EXPANDING CAREERS */}
      <section id="expanding" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="02"
          title="Expanding Careers"
          description="Eight roles expected to see rising demand. Click any card to see what they do, why the role may grow, and where human judgment sits inside it."
          tone="cyan"
        />
        <div ref={expandingIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            None of these are guaranteed headcount forecasts — they are directions supported by how
            organisations are building and governing AI systems today, described here as what the work
            actually involves rather than as a number.
          </p>
        </div>
        <ExpandingCareers />
      </section>

      {/* SECTION 3 — EVOLVING CAREERS */}
      <section id="evolving" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="03"
          title="Evolving Careers"
          description="Seven familiar IT roles, shown as a shift from current responsibilities through automation, evolving work, and the skills that shift rewards."
        />
        <div ref={evolvingIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            These roles are not disappearing — the mix of tasks inside each one is changing shape.
            Select a role to walk through how it is expected to evolve.
          </p>
        </div>
        <EvolvingCareerFlow />
      </section>

      {/* SECTION 4 — AUTOMATION EXPOSURE */}
      <section id="automation" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="04"
          title="Automation Exposure"
          description="Organised by task rather than job title. Filter by how strong the automation fit is, and read why that never means the surrounding job disappears."
          tone="cyan"
        />
        <AutomationExposure />
      </section>

      {/* SECTION 5 — HUMAN SKILLS THAT BECOME MORE VALUABLE */}
      <section id="human-skills" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="05"
          label="SECTION FIVE"
          title="Human Skills That Become More Valuable"
          description="As routine tasks automate, the tasks that remain lean harder on skills a model cannot fully take over."
          tone="human"
        />
        <div ref={humanSkillsIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            The meters below are an illustrative read on relative emphasis, not a measured ranking —
            every one of these skills matters, and most careers reward more than one at once.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {risingHumanSkills.map((skill) => (
            <SkillMeter key={skill.id} {...skill} />
          ))}
        </div>
      </section>

      {/* SECTION 6 — THE 2030 SKILL STACK */}
      <section id="skill-stack" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="06"
          label="SECTION SIX"
          title="The 2030 Skill Stack"
          description="Four layers, foundation to specialised. Click a layer to see what belongs inside it."
        />
        <div ref={stackIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            The stack is ordered, not ranked — foundation skills stay the entry price for everything
            above them, and the human layer at the top is what turns technical and AI capability into
            work someone can be trusted to own.
          </p>
        </div>
        <SkillStack />
      </section>

      {/* SECTION 7 — FUTURE SKILL CALCULATOR */}
      <section id="calculator" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="07"
          label="SECTION SEVEN"
          title="Future Skill Calculator"
          description="Select the skills you already have. Everything below — the score, the coverage bars, the gaps, and the role matches — recalculates live."
          tone="cyan"
        />
        <div ref={calculatorIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            The readiness score is a simple, transparent weighting across technical, AI, and human
            skill categories — it is a self-reflection tool, not a certified assessment or a hiring
            benchmark.
          </p>
        </div>
        <SkillCalculator />
      </section>

      {/* SECTION 8 — CAREER RESILIENCE INDEX */}
      <section id="resilience" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="08"
          label="SECTION EIGHT"
          title="Career Resilience Index"
          description="Rate yourself across six factors. The overall index updates immediately as you adjust any one of them."
          tone="human"
        />
        <div ref={resilienceIntroRef} className="reveal mt-8 max-w-3xl text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            Every factor here is learnable. The point of the index is to notice where to focus next,
            not to produce a final verdict on anyone&rsquo;s career.
          </p>
        </div>
        <ResilienceIndex />

        <div className="glass relative mt-16 overflow-hidden rounded-3xl p-8 text-center md:p-14">
          <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-mist sm:text-3xl">
              Careers are shifting shape, not disappearing.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist/60 md:text-base">
              Across every section on this page, the same pattern holds: routine, structured tasks
              move toward automation, expanding roles cluster around AI, security, and data, and the
              human skills that resist automation keep rising in relative value. The next page looks
              at what stays reliably human even as that shift continues.
            </p>
            <Link
              to="/human-backup"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-cyan px-8 py-4 font-display text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore Human Backup
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
