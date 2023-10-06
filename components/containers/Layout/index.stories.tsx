import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Layout } from '.'

const LayoutMeta: ComponentMeta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
  args: {
    size: 'height120',
    color: 'background1',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
}

export default LayoutMeta

type LayoutStory = ComponentStory<typeof Layout>

export const Basic: LayoutStory = (args) => <Layout {...args} />
