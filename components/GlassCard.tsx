import React from 'react';

type Variant = 'default' | 'strong' | 'soft';

const VARIANTS: Record<Variant, string> = {
  default: 'glass',
  strong: 'glass-strong',
  soft: 'glass-soft',
};

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  as?: React.ElementType;
}

/** The foundational frosted-glass surface. */
export function GlassCard({
  variant = 'default',
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}: GlassCardProps) {
  return (
    <Tag className={`rounded-card ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
