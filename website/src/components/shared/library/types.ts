import { ReactNode, RefAttributes } from 'react';
import {
  CubeAvatarProps,
  CubeNumberInputProps,
  CubeParagraphProps,
  CubeSearchInputProps,
  CubeSelectBaseProps,
  CubeTextAreaProps,
  CubeTextInputBaseProps,
  CubeTextInputProps,
} from '@cube-dev/ui-kit';

// TEXT

type CPTextWeight = 'light' | 'base' | 'medium' | 'semibold' | 'bold';
type CPTextVariants =
  | 'caption'
  | 'subheading'
  | 'base'
  | 'heading'
  | 'displaySmall'
  | 'displayMedium'
  | 'displayLarge';

type CPTextProps = {
  children: ReactNode;
  fontWeight?: CPTextWeight;
  variant?: CPTextVariants;
};

export type CPTextPropsType = CPTextProps & Exclude<CubeParagraphProps, keyof CPTextProps>;

// INPUTS

type CPInputSizeVariants = 'normal' | 'full';

interface CPInputAddedProps<T> {
  size?: CPInputSizeVariants;
  value?: T;
  defaultValue?: T;
}

export type CPTextInputPropsType = CubeTextInputProps &
  CPInputAddedProps<string> &
  RefAttributes<HTMLInputElement>;

export type CPSearchInputPropsType = CubeSearchInputProps &
  CPInputAddedProps<string> &
  RefAttributes<HTMLInputElement>;

export type CPNumberInputPropsType = CubeNumberInputProps &
  CPInputAddedProps<number> &
  RefAttributes<HTMLInputElement>;

export type CPPasswordInputPropsType = Omit<CubeTextInputBaseProps, 'value' | 'defaultValue'> & {
  value?: any;
  defaultValue?: any;
  size?: CPInputSizeVariants;
} & RefAttributes<HTMLInputElement>;

export type CPTextAreaPropsType = CubeTextAreaProps &
  CPInputAddedProps<string> &
  RefAttributes<HTMLInputElement>;

export type CPSelectPropsType = CubeSelectBaseProps<object> & { size?: CPInputSizeVariants };

// AVATAR
type CPAvatarProps = {
  type?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
};

export type CPAvatarPropsType = CubeAvatarProps & CPAvatarProps;
