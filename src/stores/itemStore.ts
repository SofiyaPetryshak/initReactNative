import { action, computed, observable } from 'mobx'

import { ITEMS } from '$src/items'
import { Wish } from '$src/types/types'

class ItemStore {
  @observable items:Wish[]
  constructor () {
    this.items = ITEMS
  }

  @computed get likedItems () {
    return this.items.filter(item => item.liked === true)
  }

  get likedItemsCount () {
    return this.items.filter(
      item => item.liked === true,
    ).length
  }

  @action toggleLike (id:number) {
    this.items[id].liked = !this.items[id].liked
  }
}

const itemStore = new ItemStore()
export default itemStore
