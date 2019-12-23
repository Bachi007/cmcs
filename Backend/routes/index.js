var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User=require('../models/users')
var Student=require('../models/student')
var Faculty=require('../models/faculty')
var url="mongodb+srv://Bachi:2505@cluster0-aaxsq.mongodb.net/test?retryWrites=true&w=majority";

router.post('/register', function(req, res, next) {

	var newUser = new User({
		name:req.body.name,
		email: req.body.email,
		mobile: req.body.mobile,
		password:req.body.password,
		passwordConf:req.body.passwordConf,
		role:req.body.role,
		
	});

	newUser.save(function(err, result){
		if (err) {
			var data = {
				"status": "something went wrong",
				"data": err
			}
			res.json(data);
			res.status(500)
		} else {
			var data = {
				"status": "successfully registered",
				"data": result
			}
			res.json(data);
			res.status(200)
		}

	});

	});
	

	router.post('/login', function (req, res, next) {
		//console.log(req.body);
		var name = req.body.name;
		mongoose.connect(url, function (err, db) {
			if (err) throw err;
			var query = User.findOne({ name }).select('name email mobile password role');
			query.exec(function (err, data) {
	
				if (data) {
					if (data.password == req.body.password) {
						console.log("Done Login");
						res.send({ "Status": "Success!", 'data': data });
					} else {
						res.send({ "Status": "Wrong password!", 'data': data });
					}
				} else {
					res.send({ "Status": "This user Is not regestered!", 'data': data });
				}
				console.log(data);
			});
		});
	});
	router.post('/addstudent', function(req, res, next) {

		var newStudent = new Student({
			sno:req.body.sno,
			fullname:req.body.fullname,
			dept:req.body.dept,
			regnum:req.body.regnum,
			email: req.body.email,
			phone: req.body.phone,
			year:req.body.year
		});
	
		newStudent.save(function(err, result){
			if (err) {
				var data = {
					"status": "something went wrong",
					"data": err
				}
				res.json(data);
				res.status(500)
			} else {
				var data = {
					"status": "successfully added",
					"data": result
				}
				res.json(data);
				res.status(200)
			}
	
		});
	
		});
		
		router.post('/students', function (req, res) {
			var dept = req.body.dept;
			mongoose.connect(url, function (err, db) {
				if (err) throw err;
				var query = Student.find({ dept }).select('sno fullname email phone regnum year');
				query.exec(function (err, student) {
		
					if (err) throw err;
					res.send(student);
					console.log(student);
				});
			});
		});
		

		router.post('/addfaculty', function(req, res, next) {

			var newFaculty = new Faculty({
				fullname:req.body.fullname,
				dept:req.body.dept,
				regnum:req.body.regnum,
				email: req.body.email,
				phone: req.body.phone,
				
			});
		
			newFaculty.save(function(err, result){
				if (err) {
					var data = {
						"status": "something went wrong",
						"data": err
					}
					res.json(data);
					res.status(500)
				} else {
					var data = {
						"status": "successfully added",
						"data": result
					}
					res.json(data);
					res.status(200)
				}
		
			});
		
			});
					
module.exports = router;