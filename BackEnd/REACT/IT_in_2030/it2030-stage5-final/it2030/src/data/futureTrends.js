// Year-by-year expected direction for Section 2's timeline.
// Framed as likely developments, not certainties.

export const timeline = [
  {
    year: '2026',
    headline: 'AI copilots become a standard part of daily software work',
    points: [
      'AI-assisted coding tools move from optional extras to a default part of most development environments.',
      'More teams document a formal policy for when AI-generated output needs human review.',
      'Cybersecurity teams begin using AI to triage the flood of alerts faster than manual review allows.',
    ],
  },
  {
    year: '2027',
    headline: 'Agentic AI starts handling multi-step tasks with light supervision',
    points: [
      'AI agents take on tasks that span several steps — drafting, checking, and revising — rather than answering single prompts.',
      'Cloud providers expand managed infrastructure specifically for running and monitoring AI agents at scale.',
      'Edge devices take on more real-time processing as connected vehicles and industrial sensors expand.',
    ],
  },
  {
    year: '2028',
    headline: 'Governance and oversight roles grow alongside automation',
    points: [
      'Expect growth in roles focused on auditing automated decisions, not just building the systems that make them.',
      'Digital twins see wider use for testing infrastructure and logistics changes before real-world rollout.',
      'Early practical quantum computing applications emerge in chemistry and optimization research.',
    ],
  },
  {
    year: '2029',
    headline: 'Human-AI collaboration becomes a named, teachable skill',
    points: [
      'Universities and employers increasingly treat "working effectively with AI systems" as its own skill, alongside domain expertise.',
      'Robotics extends further into logistics and services as perception AI improves handling of unstructured environments.',
      'AR/XR tools become more common in professional training and remote collaboration than in mainstream consumer use.',
    ],
  },
  {
    year: '2030',
    headline: 'Judgment-heavy human skills become the clearest differentiator',
    points: [
      'The tasks left most firmly in human hands are the ones requiring context, ethics, and accountability for the outcome.',
      'IT careers look less like fixed job titles and more like evolving skill bundles that shift as tools change.',
      'The organizations that adapt best are the ones that invested early in reskilling, not just new technology.',
    ],
  },
]

// Section 8 "2030 Future Signal" meters.
export const futureSignals = [
  {
    id: 'ai',
    label: 'AI Integration',
    level: 'High',
    value: 88,
    description: 'AI is expected to be embedded in most professional software rather than used as a separate tool.',
  },
  {
    id: 'automation',
    label: 'Task Automation',
    level: 'High',
    value: 80,
    description: 'Routine, rules-based tasks continue moving to software across nearly every industry.',
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity Demand',
    level: 'High',
    value: 84,
    description: 'More connected and autonomous systems raise the value of people who can secure and audit them.',
  },
  {
    id: 'cloud',
    label: 'Cloud-Native Design',
    level: 'High',
    value: 78,
    description: 'New systems are increasingly designed cloud-native from the start rather than migrated later.',
  },
  {
    id: 'robotics',
    label: 'Physical Robotics',
    level: 'Medium',
    value: 52,
    description: 'Growth continues, but general-purpose robotics still faces real cost and reliability limits.',
  },
  {
    id: 'human',
    label: 'Human Judgment Skills',
    level: 'High',
    value: 90,
    description: 'Creativity, ethics, and accountability remain firmly outside what current automation can replace.',
  },
]
