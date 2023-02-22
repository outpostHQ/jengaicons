import { Paragraph } from '@cube-dev/ui-kit';

import { CPTextPropsType } from './types';

type sharedType = {
  color: string;
  lineHeight: string;
  fontSize: string;
  as: string;
};

// styles local to text components
const textVariants: { [key: string]: sharedType } = {
  caption: {
    color: 'var(--cp-text-soft)',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    as: 'p',
  },

  subheading: {
    color: 'var(--cp-text-soft)',
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    as: 'p',
  },

  base: {
    color: 'var(--cp-text)',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    as: 'p',
  },

  heading: {
    color: 'var(--cp-text)',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    as: 'h3',
  },

  displaySmall: {
    color: 'var(--cp-text)',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    as: 'h3',
  },

  displayMedium: {
    color: 'var(--cp-text)',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    as: 'h2',
  },

  displayLarge: {
    color: 'var(--cp-text)',
    fontSize: '1.75rem',
    lineHeight: '2rem',
    as: 'h1',
  },
};

export function CPText({
  children,
  styles,
  fontWeight,
  variant = 'base',
  ...otherProps
}: CPTextPropsType) {
  let color = textVariants[variant].color;

  let weight =
    fontWeight === 'bold'
      ? '700'
      : fontWeight === 'semibold'
      ? '600'
      : fontWeight === 'medium'
      ? '500'
      : fontWeight === 'light'
      ? '300'
      : '400';

  const resultingStyles = {
    ...textVariants[variant],
    fontWeight: weight,
    color,
    ...styles,
  };

  return (
    <Paragraph
      as={textVariants[variant].as as keyof HTMLElementTagNameMap}
      styles={{ ...resultingStyles }}
      textTransform={variant === 'subheading' ? 'uppercase' : 'initial'}
      {...otherProps}
    >
      {children}
    </Paragraph>
  );
}
