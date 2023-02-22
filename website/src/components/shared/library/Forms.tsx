import { CubeDialogFormProps, DialogForm, FieldTypes } from '@cube-dev/ui-kit';

import { useTheme } from './hooks/useTheme';

const formButtonDefaultProps = {
  fontWeight: 500,
  radius: '2r',
  padding: '0.5rem 1rem',
};

export function CPDialogForm<T extends FieldTypes>(
  props: CubeDialogFormProps<T> & { variant?: 'normal' | 'danger' },
) {
  const { cancelProps, variant, styles, submitProps, ...otherProps } = props;
  const theme = useTheme();
  return (
    <DialogForm<T>
      cancelProps={{
        type: 'outline',
        color: 'var(--cp-text)',
        fill: {
          '': 'var(--cp-surface)',
          hovered: 'var(--cp-surface-subdued)',
          disabled: 'var(--cp-surface-light)',
        },
        margin: '0 0 0 auto',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        ...formButtonDefaultProps,
        ...cancelProps,
      }}
      styles={{
        left: '50%',
        color: 'var(--cp-text)',
        fill: 'var(--cp-surface)',
        transform: 'translateX(-50%)',
        width: ['37.5rem', '37.5rem', '90%'],
        ButtonIcon: {
          color: 'var(--cp-icon)',
        },
        ...styles,
      }}
      submitProps={{
        fill:
          variant !== 'danger'
            ? {
                '': 'var(--cp-surface-primary)',
                hovered: 'var(--cp-surface-primary-hovered)',
                disabled: 'var(--cp-surface-light)',
              }
            : 'var(--cp-surface-critical)',
        ...formButtonDefaultProps,
        order: 999,
        color: 'var(--cp-white)',
        ...submitProps,
      }}
      {...otherProps}
    />
  );
}
