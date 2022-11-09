import { FormEvent } from 'react'

export type Color =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'main'
  | 'error'
  | 'warning'
  | 'success'
  | 'txt-primary'
  | 'txt-secondary'
  | 'none'
  | 'gray'
  | 'info'
  | 'lightgray';

export type fontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'tiny'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export type fontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type width = '4' | '8' | '16' | '20' | '24' | '28' | '32' | '38' | '42'|'46'|'50'|'54'|'80';

export type TextDecoration = 'no-underline' | 'underline';

/**
 * handleChange function params type
 */
export interface ValueType<T = Event> {
    name: string;
    value: string | number | boolean | string[];
    label?: string;
    event?: FormEvent<T>;
}
