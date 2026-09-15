// Data for the Section 3 "2030 Technology Radar".
// "stage" reflects an expected adoption trajectory, not a guaranteed outcome.
// Sources are named where a claim leans on a specific study; general
// trend descriptions are written from widely reported industry direction.

export const technologies = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    stage: 'Mainstream',
    angle: 10,
    radius: 0.35,
    summary: 'Generative and agentic AI move from standalone tools into the fabric of everyday software.',
    detail:
      'By 2030, AI is expected to shift from a feature you open (a chat window) to a layer running underneath most software — drafting code, summarizing meetings, routing support tickets, and flagging anomalies before a human is looped in. The Stanford AI Index (2025) has tracked steep year-over-year gains in model capability alongside falling inference cost, which is the combination that makes background, always-on AI economically viable rather than a novelty.',
    source: 'Stanford HAI, AI Index Report, 2025',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    stage: 'Mainstream',
    angle: 55,
    radius: 0.55,
    summary: 'Defense shifts toward AI-assisted detection as attack surfaces expand with automation.',
    detail:
      'As more systems act autonomously, the security question changes from "who has access" to "what is this agent allowed to decide." Expect growth in identity governance for non-human accounts, AI-assisted threat detection that reads patterns humans would miss at scale, and continued demand for people who can audit automated decisions rather than only patch software. The World Economic Forum has repeatedly listed cybersecurity skills among the fastest-growing skill categories in its Future of Jobs research.',
    source: 'World Economic Forum, Future of Jobs Report, 2025',
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    stage: 'Mainstream',
    angle: 100,
    radius: 0.4,
    summary: 'Cloud-native design becomes the default starting point, not a migration destination.',
    detail:
      'Most new systems are expected to be designed cloud-native from day one, built around managed services, containers, and elastic scaling rather than fixed servers. The emerging direction is less about "moving to the cloud" and more about composing applications from cloud-based building blocks — including AI inference endpoints — that a small team can assemble quickly.',
    source: 'Gartner, Cloud strategy research (industry direction)',
  },
  {
    id: 'edge',
    name: 'Edge Computing',
    stage: 'Growing',
    angle: 145,
    radius: 0.62,
    summary: 'Processing moves closer to devices to cut latency for real-time automation.',
    detail:
      'Autonomous vehicles, industrial robotics, and AR devices cannot wait for a round trip to a distant data center. The likely direction is more computation happening on or near the device itself, with the cloud handling training and heavier analysis. This split is what allows real-time responsiveness without sacrificing the benefits of centralized intelligence.',
    source: 'Industry direction (Gartner, IDC edge computing forecasts)',
  },
  {
    id: 'robotics',
    name: 'Robotics',
    stage: 'Growing',
    angle: 190,
    radius: 0.5,
    summary: 'Physical automation extends from factories into logistics, retail, and services.',
    detail:
      'Industrial robotics is well established; the expected trend is expansion into less structured environments — warehouses, hospitals, agriculture — aided by better perception AI that lets robots handle variation instead of only repetitive, fixed tasks. This is described as an emerging trend rather than a finished shift, since general-purpose robotics still faces real cost and reliability constraints.',
    source: 'McKinsey Global Institute, automation research',
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    stage: 'Emerging',
    angle: 235,
    radius: 0.78,
    summary: 'Early practical use cases appear in chemistry, logistics, and cryptography research.',
    detail:
      'Quantum computing remains an emerging technology heading toward 2030, not a mainstream tool. Realistic near-term progress looks like specialized use in materials science, drug discovery simulations, and optimization problems — plus a parallel push in "post-quantum" cryptography to prepare current encryption for a future where quantum decryption becomes feasible.',
    source: 'IBM Research, quantum computing roadmap (industry direction)',
  },
  {
    id: 'arvr',
    name: 'AR / VR / XR',
    stage: 'Growing',
    angle: 280,
    radius: 0.58,
    summary: 'Mixed reality finds its footing in training, design, and remote collaboration.',
    detail:
      'Consumer adoption has been slower than early predictions, but the expected direction toward 2030 is steadier growth in professional use — surgical training, architectural walkthroughs, remote equipment repair guided by an expert overlay — where the value of seeing spatial information outweighs the cost of the hardware.',
    source: 'Industry direction (enterprise XR adoption reporting)',
  },
  {
    id: 'iot',
    name: 'Internet of Things',
    stage: 'Mainstream',
    angle: 325,
    radius: 0.45,
    summary: 'Everyday devices become data sources feeding automated decisions.',
    detail:
      'The number of connected sensors in homes, vehicles, and infrastructure keeps expanding, and the meaningful shift is what happens with that data: less dashboards for humans to watch, more automated responses — a building adjusting its own energy use, a factory line flagging a part before it fails.',
    source: 'Industry direction (IoT connectivity forecasts)',
  },
  {
    id: 'digital-twins',
    name: 'Digital Twins',
    stage: 'Emerging',
    angle: 30,
    radius: 0.7,
    summary: 'Live virtual models of real systems support simulation before real-world changes.',
    detail:
      'A digital twin is a continuously updated virtual replica of a physical system — a factory, a city grid, a supply chain. The expected direction is broader use for testing changes in simulation first: rerouting logistics, stress-testing infrastructure, or modeling a production line before touching the physical version.',
    source: 'Gartner, digital twin technology trends',
  },
  {
    id: 'automation',
    name: 'Process Automation',
    stage: 'Mainstream',
    angle: 75,
    radius: 0.3,
    summary: 'Routine, rules-based tasks continue shifting to software across every industry.',
    detail:
      'Automation here means software handling predictable, repeatable steps — data entry, invoice matching, basic customer queries — freeing people for judgment-heavy work. McKinsey Global Institute research has consistently framed this as task-level automation rather than whole-job elimination, since most jobs mix automatable and non-automatable tasks.',
    source: 'McKinsey Global Institute, Future of Work research',
  },
]

export const stageMeta = {
  Emerging: { color: '#A855F7', description: 'Early research and pilots; real-world use is still limited.' },
  Growing: { color: '#4BB8FA', description: 'Adoption is expanding beyond early adopters into mainstream teams.' },
  Mainstream: { color: '#22D3EE', description: 'Already common in production systems and everyday tools.' },
}
