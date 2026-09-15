import { Link } from 'react-router-dom'
import {
  FiCode,
  FiMonitor,
  FiShield,
  FiCloud,
  FiCpu,
  FiHexagon,
  FiBox,
  FiUsers,
} from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader.jsx'
import DevEvolutionTimeline from '../components/transformation/DevEvolutionTimeline.jsx'
import FrontendEvolution from '../components/transformation/FrontendEvolution.jsx'
import SecurityPipeline from '../components/transformation/SecurityPipeline.jsx'
import EdgeCloudStack from '../components/transformation/EdgeCloudStack.jsx'
import TaskAutomationMatrix from '../components/transformation/TaskAutomationMatrix.jsx'
import QuantumExplainer from '../components/transformation/QuantumExplainer.jsx'
import SpatialWorkspace from '../components/transformation/SpatialWorkspace.jsx'
import JobSimulator from '../components/transformation/JobSimulator.jsx'
import useReveal from '../hooks/useReveal.js'
import {
  automationModes,
  securityThemes,
  edgeReasons,
  automationDomains,
} from '../data/transformation.js'

const CONTENTS = [
  { num: '01', label: 'Software Development', icon: FiCode, href: '#software-development' },
  { num: '02', label: 'Frontend Development', icon: FiMonitor, href: '#frontend' },
  { num: '03', label: 'Cybersecurity', icon: FiShield, href: '#cybersecurity' },
  { num: '04', label: 'Cloud + Edge', icon: FiCloud, href: '#cloud-edge' },
  { num: '05', label: 'Robotics + Automation', icon: FiBox, href: '#robotics' },
  { num: '06', label: 'Quantum Computing', icon: FiHexagon, href: '#quantum' },
  { num: '07', label: 'AR / VR / XR', icon: FiCpu, href: '#spatial' },
  { num: '08', label: 'Job Simulator', icon: FiUsers, href: '#simulator' },
]

function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-void pt-28">
      <div className="absolute inset-0 bg-grid-lines bg-grid animate-grid-pan opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25" aria-hidden="true">
        {[18, 42, 66, 88].map((left, i) => (
          <div
            key={left}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-signal/35 to-transparent"
            style={{ left: `${left}%` }}
          >
            <div
              className="h-1/3 w-full animate-scan-line bg-gradient-to-b from-cyan/70 to-transparent"
              style={{ animationDelay: `${i * 1.1}s`, animationDuration: `${5 + i}s` }}
            />
          </div>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <h1 className="mt-8 max-w-4xl font-display text-[2.1rem] font-bold leading-[1.1] text-mist sm:text-5xl md:text-6xl lg:text-7xl">
          THE GREAT IT
          <br />
          <span className="text-gradient-signal">TRANSFORMATION</span>
        </h1>

        <p className="mt-6 font-display text-lg text-mist/70 md:text-xl">
          How Today&rsquo;s IT Becomes Tomorrow&rsquo;s IT
        </p>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist/60 md:text-lg">
          Almost every conversation about AI and work collapses into one question: will the job
          survive? That is usually the wrong question. Work is made of tasks, and automation lands on
          tasks — unevenly, task by task. This page walks through eight areas of IT and looks at which
          parts of the work are changing, which parts are moving to machines, and which parts stay
          firmly human.
        </p>

        {/* Framing legend */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {automationModes.map((mode) => (
            <div
              key={mode.mode}
              className="glass rounded-xl p-4"
              style={{ borderColor: `${mode.color}33` }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: mode.color, boxShadow: `0 0 10px ${mode.color}` }}
                />
                <p className="font-display text-sm font-semibold text-mist">{mode.mode}</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-mist/55">{mode.body}</p>
            </div>
          ))}
        </div>
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
                <span className="block truncate text-sm text-mist/70 group-hover:text-mist">
                  {item.label}
                </span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default function Transformation() {
  const devIntroRef = useReveal()
  const frontendIntroRef = useReveal()
  const secIntroRef = useReveal()
  const cloudIntroRef = useReveal()
  const roboIntroRef = useReveal()
  const quantumIntroRef = useReveal()
  const spatialIntroRef = useReveal()
  const simIntroRef = useReveal()

  return (
    <>
      <Hero />
      <Contents />

      {/* SECTION 1 — SOFTWARE DEVELOPMENT 2026 → 2030 */}
      <section id="software-development" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="01"
          title="Software Development 2026 → 2030"
          description="Five stages, from typing every line yourself to owning the architecture that everything else is generated against."
        />
        <div
          ref={devIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            The stages below are cumulative rather than sequential replacements. Manual coding does not
            vanish when assistants arrive — it becomes the thing you fall back on when the generated
            answer is wrong, which means you still need to be able to do it. What changes is the share
            of the week each activity takes, and which of them the job is actually evaluated on.
          </p>
          <p>
            The honest uncertainty here is about pace, not direction. Developer surveys from GitHub and
            capability tracking in the Stanford AI Index both point the same way: assistance is
            normalising fast and agentic workflows are moving out of demos. How quickly organisations
            restructure teams around that is a separate, slower question involving trust, liability,
            and review processes.
          </p>
        </div>
        <DevEvolutionTimeline />
      </section>

      {/* SECTION 2 — FRONTEND DEVELOPMENT */}
      <section id="frontend" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="02"
          title="Frontend Development"
          description="The stack stays recognisable. What changes is who writes the first draft, and what the developer is responsible for judging."
          tone="cyan"
        />
        <div
          ref={frontendIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            It is tempting to read &ldquo;AI generates the UI&rdquo; as &ldquo;frontend knowledge stops
            mattering.&rdquo; The opposite is closer to true. A generated component can be visually
            correct and still be unusable with a keyboard, break at 320 pixels wide, re-render on every
            keystroke, or quietly leak state. Catching that requires exactly the fundamentals —
            semantics, the box model, rendering behaviour, state — that the generation appears to make
            optional.
          </p>
          <p>
            The larger shift is that the screen stops being the only surface. Voice, conversational
            input, camera context, and adaptive layout all become part of &ldquo;the frontend,&rdquo;
            and each brings design questions the industry has not fully settled yet.
          </p>
        </div>
        <FrontendEvolution />
      </section>

      {/* SECTION 3 — CYBERSECURITY */}
      <section id="cybersecurity" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="03"
          title="Cybersecurity Transformation"
          description="Attacks are getting cheaper to produce and harder to spot. Defence responds by automating everything except the decision that matters."
        />
        <div
          ref={secIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            Security is the clearest example of augmentation being a necessity rather than a
            cost-saving. Alert volume already exceeds what any team can review by hand, and generative
            tools are lowering the cost of producing convincing attacks at scale. Automating triage is
            not an efficiency play — it is the only way to keep the queue survivable.
          </p>
          <p>
            Select a stage in the pipeline to see what happens there. Note where the colour changes: the
            final stage is human, and deliberately so.
          </p>
        </div>
        <SecurityPipeline />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityThemes.map((theme) => (
            <div
              key={theme.title}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30"
            >
              <h4 className="font-display text-base font-semibold text-mist">{theme.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-mist/60">{theme.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — CLOUD + EDGE */}
      <section id="cloud-edge" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="04"
          title="Cloud + Edge Computing"
          description="Compute is spreading out. Not away from the cloud — across a stack that runs from the sensor to the boardroom."
          tone="cyan"
        />
        <div
          ref={cloudIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            Cloud-native design — containers, managed services, serverless functions, elastic scaling —
            is now the normal starting point for new systems rather than a destination to migrate
            toward. The newer part of the story is what sits below it: edge nodes and devices capable of
            running real inference themselves, which changes where a decision can be made.
          </p>
        </div>
        <EdgeCloudStack />

        <div className="mt-14">
          <h4 className="font-display text-lg font-semibold text-mist">
            Why processing keeps moving closer to the device
          </h4>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {edgeReasons.map((reason) => (
              <div key={reason.title} className="glass rounded-2xl p-6">
                <h5 className="font-display text-base font-semibold text-mist">{reason.title}</h5>
                <p className="mt-3 text-sm leading-relaxed text-mist/60">{reason.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist/55">
            The practical effect on IT work is that &ldquo;where does this run?&rdquo; becomes a real
            design decision again. Engineers increasingly need to reason about latency budgets,
            intermittent connectivity, over-the-air updates for fleets of devices, and how to debug
            something that already happened on a machine in another building.
          </p>
        </div>
      </section>

      {/* SECTION 5 — ROBOTICS + AUTOMATION */}
      <section id="robotics" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="05"
          label="SECTION FIVE"
          title="Robotics + Automation"
          description="Automation does not consume professions whole. It works through them task by task, and it is fussy about which tasks it takes."
        />
        <div
          ref={roboIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            A useful test for whether a task is a strong automation candidate: is it repetitive, is the
            environment predictable, is success measurable, and is the cost of a mistake contained? The
            more of those that hold, the stronger the case. Tasks that require improvisation, physical
            dexterity in clutter, negotiation, or accountability score badly on all four — and most real
            jobs contain a mix of both kinds.
          </p>
          <p>
            That mix is why task-level analysis matters more than job-level headlines. A warehouse role
            where transport automates may shift toward exception handling, quality checks, and
            supervising equipment. The work changes; it does not simply stop existing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {automationDomains.map((domain) => (
            <div
              key={domain.title}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30"
            >
              <h4 className="font-display text-base font-semibold text-mist">{domain.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-mist/60">{domain.body}</p>
            </div>
          ))}
        </div>

        <TaskAutomationMatrix />
      </section>

      {/* SECTION 6 — QUANTUM COMPUTING */}
      <section id="quantum" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="06"
          label="SECTION SIX"
          title="Quantum Computing"
          description="A specialised machine for a narrow set of problems — not a faster replacement for the computer you are using now."
          tone="human"
        />
        <div
          ref={quantumIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            A classical computer stores information in bits, each definitively 0 or 1. A quantum
            computer uses qubits, which hold a combination of both states until measured, and which can
            be linked so that the state of one depends on another. That lets a quantum machine represent
            an enormous space of possibilities at once — but only a specific kind of algorithm can turn
            that into a useful answer, because measuring collapses everything back to a single result.
          </p>
          <p>
            So &ldquo;quantum advantage&rdquo; is narrower than the word suggests. It means: for this
            particular problem, with this particular structure, a quantum approach can do meaningfully
            better than the best known classical one. For nearly everything else — your database, your
            web server, most AI training — classical hardware remains the right and far cheaper tool.
          </p>
        </div>
        <QuantumExplainer />
      </section>

      {/* SECTION 7 — AR / VR / XR + SPATIAL COMPUTING */}
      <section id="spatial" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="07"
          label="SECTION SEVEN"
          title="AR / VR / XR + Spatial Computing"
          description="The strongest near-term cases are not entertainment. They are training, inspection, and looking at a real system together."
          tone="cyan"
        />
        <div
          ref={spatialIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            Spatial computing means treating the physical space around a person as the interface, rather
            than a rectangle they look into. Adoption so far has been uneven: consumer enthusiasm has
            been inconsistent, while industrial and training use has quietly kept growing, because there
            the value is measurable — fewer errors, safer rehearsal, faster onboarding.
          </p>
          <p>
            Explore the zones below to see where the practical cases sit. Digital twins in particular
            connect back to section four: a twin is only as good as the sensor and edge infrastructure
            feeding it.
          </p>
        </div>
        <SpatialWorkspace />
      </section>

      {/* SECTION 8 — JOB TRANSFORMATION SIMULATOR */}
      <section id="simulator" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="08"
          label="SECTION EIGHT"
          title="Job Transformation Simulator"
          description="Pick a role to see how its responsibilities are expected to shift, what to learn, and what stays human."
          tone="human"
        />
        <div
          ref={simIntroRef}
          className="reveal mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-mist/65 md:text-base"
        >
          <p>
            Each role below is described as a bundle of tasks that is changing shape, not as a job with
            a survival probability. That framing is deliberate, and it matches how the research
            organisations in the footer of this site tend to describe it: tasks shift, roles are
            redefined, some categories grow, and new ones appear that did not have names five years ago.
          </p>
        </div>
        <JobSimulator />

        <div className="glass relative mt-16 overflow-hidden rounded-3xl p-8 text-center md:p-14">
          <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-mist sm:text-3xl">
              The direction is transformation, not disappearance.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist/60 md:text-base">
              Across all eight areas on this page, the same pattern holds: repetitive and structured
              work moves toward machines, and the human share of the job moves toward judgment,
              context, and accountability. The next page looks at what that does to the job market
              itself.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-signal/25 px-7 py-3.5 font-display text-sm font-medium text-mist/80 transition-colors hover:border-signal/50 hover:text-mist"
            >
              Back to the 2030 briefing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
