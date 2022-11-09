import React, { ReactNode } from 'react'
import { Color, fontSize, fontWeight } from '.'

export interface InputProps {
  defaultValue?: string;
  type: string;
  readonly?: boolean;
  handleChange?(e: React.ChangeEvent<any>): void;
  value: string | number | undefined;
  name: string;
  id?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  full?: boolean;
  className?: string;
  required?: boolean;
  // eslint-disable-next-line no-undef
  reference?: React.LegacyRef<HTMLInputElement>;
}

export interface HeadingProps {
  size?: fontSize;
  fontWeight?: fontWeight;
  color?: Color;
  className?: string;
  children: ReactNode;
}

export interface ITableData {
  // id:string|number;
  imageURL: string;
  [key: string]: string | number;
}

export interface ITableProps {
  data: ITableData[];
  className?: string;
  headerClassName?: string;
  showSelect?: boolean;
  isBordered?: boolean;
  allowColor?: boolean;
}

export type MessageProps = {
  isOwner: boolean,
  text: string,
  createdAt: string,
}
