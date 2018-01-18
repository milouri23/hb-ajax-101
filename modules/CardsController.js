import InfoCard from './InfoCard.js'

export default class CardsController {
  constructor (node) {
    this.node = node
  }

  build (data) {
    const arr = data.map((item) => {
      return InfoCard.getString(item)
    }).join('')
    this.node.innerHTML = arr
  }
}
