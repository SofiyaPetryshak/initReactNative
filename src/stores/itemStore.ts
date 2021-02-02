import { action, computed, observable, toJS } from 'mobx'

import { ITEMS } from '$src/items'
import { Item } from '$src/types/types'

class ItemStore {
  @observable items:Item[]
  @observable filtered:Item[]
  constructor () {
    this.items = ITEMS
    this.filtered = []
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

  @action filterItems (input:string) {
    if (!input) {
      this.filtered = []
    } else {
      this.filtered = this.items.filter(item => {
        return item.title.toLowerCase().match(input.toLowerCase().trim())
      })
    }
  }

  @action toggleLike (id:number) {
    this.items[id].liked = !this.items[id].liked
  }

  @action removeFromLiked (id:number) {
    this.items[id].liked = false
  }
}

export default ItemStore
