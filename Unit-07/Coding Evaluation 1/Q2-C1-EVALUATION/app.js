const express = require('express')
const Product = require('./product.js')

const app = express()
app.use(express.json())

const product = new Product('products.json')

/** Create an Product */
app.post('/products/create', (req, res) => {

    const information = req.body

    product.addProduct(information)
   
    res.send({
        message: "Product has been created"
    })
})


/** Get all Products */
app.get('/products', (req, res) => {
    try {
        const products = product.getAll()

        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


/** Update an Product */
app.patch('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const information = req.body

    product.updateProduct(information,id)
    
    return res.status(200).send({
        message: 'Product has been updated '
    })
})

/** Delete an Product */
app.delete('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    try {
        product.deleteProduct(id)

        return res.send({
            message: "Product has been deleted"
        })

    } catch(error) {

        res.status(500).send({
            message: error.message
        })
    }
})

/** Get Product by id */ 
app.get('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    const information = product.getById(id)

    if (information) {
        return res.send({
            data: information
        })
    } else {
        return res.status(404).send({
            message: "Product does not exist."
        })
    }

})


app.listen(3004, () => {
    console.log('Server is listening on http://localhost:3004')
})