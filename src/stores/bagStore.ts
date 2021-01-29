import { action, computed, observable } from 'mobx'

import { ITEMS } from '$src/items'
import { Wish } from '$src/types/types'

class bagStore {
  @observable itemsInBag:Wish[] = []

  @computed get count () {
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
  addToBag (item:Wish) {
    this.itemsInBag.push(item)
  }

  @action.bound
  removeFromBag (item:Wish) {
    const index = this.itemsInBag.indexOf(item)
    if (index >= 0) {
      this.itemsInBag.splice(index, 1)
    }
  }

  @computed get getItemsInBag () {
    return this.itemsInBag
  }
}
