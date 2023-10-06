import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Input } from '.'

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: {
    size: 'height35',
    color: 'background1',
    label: { color: 'error' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
}

export default InputMeta

type InputStory = ComponentStory<typeof Input>

export const Basic: InputStory = (args) => <Input {...args} />
