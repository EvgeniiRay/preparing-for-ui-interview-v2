import './reset.css'
import css from './app.module.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ToastExample,
  ToastVanillaExample,
  ToastStudentExample,
  ToastStudentVanillaExample,
} from './problems/38-toast/toast.example'
import './problems/38-toast/solution/toast.animations.css' // Global keyframes

import {
  CheckboxTreeExample,
  CheckboxTreeVanillaExample,
  CheckboxesStudentExample,
  CheckboxesStudentVanillaExample,
} from './problems/37-nested-checkboxes/checkboxes.example'
import {
  AccordionExample,
  AccordionVanillaExample,
  AccordionStudentExample,
  AccordionStudentVanillaExample,
} from './problems/21-accordion/accordion.example'
import {
  TabsExample,
  TabsVanillaExample,
  TabsStudentExample,
  TabsStudentVanillaExample, // Verified export exists
} from './problems/25-tabs/tabs.example'
import {
  TooltipExample,
  TooltipVanillaExample,
  TooltipStudentExample,
  TooltipStudentVanillaExample,
} from './problems/29-tooltip/tooltip.example'
import {
  TableExample,
  TableVanillaExample,
  TableStudentExample,
  TableStudentVanillaExample, // Verified export exists
} from './problems/30-table/table.example'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownExample, MarkdownStudentExample } from './problems/55-markdown/markdown.example'
import {
  ProgressBarExample,
  ProgressBarVanillaExample,
  ProgressBarStudentExample,
  ProgressBarStudentVanillaExample,
} from './problems/46-progress-bar/progress-bar.example'
import {
  SquareGameExample,
  SquareGameVanillaExample,
  SquareGameStudentExample,
} from './problems/42-square-game/square-game.example'
import {
  UseFileUploadExample,
  UseFileUploadStudentExample,
} from './problems/49-use-file-upload/use-file-upload.example'
import {
  UploadComponentExample,
  UploadComponentStudentExample,
} from './problems/50-upload-component/upload-component.example'

import {
  GalleryExample,
  GalleryVanillaExample,
  GalleryStudentExample,
  GalleryStudentVanillaExample,
} from './problems/34-gallery/gallery.example'
import {
  GPTComponentExample,
  GPTChatVanillaExample,
  GptChatStudentExample,
  GptChatStudentVanillaExample,
} from './problems/56-gpt-chat/gpt-chat.example'

import {
  RedditThreadExample,
  RedditThreadVanillaExample,
  RedditThreadStudentExample,
  RedditThreadStudentVanillaExample,
} from './problems/33-reddit-thread/reddit-thread.example'
import {
  StarRatingExample,
  StarRatingVanillaExample,
  StarRatingStudentExample,
  StarRatingStudentVanillaExample,
} from './problems/22-star-rating/star-rating.example'
import {
  CalculatorExample,
  CalculatorVanillaExample,
  CalculatorStudentExample,
  CalculatorStudentVanillaExample,
} from './problems/41-calculator/calculator.example'
import {
  TypeaheadExample,
  TypeaheadVanillaExample,
  TypeaheadStudentExample,
} from './problems/45-typeahead/typeahead.example'
import {
  DialogExample,
  DialogVanillaExample,
  DialogStudentExample,
  DialogStudentVanillaExample,
} from './problems/26-dialog/dialog.example'
import {
  PortfolioVisualizerExample as PortfolioVisualizerUxExample,
  PortfolioVisualizerVanillaExample as PortfolioVisualizerUxVanillaExample,
  PortfolioVisualizerStudentExample as PortfolioVisualizerUxStudentExample,
  PortfolioVisualizerStudentVanillaExample as PortfolioVisualizerUxStudentVanillaExample,
} from './problems/53-portfolio-visualizer-ux/portfolio-visualizer.example'
import {
  PortfolioVisualizerExample as PortfolioVisualizerLogicExample,
  PortfolioVisualizerVanillaExample as PortfolioVisualizerLogicVanillaExample,
  PortfolioVisualizerStudentExample as PortfolioVisualizerLogicStudentExample,
  PortfolioVisualizerStudentVanillaExample as PortfolioVisualizerLogicStudentVanillaExample,
} from './problems/54-portfolio-visualizer-logic/portfolio-visualizer.example'
import { TableEngineExample as BasicEngineExample } from './problems/57-google-sheet-basic/table-engine.example.tsx'
import { TableEngineExample as CompileEngineExample } from './problems/58-google-sheet-compile/table-engine.example.tsx'
import { TableEngineExample as TopoEngineExample } from './problems/59-google-sheet-topo/table-engine.example.tsx'
import { TableEngineExample as EvalEngineExample } from './problems/60-google-sheet-eval/table-engine.example.tsx'
import { TableEngineExample as RecomputeEngineExample } from './problems/61-google-sheet-recompute/table-engine.example.tsx'
import {
  GoogleSheetExample,
  GoogleSheetVanillaExample,
  GoogleSheetStudentExample,
  GoogleSheetStudentVanillaExample,
} from './problems/62-google-sheet-ux/google-sheet.example.tsx'

// Import problem markdown files as text
import toastProblem from './problems/38-toast/problem.md' with { type: 'text' }
import checkboxProblem from './problems/37-nested-checkboxes/problem.md' with { type: 'text' }
import accordionProblem from './problems/21-accordion/problem.md' with { type: 'text' }
import tabsProblem from './problems/25-tabs/problem.md' with { type: 'text' }
import tooltipProblem from './problems/29-tooltip/problem.md' with { type: 'text' }
import dialogProblem from './problems/26-dialog/problem.md' with { type: 'text' }
import tableProblem from './problems/30-table/problem.md' with { type: 'text' }
import markdownProblem from './problems/55-markdown/problem.md' with { type: 'text' }
import squareGameProblem from './problems/42-square-game/problem.md' with { type: 'text' }
import progressBarProblem from './problems/46-progress-bar/problem.md' with { type: 'text' }
import uploadComponentProblem from './problems/50-upload-component/problem.md' with { type: 'text' }
import useFileUploadProblem from './problems/49-use-file-upload/problem.md' with { type: 'text' }
import portfolioVisualizerUxProblem from './problems/53-portfolio-visualizer-ux/problem.md' with { type: 'text' }
import portfolioVisualizerLogicProblem from './problems/54-portfolio-visualizer-logic/problem.md' with { type: 'text' }
import tableEngineBasicProblem from './problems/57-google-sheet-basic/problem.md' with { type: 'text' }
import tableEngineCompileProblem from './problems/58-google-sheet-compile/problem.md' with { type: 'text' }
import tableEngineTopoProblem from './problems/59-google-sheet-topo/problem.md' with { type: 'text' }
import tableEngineEvalProblem from './problems/60-google-sheet-eval/problem.md' with { type: 'text' }
import tableEngineRecomputeProblem from './problems/61-google-sheet-recompute/problem.md' with { type: 'text' }
import googleSheetProblem from './problems/62-google-sheet-ux/problem.md' with { type: 'text' }

import galleryProblem from './problems/34-gallery/problem.md' with { type: 'text' }
import gptChatProblem from './problems/56-gpt-chat/problem.md' with { type: 'text' }

import redditThreadProblem from './problems/33-reddit-thread/problem.md' with { type: 'text' }
import starRatingProblem from './problems/22-star-rating/problem.md' with { type: 'text' }
import calculatorProblem from './problems/41-calculator/problem.md' with { type: 'text' }
import typeaheadProblem from './problems/45-typeahead/problem.md' with { type: 'text' }

// Import vanilla JS problem markdown files
import detectTypeProblem from './problems/01-detect-type/problem.md' with { type: 'text' }
import debounceProblem from './problems/02-debounce/problem.md' with { type: 'text' }
import throttleProblem from './problems/05-throttle/problem.md' with { type: 'text' }
import es5ExtendsProblem from './problems/06-es5-extends/problem.md' with { type: 'text' }
import deepEqualsProblem from './problems/09-deep-equals/problem.md' with { type: 'text' }
import deepCloneProblem from './problems/10-deep-clone/problem.md' with { type: 'text' }
import stringifyProblem from './problems/13-stringify/problem.md' with { type: 'text' }
import promiseProblem from './problems/14-promise/problem.md' with { type: 'text' }
import treeSelectProblem from './problems/17-tree-select/problem.md' with { type: 'text' }
import abstractComponentProblem from './problems/18-abstract-component/problem.md' with { type: 'text' }
import {
  AbstractComponentExample,
  AbstractComponentStudentExample,
} from './problems/18-abstract-component/component.example'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Custom code component for ReactMarkdown with syntax highlighting
const CodeBlock = ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const match = /language-(\w+)/.exec(className || '')
  const code = String(children).replace(/\n$/, '')

  if (match) {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        customStyle={{
          borderRadius: '10px',
          fontSize: '0.85rem',
          margin: '0 0 1.25rem',
          padding: '1rem 1.1rem',
          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
        }}
      >
        {code}
      </SyntaxHighlighter>
    )
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

// Helper to create a problem overview component
const createProblemOverview = (markdownContent: string) => {
  return () => (
    <div className={css.markdownContent}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlock }}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  )
}

type TDifficulty = 'warm-up' | 'easy' | 'medium' | 'hard' | 'extreme'
type TVariantType = 'overview' | 'react' | 'vanilla' | 'studentReact' | 'studentVanilla' | 'example'

const VARIANT_LABELS: Record<TVariantType, string> = {
  overview: 'Problem Overview',
  react: 'Reference · React',
  vanilla: 'Reference · Vanilla',
  studentReact: 'Student · React',
  studentVanilla: 'Student · Vanilla',
  example: 'Example',
}

type TVariant = {
  component: React.ComponentType
}

type TProblem = {
  id: string
  name: string
  difficulty: TDifficulty
  variants: Partial<Record<TVariantType, TVariant>>
}

const SECTIONS = {
  javascriptProblems: {
    title: 'Javascript Problems',
    items: {
      detectType: {
        id: 'detectType',
        name: 'Detect Type',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(detectTypeProblem) },
        },
      },
      debounce: {
        id: 'debounce',
        name: 'Debounce',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(debounceProblem) },
        },
      },
      throttle: {
        id: 'throttle',
        name: 'Throttle',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(throttleProblem) },
        },
      },
      es5Extends: {
        id: 'es5Extends',
        name: 'ES5 Extends',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(es5ExtendsProblem) },
        },
      },
      deepEquals: {
        id: 'deepEquals',
        name: 'Deep Equals',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(deepEqualsProblem) },
        },
      },
      deepClone: {
        id: 'deepClone',
        name: 'Deep Clone',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(deepCloneProblem) },
        },
      },
      stringify: {
        id: 'stringify',
        name: 'Stringify',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(stringifyProblem) },
        },
      },
      promise: {
        id: 'promise',
        name: 'Promise',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(promiseProblem) },
        },
      },
      treeSelect: {
        id: 'treeSelect',
        name: 'Tree Select',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(treeSelectProblem) },
        },
      },
    } as Record<string, TProblem>,
  },
  components: {
    title: 'Components',
    items: {
      abstractComponent: {
        id: 'abstractComponent',
        name: 'Abstract Component',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(abstractComponentProblem) },
          vanilla: { component: AbstractComponentExample },
          studentVanilla: { component: AbstractComponentStudentExample },
        },
      },
      accordion: {
        id: 'accordion',
        name: 'Accordion',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(accordionProblem) },
          react: { component: AccordionExample },
          vanilla: { component: AccordionVanillaExample },
          studentReact: { component: AccordionStudentExample },
          studentVanilla: { component: AccordionStudentVanillaExample },
        },
      },
      starRating: {
        id: 'starRating',
        name: 'Star Rating',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(starRatingProblem) },
          react: { component: StarRatingExample },
          vanilla: { component: StarRatingVanillaExample },
          studentReact: { component: StarRatingStudentExample },
          studentVanilla: { component: StarRatingStudentVanillaExample },
        },
      },
      tabs: {
        id: 'tabs',
        name: 'Tabs',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(tabsProblem) },
          react: { component: TabsExample },
          vanilla: { component: TabsVanillaExample },
          studentReact: { component: TabsStudentExample },
          studentVanilla: { component: TabsStudentVanillaExample },
        },
      },
      dialog: {
        id: 'dialog',
        name: 'Dialog',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(dialogProblem) },
          react: { component: DialogExample },
          vanilla: { component: DialogVanillaExample },
          studentReact: { component: DialogStudentExample },
          studentVanilla: { component: DialogStudentVanillaExample },
        },
      },
      tooltip: {
        id: 'tooltip',
        name: 'Tooltip',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(tooltipProblem) },
          react: { component: TooltipExample },
          vanilla: { component: TooltipVanillaExample },
          studentReact: { component: TooltipStudentExample },
          studentVanilla: { component: TooltipStudentVanillaExample },
        },
      },
      table: {
        id: 'table',
        name: 'Table',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(tableProblem) },
          react: { component: TableExample },
          vanilla: { component: TableVanillaExample },
          studentReact: { component: TableStudentExample },
          studentVanilla: { component: TableStudentVanillaExample },
        },
      },
      redditThread: {
        id: 'redditThread',
        name: 'Reddit Thread',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(redditThreadProblem) },
          react: { component: RedditThreadExample },
          vanilla: { component: RedditThreadVanillaExample },
          studentReact: { component: RedditThreadStudentExample },
          studentVanilla: { component: RedditThreadStudentVanillaExample },
        },
      },
      gallery: {
        id: 'gallery',
        name: 'Gallery',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(galleryProblem) },
          react: { component: GalleryExample },
          vanilla: { component: GalleryVanillaExample },
          studentReact: { component: GalleryStudentExample },
          studentVanilla: { component: GalleryStudentVanillaExample },
        },
      },
      checkbox: {
        id: 'checkbox',
        name: 'Checkbox',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(checkboxProblem) },
          react: { component: CheckboxTreeExample },
          vanilla: { component: CheckboxTreeVanillaExample },
          studentReact: { component: CheckboxesStudentExample },
          studentVanilla: { component: CheckboxesStudentVanillaExample },
        },
      },
      toast: {
        id: 'toast',
        name: 'Toast',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(toastProblem) },
          react: { component: ToastExample },
          vanilla: { component: ToastVanillaExample },
          studentReact: { component: ToastStudentExample },
          studentVanilla: { component: ToastStudentVanillaExample },
        },
      },
      calculator: {
        id: 'calculator',
        name: 'Calculator',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(calculatorProblem) },
          react: { component: CalculatorExample },
          vanilla: { component: CalculatorVanillaExample },
          studentReact: { component: CalculatorStudentExample },
          studentVanilla: { component: CalculatorStudentVanillaExample },
        },
      },
      squareGame: {
        id: 'squareGame',
        name: 'Square Game',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(squareGameProblem) },
          react: { component: SquareGameExample },
          vanilla: { component: SquareGameVanillaExample },
          studentReact: { component: SquareGameStudentExample },
        },
      },
      typeahead: {
        id: 'typeahead',
        name: 'Typeahead',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(typeaheadProblem) },
          react: { component: TypeaheadExample },
          vanilla: { component: TypeaheadVanillaExample },
          studentReact: { component: TypeaheadStudentExample },
        },
      },

      progressBar: {
        id: 'progressBar',
        name: 'Progress Bar',
        difficulty: 'easy',
        variants: {
          overview: { component: createProblemOverview(progressBarProblem) },
          react: { component: ProgressBarExample },
          vanilla: { component: ProgressBarVanillaExample },
          studentReact: { component: ProgressBarStudentExample },
          studentVanilla: { component: ProgressBarStudentVanillaExample },
        },
      },
      useFileUpload: {
        id: '15.1',
        name: 'Use File Upload Hook',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(useFileUploadProblem) },
          react: { component: UseFileUploadExample },
          studentReact: { component: UseFileUploadStudentExample },
        },
      },
      uploadComponent: {
        id: 'uploadComponent',
        name: 'Upload Component',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(uploadComponentProblem) },
          react: { component: UploadComponentExample },
          studentReact: { component: UploadComponentStudentExample },
        },
      },
      portfolioVisualizerUx: {
        id: '16.1',
        name: 'Portfolio Visualizer (UX)',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(portfolioVisualizerUxProblem) },
          react: { component: PortfolioVisualizerUxExample },
          vanilla: { component: PortfolioVisualizerUxVanillaExample },
          studentReact: { component: PortfolioVisualizerUxStudentExample },
          studentVanilla: { component: PortfolioVisualizerUxStudentVanillaExample },
        },
      },
      portfolioVisualizerLogic: {
        id: '16.2',
        name: 'Portfolio Visualizer (Logic)',
        difficulty: 'extreme',
        variants: {
          overview: { component: createProblemOverview(portfolioVisualizerLogicProblem) },
          react: { component: PortfolioVisualizerLogicExample },
          vanilla: { component: PortfolioVisualizerLogicVanillaExample },
          studentReact: { component: PortfolioVisualizerLogicStudentExample },
          studentVanilla: { component: PortfolioVisualizerLogicStudentVanillaExample },
        },
      },
      markdown: {
        id: 'markdown',
        name: 'Markdown',
        difficulty: 'extreme',
        variants: {
          overview: { component: createProblemOverview(markdownProblem) },
          react: { component: MarkdownExample },
          studentReact: { component: MarkdownStudentExample },
        },
      },
      gptChat: {
        id: 'gptChat',
        name: 'GPT Chat',
        difficulty: 'extreme',
        variants: {
          overview: { component: createProblemOverview(gptChatProblem) },
          react: { component: GPTComponentExample },
          vanilla: { component: GPTChatVanillaExample },
          studentReact: { component: GptChatStudentExample },
          studentVanilla: { component: GptChatStudentVanillaExample },
        },
      },
      googleSheetBasic: {
        id: '19.1',
        name: '19.1 GS: Basic',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(tableEngineBasicProblem) },
          example: { component: BasicEngineExample },
        },
      },
      googleSheetCompile: {
        id: '19.2',
        name: '19.2 GS: Compile',
        difficulty: 'medium',
        variants: {
          overview: { component: createProblemOverview(tableEngineCompileProblem) },
          example: { component: CompileEngineExample },
        },
      },
      googleSheetTopo: {
        id: '19.3',
        name: '19.3 GS: Topo Sort',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(tableEngineTopoProblem) },
          example: { component: TopoEngineExample },
        },
      },
      googleSheetEval: {
        id: '19.4',
        name: '19.4 GS: Eval',
        difficulty: 'hard',
        variants: {
          overview: { component: createProblemOverview(tableEngineEvalProblem) },
          example: { component: EvalEngineExample },
        },
      },
      googleSheetRecompute: {
        id: '19.5',
        name: '19.5 GS: Recompute',
        difficulty: 'extreme',
        variants: {
          overview: { component: createProblemOverview(tableEngineRecomputeProblem) },
          example: { component: RecomputeEngineExample },
        },
      },
      googleSheetUx: {
        id: '19.6',
        name: '19.6 GS: UX',
        difficulty: 'extreme',
        variants: {
          overview: { component: createProblemOverview(googleSheetProblem) },
          react: { component: GoogleSheetExample },
          vanilla: { component: GoogleSheetVanillaExample },
          studentReact: { component: GoogleSheetStudentExample },
          studentVanilla: { component: GoogleSheetStudentVanillaExample },
        },
      },
    } as Record<string, TProblem>,
  },
} as const

const PROBLEM_COUNT = Object.values(SECTIONS).reduce(
  (sum, section) => sum + Object.keys(section.items).length,
  0,
)

// Helper to find a component by selection id (format: "problemId:variant")
const findComponentBySelection = (selectionId: string): React.ComponentType | undefined => {
  const [problemId, variant] = selectionId.split(':') as [string, TVariantType]
  for (const section of Object.values(SECTIONS)) {
    if (problemId in section.items) {
      const problem = section.items[problemId as keyof typeof section.items] as TProblem
      return problem.variants[variant]?.component
    }
  }
  return undefined
}

// Check if a selection id is valid
const isValidSelection = (selectionId: string): boolean => {
  return findComponentBySelection(selectionId) !== undefined
}

const findSectionKey = (problemId: string): string | undefined => {
  return Object.entries(SECTIONS).find(([, section]) => problemId in section.items)?.[0]
}

const problemLabel = (name: string, index: number) =>
  /^\d/.test(name) ? name : `${index + 1}. ${name}`

const findSelection = (selectionId: string) => {
  const [problemId, variant] = selectionId.split(':') as [string, TVariantType]
  for (const section of Object.values(SECTIONS)) {
    const entries = Object.entries(section.items)
    const index = entries.findIndex(([id]) => id === problemId)
    if (index === -1) continue
    const problem = entries[index]?.[1]
    if (!problem) continue
    return {
      problemId,
      label: problemLabel(problem.name, index),
      variantLabel: VARIANT_LABELS[variant],
    }
  }
  return undefined
}

const readMarked = (): Record<string, boolean> => {
  const stored = localStorage.getItem('sidebarMarkedProblems')
  if (!stored) return {}
  try {
    const parsed: unknown = JSON.parse(stored)
    if (!parsed || typeof parsed !== 'object') return {}
    return parsed as Record<string, boolean>
  } catch {
    return {}
  }
}

const COMPACT_QUERY = '(max-width: 840px)'

const NotFound = () => (
  <div className={css.notFound}>
    <p className={css.notFoundKicker}>Missing example</p>
    <h2>This example is not in the workshop.</h2>
  </div>
)

const MarkButton = ({
  checked,
  label,
  onToggle,
}: {
  checked: boolean
  label: string
  onToggle: () => void
}) => (
  <button
    type="button"
    className={checked ? `${css.mark} ${css.markChecked}` : css.mark}
    role="checkbox"
    aria-checked={checked}
    aria-label={checked ? `Unmark ${label}` : `Mark ${label} done`}
    onClick={(event) => {
      event.stopPropagation()
      onToggle()
    }}
  >
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3.5 8.2 L6.4 11.2 L12.5 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)

export default function App() {
  // Read initial selection from URL param
  const getInitialExample = (): string => {
    const params = new URLSearchParams(window.location.search)
    const example = params.get('example')
    if (example && isValidSelection(example)) {
      return example
    }
    return 'tabs:react'
  }

  // Get initial open sections from localStorage or defaults
  const getInitialOpenSections = (): Record<string, boolean> => {
    const stored = localStorage.getItem('sidebarOpenSections')
    if (stored) {
      return JSON.parse(stored)
    }
    // Default: main chapters open
    return {
      javascriptProblems: true,
      components: true,
    }
  }

  // Get initial open problems from localStorage
  const getInitialOpenProblems = (): Record<string, boolean> => {
    const stored = localStorage.getItem('sidebarOpenProblems')
    if (stored) {
      return JSON.parse(stored)
    }
    return {}
  }

  const [selectedId, setSelectedId] = useState<string>(getInitialExample)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const stored = getInitialOpenSections()
    const sectionKey = findSectionKey(getInitialExample().split(':')[0] ?? '')
    return sectionKey ? { ...stored, [sectionKey]: true } : stored
  })
  const [openProblems, setOpenProblems] = useState<Record<string, boolean>>(() => {
    const stored = getInitialOpenProblems()
    const problemId = getInitialExample().split(':')[0] ?? ''
    return { ...stored, [problemId]: true }
  })
  const [query, setQuery] = useState('')
  const [marked, setMarked] = useState<Record<string, boolean>>(readMarked)
  const [isCompact, setIsCompact] = useState(() => window.matchMedia(COMPACT_QUERY).matches)
  const [navOpen, setNavOpen] = useState(false)
  const normalizedQuery = query.trim().toLowerCase()
  const menuRef = useRef<HTMLButtonElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const SelectedComponent = useMemo(() => findComponentBySelection(selectedId), [selectedId])
  const selection = useMemo(() => findSelection(selectedId), [selectedId])
  const markedCount = Object.values(marked).filter(Boolean).length

  useEffect(() => {
    document.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [selectedId])

  useEffect(() => {
    const media = window.matchMedia(COMPACT_QUERY)
    const onChange = () => {
      setIsCompact(media.matches)
      if (!media.matches) setNavOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!navOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavOpen(false)
        menuRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navOpen])

  useEffect(() => {
    if (navOpen && isCompact) searchRef.current?.focus()
  }, [navOpen, isCompact])

  // Update URL when selection changes
  const handleSelectVariant = (problemId: string, variant: TVariantType) => {
    const newId = `${problemId}:${variant}`
    setSelectedId(newId)
    const sectionKey = findSectionKey(problemId)
    if (sectionKey) {
      setOpenSections((prev) => {
        if (prev[sectionKey]) return prev
        const updated = { ...prev, [sectionKey]: true }
        localStorage.setItem('sidebarOpenSections', JSON.stringify(updated))
        return updated
      })
    }
    setOpenProblems((prev) => {
      if (prev[problemId]) return prev
      const updated = { ...prev, [problemId]: true }
      localStorage.setItem('sidebarOpenProblems', JSON.stringify(updated))
      return updated
    })
    const url = new URL(window.location.href)
    url.searchParams.set('example', newId)
    window.history.replaceState({}, '', url.toString())
    if (isCompact) setNavOpen(false)
  }

  const toggleMarked = (problemId: string) => {
    setMarked((prev) => {
      const updated = { ...prev, [problemId]: !prev[problemId] }
      if (!updated[problemId]) delete updated[problemId]
      localStorage.setItem('sidebarMarkedProblems', JSON.stringify(updated))
      return updated
    })
  }

  const closeNav = () => {
    setNavOpen(false)
    menuRef.current?.focus()
  }

  // Handle section toggle and persist to localStorage
  const handleSectionToggle = (sectionKey: string, isOpen: boolean) => {
    setOpenSections((prev) => {
      const updated = { ...prev, [sectionKey]: isOpen }
      localStorage.setItem('sidebarOpenSections', JSON.stringify(updated))
      return updated
    })
  }

  // Handle problem toggle and persist to localStorage
  const handleProblemToggle = (problemId: string, isOpen: boolean) => {
    setOpenProblems((prev) => {
      const updated = { ...prev, [problemId]: isOpen }
      localStorage.setItem('sidebarOpenProblems', JSON.stringify(updated))
      return updated
    })
  }

  const visibleSections = Object.entries(SECTIONS)
    .map(([sectionKey, section]) => {
      const problems = Object.entries(section.items).map(([problemId, problem], index) => ({
        problemId,
        problem,
        index,
      }))
      const visibleProblems =
        normalizedQuery === ''
          ? problems
          : problems.filter(({ problem }) => problem.name.toLowerCase().includes(normalizedQuery))
      return { sectionKey, section, visibleProblems }
    })
    .filter(
      ({ section, visibleProblems }) =>
        normalizedQuery === '' ||
        visibleProblems.length > 0 ||
        Object.keys(section.items).length === 0,
    )

  const hasResults = visibleSections.some(({ visibleProblems }) => visibleProblems.length > 0)

  return (
    <div className={navOpen ? `${css.app} ${css.navOpen}` : css.app}>
      <header className={css.topBar}>
        <button
          ref={menuRef}
          type="button"
          className={css.menuButton}
          aria-label="Open problems"
          aria-expanded={navOpen}
          aria-controls="problem-nav"
          onClick={() => setNavOpen(true)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M2 4.5h12M2 8h12M2 11.5h12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className={css.topBarText}>
          <p className={css.topBarTitle}>{selection?.label ?? 'Problems'}</p>
          {selection?.variantLabel ? (
            <p className={css.topBarMeta}>{selection.variantLabel}</p>
          ) : null}
        </div>
        {selection ? (
          <MarkButton
            checked={Boolean(marked[selection.problemId])}
            label={selection.label}
            onToggle={() => toggleMarked(selection.problemId)}
          />
        ) : null}
      </header>
      <div className={css.backdrop} onClick={closeNav} />
      <aside
        id="problem-nav"
        className={css.sidebar}
        inert={isCompact && !navOpen ? true : undefined}
      >
        <div className={css.brand}>
          <div className={css.brandMark} aria-hidden="true">
            UI
          </div>
          <div className={css.brandCopy}>
            <p className={css.brandTitle}>UI Interview</p>
            <p className={css.brandMeta}>
              {markedCount > 0
                ? `${markedCount} of ${PROBLEM_COUNT} marked`
                : `Practice lab · ${PROBLEM_COUNT} problems`}
            </p>
          </div>
          <button
            type="button"
            className={css.closeNav}
            aria-label="Close problems"
            onClick={closeNav}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M4 4 L12 12 M12 4 L4 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <label className={css.searchLabel}>
          <span className={css.srOnly}>Find a problem</span>
          <svg className={css.searchIcon} viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="7" cy="7" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M10.5 10.5L13.5 13.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            ref={searchRef}
            className={css.searchInput}
            type="search"
            placeholder="Find a problem"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            spellCheck={false}
          />
        </label>
        <nav className={css.nav} aria-label="Problems">
          {hasResults ? (
            visibleSections.map(({ sectionKey, section, visibleProblems }, sectionIndex) => (
              <div key={sectionKey}>
                {sectionIndex > 0 && <hr className={css.sectionDivider} />}
                <details
                  className={css.sidebarSection}
                  open={normalizedQuery !== '' || (openSections[sectionKey] ?? false)}
                  onToggle={(event) => {
                    if (normalizedQuery) return
                    handleSectionToggle(sectionKey, (event.target as HTMLDetailsElement).open)
                  }}
                >
                  <summary className={css.sectionTitle}>
                    <span>{section.title}</span>
                    <span className={css.sectionCount}>{visibleProblems.length}</span>
                  </summary>
                  {Object.keys(section.items).length === 0 ? (
                    <p className={css.emptySection}>No items yet</p>
                  ) : (
                    <ul className={css.problemList}>
                      {visibleProblems.map(({ problemId, problem, index }) => {
                        const isCurrentProblem = selectedId.startsWith(`${problemId}:`)
                        const label = problemLabel(problem.name, index)
                        const isMarked = Boolean(marked[problemId])
                        return (
                          <li key={problemId} className={css.problemItem}>
                            <div className={css.problemRow}>
                              <MarkButton
                                checked={isMarked}
                                label={label}
                                onToggle={() => toggleMarked(problemId)}
                              />
                              <details
                                open={normalizedQuery !== '' || (openProblems[problemId] ?? false)}
                                onToggle={(event) => {
                                  event.stopPropagation()
                                  if (normalizedQuery) return
                                  handleProblemToggle(
                                    problemId,
                                    (event.target as HTMLDetailsElement).open,
                                  )
                                }}
                              >
                                <summary
                                  className={`${css.problemHeader} ${isCurrentProblem ? css.problemHeaderCurrent : ''}`}
                                >
                                  <span
                                    className={
                                      isMarked
                                        ? `${css.problemName} ${css.problemNameMarked}`
                                        : css.problemName
                                    }
                                  >
                                    {label}
                                  </span>
                                  <span className={`${css.chip} ${css[problem.difficulty]}`}>
                                    {problem.difficulty}
                                  </span>
                                </summary>
                                <ul className={css.variantList}>
                                  {(Object.keys(problem.variants) as TVariantType[]).map(
                                    (variant) => {
                                      const isActive = selectedId === `${problemId}:${variant}`
                                      return (
                                        <li key={variant}>
                                          <button
                                            className={isActive ? css.active : undefined}
                                            aria-current={isActive ? 'page' : undefined}
                                            data-active={isActive ? 'true' : undefined}
                                            onClick={() => handleSelectVariant(problemId, variant)}
                                          >
                                            {VARIANT_LABELS[variant]}
                                          </button>
                                        </li>
                                      )
                                    },
                                  )}
                                </ul>
                              </details>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </details>
              </div>
            ))
          ) : (
            <p className={css.emptySearch}>No problems match “{query.trim()}”.</p>
          )}
        </nav>
      </aside>
      <main className={css.content}>
        {/* eslint-disable-next-line react-hooks/static-components */}
        {SelectedComponent ? <SelectedComponent /> : <NotFound />}
      </main>
    </div>
  )
}
