var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mercado'
})

connection.connect(function(err) {
	if(err) {
		console.log('Error connecting '+err.stack)
		return
	}

	console.log('connected as id '+connection.threadId)
})


	// Insert.
function create() {
	var dato = { id:1, nombre: 'bread', precio: 5 }

	connection.query('INSERT INTO producto SET ?', dato, function(err, rows) {
		if(err) throw err

		console.log(rows)
	})
}

	// Select.
function list() {
	connection.query('SELECT * FROM `producto`', function(err, rows) {
		if(err) throw err
			
		console.log(rows)
	})
}

	// Select by Id.
function show() {
	// var productoId = req.params.productoId
	var productoId = 1
	connection.query('SELECT * FROM producto WHERE id = ?', [productoId], function(err, rows) {
		if(err) throw err
		
		if(rows.length == 0) {
			console.log('No existe el producto.')
			return 
		}

		console.log(rows)
	})
}

function update() {
	// var productoId = req.params.productoId
	var productoId = 1

	connection.query('UPDATE producto SET nombre=?, precio=? WHERE id = ?', ['meat', '10', productoId], function(err, results, fields) {
		if(err) {
			throw err
		}

		console.log('El producto se actualizó exitosamente.')
	})

}

function remove() {
	// var productoId = req.params.productoId
	var productoId = 1

	connection.query('DELETE FROM producto WHERE id = ?', [productoId], function(err) {
		if(err) {
			throw err		
		}

		console.log('El producto se eliminó exitosamente.')
	})
}

list()
// create()
// show()
// update()
// remove()

connection.end()