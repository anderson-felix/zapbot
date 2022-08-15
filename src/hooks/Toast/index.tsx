/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react';
import { Toaster, toast } from 'react-hot-toast';

export type ToastPosition =
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'top-right'
  | 'top-left';

export interface IToastProps {
  type: 'success' | 'error' | 'promise';
  title?: string;
  style?: Record<string, string>;
  position?: ToastPosition;
  duration?: number;
  promiseOptions?: ToastPromiseOptions;
  iconTheme?: {
    primary: string;
    secondary: string;
  };
}
export interface ToastPromiseOptions {
  promise: Promise<void>;
  messages: ToastPromiseMessages;
}

export interface ToastPromiseMessages {
  loading: string;
  error: string;
  success: string;
}

interface ToastContextData {
  addToast(props: IToastProps): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const addToast = useCallback(
    ({
      type,
      title,
      promiseOptions,
      style = {
        boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)',
        zIndex: '9999',
      },
      ...config
    }: IToastProps) =>
      type === 'promise'
        ? toast.promise(
            promiseOptions?.promise as Promise<any>,
            promiseOptions?.messages as ToastPromiseMessages,
            {
              style,
              ...config,
            },
          )
        : toast[type](title || '', { style, ...config }),
    [],
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <Toaster position="top-right" />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
