import { action, computed, observable, toJS } from 'mobx'

import { ITEMS } from '$src/items'
import { Item } from '$src/types/types'

class ItemStore {
  @observable items:Item[]
  constructor () {
    this.items = ITEMS
  }

  @computed get likedItems () {
    return this.items.filter(item => item.liked === true)
  }

  @computed get likedItemsCount () {
    return this.items.filter(
      item => item.liked === true,
    ).length
  }

  @computed get allItems () {
    return toJS(this.items)
  }

  @action toggleLike (id:number) {
    this.items[id].liked = !this.items[id].liked
  }

  @action removeFromLiked (id:number) {
    this.items[id].liked = false
  }
}

export default ItemStore
