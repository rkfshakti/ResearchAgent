/**
 * Standalone-mode configuration for the Deep Agents UI.
 *
 * Persists the LangGraph deployment URL, assistant ID and optional
 * LangSmith API key in the browser's localStorage. Restored per the
 * imports in `page.tsx`, `hooks/useThreads.ts` and `ConfigDialog.tsx`;
 * this file was missing from the repo and broke the production build.
 */

const STORAGE_KEY = "deep-agents-ui-config";

export interface StandaloneConfig {
  deploymentUrl: string;
  assistantId: string;
  langsmithApiKey?: string;
}

export function getConfig(): StandaloneConfig | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as StandaloneConfig;
    if (!parsed.deploymentUrl || !parsed.assistantId) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveConfig(config: StandaloneConfig): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}
