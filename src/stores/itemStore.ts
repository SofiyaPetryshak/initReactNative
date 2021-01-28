import { action, computed, observable } from 'mobx'

import { Wish } from '$src/types/types'
import { WISHES } from '$src/wishes'

class ItemStore {
  @observable items:Wish[]
  constructor () {
    this.items = WISHES
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
    console.warn('like')
  }
}

const itemStore = new ItemStore()
export default itemStore
