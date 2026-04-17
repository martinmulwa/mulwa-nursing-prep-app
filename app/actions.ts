'use server';

import fs from 'fs/promises';
import path from 'path';
import { questions as defaultQuestions } from '@/lib/questions';

export interface Paper {
  id: string;
  title: string;
  questions: any[];
  isHidden?: boolean;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'papers.json');

const DEFAULT_PAPER: Paper = {
  id: 'default-part-1',
  title: 'Part 1 Promotional Exam',
  questions: defaultQuestions,
  isHidden: false,
};

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

export async function getPapersAction(): Promise<Paper[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error('Invalid or empty');
    }
    return parsed;
  } catch {
    // Write default if not found
    await fs.writeFile(DATA_FILE, JSON.stringify([DEFAULT_PAPER], null, 2));
    return [DEFAULT_PAPER];
  }
}

export async function savePaperAction(paper: Paper): Promise<void> {
  const papers = await getPapersAction();
  papers.push(paper);
  await fs.writeFile(DATA_FILE, JSON.stringify(papers, null, 2));
}

export async function renamePaperAction(id: string, newTitle: string): Promise<void> {
  const papers = await getPapersAction();
  const updated = papers.map(p => p.id === id ? { ...p, title: newTitle } : p);
  await fs.writeFile(DATA_FILE, JSON.stringify(updated, null, 2));
}

export async function toggleVisibilityAction(id: string, isHidden: boolean): Promise<void> {
  const papers = await getPapersAction();
  const updated = papers.map(p => p.id === id ? { ...p, isHidden } : p);
  await fs.writeFile(DATA_FILE, JSON.stringify(updated, null, 2));
}

export async function deletePaperAction(id: string): Promise<void> {
  if (id === 'default-part-1') return; // protect default
  const papers = await getPapersAction();
  const filtered = papers.filter(p => p.id !== id);
  await fs.writeFile(DATA_FILE, JSON.stringify(filtered, null, 2));
}
