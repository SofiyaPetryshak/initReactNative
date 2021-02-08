import { action, computed, observable, toJS } from 'mobx'

import { Item } from '$src/types/types'
import {getItems} from '../queries/getItems'
import {delFromLiked} from '../queries/unlike'

class ItemStore {
  @observable _items:Item[]
  @observable filtered:Item[]
  constructor () {
    this._items = []
    this.filtered = []
  }
  async initialize (): Promise<void> {
    this._items = await getItems()
  }
  get items () {
    return this._items
  }

  @computed get likedItems () {
    return this._items.filter(item => item.liked === true)
  }

  @computed get likedItemsCount () {
    return this._items.filter(
      item => item.liked === true,
    ).length
  }

  @computed get allItems () {
    return toJS(this._items)
  }

  @action filterItems (input:string) {
    if (!input) {
      this.filtered = []
    } else {
      this.filtered = this._items.filter(item => {
        return item.title.toLowerCase().match(input.toLowerCase().trim())
      })
    }
  }

  @action toggleLike (id:number) {
    this._items[id].liked = !this._items[id].liked
  }

  @action async removeFromLiked (id:number) {
    await delFromLiked(id, false)
  }
}

export default ItemStore
