'use client'

import * as React from 'react'

import { cva, cx, type VariantProps } from 'cva'
import { Radio, type RadioProps } from 'react-aria-components'

const radioVariants = cva({
  base: [
    'group flex cursor-pointer flex-row items-center gap-2',
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

const radioInnerVariants = cva({
  base: [
    'flex items-center justify-center rounded-full border-2 border-slate-300 transition-colors dark:border-slate-600',
    // ::before
    'before:block before:h-1/2 before:w-1/2 before:scale-0 before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[""] dark:before:bg-black',
    // Selected
    'group-selected:border-black group-selected:bg-black group-selected:text-white dark:group-selected:border-white dark:group-selected:bg-white dark:group-selected:text-black',
    // ::before Selected
    'group-selected:before:scale-100',
    // Focus
    'group-focus:ring-2 group-focus:ring-slate-400 group-focus:ring-offset-2 dark:group-focus:ring-slate-400 dark:group-focus:ring-offset-slate-900',
    // Disabled
    'group-disabled:border-slate-100',
    // Selected & Disabled
    'group-selected:disabled:border-slate-100 group-selected:disabled:bg-slate-100 group-selected:disabled:before:bg-slate-400',
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

export interface _RadioProps
  extends RadioProps,
    VariantProps<typeof radioVariants>,
    VariantProps<typeof radioInnerVariants> {
  className?: string
  children?: React.ReactNode
}

const _Radio = ({ className, size, children, ...props }: _RadioProps) => {
  return (
    <Radio
      className={cx(
        radioVariants({
          size,
          className,
        }),
      )}
      {...props}
    >
      <>
        <div className={cx(radioInnerVariants({ size }))} />
        <div className="text-black group-disabled:opacity-40 dark:text-white">
          {children}
        </div>
      </>
    </Radio>
  )
}

export { _Radio as Radio }