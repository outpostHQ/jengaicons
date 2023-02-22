import { forwardRef, Ref } from 'react';
import {
  Checkbox,
  ComboBox,
  CubeCheckboxProps,
  CubeComboBoxProps,
  CubeMenuProps,
  CubeSwitchProps,
  Field,
  FieldTypes,
  Menu,
  NumberInput,
  PasswordInput,
  SearchInput,
  Select,
  Switch,
  TextArea,
  TextInput,
} from '@cube-dev/ui-kit';
import { CubeFieldProps } from '@cube-dev/ui-kit/types/components/forms/Form/Field';

import { useTheme } from './hooks/useTheme';
import {
  CPNumberInputPropsType,
  CPSearchInputPropsType,
  CPSelectPropsType,
  CPTextAreaPropsType,
  CPTextInputPropsType,
} from './types';

const CPTextInput = forwardRef(function CPTextInput(
  { styles, labelStyles, wrapperStyles, size = 'normal', ...otherProps }: CPTextInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <TextInput
      ref={ref}
      styles={{
        fill: 'var(--cp-surface)',
        color: 'var(--cp-text)',
        ...styles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: 'var(--cp-surface)',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

const CPPasswordInput = forwardRef(function CPPasswordInput(
  { styles, labelStyles, wrapperStyles, size = 'normal', ...otherProps }: CPTextInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <PasswordInput
      ref={ref}
      inputStyles={{
        color: {
          '': 'var(--cp-text)',
          'is-hovered': 'var(--cp-text)',
          'is-focused': 'var(--cp-text)',
        },
      }}
      styles={{
        fill: 'var(--cp-surface)',
        color: 'var(--cp-text)',
        ...styles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: 'var(--cp-surface)',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

const CPNumberInput = forwardRef(function CPNumberInput(
  { styles, labelStyles, wrapperStyles, size = 'normal', ...otherProps }: CPNumberInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <NumberInput
      ref={ref}
      styles={{ fill: 'var(--cp-surface)', color: 'var(--cp-text)', ...styles }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: 'var(--cp-surface)',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

const CPSearchInput = forwardRef(function CPTextInput(
  { styles, labelStyles, wrapperStyles, size = 'normal', ...otherProps }: CPSearchInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <SearchInput
      ref={ref}
      styles={{
        color: 'var(--cp-text)',
        Prefix: {
          color: 'var(--cp-text)',
        },
        ...styles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        border: {
          '': `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
          'is-focused': '0px solid red',
        },
        fill: 'var(--cp-surface)',
        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

const CPTextArea = forwardRef(function CPTextArea(
  { styles, labelStyles, wrapperStyles, ...otherProps }: CPTextAreaPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();
  return (
    <TextArea
      ref={ref}
      styles={{ fill: 'var(--cp-surface)', color: 'var(--cp-text)', ...styles }}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: 'var(--cp-surface)',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },

        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

function CPSelect({
  styles,
  labelStyles,
  optionStyles,
  listBoxStyles,
  inputStyles,
  size = 'normal',
  ...otherProps
}: CPSelectPropsType) {
  const theme = useTheme();
  return (
    <Select
      inputStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        ...inputStyles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      styles={{
        Value: {
          color: 'var(--cp-text)',
        },
        fill: {
          '': 'var(--cp-surface)',
          hovered: 'var(--cp-surface)',
        },
        color: 'var(--cp-text)',
        Prefix: {
          fill: 'var(--cp-surface)',
          padding: '0.25rem',
          fontWeight: 500,
          color: 'var(--cp-text)',
        },
        Suffix: {
          padding: '0.25rem',
          fontWeight: 500,
          color: 'var(--cp-text)',
        },
        ...styles,
      }}
      optionStyles={{
        fill: {
          '': 'var(--cp-surface)',
          'is-isds': 'var(--cp-surface-hovered)',
          'is-sda': 'var(--cp-surface-hovered)',
          'is-kdo': 'var(--cp-surface-hovered)',
          'is-qowe': 'var(--cp-surface-hovered)',
          'is-hovered': 'var(--cp-surface-hovered)',
        },
        color: 'var(--cp-text)',
        ...optionStyles,
      }}
      listBoxStyles={{
        fill: 'var(--cp-surface)',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        ...listBoxStyles,
      }}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      {...otherProps}
    />
  );
}

function CPCheckbox(props: CubeCheckboxProps) {
  let { styles, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Checkbox
      styles={{
        width: '1.25rem',
        height: '1.25rem',
        borderRadius: '0.25rem',
        border: `1px solid  ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: {
          '': 'var(--cp-surface)',
          checked: 'var(--cp-surface-primary)',
        },
        ...styles,
      }}
      {...otherProps}
    />
  );
}

function CPSwitch(props: CubeSwitchProps) {
  return (
    <Switch
      inputStyles={{
        fill: {
          '': 'var(--cp-surface-hovered)',
          'is-ads': 'red',
          'is-ada': 'blue',
          'is-rqwe': 'blue',
          'is-rwer': 'blue',
          'is-awe': 'blue',
          checked: 'var(--cp-surface-primary)',
        },
      }}
      labelStyles={{
        color: 'var(--cp-text)',
      }}
      {...props}
    />
  );
}

function CPComboBox({
  styles,
  labelStyles,
  size = 'normal',
  ...otherProps
}: CubeComboBoxProps<object> & { size?: 'normal' | 'full' }) {
  return (
    <ComboBox
      styles={{
        color: 'var(--cp-text)',
        labelStyles: {
          color: 'var(--cp-text)',
        },
        radius: '2r',

        ...styles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      listBoxStyles={{ radius: '2r' }}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      {...otherProps}
    />
  );
}

function CPField<T extends FieldTypes>(props: CubeFieldProps<T>) {
  const { labelStyles, ...otherProps } = props;
  return (
    <Field<T>
      labelPosition="top"
      labelStyles={{
        fontWeight: 400,
        color: 'var(--cp-text)',
        ...labelStyles,
      }}
      {...otherProps}
    />
  );
}

function CPMenu<T>({ children, styles, ...otherProps }: CubeMenuProps<T>) {
  const theme = useTheme();
  return (
    <Menu
      radius="2r"
      styles={{
        fill: 'var(--cp-surface)',
        gap: '0.3rem',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,

        ...styles,
      }}
      {...otherProps}
    >
      {children}
    </Menu>
  );
}

export {
  CPTextInput,
  CPNumberInput,
  CPPasswordInput,
  CPSearchInput,
  CPSelect,
  CPSwitch,
  CPCheckbox,
  CPField,
  CPComboBox,
  CPTextArea,
  CPMenu,
};
