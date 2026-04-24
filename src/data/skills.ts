export interface Skill {
  label: string;
  start?: string;
  end?: string;
  frequency?: string;
}

export const backendSkills: Skill[] = [
  { label: 'CodeIgniter',     start: '2013-01', end: '2021-11', frequency: 'Daily' },
  { label: 'Firebase',        start: '2024-04', end: 'present', frequency: 'Daily' },
  { label: 'MySQL / MSSQL',   start: '2005-02', end: '2023-12', frequency: 'Daily' },
  { label: 'PHP',             start: '2010-04', end: '2023-12', frequency: 'Daily' },
];

export const frontendSkills: Skill[] = [
  { label: 'Bootstrap',       start: '2015-01', end: '2021-11', frequency: 'Daily' },
  { label: 'HTML / CSS',      start: '2005-02', end: '2023-12', frequency: 'Daily' },
  { label: 'JavaScript',      start: '2005-02', end: '2023-12', frequency: 'Daily' },
  { label: 'jQuery',          start: '2013-01', end: '2023-12', frequency: 'Daily' },
  { label: 'JSON / AJAX',     start: '2015-01', end: '2023-12', frequency: 'Daily' },
];

export const mobileSkills: Skill[] = [
  { label: 'Flutter / Dart',  start: '2024-04', end: 'present', frequency: 'Daily' },
];

export const infrastructureSkills: Skill[] = [
  { label: 'Apache',          start: '2010-04', end: '2023-12', frequency: 'Daily' },
  { label: 'Linux / Unix',    start: '2010-04', end: '2023-12', frequency: 'Daily' },
];

export const toolsSkills: Skill[] = [
  { label: 'Git',                  start: '2021-11', end: 'present' },
  { label: 'Jira',                 start: '2021-11', end: '2023-12' },
  { label: 'Microsoft Power BI',   start: '2020-11', end: '2021-11', frequency: 'Daily' },
  { label: 'Selenium Testing',     start: '2021-11', end: '2023-12' },
];

export const practiceSkills: Skill[] = [
  { label: 'Agile Methodologies' },
  { label: 'AI-Augmented Development' },
  { label: 'Performance Optimization' },
  { label: 'Test-Driven Development' },
];

export const additionalSkills: Skill[] = [
  { label: 'Blazor',          start: '2025-01', end: 'present' },
  { label: 'C#',              start: '2007-10', end: '2009-10' },
  { label: 'Python',          start: '2023-12', end: '2024-04', frequency: 'Daily' },
  { label: 'React' },
];

export const legacySkills: Skill[] = [
  { label: 'C / C++',         start: '1998-09', end: '2003-06' },
  { label: 'Classic ASP',     start: '2005-02', end: '2009-10' },
  { label: 'Java',            start: '1998-09', end: '2003-06' },
  { label: 'Pascal / Delphi', start: '2005-02', end: '2009-10' },
  { label: 'Perl',            start: '2005-02', end: '2021-11', frequency: 'Occasionally' },
  { label: 'Visual Basic',    start: '2002-06', end: '2004-05' },
];

/** Returns a human-readable date range string, e.g. "2010 – 2023" or "2024 – Present" */
export function formatRange(start: string, end: string): string {
  const startYear = start.split('-')[0];
  const endLabel = end === 'present' ? 'Present' : end.split('-')[0];
  return `${startYear} – ${endLabel}`;
}

/** Returns years of experience as a short string, e.g. "13 yrs" or "< 1 yr" */
export function formatYears(start: string, end: string): string {
  const startDate = new Date(start + '-01');
  const endDate   = end === 'present' ? new Date() : new Date(end + '-01');
  const months    = (endDate.getFullYear() - startDate.getFullYear()) * 12
                  + (endDate.getMonth() - startDate.getMonth());
  const years     = Math.round(months / 12);
  if (months <= 0) return '';
  if (years < 1) return `${months} mo${months === 1 ? '' : 's'}`;
  return `${years} yr${years === 1 ? '' : 's'}`;
}

/** True if the skill is currently active */
export function isActive(end: string): boolean {
  return end === 'present';
}
