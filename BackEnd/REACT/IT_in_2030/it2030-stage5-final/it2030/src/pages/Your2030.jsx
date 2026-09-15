import { useMemo, useState } from 'react'
import {
  FiUser,
  FiSliders,
  FiCompass,
  FiAward,
  FiMap,
  FiUsers,
} from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader.jsx'
import useReveal from '../hooks/useReveal.js'
import IdentityStep from '../components/your2030/IdentityStep.jsx'
import SkillPicker from '../components/your2030/SkillPicker.jsx'
import PathPicker from '../components/your2030/PathPicker.jsx'
import ProfileCard from '../components/your2030/ProfileCard.jsx'
import FutureRoadmap from '../components/your2030/FutureRoadmap.jsx'
import CommunityWall from '../components/your2030/CommunityWall.jsx'
import { computeProfile } from '../utils/profileEngine.js'
import { roleOptions } from '../data/your2030.js'

const CONTENTS = [
  { num: '01', label: 'Your Identity', icon: FiUser, href: '#identity' },
  { num: '02', label: 'Select Your Skills', icon: FiSliders, href: '#skills' },
  { num: '03', label: 'Choose Your Path', icon: FiCompass, href: '#path' },
  { num: '04', label: 'Your 2030 Profile', icon: FiAward, href: '#profile' },
  { num: '05', label: 'Future Roadmap', icon: FiMap, href: '#roadmap' },
  { num: '08', label: 'Community Future Wall', icon: FiUsers, href: '#community' },
]

function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-void pt-28">
      <div className="absolute inset-0 bg-grid-lines bg-grid animate-grid-pan opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-cyan/20 blur-[100px] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-violet/15 blur-[100px] animate-float"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
        <h1 className="mt-8 max-w-4xl font-display text-[2.1rem] font-bold leading-[1.1] text-mist sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gradient-signal">YOUR 2030</span>
        </h1>

        <p className="mt-6 font-display text-lg text-mist/70 md:text-xl">Build Your Future</p>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist/60 md:text-lg">
          Pages 1 through 4 explored what the future might look like, how technology could reshape
          IT, what happens to careers and skills, and what a real backup plan looks like. This page
          turns all of that outward — into a profile, a roadmap, and a plan that are yours, built
          from your own choices below.
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
        <p className="font-mono text-[11px] tracking-[0.25em] text-cyan/60">ON THIS PAGE</p>
        <nav className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENTS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl border border-white/5 bg-void/40 px-4 py-3 transition-colors hover:border-cyan/30 hover:bg-deep/40"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist/50 transition-colors group-hover:border-cyan/30 group-hover:text-cyan">
                <item.icon size={15} />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] text-cyan/45">{item.num}</span>
                <span className="block truncate text-sm text-mist/70 group-hover:text-mist">{item.label}</span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default function Your2030() {
  const [roleId, setRoleId] = useState(null)
  const [skillIds, setSkillIds] = useState(() => new Set())
  const [pathId, setPathId] = useState(null)

  const closingRef = useReveal()

  function toggleSkill(id) {
    setSkillIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const profile = useMemo(
    () => computeProfile({ roleId, skillIds, pathId }),
    [roleId, skillIds, pathId]
  )

  const displayName = useMemo(() => {
    return roleOptions.find((r) => r.id === roleId)?.label || ''
  }, [roleId])

  return (
    <>
      <Hero />
      <Contents />

      {/* SECTION 1 — BUILD YOUR 2030 IDENTITY */}
      <section id="identity" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="01"
          title="Build Your 2030 Identity"
          description="What is your current role? This is the starting point everything else on this page builds from."
        />
        <IdentityStep roleId={roleId} onSelect={setRoleId} />
      </section>

      {/* SECTION 2 — SELECT YOUR SKILLS */}
      <section id="skills" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="02"
          title="Select Your Skills"
          description="Choose every skill you currently have, are actively learning, or are confident using. Your profile below is calculated live from this list."
        />
        <SkillPicker skillIds={skillIds} onToggle={toggleSkill} />
      </section>

      {/* SECTION 3 — CHOOSE YOUR FUTURE PATH */}
      <section id="path" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="03"
          title="Choose Your Future Path"
          description="Pick the direction that feels closest to where you want to be by 2030. You can change this at any time — your profile and roadmap update instantly."
        />
        <PathPicker pathId={pathId} onSelect={setPathId} />
      </section>

      {/* SECTION 4 — YOUR 2030 PROFILE */}
      <section id="profile" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="04"
          title="Your 2030 Profile"
          description="Generated entirely from your selections above — nothing here is a fixed result."
        />
        <ProfileCard name={displayName} profile={profile} />
      </section>

      {/* SECTION 5 — YOUR FUTURE ROADMAP */}
      <section id="roadmap" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <SectionHeader
          index="05"
          label="SECTION FIVE"
          title="Your Future Roadmap"
          description="A five-milestone path from 2026 to 2030, shaped by the future path you chose in Section 3. Click a year to explore it."
        />
        <FutureRoadmap pathId={pathId} />
      </section>

      {/* SECTION 8 — COMMUNITY FUTURE WALL */}
      <section id="community" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-[1.15] text-mist sm:text-4xl md:text-[2.75rem]">
            &ldquo;IF IT IS NOT THERE,
            <br />
            WHAT WILL YOU DO?&rdquo;
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist/60 md:text-lg">
            Everyone has a Plan B. Share yours.
          </p>
        </div>
        <CommunityWall />
      </section>

      {/* FINAL SECTION — CLOSING STATEMENT */}
      <section className="relative overflow-hidden bg-void py-28 md:py-36">
        <div className="absolute inset-0 bg-grid-lines bg-grid animate-grid-pan opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[140px] animate-pulse-glow"
          aria-hidden="true"
        />
        <div ref={closingRef} className="reveal relative mx-auto max-w-3xl px-5 text-center md:px-10">
          <h2 className="font-display text-3xl font-bold leading-[1.2] text-mist sm:text-4xl md:text-5xl">
            THE FUTURE IS NOT A DESTINATION.
            <br />
            <span className="text-gradient-signal">IT IS A SKILL WE BUILD.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-mist/55 md:text-base">
            You explored the future. You understood how careers change. You thought about your
            backup. Section by section above, you started building your own version of it — and
            that plan is saved, editable, and waiting for you the next time you come back.
          </p>
        </div>
      </section>
    </>
  )
}
