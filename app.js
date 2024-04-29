const express = require("express")
var database = require('./db')
var  app = express()

app.set('view engine', 'ejs')


app.get("/", function(request, response, next){

	var query = "SELECT * FROM productos"

	database.query(query, function(error, data){

		if(error)
		{
			throw error
		}
		else
		{
			response.render('tabla', {action:'list', datos:data})
		}

	})

})

app.listen(3000, () => {
    console.log("ok")
})