import { pathOptions, skillOptions } from '../data/your2030.js'

const TECHNICAL_IDS = skillOptions.filter((s) => s.category === 'technical').map((s) => s.id)
const AI_IDS = skillOptions.filter((s) => s.category === 'ai').map((s) => s.id)
const HUMAN_IDS = skillOptions.filter((s) => s.category === 'human').map((s) => s.id)

function pct(count, total) {
  return total > 0 ? Math.round((count / total) * 100) : 0
}

/**
 * Computes every number and label shown on the Section 4 profile card,
 * live, from the three pieces of state collected in Sections 1–3.
 * Nothing here is a fixed lookup result — every score is a function of
 * `skillIds` (a Set) and `pathId`.
 */
export function computeProfile({ roleId, skillIds, pathId }) {
  const selectedTechnical = TECHNICAL_IDS.filter((id) => skillIds.has(id)).length
  const selectedAi = AI_IDS.filter((id) => skillIds.has(id)).length
  const selectedHuman = HUMAN_IDS.filter((id) => skillIds.has(id)).length
  const totalSelected = skillIds.size

  const skillStrength = pct(selectedTechnical, TECHNICAL_IDS.length)
  const aiReadiness = pct(selectedAi, AI_IDS.length)
  const humanSkills = pct(selectedHuman, HUMAN_IDS.length)

  // Adaptability rewards breadth across all three categories, not just
  // raw skill count — someone who picked one skill from each category
  // scores higher here than someone who picked five from only one.
  const categoriesCovered = [selectedTechnical > 0, selectedAi > 0, selectedHuman > 0].filter(Boolean).length
  const breadthScore = pct(categoriesCovered, 3)
  const volumeScore = pct(totalSelected, skillOptions.length)
  const adaptabilityScore = Math.round(breadthScore * 0.6 + volumeScore * 0.4)

  const path = pathOptions.find((p) => p.id === pathId)

  return {
    futureRole: path ? path.futureRole : 'Undecided — choose a path above',
    careerDirection: path ? path.label : 'Not yet selected',
    skillStrength,
    adaptabilityScore,
    aiReadiness,
    humanSkills,
    hasSkills: totalSelected > 0,
    hasPath: Boolean(path),
    roleId,
  }
}

export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
