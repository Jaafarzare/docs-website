import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PreProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {
  children: React.ReactNode;
  className?: string;
}

interface CodeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function Pre({ children, className = "", ...props }: PreProps) {
  return (
    <pre
      className={`bg-gray-900 text-white p-4 rounded-lg overflow-x-auto ${className}`}
      {...props}
    >
      {children}
    </pre>
  );
}

export function Code({ children, className = "", ...props }: CodeProps) {
  return (
    <code
      className={`bg-gray-100 dark:bg-gray-800 rounded px-1 ${className}`}
      {...props}
    >
      {children}
    </code>
  );
}

export const components = {
  pre: Pre,
  code: Code,
};
