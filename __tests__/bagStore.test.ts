import {bagStore} from '../src/stores/index'

describe('bagStore', () => {
  const item1 = {
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
  }

  it('should add item to bag and increase its quantity by 1', () => {

    bagStore.addToBag(item1)
    expect(item1.quantity).toBe(1)
    expect(bagStore.countItemsInBag).toBe(1)
  })

  it('should delete item from bag and decrease quantity by 1', () => {

    bagStore.removeFromBag(item1)
    expect(item1.quantity).toBe(0)
    expect(bagStore.countItemsInBag).toBe(0)
  })
})
