import 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

import 'jest-enzyme'

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() })
