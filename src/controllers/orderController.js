const OrderModel = require('../models/orderModel')
const ProductModel = require('../models/productModel')
const UserModel = require('../models/userModel')

const createOrder = async function (req, res) {
    let orderData = req.body;
    let productId = orderData.productId
    let userId = orderData.userId

    if (!productId) {
        return res.send({ message: "Product id must be present in the order detials" })
    }

    let product = await ProductModel.findById(productId)

    if (!product) {
        return res.send({ message: "Not a valid product id" })
    }

    if (!userId) {
        return res.send({ message: "User id must be present in the order details" })
    }

    let user = await UserModel.findById(userId)

    if (!user) {
        return res.send({ message: "Not a valid user id" })
    }

    let header = req.headers['isfreeappuser']
    let updatedOrder = null;

    if (header == 'true') {
        let updatedOrder = await OrderModel.findOneAndUpdate({}, { $set: { amount: 0, isFreeAppUser: true } })
        res.send(updatedOrder)
    }
    else {
        let productPrice = (await ProductModel.findById({ _id: productId }, { price: 1 })).price
        let userBalance = (await UserModel.findById({ _id: userId }, { balance: 1 })).balance

        if (productPrice > userBalance) {
            res.send("Insufficient Balance")
        }
        else {
            let deductedValue = userBalance - productPrice
            let updatedUserBal = await UserModel.findOneAndUpdate({ _id: userId }, { $set: { balance: deductedValue } })
            updatedOrder = await OrderModel.findOneAndUpdate({}, { $set: { amount: productPrice, isFreeAppUser: false } })
            res.send("Successfully Done")
        }
    }
}


module.exports.createOrder = createOrder

