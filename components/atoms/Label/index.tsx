import React from "react";
import { Text, TextProps } from "react-native";
import styled from "styled-components/native";
import { LabelColorType } from "../../theme/types";

export interface LabelPropsType extends TextProps {
  title: string;
  userColor: LabelColorType;
}

export const Label = ({ title, ...props }: LabelPropsType) => {
  return <CustomText {...props}>{title}</CustomText>;
};

const CustomText = styled.Text<LabelPropsType>`
  color: ${({ userColor = "default", theme }) => theme.colors.label[userColor]};
  font-size: 16px;
  font-weight: bold;
`;
