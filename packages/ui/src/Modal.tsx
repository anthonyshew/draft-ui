import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { clsx } from 'clsx'
import { type HTMLAttributes, type ReactNode } from 'react'
import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  type ModalOverlayProps,
  type ModalRenderProps,
} from 'react-aria-components'

const buttonVariants = cva(
  [
    'mx-auto rounded bg-white outline-none',
    'data-[entering]:animate-in data-[entering]:zoom-in-75',
    // 'data-[exiting]:animate-out data-[exiting]:zoom-out-75 data-[exiting]:duration-1000', // This breaks the modal closing for some reason'
  ],
  {
    variants: {
      size: {
        full: 'h-full w-full',
        xl: 'my-16 w-[36rem]',
        lg: 'my-16 w-[32rem]',
        md: 'my-16 w-[28rem]',
        sm: 'my-16 w-[24rem]',
        xs: 'my-16 w-[20rem]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const _Modal = (props) => {
  return <DialogTrigger {...props} />
}

export interface _ModalProps
  extends ModalRenderProps,
    Omit<ModalOverlayProps, 'className'>,
    VariantProps<typeof buttonVariants> {
  className?: ClassValue
  children?: ReactNode
}

const _ModalContent = ({
  className,
  size,
  children,
  ...props
}: _ModalProps) => {
  return (
    <Modal
      className={buttonVariants({
        size,
        className,
      })}
      {...props}
    >
      <Dialog className="outline-none">{children}</Dialog>
    </Modal>
  )
}

const _ModalOverlay = ({
  isDismissable = true,
  className,
  ...props
}: ModalOverlayProps) => {
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      className={clsx(
        'h-[var(--visual-viewport-height)]',
        'fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-sm transition-all',
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-out data-[exiting]:fade-out',
        className
      )}
      {...props}
    />
  )
}

const _ModalHeader = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <header
      {...props}
      className={clsx('px-6 py-4 text-xl font-semibold', className)}
    />
  )
}

const _ModalBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={clsx('px-6 py-2', className)} />
}

const _ModalFooter = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return <footer {...props} className={clsx('px-6 py-4', className)} />
}

export {
  _Modal as Modal,
  _ModalContent as ModalContent,
  _ModalOverlay as ModalOverlay,
  _ModalHeader as ModalHeader,
  _ModalBody as ModalBody,
  _ModalFooter as ModalFooter,
}