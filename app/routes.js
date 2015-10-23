var Nerd = require('./models/nerd');

module.exports = function(app) {
	//Aplicar aqui as rotas do servidor 

	//Rota de GET dos nerds
	app.get('/api/nerds', function(req, res) {
		//find é uma função mongoose para pesquisar todos os nerds
		Nerd.find(function(err, nerds) {
			//Se algum erro acontecer, nada será executado após o res.send(err)
			if (err)
				res.send(err);

			//Retorna todos os nerds ja convertidos para JSON
			res.json(nerds);
		});
	});

	// route to handle creating goes here (app.post)
	app.post('/api/nerds', function(req, res) {
		Nerd.create({
			name: req.body.name,
			level: req.body.level,
			done: false
		},
		function(err, nerd) {
			if (err)
				res.send(err);

			Nerd.find(function(err, nerds) {
				if (err)
					res.send(err);

				res.json(nerds);
			});
		});
	});

    // route to handle delete goes here (app.delete)
    app.delete('/api/nerds/:nerd_id', function(req, res) {
    	Nerd.remove({
    		id: req.params.nerd_id
    	},
    	function(err, nerd) {
    		if (err)
				res.send(err);

			Nerd.find(function(err, nerds) {
				if (err)
					res.send(err);

				res.json(nerds);
			});
    	});
    });

    //função de rota padrão, carrega a index.html
    app.get('*', function(req, res) {
    	var path = require('path');
    	res.sendfile(path.resolve('public/index.html'));
    });
}