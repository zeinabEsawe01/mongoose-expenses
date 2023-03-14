const mongoose = require('mongoose')
const Schema = mongoose.Schema
const data = require('../expenses-data/expenses.json')
mongoose.connect("mongodb://127.0.0.1:27017/expense", {
  useNewUrlParser: true,
});


const expenseSchema = new Schema({
    item: String,
    amount: Number,
    date: Date,
    group: String
})



const Expence = mongoose.model("expence", expenseSchema)

for (let d of data){
    let expense = new Expence({
        item: d.item,
        amount: d.amount,
        date: d.date,
        group: d.group
})
// expense.save()
// console.log("inserted")
}

module.exports = Expence

