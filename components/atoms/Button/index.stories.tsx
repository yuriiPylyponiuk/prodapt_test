import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Button } from ".";

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    text: "Hello world",
    textColor: "content1",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = (args) => <Button {...args} />;
