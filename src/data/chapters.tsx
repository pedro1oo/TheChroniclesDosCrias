import React from "react";

export interface ChapterSection {
  title: string;
  location?: string;
  content: React.ReactNode;
}

export interface Chapter {
  id: number;
  title: string;
  sections: ChapterSection[];
}

import { chapters as chaptersFromDir } from "./chapters/index";

export const chapters: Chapter[] = chaptersFromDir;
