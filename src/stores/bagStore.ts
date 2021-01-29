import { action, computed, observable } from 'mobx'

import { Item } from '$src/types/types'

class BagStore {
  @observable itemsInBag:Item[] = []

  @computed get countItemsInBag () {
    return this.itemsInBag.length
  }

  @computed get totalAmount () {
    let total = 0
    for (const item of this.itemsInBag) {
      total = total + (item.price)
    }
    return total
  }

  @action.bound
  addToBag (item:Item) {
    this.itemsInBag.push(item)
  }

  @action.bound
  removeFromBag (item:Item) {
    const index = this.itemsInBag.indexOf(item)
    if (index >= 0) {
      this.itemsInBag.splice(index, 1)
    }
  }

  @computed get getItemsInBag () {
    return this.itemsInBag
  }
}
export default BagStore
