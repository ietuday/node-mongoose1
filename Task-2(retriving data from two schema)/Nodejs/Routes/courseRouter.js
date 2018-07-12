var express = require('express');

var routes = function(Course){

    var courseRouter = express.Router();

        courseRouter.route('/Course')

            .post(function(req, res){
                var course = new Course(req.body);
                course.save();
                res.status(201).send(course);

            })
            .get(function(req,res){

                var query = {};

                if(req.query.name)
                {
                    query.name = req.query.name;
                }
                Course.find(query, function(err,courses){
                    if(err)
                        res.status(500).send(err);
                    else
                        res.json(courses);
                });
            });

            courseRouter.route('/Course/:courseId')

            .get(function(req,res){
                Course.findById(req.params.courseId, function(err,course){
                    if(err)
                        res.status(500).send(err);
                    else
                        res.json(course);
                });
            });

        return courseRouter;
    };
    module.exports = routes;
