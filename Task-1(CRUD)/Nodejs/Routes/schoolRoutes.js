var express = require('express');

var routes = function(School){

    var schoolRouter = express.Router();

    schoolRouter.route('/Schools')

        .post(function(req, res){
            var school = new School(req.body);
            school.save();
            res.status(201).send(school);

        })
        .get(function(req,res){

            var query = {};
            console.log(req.query);
            if(req.query.name)
            {
                console.log(req.query);
                query.name = req.query.name;
                console.log(req.query);
            }
            School.find(query, function(err,schools){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(schools);
            });
        });

    schoolRouter.route('/Schools/:schoolId')

        .get(function(req,res){
            School.findById(req.params.schoolId, function(err,school){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(school);
            });
        })
        .put(function(req,res){
            School.findById(req.params.schoolId, function(err,school){
                if(err)
                    res.status(500).send(err);
                else
                    school.longName = req.body.longName;
                    school.shortName = req.body.shortName;
                    school.save();
                    res.json(school);
            });
        })
        .delete(function(req,res){
            School.findByIdAndRemove(req.params.schoolId, function(err,school){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return schoolRouter;
};

module.exports = routes;
