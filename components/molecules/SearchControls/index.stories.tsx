import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { SearchControls } from '.'

const SearchControlsMeta: ComponentMeta<typeof SearchControls> = {
  title: 'SearchControls',
  component: SearchControls,
  args: {
    button: { pHeight: 13, text: 'Push', textColor: 'content1', bgColor: 'background5' },
    input: { color: 'success' },
    layout: { center: true, color: 'brandLight' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
}

export default SearchControlsMeta

type SearchControlsStory = ComponentStory<typeof SearchControls>

export const Basic: SearchControlsStory = (args) => <SearchControls {...args} />
