'use client'

import { Label, type LabelProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Label = ({ className, ...props }: LabelProps) => {
  return (
    <Label
      className={cn(
        'mb-2 mr-3 block font-medium text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-40 dark:text-white',
        className,
      )}
      {...props}
    />
  )
}

export { _Label as Label }
