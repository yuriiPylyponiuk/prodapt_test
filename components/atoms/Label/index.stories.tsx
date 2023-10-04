import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Label } from ".";

const LabelMeta: ComponentMeta<typeof Label> = {
  title: "Label",
  component: Label,
  args: {
    title: "Hello world",
    userColor: "brand1",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default LabelMeta;

type LabelStory = ComponentStory<typeof Label>;

export const Basic: LabelStory = (args) => <Label {...args} />;
