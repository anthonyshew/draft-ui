'use client'

import * as React from 'react'

import { cva, cx, type VariantProps } from 'cva'
import { Checkbox, type CheckboxProps } from 'react-aria-components'

const checkboxVariants = cva({
  base: [
    'group flex cursor-pointer items-center gap-2',
    // Disabled
    'disabled:cursor-not-allowed',
  ],
  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const checkboxInnerVariants = cva({
  base: [
    'flex items-center justify-center rounded border-2 border-slate-300 text-white transition-colors dark:border-slate-600 dark:text-black',
    // Focus
    'group-focus:ring-2 group-focus:ring-slate-400 group-focus:ring-offset-2 dark:group-focus:ring-slate-400 dark:group-focus:ring-offset-slate-900',
    // Selected
    'group-selected:border-black group-selected:bg-black dark:group-selected:border-white dark:group-selected:bg-white',
    // Disabled
    'group-disabled:cursor-not-allowed group-disabled:border-slate-100 group-disabled:bg-slate-100',
    // Selected & Disabled
    'group-selected:disabled:border-slate-100 group-selected:disabled:bg-slate-100 group-selected:disabled:text-slate-400',
  ],
  variants: {
    size: {
      lg: 'h-5 w-5',
      md: 'h-4 w-4',
      sm: 'h-3 w-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface _CheckboxProps
  extends CheckboxProps,
    VariantProps<typeof checkboxVariants>,
    VariantProps<typeof checkboxInnerVariants> {
  className?: string
  children?: React.ReactNode
}

const _Checkbox = ({ className, size, children, ...props }: _CheckboxProps) => {
  return (
    <Checkbox
      className={cx(
        checkboxVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <>
        <div className={cx(checkboxInnerVariants({ size }))}>
          <svg
            viewBox="0 0 12 10"
            className={cx(
              'fill-none stroke-current stroke-2 transition-all duration-300',
              'group-selected:block',
              'group-selected:[stroke-dasharray:28] [stroke-dasharray:22] [stroke-dashoffset:66]',
            )}
          >
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </div>
        <div className="text-black group-disabled:opacity-40 dark:text-white">
          {children}
        </div>
      </>
    </Checkbox>
  )
}

export { _Checkbox as Checkbox }