import { GCSScore } from '../types';

export const gcsScoreToString = (score: GCSScore): string => {
  const o = score.ocular === 0 ? 'NV' : score.ocular ?? '?';
  const v = score.verbal === 0 ? 'NV' : score.verbal ?? '?';
  const m = score.motor === 0 ? 'NV' : score.motor ?? '?';
  return `O:${o} V:${v} M:${m}`;
};

/**
 * Calculates the total GCS score if all components are valid numbers.
 * Returns 0 if any component is NV (0) or null/undefined.
 */
export const calculateTotalGCS = (score: GCSScore | { ocular: number, verbal: number, motor: number }): number => {
  if (score.ocular === 0 || score.verbal === 0 || score.motor === 0) return 0;
  const ocularScore = score.ocular ?? 0;
  const verbalScore = score.verbal ?? 0;
  const motorScore = score.motor ?? 0;
  
  // Only return a sum if all parts have been scored (are not null)
  if (score.ocular === null || score.verbal === null || score.motor === null) return 0;

  return ocularScore + verbalScore + motorScore;
};


/**
 * Returns a string for displaying the total GCS.
 * Returns 'NT' (No Totalizable) if any component is NV (0).
 * Otherwise, returns the calculated sum as a string.
 */
export const getGcsTotalDisplay = (score: GCSScore | { ocular: number, verbal: number, motor: number }): string => {
    if (score.ocular === 0 || score.verbal === 0 || score.motor === 0) {
        return 'NT';
    }
    const total = (score.ocular ?? 0) + (score.verbal ?? 0) + (score.motor ?? 0);
    return total.toString();
};

/**
 * Formats the GCS justification object into a readable string.
 */
export const formatGcsJustification = (
  justification: { ocular: string; verbal: string; motor: string },
  gcs: { ocular: number; verbal: number; motor: number }
): string => {
  return `
Ocular(${gcs.ocular === 0 ? 'NV' : gcs.ocular}): ${justification.ocular}
Verbal(${gcs.verbal === 0 ? 'NV' : gcs.verbal}): ${justification.verbal}
Motora(${gcs.motor === 0 ? 'NV' : gcs.motor}): ${justification.motor}
    `.trim();
};
