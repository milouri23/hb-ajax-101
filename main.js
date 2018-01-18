import Button from './modules/Button.js'
import DataRetriever from './modules/DataRetriever.js'
import CardsController from './modules/CardsController.js'

const URL = 'https://jsonplaceholder.typicode.com/posts/'

const cardsController = new CardsController(
  document.querySelector('.cards-controller')
)

const btn = new Button(
  document.querySelector('.btn'),
  () => {
    DataRetriever.get(URL, (data) => {
      cardsController.build(data)
    })
  }
)
