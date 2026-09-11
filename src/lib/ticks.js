/**
 * Margin ticks: which numbered steps a reader has ticked off, stored in this browser only.
 * Shape: { [docId]: { steps: string[], done: string[] } }
 */
import {useSyncExternalStore} from 'react';

const KEY = 'kladde.ticks.v1';
const EMPTY = Object.freeze({});
const listeners = new Set();
let cache;

function read() {
  if (cache === undefined) {
    try {
      cache = JSON.parse(window.localStorage.getItem(KEY) || '{}') || {};
    } catch {
      cache = {};
    }
  }
  return cache;
}

function write(next) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable (private mode, blocked): keep the ticks for this visit only.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  const onStorage = (event) => {
    if (event.key === KEY) {
      cache = undefined;
      listener();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

export function useTickState() {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

const entryOf = (state, docId) => state[docId] ?? {steps: [], done: []};

export function registerStep(docId, stepId) {
  const state = read();
  const entry = entryOf(state, docId);
  if (entry.steps.includes(stepId)) return;
  write({...state, [docId]: {...entry, steps: [...entry.steps, stepId]}});
}

export function toggleTick(docId, stepId) {
  const state = read();
  const entry = entryOf(state, docId);
  const done = entry.done.includes(stepId) ? entry.done.filter((id) => id !== stepId) : [...entry.done, stepId];
  const steps = entry.steps.includes(stepId) ? entry.steps : [...entry.steps, stepId];
  write({...state, [docId]: {steps, done}});
}
