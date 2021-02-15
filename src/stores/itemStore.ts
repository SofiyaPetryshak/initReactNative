import { action, computed, observable, toJS } from 'mobx'

import { Item } from '$src/types/types'
//import {getItems} from '../queries/getItems'
import {delFromLiked} from '../queries/unlike'

class ItemStore {
  @observable _items:Item[]
  @observable filtered:Item[]
  constructor () {
    this._items = []
    this.filtered = []
  }
  async initialize (): Promise<void> {
    this._items = ITEMS
  }

  get items () {
    return toJS(this._items)
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

const ITEMS = [
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
      title: "Forever21 mini",
      brand: "VS",
      price: 100,
      description: "Forever21 mini with detachable strap",
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
    id: 2,
    title: "Adidas leggings",
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
