// Content for Page 2 — "The Great IT Transformation".
// Written as expected direction rather than prediction. No figures are quoted;
// where a claim leans on published research, the organisation is named so a
// reader can go and check it themselves.

/* ── SECTION 1 · Software development 2026 → 2030 ──────────────────── */

export const devEras = [
  {
    id: 'manual',
    stage: 'Manual coding',
    period: 'The baseline',
    headline: 'The developer types every line',
    summary:
      'Code is written by hand from documentation, memory, and Stack Overflow. Productivity scales roughly with hours at the keyboard.',
    detail:
      'In this model the scarce resource is typing and recall: knowing the syntax, remembering the API, and having done a similar thing before. Reviews focus on whether the code is correct and idiomatic. Most of a developer’s day is spent producing code rather than deciding what code should exist.',
    humanFocus: ['Syntax fluency', 'Library knowledge', 'Debugging by hand'],
  },
  {
    id: 'assisted',
    stage: 'AI-assisted coding',
    period: 'Now, nearly everywhere',
    headline: 'Autocomplete grows into a collaborator',
    summary:
      'In-editor assistants suggest lines, blocks, and whole functions. The developer accepts, edits, or rejects each suggestion.',
    detail:
      'The bottleneck moves from typing to reviewing. Developer surveys from GitHub and others consistently report that assistants are now a normal part of the toolchain rather than an experiment. The important shift is cognitive: reading and judging code you did not write becomes a primary daily skill, not an occasional code-review activity.',
    humanFocus: ['Reviewing suggestions', 'Prompting precisely', 'Catching plausible-but-wrong code'],
  },
  {
    id: 'pair',
    stage: 'AI pair programming',
    period: 'Maturing',
    headline: 'Conversation replaces the blank file',
    summary:
      'Work starts as a described intent. The assistant drafts, the developer critiques, and the two iterate across a whole feature rather than a single function.',
    detail:
      'At this stage the unit of work is a conversation about a feature, not a file. Developers who do this well tend to be the ones who can specify clearly — stating constraints, edge cases, and non-goals up front. The failure mode is accepting confident output in a domain you cannot personally verify.',
    humanFocus: ['Clear specification', 'Edge-case thinking', 'Verification discipline'],
  },
  {
    id: 'agent',
    stage: 'Agent-assisted development',
    period: 'Emerging',
    headline: 'Software that executes a plan, not a prompt',
    summary:
      'Agents take a goal, break it into steps, run tests, read logs, and open a pull request — with a human reviewing the result and approving the merge.',
    detail:
      'Agentic workflows change what a review is for. Instead of reading a diff line by line, an engineer is assessing whether the approach was sound, whether tests actually prove anything, and whether the change fits the system’s architecture. This raises the value of people who understand the whole system and lowers the value of narrow, task-shaped work.',
    humanFocus: ['Reviewing approach, not just diffs', 'Test quality', 'Scope and permission boundaries'],
  },
  {
    id: 'architect',
    stage: 'Human-led system architecture',
    period: 'The 2030 direction',
    headline: 'People decide what to build and what it must guarantee',
    summary:
      'Generating code stops being the constraint. Deciding on structure, trade-offs, security posture, and accountability becomes the job.',
    detail:
      'When implementation is cheap, the expensive mistakes move upstream: the wrong data model, the wrong boundary between services, the wrong assumption about who is allowed to do what. None of those are solved by generating more code faster. The expected direction is not fewer engineers but engineers working at a higher level of abstraction, with more responsibility per decision.',
    humanFocus: ['System design', 'Trade-off judgment', 'Accountability for outcomes'],
  },
]

export const devTimeShift = [
  {
    label: 'Writing implementation code',
    today: 'Dominant',
    future: 'Reduced',
    direction: 'down',
    note: 'Increasingly drafted by assistants and agents, then reviewed.',
  },
  {
    label: 'System architecture',
    today: 'Occasional',
    future: 'Central',
    direction: 'up',
    note: 'Structure and boundaries become the costly decisions to get right.',
  },
  {
    label: 'Requirements & product understanding',
    today: 'Often handed down',
    future: 'Shared responsibility',
    direction: 'up',
    note: 'Specifying intent precisely is what makes AI output usable.',
  },
  {
    label: 'Security review',
    today: 'Specialist task',
    future: 'Everyday task',
    direction: 'up',
    note: 'More generated code and more integrations mean a wider attack surface.',
  },
  {
    label: 'Testing & validation',
    today: 'Written manually',
    future: 'Generated, then audited',
    direction: 'up',
    note: 'Deciding what “correct” means stays a human judgment call.',
  },
  {
    label: 'Boilerplate & scaffolding',
    today: 'Routine overhead',
    future: 'Largely automated',
    direction: 'down',
    note: 'Setup, config, and repetitive glue are strong automation candidates.',
  },
  {
    label: 'Supervising AI output',
    today: 'New and informal',
    future: 'A named responsibility',
    direction: 'up',
    note: 'Someone has to own what the machine produced. That someone is human.',
  },
  {
    label: 'Systems thinking across teams',
    today: 'Senior-only',
    future: 'Expected earlier',
    direction: 'up',
    note: 'Junior work shifts toward understanding systems sooner.',
  },
]

/* ── SECTION 2 · Frontend development ──────────────────────────────── */

export const frontendStages = [
  {
    id: 'today',
    title: 'Today',
    caption: 'Hand-built interfaces on a mature stack',
    color: '#4BB8FA',
    rows: [
      { k: 'Foundation', v: 'HTML, CSS, JavaScript, React' },
      { k: 'Layout', v: 'Flexbox and grid, written by hand for each breakpoint' },
      { k: 'Input', v: 'Click, tap, type' },
      { k: 'Accessibility', v: 'Manual audits, usually late' },
      { k: 'Personalisation', v: 'A few rule-based variations' },
      { k: 'Developer time', v: 'Mostly producing components' },
    ],
    note:
      'The fundamentals are not going anywhere. Semantics, the box model, the event loop, and state management are what let you judge whether generated code is any good.',
  },
  {
    id: 'assisted',
    title: 'AI-assisted',
    caption: 'The same stack, drafted faster and reviewed harder',
    color: '#22D3EE',
    rows: [
      { k: 'Foundation', v: 'Same stack — the assistant writes more of it' },
      { k: 'Layout', v: 'Generated from a description, corrected by the developer' },
      { k: 'Input', v: 'Click and tap, plus early conversational surfaces' },
      { k: 'Accessibility', v: 'Automated checks in CI, human review of the rest' },
      { k: 'Personalisation', v: 'Content and layout tuned from real usage data' },
      { k: 'Developer time', v: 'Split between producing and reviewing' },
    ],
    note:
      'This is where most teams are heading right now. The skill that separates people is not who can generate a component — it is who can tell a good one from a subtly broken one.',
  },
  {
    id: '2030',
    title: '2030 direction',
    caption: 'Interfaces that assemble and adapt around the person',
    color: '#A855F7',
    rows: [
      { k: 'Foundation', v: 'Still the web platform, with a design system as the guardrail' },
      { k: 'Layout', v: 'Composed from approved primitives, arranged adaptively' },
      { k: 'Input', v: 'Multimodal: typing, voice, gesture, camera, and context' },
      { k: 'Accessibility', v: 'Built into the system; automation catches most regressions' },
      { k: 'Personalisation', v: 'Density, language, and modality adapt per user' },
      { k: 'Developer time', v: 'Mostly design systems, constraints, and quality' },
    ],
    note:
      'Adaptive interfaces raise new questions rather than removing work: what is the system allowed to change, how does a user see why it changed, and how do you test something that looks different for everyone?',
  },
]

/* ── SECTION 3 · Cybersecurity ─────────────────────────────────────── */

export const securityPipeline = [
  {
    id: 'attack',
    stage: 'Attack',
    actor: 'Adversary',
    owner: 'machine',
    summary: 'Phishing, credential abuse, supply-chain compromise — increasingly generated and personalised by AI.',
    detail:
      'Generative tools lower the cost of a convincing attack. Phishing no longer reads like phishing, voice and video can be synthesised from public clips, and malware can be varied faster than static signatures can keep up. Volume and quality rise at the same time.',
    signals: ['Synthetic phishing', 'Deepfake voice & video', 'Adaptive malware', 'Stolen credentials'],
  },
  {
    id: 'detection',
    stage: 'Detection',
    actor: 'AI-powered monitoring',
    owner: 'machine',
    summary: 'Behavioural baselines flag what looks abnormal for this user, device, or service — not just what matches a known signature.',
    detail:
      'Signature-based detection catches what has been seen before. Behavioural analysis asks a different question: is this normal for this identity, at this hour, from this location, at this volume? Machine learning is well suited to that pattern-matching at a scale no analyst can watch manually.',
    signals: ['Behavioural baselining', 'Anomaly scoring', 'Identity telemetry', 'Endpoint & network signals'],
  },
  {
    id: 'analysis',
    stage: 'Analysis',
    actor: 'Automated correlation',
    owner: 'machine',
    summary: 'Related alerts are clustered into a single narrative, enriched with context, and ranked by likely impact.',
    detail:
      'The scarce resource in a security operations centre is attention. Correlation reduces thousands of raw alerts into a handful of coherent incidents, each with the affected assets, the identities involved, and a probable sequence of events already assembled.',
    signals: ['Alert correlation', 'Threat intel enrichment', 'Blast-radius mapping', 'Priority scoring'],
  },
  {
    id: 'response',
    stage: 'Response',
    actor: 'Automated containment',
    owner: 'machine',
    summary: 'Pre-approved actions run in seconds: isolate a device, revoke a session, block a domain, force re-authentication.',
    detail:
      'Speed matters because attacks move faster than a staffing rota. Automation handles the reversible, low-risk containment steps that have been agreed in advance — and the boundary of what it may do without asking is itself a human decision, reviewed regularly.',
    signals: ['Session revocation', 'Host isolation', 'Zero-trust re-verification', 'Rollback & recovery'],
  },
  {
    id: 'human',
    stage: 'Human decision',
    actor: 'Security analyst',
    owner: 'human',
    summary: 'A person judges business impact, authorises disruptive action, communicates, and is accountable for the call.',
    detail:
      'Shutting down a production system during peak trading is not a technical decision. Neither is telling regulators, customers, or staff what happened. Analysts also hunt for what the automation was never tuned to see, and feed what they find back into detection. The World Economic Forum has repeatedly listed security skills among the fastest-growing skill categories — automation raises the floor, it does not remove the role.',
    signals: ['Impact judgment', 'Threat hunting', 'Disclosure & comms', 'Accountability'],
  },
]

export const securityThemes = [
  {
    title: 'Identity as the perimeter',
    body:
      'When work happens on any device from anywhere, the network boundary stops being meaningful. Identity — for people, services, and increasingly AI agents — becomes the thing you actually defend.',
  },
  {
    title: 'Zero trust as a default',
    body:
      'Verify every request on its own merits rather than trusting anything because of where it came from. Least privilege, short-lived credentials, and continuous re-verification move from best practice to baseline.',
  },
  {
    title: 'Non-human accounts',
    body:
      'Agents and automated pipelines need credentials, permissions, and audit trails of their own. Governing what an automated actor is allowed to decide is an emerging security discipline.',
  },
  {
    title: 'Synthetic media risk',
    body:
      'Deepfaked voice and video make "I recognised their face on the call" an unreliable control. Verification processes that do not depend on recognising a person become necessary.',
  },
  {
    title: 'Attacking AI itself',
    body:
      'Prompt injection, data poisoning, and model abuse are new categories of vulnerability. Anything that reads untrusted input and can take action needs to be threat-modelled accordingly.',
  },
  {
    title: 'Analysts move upstream',
    body:
      'As triage automates, the human role concentrates on hunting, incident command, and deciding where automation is allowed to act alone. That is judgment work, and demand for it is expected to grow.',
  },
]

/* ── SECTION 4 · Cloud + edge ──────────────────────────────────────── */

export const edgeLayers = [
  {
    id: 'device',
    layer: 'Device',
    latency: 'Microseconds',
    summary: 'Sensors, cameras, vehicles, machines, phones, wearables.',
    detail:
      'The layer where data is created and where the physical consequences happen. Increasingly capable of running small models directly on-device, so a camera can recognise an object without sending the frame anywhere.',
    examples: ['On-device inference', 'Sensor fusion', 'Local safety interlocks'],
  },
  {
    id: 'edge',
    layer: 'Edge',
    latency: 'Milliseconds',
    summary: 'Local compute close to the source — a factory floor, a retail site, a base station.',
    detail:
      'Filters, aggregates, and acts on data within a round trip short enough for real-time control. Also the layer that keeps operating when the network link to the cloud is slow or gone, which matters for anything safety-critical.',
    examples: ['Real-time control loops', 'Video analytics', 'Offline resilience', 'Data reduction'],
  },
  {
    id: 'cloud',
    layer: 'Cloud',
    latency: 'Tens of milliseconds',
    summary: 'Elastic, cloud-native services: containers, serverless functions, managed data platforms.',
    detail:
      'Where systems scale, store history, and coordinate across sites. Serverless removes server management from the equation so teams pay per execution and design around events rather than long-running machines.',
    examples: ['Serverless functions', 'Event streaming', 'Data lakes', 'Global coordination'],
  },
  {
    id: 'ai',
    layer: 'AI',
    latency: 'Continuous',
    summary: 'Training, large-model inference, and pattern detection across the whole estate.',
    detail:
      'Heavy learning happens centrally where data and compute are concentrated; the resulting models are pushed back out to edge and device. Distributed intelligence means the model runs where the latency budget requires, not always where it was trained.',
    examples: ['Model training', 'Fleet-wide pattern detection', 'Model distribution', 'Drift monitoring'],
  },
  {
    id: 'decision',
    layer: 'Decision',
    latency: 'Human time',
    summary: 'Operators, engineers, and policy deciding what the system is permitted to do.',
    detail:
      'Automated decisions run inside boundaries somebody set. Setting those boundaries, reviewing exceptions, and changing the rules when reality changes is the layer that stays human.',
    examples: ['Policy & thresholds', 'Exception review', 'Escalation', 'Accountability'],
  },
]

export const edgeReasons = [
  {
    title: 'Latency',
    body: 'A braking system or a robotic arm cannot wait for a round trip to a distant region. Some decisions must be made where the action happens.',
  },
  {
    title: 'Bandwidth and cost',
    body: 'Streaming raw video from thousands of cameras is expensive. Processing locally and sending conclusions instead of footage is far cheaper.',
  },
  {
    title: 'Reliability',
    body: 'Connectivity fails. Systems that must keep working through an outage need enough local intelligence to carry on alone.',
  },
  {
    title: 'Privacy and regulation',
    body: 'Keeping personal or sensitive data on-site — and sending only derived results — makes compliance simpler and reduces exposure.',
  },
]

/* ── SECTION 5 · Robotics + automation ─────────────────────────────── */

export const automationDomains = [
  {
    title: 'Industrial robotics',
    body:
      'Repetitive, high-precision work in structured environments — welding, assembly, palletising. Mature, and expanding as robots get cheaper and easier to reprogram.',
  },
  {
    title: 'Warehouse automation',
    body:
      'Storage, retrieval, sorting, and transport within a controlled layout. Picking varied items from a cluttered bin remains meaningfully harder than moving a known box.',
  },
  {
    title: 'Service robots',
    body:
      'Cleaning, delivery, inventory scanning, and inspection in semi-structured spaces. Works well where the route is predictable and the failure cost is low.',
  },
  {
    title: 'Autonomous systems',
    body:
      'Vehicles and drones operating with limited supervision. Expansion is expected to stay gradual and route-constrained rather than universal, because the edge cases are where the risk sits.',
  },
  {
    title: 'Computer vision',
    body:
      'The perception layer underneath most of the above: quality inspection, defect detection, navigation, and safety monitoring. Improvements here unlock physical automation everywhere else.',
  },
  {
    title: 'Human-robot collaboration',
    body:
      'Collaborative robots share a workspace with people, taking the heavy or repetitive portion of a task while a person handles variation, judgment, and exceptions.',
  },
]

export const taskAutomation = [
  {
    task: 'Repetitive physical motion in a fixed layout',
    fit: 'High',
    note: 'Predictable inputs, measurable output, contained environment.',
  },
  {
    task: 'High-volume visual inspection',
    fit: 'High',
    note: 'Machines sustain attention and consistency better than people do.',
  },
  {
    task: 'Moving known items between known points',
    fit: 'High',
    note: 'Mature technology; the layout can be designed around the robot.',
  },
  {
    task: 'Structured data entry and reconciliation',
    fit: 'High',
    note: 'Rule-based, verifiable, and already largely automated in many sectors.',
  },
  {
    task: 'Handling unfamiliar objects in clutter',
    fit: 'Medium',
    note: 'Dexterity and grasping in unstructured spaces remains genuinely hard.',
  },
  {
    task: 'Maintenance and repair in tight, variable spaces',
    fit: 'Medium',
    note: 'Each job differs; diagnosis often depends on feel and experience.',
  },
  {
    task: 'Work requiring physical care of a person',
    fit: 'Low',
    note: 'Safety, dignity, and trust make full automation unsuitable.',
  },
  {
    task: 'Negotiating an exception nobody planned for',
    fit: 'Low',
    note: 'Requires context, authority, and accountability outside the system.',
  },
]

/* ── SECTION 6 · Quantum computing ─────────────────────────────────── */

export const quantumComparison = [
  {
    aspect: 'Basic unit',
    classical: 'A bit, which is either 0 or 1.',
    quantum: 'A qubit, which holds a combination of 0 and 1 until it is measured.',
  },
  {
    aspect: 'How it scales',
    classical: 'Adding a bit adds one more switch to the machine.',
    quantum: 'Adding a qubit can double the size of the state the machine represents.',
  },
  {
    aspect: 'Reliability',
    classical: 'Extremely stable; errors are rare and well understood.',
    quantum: 'Fragile. Qubits lose their state easily, so error correction is the central engineering problem.',
  },
  {
    aspect: 'Good at',
    classical: 'Almost everything you do today — browsing, video, databases, most AI training.',
    quantum: 'A narrow set of problems with the right mathematical structure.',
  },
  {
    aspect: 'Everyday use',
    classical: 'The device you are reading this on.',
    quantum: 'Accessed remotely as a specialised service, alongside classical machines.',
  },
]

export const quantumApplications = [
  {
    title: 'Cryptography',
    body:
      'Some widely used public-key encryption relies on problems a large, error-corrected quantum computer could eventually solve. This is why standards bodies are already moving toward post-quantum cryptography — the migration matters long before the hardware arrives, because encrypted data captured today could be stored and decrypted later.',
  },
  {
    title: 'Optimisation',
    body:
      'Routing, scheduling, and portfolio problems with enormous numbers of possible combinations are a candidate area. Whether quantum approaches beat well-tuned classical methods for real business problems is still an open research question, not a settled result.',
  },
  {
    title: 'Scientific research',
    body:
      'Simulating molecules and materials is a natural fit, because the system being simulated is itself quantum mechanical. Chemistry, drug discovery, and battery research are the most frequently cited targets in work from groups including IBM Research and Google Research.',
  },
]

export const quantumMyths = [
  {
    myth: 'Quantum computers will replace normal computers.',
    reality:
      'They are expected to be specialised accelerators for particular classes of problems, reached over a network — much like a GPU cluster. Your laptop, phone, and servers stay classical.',
  },
  {
    myth: 'A quantum computer is just a very fast computer.',
    reality:
      'It is not faster at general tasks. It offers an advantage only where a problem has a structure a quantum algorithm can exploit. For most workloads it would be slower and far more expensive.',
  },
  {
    myth: 'Quantum will break all encryption tomorrow.',
    reality:
      'Today’s machines are far from the scale and error rates required. The responsible response is planning a migration to post-quantum algorithms, not alarm.',
  },
]

/* ── SECTION 7 · AR / VR / XR + spatial computing ──────────────────── */

export const workspaceZones = [
  {
    id: 'immersive',
    name: 'Immersive workspace',
    x: 22,
    y: 30,
    summary: 'Screens become placeable objects in the space around you.',
    detail:
      'Instead of windows fighting over one monitor, panels can be arranged in physical space and left there. The practical benefit is spatial memory — you remember where you put something. Adoption is expected to follow comfort, battery life, and whether headsets stop being a thing you have to decide to put on.',
    tags: ['Multi-panel layouts', 'Spatial memory', 'Focus modes'],
  },
  {
    id: 'training',
    name: 'Virtual training',
    x: 68,
    y: 22,
    summary: 'Practising high-stakes procedures without high-stakes consequences.',
    detail:
      'Surgery rehearsal, equipment maintenance, emergency drills, and warehouse safety are already the strongest commercial cases. The value is repetition: you can run the dangerous scenario fifty times, and the system can measure exactly where the trainee hesitated.',
    tags: ['Procedure rehearsal', 'Safety drills', 'Measurable practice'],
  },
  {
    id: 'twin',
    name: 'Digital twin',
    x: 44,
    y: 62,
    summary: 'A live model of a real machine, building, or network.',
    detail:
      'A twin is fed by sensor data from its physical counterpart, so you can inspect current state, replay what happened, and test a change in simulation before touching the real thing. This is where spatial computing and the edge stack from the previous section meet.',
    tags: ['Live sensor feed', 'Simulation before rollout', 'Fault replay'],
  },
  {
    id: 'collab',
    name: 'Remote collaboration',
    x: 80,
    y: 58,
    summary: 'Shared 3D context instead of a shared 2D screen.',
    detail:
      'Reviewing a building, a vehicle chassis, or a factory line works better when everyone can walk around the same model. Microsoft’s Work Trend Index research has consistently pointed to the difficulty of maintaining shared context in hybrid work — spatial tools target exactly that gap.',
    tags: ['Shared 3D review', 'Presence', 'Design walkthroughs'],
  },
  {
    id: 'interface',
    name: '3D interfaces',
    x: 16,
    y: 70,
    summary: 'Data you can walk around rather than scroll through.',
    detail:
      'Network topologies, molecular structures, and building systems have genuine three-dimensional structure, and flattening them to a chart loses information. The design discipline here is new: depth, occlusion, and physical reach all become interface variables.',
    tags: ['Volumetric data', 'Gesture input', 'Depth as information'],
  },
]

/* ── Section 5 & general framing ───────────────────────────────────── */

export const automationModes = [
  {
    mode: 'Automation',
    color: '#4BB8FA',
    body: 'A task runs end-to-end without a person in the loop. Best suited to repetitive, rule-based work with a clear definition of success.',
  },
  {
    mode: 'Augmentation',
    color: '#22D3EE',
    body: 'A machine does part of the task and a person owns the result. This is where most of the visible change by 2030 is expected to sit.',
  },
  {
    mode: 'Transformation',
    color: '#A855F7',
    body: 'The role itself changes shape: some tasks leave, new ones arrive, and the balance of the job moves toward judgment and oversight.',
  },
  {
    mode: 'Human oversight',
    color: '#E2E8F0',
    body: 'A named responsibility for reviewing, approving, and being accountable for automated decisions. This grows as automation spreads.',
  },
]
