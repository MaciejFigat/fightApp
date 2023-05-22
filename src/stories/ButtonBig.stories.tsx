import { Meta, StoryObj } from '@storybook/react'
import { ButtonBig } from '../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../consts'

const meta: Meta<typeof ButtonBig> = {
  title: 'Buttons Testing Styled only',
  component: ButtonBig,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        ButtonVariants.PRIMARY,
        ButtonVariants.SECONDARY,
        ButtonVariants.DANGER,
        ButtonVariants.SUCCESS,
        ButtonVariants.SUCCESS_EMPTY,
        ButtonVariants.INFO,
        ButtonVariants.WARNING,
        ButtonVariants.SECONDARY_EMPTY,
        ButtonVariants.DANGER_EMPTY,
        ButtonVariants.INFO_EMPTY,
        ButtonVariants.WARNING_EMPTY,
        ButtonVariants.DANGER_EMPTY,
        ButtonVariants.DISABLED
      ]
    },
    children: {
      control: 'text'
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    variant: ButtonVariants.SUCCESS,

    children: 'Click me'
  }
}
export const SuccessEmpty: Story = {
  args: {
    variant: ButtonVariants.SUCCESS_EMPTY,
    children: 'Success Empty'
  }
}
export const Info: Story = {
  args: {
    variant: ButtonVariants.INFO,
    children: 'Info full'
  }
}
export const InfoEmpty: Story = {
  args: {
    variant: ButtonVariants.INFO_EMPTY,
    children: 'Info Empty'
  }
}
export const Warning: Story = {
  args: {
    variant: ButtonVariants.WARNING,
    children: 'Warning full'
  }
}
export const WarningEmpty: Story = {
  args: {
    variant: ButtonVariants.WARNING_EMPTY,
    children: 'Warning Empty'
  }
}
export const Danger: Story = {
  args: {
    variant: ButtonVariants.DANGER,
    children: 'Danger full'
  }
}
export const DangerEmpty: Story = {
  args: {
    variant: ButtonVariants.DANGER_EMPTY,
    children: 'Danger Empty'
  }
}
export const Disabled: Story = {
  args: {
    variant: ButtonVariants.DISABLED,
    children: 'Disabled full'
  }
}

export const Primary: Story = {
  args: {
    variant: ButtonVariants.PRIMARY,
    children: 'Primary Button'
  }
}
export const PrimaryEmpty: Story = {
  args: {
    variant: ButtonVariants.PRIMARY_EMPTY,
    children: 'Primary Empty'
  }
}
export const Secondary: Story = {
  args: {
    variant: ButtonVariants.SECONDARY,
    children: 'Secondary Button'
  }
}
export const SecondaryEmpty: Story = {
  args: {
    children: 'Empty Button',
    variant: ButtonVariants.SECONDARY_EMPTY
  }
}
