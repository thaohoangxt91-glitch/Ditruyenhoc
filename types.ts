
export enum GameType {
  MATCHING = 'MATCHING',
  SEQUENCING = 'SEQUENCING',
  SCENARIO = 'SCENARIO'
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface SequenceStep {
  id: string;
  text: string;
  order: number;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface ScenarioGame {
  title: string;
  description: string;
  question: string;
  choices: ScenarioChoice[];
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  SHORT_ANSWER = 'SHORT_ANSWER',
}

export interface QuizQuestion {
  type: QuestionType;
  question: string;
  options?: string[];
  correctIndex?: number;
  isTrue?: boolean;
  correctAnswer?: string;
  explanation: string;
}

export interface LessonPart {
  id: string;
  title: string;
  description: string;
  game: {
    type: GameType;
    data: any;
  };
  assessment: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  parts: LessonPart[];
}

export type AppView = 'HOME' | 'LESSON_DETAIL';
