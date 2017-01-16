const express = require('express')
const Redis = require('redis')
const Config = require('12factor-config')
const MongoClient = require('mongodb').MongoClient

const config = Config({
	server_port: {
		env: 'APP_SERVER_PORT',
		type: 'integer',
		default: 3000
	},
	server_host: {
		env: 'APP_SERVER_HOST',
		type: 'string',
		default: '0.0.0.0'
	},
	redis_uri: {
	    env : 'APP_REDIS_URI',
	    type : 'string', // default  
	    required : true
	},
	mongo_uri: {
		env : 'APP_MONGO_URI',
		type : 'string', // default 
		required : true
	}
})

const redis = Redis.createClient(config.redis_uri)
const app = express()


MongoClient.connect(config.mongo_uri, function(err, db) {
	if (err) throw err
	console.log("Connected correctly to mongo server");
 
	app.use(function(req, res, next) {
		if (req.url === '/favicon.ico') return res.end()

		redis.incr('hits', function(err) {
			if (err) return res.json(err)

			db.collection('hits').update({ id: 1 }, { $inc: { hits: 1 } }, { upsert: true }, function(err) {
				if (err) return res.json(err)
				res.json({ "how?": "nice:)" })
			})
		})
	})

	const server = app.listen(config.server_port, config.server_host, function(err) {
		const address = server.address()
		console.log(`Server listen on ${address.address}:${address.port}`)
	})
});

