import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiCpu,
  FiShield,
  FiCloud,
  FiWifi,
  FiServer,
  FiActivity,
  FiGlobe,
  FiUsers,
  FiCode,
  FiFileText,
  FiCheckSquare,
  FiSearch,
  FiSliders,
  FiEye,
  FiHome,
  FiTruck,
  FiWatch,
  FiVideo,
  FiHeart,
  FiShoppingBag,
  FiCompass,
  FiFeather,
  FiMessageCircle,
  FiCompass as FiLeadership,
  FiShieldOff,
} from 'react-icons/fi'
import { HiOutlineLightBulb, HiOutlineScale, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import SectionHeader from '../components/SectionHeader.jsx'
import GlowCard from '../components/GlowCard.jsx'
import Timeline from '../components/Timeline.jsx'
import TechRadar from '../components/TechRadar.jsx'
import SkillMeter from '../components/SkillMeter.jsx'
import useReveal from '../hooks/useReveal.js'
import { futureSignals } from '../data/futureTrends.js'

const FLOATING_ICONS = [
  { Icon: FiCpu, top: '18%', left: '12%', delay: '0s', size: 26 },
  { Icon: FiShield, top: '68%', left: '8%', delay: '1.2s', size: 22 },
  { Icon: FiCloud, top: '24%', left: '85%', delay: '0.6s', size: 28 },
  { Icon: FiWifi, top: '74%', left: '88%', delay: '1.8s', size: 20 },
  { Icon: FiServer, top: '48%', left: '92%', delay: '2.4s', size: 20 },
  { Icon: FiActivity, top: '12%', left: '48%', delay: '0.9s', size: 18 },
]

function useParticles(count) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * 8,
        opacity: 0.2 + Math.random() * 0.4,
      })),
    [count]
  )
}

function Hero() {
  const particles = useParticles(45)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-void pt-24">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-lines bg-grid animate-grid-pan opacity-40" aria-hidden="true" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      {/* Data stream columns */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
        {[10, 30, 50, 70, 90].map((left, i) => (
          <div key={left} className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-signal/40 to-transparent" style={{ left: `${left}%` }}>
            <div
              className="h-1/3 w-full bg-gradient-to-b from-cyan/80 to-transparent animate-scan-line"
              style={{ animationDelay: `${i * 0.8}s`, animationDuration: `${4 + i}s` }}
            />
          </div>
        ))}
      </div>
      {/* Particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-sky animate-float-slow"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      {/* Floating tech glyphs */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {FLOATING_ICONS.map(({ Icon, top, left, delay, size }, i) => (
          <div
            key={i}
            className="absolute animate-float text-sky/25"
            style={{ top, left, animationDelay: delay }}
          >
            <Icon size={size} />
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-cyan" />
          <span className="font-mono text-xs tracking-[0.3em] text-cyan/80">LIVE FORECAST · IT 2030</span>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-gradient-human sm:text-6xl md:text-7xl">
          THE WORLD HAS CHANGED.
          <br />
          <span>HAS YOUR SKILLSET?</span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-mist/60 md:text-lg">
          IT 2030 is an interactive intelligence platform mapping how artificial intelligence,
          automation, and connected systems are expected to reshape technology work over the
          next few years — and what that means for the humans steering it.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#world-2030"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-signal to-cyan px-7 py-3.5 font-display text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03]"
          >
            Begin the Briefing
          </a>
          <Link
            to="/transformation"
            className="rounded-full border border-signal/25 px-7 py-3.5 font-display text-sm font-medium text-mist/80 transition-colors hover:border-signal/50 hover:text-mist"
          >
            Skip to Transformation →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist/30 md:flex">
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <span className="h-8 w-px animate-pulse-glow bg-gradient-to-b from-sky to-transparent" />
      </div>
    </section>
  )
}

const WORLD_2030_ITEMS = [
  {
    icon: FiCpu,
    title: 'AI Everywhere',
    description:
      'AI stops being a destination you visit and becomes a layer running quietly beneath everyday software — drafting, checking, and suggesting before you ask.',
  },
  {
    icon: FiWifi,
    title: 'Intelligent Devices',
    description:
      'Phones, cars, appliances, and industrial equipment increasingly process and act on data locally, rather than only reporting it back to a distant server.',
  },
  {
    icon: FiGlobe,
    title: 'Connected Infrastructure',
    description:
      'Power grids, transit systems, and supply chains are increasingly instrumented with sensors, turning physical infrastructure into a live, queryable system.',
  },
  {
    icon: FiActivity,
    title: 'Autonomous Systems',
    description:
      'From warehouse robots to trading algorithms, more systems are expected to take multi-step action within defined boundaries rather than waiting for a human click.',
  },
  {
    icon: FiCloud,
    title: 'Cloud-Native Ecosystems',
    description:
      'Applications are increasingly assembled from managed cloud services and AI endpoints rather than built and hosted from scratch on fixed servers.',
  },
  {
    icon: FiShield,
    title: 'Digital Identities',
    description:
      'As more of life moves online, verifying who — or what — is behind an action becomes a foundational problem, spanning people, devices, and AI agents alike.',
  },
  {
    icon: FiServer,
    title: 'AI Agents',
    description:
      'Software agents that can plan, use tools, and complete multi-step tasks are expected to move from research demos into everyday business workflows.',
  },
  {
    icon: FiUsers,
    title: 'Human-Machine Collaboration',
    description:
      'The most effective teams are expected to be the ones who learn to direct, question, and correct AI output — not just consume whatever it produces.',
  },
]

const WORKPLACE_ITEMS = [
  {
    icon: FiCode,
    title: 'AI-Assisted Coding',
    description: 'Developers increasingly write intent and review output, with AI generating a growing share of first-draft code.',
  },
  {
    icon: FiFileText,
    title: 'Automated Documentation',
    description: 'Technical writing and changelogs are increasingly drafted automatically from code and commit history, then edited by humans.',
  },
  {
    icon: FiCheckSquare,
    title: 'Automated Testing',
    description: 'AI-generated test cases help catch regressions earlier, though engineers still decide what "correct" behavior means.',
  },
  {
    icon: FiSearch,
    title: 'AI Research Assistants',
    description: 'Literature review, competitive analysis, and data synthesis are increasingly a first pass done by AI before human judgment refines it.',
  },
  {
    icon: FiSliders,
    title: 'Intelligent Workflows',
    description: 'Business processes are increasingly stitched together by AI that routes tasks, flags exceptions, and escalates only what needs a human.',
  },
  {
    icon: FiEye,
    title: 'Human Oversight',
    description: 'As automation handles more routine decisions, reviewing and validating that automation becomes its own critical responsibility.',
  },
  {
    icon: HiOutlineScale,
    title: 'AI Governance',
    description: 'Organizations increasingly need clear policies for what AI is allowed to decide alone, and what always requires human sign-off.',
  },
  {
    icon: FiUsers,
    title: 'AI Copilots',
    description: 'Rather than replacing a role outright, copilots are expected to absorb the repetitive parts of a job, shifting the human focus upward.',
  },
]

const DIGITAL_LIFE_ITEMS = [
  { icon: FiHome, title: 'Smart Homes', description: 'Homes increasingly adjust energy, security, and climate automatically based on learned patterns.' },
  { icon: FiTruck, title: 'Autonomous Transportation', description: 'Driver-assist and autonomous features expand gradually, first in controlled routes and fleets.' },
  { icon: FiWatch, title: 'Wearables', description: 'Continuous health and activity tracking becomes a normal input into everyday medical and fitness decisions.' },
  { icon: FiVideo, title: 'Virtual Collaboration', description: 'Remote and hybrid teams rely on increasingly capable virtual spaces that go beyond a simple video call.' },
  { icon: HiOutlineChatBubbleLeftRight, title: 'AI Assistants', description: 'Personal AI assistants take on more scheduling, research, and communication drafting on a person\u2019s behalf.' },
  { icon: FiHeart, title: 'Digital Health', description: 'Remote monitoring and AI-assisted diagnostics support — rather than replace — clinicians\u2019 decisions.' },
  { icon: FiGlobe, title: 'Smart Cities', description: 'Traffic, utilities, and public services increasingly respond to real-time data instead of fixed schedules.' },
  { icon: FiShoppingBag, title: 'Connected Commerce', description: 'Shopping increasingly blends physical and digital signals, from smart inventory to AI-assisted recommendations.' },
]

const HUMAN_TRAITS = [
  { icon: HiOutlineLightBulb, title: 'Creativity', description: 'Originating genuinely new ideas, not just recombining existing patterns on request.' },
  { icon: FiCompass, title: 'Judgment', description: 'Weighing incomplete, conflicting information and deciding what actually matters.' },
  { icon: FiHeart, title: 'Empathy', description: 'Understanding another person\u2019s experience well enough to respond to it, not just react to it.' },
  { icon: FiLeadership, title: 'Leadership', description: 'Aligning people around a shared goal, especially when the path there is unclear.' },
  { icon: FiMessageCircle, title: 'Communication', description: 'Translating complex ideas for the specific person who needs to understand them.' },
  { icon: HiOutlineScale, title: 'Ethics', description: 'Recognizing when a technically possible action is not the right one to take.' },
  { icon: FiShieldOff, title: 'Responsibility', description: 'Being accountable for an outcome in a way no system can be held accountable.' },
  { icon: FiFeather, title: 'Critical Thinking', description: 'Questioning assumptions — including the assumptions baked into an AI\u2019s answer.' },
]

const DAY_IN_2030 = [
  {
    id: 'morning',
    label: 'Morning',
    text: 'An AI assistant has already triaged overnight messages into what needs a reply today, what can wait, and what it handled on its own following pre-set rules.',
  },
  {
    id: 'afternoon',
    label: 'Afternoon',
    text: 'A product team reviews AI-drafted designs and code, spending most of their meeting on the judgment calls the AI flagged rather than the repetitive groundwork.',
  },
  {
    id: 'evening',
    label: 'Evening',
    text: 'A smart-home system has adjusted heating and lighting based on the day\u2019s weather and occupancy, while a wearable quietly logs recovery data for tomorrow\u2019s plan.',
  },
]

function SoftwareEvolutionFlow() {
  const ref = useReveal()
  const stages = [
    { title: 'Traditional Software', note: 'Fixed rules, manual updates' },
    { title: 'AI-Assisted Applications', note: 'Suggestions layered on existing tools' },
    { title: 'Intelligent Systems', note: 'Learns from data, adapts behavior' },
    { title: 'Autonomous Agents', note: 'Plans and executes multi-step tasks' },
    { title: 'Adaptive Interfaces', note: 'Reshapes itself around the user' },
  ]

  return (
    <div ref={ref} className="reveal mt-14 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
      {stages.map((stage, i) => (
        <div key={stage.title} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-0">
          <div className="glass flex-1 rounded-2xl p-5 lg:text-center">
            <span className="font-mono text-[11px] text-cyan/70">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="mt-2 font-display text-sm font-semibold text-mist md:text-base">{stage.title}</h4>
            <p className="mt-1.5 text-xs text-mist/50">{stage.note}</p>
          </div>
          {i < stages.length - 1 && (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-sky/40 lg:h-8 lg:w-full lg:rotate-90">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function DayInLifeTabs() {
  const [active, setActive] = useState('morning')
  const current = DAY_IN_2030.find((d) => d.id === active)

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {DAY_IN_2030.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setActive(d.id)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              active === d.id
                ? 'border-cyan/40 bg-cyan/10 text-cyan'
                : 'border-white/10 text-mist/50 hover:text-mist/80'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>
      <p key={current.id} className="glass mt-5 animate-fade-up rounded-2xl p-6 text-sm leading-relaxed text-mist/65 md:text-base">
        {current.text}
      </p>
    </div>
  )
}

export default function Home2030() {
  const introRef = useReveal()
  const workplaceIntroRef = useReveal()
  const humanIntroRef = useReveal()

  return (
    <>
      <Hero />

      {/* SECTION 1 — THE WORLD IN 2030 */}
      <section id="world-2030" className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="01"
          title="The World in 2030"
          description="Picture a working day where AI is not a tab you open, but infrastructure you stand on — as ordinary as electricity or an internet connection."
        />
        <div ref={introRef} className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            The defining shift expected by 2030 is not a single breakthrough but the quiet
            accumulation of many: AI models embedded inside ordinary tools, devices that act on
            local data instead of only reporting it, and infrastructure that increasingly manages
            itself. None of this requires a dramatic robot uprising — it requires better software,
            cheaper computation, and organizations willing to redesign how work gets done.
          </p>
          <p>
            What makes this period different from earlier waves of computing is scope. Cloud
            computing changed where software lived. Mobile changed how people accessed it. The
            AI-and-automation wave changes what software is capable of doing on its own — which is
            why it touches nearly every job that involves information, not just technical ones.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORLD_2030_ITEMS.map((item) => (
            <GlowCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      {/* SECTION 2 — 2026 → 2030 TRANSFORMATION */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="02"
          title="2026 → 2030 Transformation"
          description="A likely trajectory, year by year — framed as expected direction and emerging trend, not a guaranteed roadmap. Select a year to explore it."
        />
        <Timeline />
      </section>

      {/* SECTION 3 — THE 2030 TECHNOLOGY RADAR */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="03"
          title="The 2030 Technology Radar"
          description="Ten technology categories, positioned by how close each is to mainstream adoption. Click any node for a closer look."
        />
        <TechRadar />
      </section>

      {/* SECTION 4 — FROM SOFTWARE TO INTELLIGENT SYSTEMS */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="04"
          title="From Software to Intelligent Systems"
          description="Software has always followed rules a developer wrote in advance. The next stage is software that adjusts those rules for itself."
          tone="cyan"
        />
        <SoftwareEvolutionFlow />
        <div className="mt-10 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            Traditional software executes fixed logic: given input A, always produce output B.
            AI-assisted applications add a layer of suggestion on top — autocomplete, recommended
            replies, flagged anomalies — while a human still makes the final call. Intelligent
            systems go further, learning from ongoing data to change their own behavior over time
            rather than waiting for a developer to ship an update.
          </p>
          <p>
            Autonomous agents take the next step: given a goal, they can break it into steps, use
            tools, and execute a plan with limited supervision. Adaptive interfaces close the loop
            by reshaping the experience itself around the person using it — surfacing different
            options for a novice than for an expert doing the same task.
          </p>
        </div>
      </section>

      {/* SECTION 5 — THE AI-NATIVE WORKPLACE */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="05"
          label="SECTION FIVE"
          title="The AI-Native Workplace"
          description="Augmentation and replacement are often described as if they were the same thing. They are not."
        />
        <div ref={workplaceIntroRef} className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base">
          <p>
            Augmentation means AI absorbs part of a task while a person still owns the outcome — a
            developer reviewing AI-suggested code, a doctor reviewing an AI-flagged scan.
            Replacement means a task is handled end-to-end without a person in the loop. Most of
            the visible change expected by 2030 falls into the first category: fewer whole jobs
            disappearing, more individual tasks inside a job shifting to software.
          </p>
          <p>
            That distinction matters for how people prepare. The skill that holds up is not
            "avoid anything AI can touch" — it is "get good at directing, checking, and improving
            what AI produces," since that oversight role is exactly what stays human.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORKPLACE_ITEMS.map((item) => (
            <GlowCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="cyan" />
          ))}
        </div>
      </section>

      {/* SECTION 6 — DIGITAL LIFE IN 2030 */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="06"
          label="SECTION SIX"
          title="Digital Life in 2030"
          description="The same forces reshaping the workplace are reshaping the home, the commute, and the clinic."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIGITAL_LIFE_ITEMS.map((item) => (
            <GlowCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
        <DayInLifeTabs />
      </section>

      {/* SECTION 7 — THE HUMAN QUESTION */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div ref={humanIntroRef} className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-[1.2] text-mist sm:text-4xl md:text-5xl">
            If machines become better at more tasks,
            <br />
            <span className="text-gradient-human">what remains uniquely human?</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist/60 md:text-lg">
            Every wave of automation raises this question, and every time, the answer has been the
            same shape: the tasks that survive are the ones requiring context a machine does not
            have, judgment a rule cannot encode, and accountability a system cannot hold.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HUMAN_TRAITS.map((item) => (
            <GlowCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="human" />
          ))}
        </div>
      </section>

      {/* SECTION 8 — 2030 FUTURE SIGNAL */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="08"
          label="SECTION EIGHT"
          title="2030 Future Signal"
          description="An illustrative read on where each area is heading — not a statistical prediction, but a summary of the direction described throughout this briefing."
          tone="cyan"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {futureSignals.map((signal) => (
            <SkillMeter key={signal.id} {...signal} />
          ))}
        </div>

        <div className="glass relative mt-16 overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-mist sm:text-3xl md:text-4xl">
              Ready to see what happens to your job?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-mist/60 md:text-base">
              Section two of this briefing walks through how specific IT roles and responsibilities
              are expected to shift between now and 2030.
            </p>
            <Link
              to="/transformation"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-cyan px-8 py-4 font-display text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore the Transformation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
