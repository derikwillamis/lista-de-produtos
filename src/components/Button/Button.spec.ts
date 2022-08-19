import {render, screen} from '@testing-library/vue'
import Component from './Button.vue'

const renderInput = () => {
  return render(Component, {
    propsData: {
      label: "placeHolder",
      onClick: () => {}
    }
  })
}

describe('Button Container', () => {
  it('renders correctly', () => {
    renderInput()
    screen.getByTestId("button")
  })
})
