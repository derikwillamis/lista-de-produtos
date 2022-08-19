import {fireEvent, render, screen} from '@testing-library/vue'
import Component from './InputComponent.vue'

const renderInput = () => {
  return render(Component, {
    propsData: {
      placeholder: "placeHolder"
    }
  })
}

describe('InputContainer', () => {
  it('renders correctly', () => {
    renderInput()
    screen.getByPlaceholderText("placeHolder")
  })

  it('Get display value', async () => {
    const { getByDisplayValue } = renderInput()
    const input = getByDisplayValue("")
    await fireEvent.update(input, "teste123")
    getByDisplayValue("teste123")
  })
})
