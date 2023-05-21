import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { GlobalStyle as GlobalStyles } from '../src/styles/GlobalStyles'
import { initialize, mswDecorator } from 'msw-storybook-addon'

initialize()

const preview = {
  decorators: [
    mswDecorator,
    withThemeFromJSXProvider({
      GlobalStyles
    })
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
