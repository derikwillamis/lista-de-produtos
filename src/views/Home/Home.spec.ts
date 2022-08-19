import {render} from '@testing-library/vue'
import Component from './Home.vue'

describe('Home', () => {
  describe('render', () => {
    it('renders correctly', () => {
      const {container} = render(Component)
      expect(container).toMatchSnapshot('Home')
    })
  })
})

