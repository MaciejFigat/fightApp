import React from 'react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { GlobalStyle as GlobalStyles } from '../src/styles/GlobalStyles'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { MemoryRouter } from 'react-router-dom'

initialize()

const withMemoryRouter = Story => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
)

const preview = {
  decorators: [
    mswDecorator,
    withThemeFromJSXProvider({
      GlobalStyles
    }),
    withMemoryRouter
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
