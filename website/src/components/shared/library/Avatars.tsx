import { Avatar } from '@cube-dev/ui-kit';

import { CPAvatarPropsType } from './types';

export function CPAvatar({ styles, type, size, ...otherProps }: CPAvatarPropsType) {
  let finalSize = size === 'lg' ? '2.5rem' : size === 'md' ? '2rem' : '1.5rem';

  return (
    <Avatar
      flexShrink="0"
      color="var(--cp-text)"
      style={{
        border: type === 'outline' ? '1px solid var(--cp-border)' : '',
      }}
      styles={
        type === 'outline'
          ? {
              height: finalSize,
              width: finalSize,
              fill: `var(--cp-surface)`,
              color: `var(--cp-surface)`,
              fontSize: 'var(--cp-text)',
              border: `1px solid var(--cp-border)`,
              flexShrink: 0,
            }
          : {
              height: finalSize,
              width: finalSize,
              fontSize: '0.75rem',
              flexShrink: 0,
              ...styles,
            }
      }
      {...otherProps}
    />
  );
}
