import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-brand">
        {eyebrow}
      </p>

      <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight text-text-primary md:text-5xl">
        {title}
      </h1>

      {children && (
        <div className="mt-4 max-w-3xl text-lg leading-8 text-text-secondary">
          {children}
        </div>
      )}
    </section>
  );
}
