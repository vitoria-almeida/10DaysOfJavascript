var year = document.getElementById('year')
var month = document.getElementById('month')
var days = document.getElementById('date')

var date = new Date()
var current_date = date.getDate()
var current_month = 1 + date.getMonth()
var current_year = date.getFullYear()
var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function age() {
    if(days.value > current_date){
        current_date = current_date + months[current_month - 1]
        current_month = current_month - 1
    }
    if(month.value > current_month){
        current_month = current_month + 12
        current_year = current_year - 1
    }

    var y = current_year - year.value
    var m = current_month - month.value
    var d = current_date - days.value

    var result = document.getElementById('result').innerHTML = `Your age is ${y} years, ${m} months and ${d} days`  
}