/**
 * Utility function to update a node value in JSON at a given path
 */

import type { JSONPath } from "jsonc-parser";

export function updateValueAtPath(json: string, path: JSONPath | undefined, newValue: string): string {
  if (!path || path.length === 0) {
    // Root level update
    try {
      const parsed = JSON.parse(json);
      // If the newValue looks like JSON, parse it; otherwise treat as string
      try {
        return JSON.stringify(JSON.parse(newValue), null, 2);
      } catch {
        return JSON.stringify(newValue, null, 2);
      }
    } catch {
      return json;
    }
  }

  try {
    const parsed = JSON.parse(json);
    let current = parsed;

    // Navigate to parent
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
      if (current === undefined) return json;
    }

    // Update value
    const lastKey = path[path.length - 1];
    
    // Try to parse as JSON first, if it fails treat as string
    try {
      current[lastKey] = JSON.parse(newValue);
    } catch {
      current[lastKey] = newValue;
    }

    return JSON.stringify(parsed, null, 2);
  } catch {
    return json;
  }
}
