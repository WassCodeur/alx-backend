import express from 'express'
import promisify from 'util'
import { createClient} from 'redis'

const app = express()

const listProducts = [

	{"Id": 1, "name": "Suitcase 250", "price": 50, "stock": 4},
	{"Id": 2, "name": "Suitcase 450", "price": 100, "stock": 10},
	{"Id": 3, "name": "Suitcase 650", "price": 350, "stock": 2},
	{"Id": 4, "name": "Suitcase 1050","price": 550, "stock": 5}
]

function getItemById(id) {
	for(let item of listProducts) {
		if(item[id] === id) {
			return item
		}
	}
}

app.get('/list_products', (req, res) => {
	res.send([{"itemId":1,"itemName":"Suitcase 250","price":50,"initialAvailableQuantity":4},{"itemId":2,"itemName":"Suitcase 450","price":100,"initialAvailableQuantity":10},{"itemId":3,"itemName":"Suitcase 650","price":350,"initialAvailableQuantity":2},{"itemId":4,"itemName":"Suitcase 1050","price":550,"initialAvailableQuantity":5}])

})

function reserveStockById(itemId, stock) {
	let key = `item.${itemId}`

}

app.listen(1245)
