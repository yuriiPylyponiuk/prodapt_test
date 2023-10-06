import React, { FC } from 'react'

import { Button, ButtonPropsType } from '../../atoms/Button'
import { Input, InputPropsType } from '../../atoms/Input'
import { Layout, LayoutPropsType } from '../../containers/Layout'

interface SearchControlsTypes {
  button: ButtonPropsType
  input: InputPropsType
  layout: LayoutPropsType
}

export const SearchControls: FC<SearchControlsTypes> = ({ button, input, layout }) => (
  <Layout {...layout}>
    <Input {...input} />
    <Button {...button} />
  </Layout>
)
