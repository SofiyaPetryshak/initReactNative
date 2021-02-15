import { action, computed, observable, toJS } from 'mobx'

import { Item } from '$src/types/types'

class BagStore {
  @observable itemsInBag:Item[] = []

  @computed get countItemsInBag () {
    return this.itemsInBag.length
  }

  @computed get totalAmount () {
    let total = 0
    for (const item of this.itemsInBag) {
      total = total + (item.price * item.quantity)
    }
    return total
  }

  @action
  addToBag (item:Item) {
    this.itemsInBag.push(item)
    item.quantity++
  }

  @action
  removeFromBag (item:Item) {

    item.quantity--
    const index = this.itemsInBag.findIndex((el) => el.id === item.id)
    if (index!==undefined) {
      this.itemsInBag.splice(index, 1)
    }
    console.warn(this.itemsInBag)
  }

  @action
  increaseQuantity (item:Item) {
    item.quantity++
  }

  @computed get getItemsInBag () {
    return toJS(this.itemsInBag)
  }
}
export default BagStore
