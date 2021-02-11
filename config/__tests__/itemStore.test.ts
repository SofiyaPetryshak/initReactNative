import {itemStore} from '../../src/stores/index'

jest.mock('ItemStore', () => {
  return jest.fn().mockImplementation(() => {
      return {
        initialize: () => {
          return items
      }}
  })
})

test('MyTest', () => {
  expect(itemStore.initialize()).toBe(items);
  expect(itemStore.likedItemsCount).toBe(1);
})

const items = [
  {
    id: 0,
    title: "ASOS DESIGN bag with detachable strap",
    brand: "VS",
    price: 100,
    description: "ASOS DESIGN rose gold zipped compartment tote bag with detachable strap",
    images: [
      "https://images.unsplash.com/photo-1596149615678-8488f200b301?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ],
    liked: false,
    color: "black",
    quantity: 0
  },
  {
    id: 1,
    title: "ASOS DESIGN bag with detachable strap",
    brand: "VS",
    price: 100,
    description: "ASOS DESIGN rose gold zipped compartment tote bag with detachable strap",
    images: [
      "https://images.unsplash.com/photo-1596149615678-8488f200b301?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ],
    liked: true,
    color: "black",
    quantity: 0
  },
  {
    id: 3,
    title: "ASOS DESIGN bag with detachable strap",
    brand: "VS",
    price: 100,
    description: "ASOS DESIGN rose gold zipped compartment tote bag with detachable strap",
    images: [
      "https://images.unsplash.com/photo-1596149615678-8488f200b301?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ],
    liked: false,
    color: "black",
    quantity: 0
  }
]
