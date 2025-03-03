interface Props {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function Pre({ children, className = "", ...props }: Props) {
  return (
    <pre
      className={`bg-gray-900 text-white p-4 rounded-lg overflow-x-auto ${className}`}
      {...props}
    >
      {children}
    </pre>
  );
}

export function Code({ children, className = "", ...props }: Props) {
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
