var express = require('express');

var routes = function(School){

var schoolRouter = express.Router();

    schoolRouter.route('/School')
    
        .post(function(req, res){
            var school = new School(req.body);
            school.save();
            res.status(201).send(school);
    
        })
        .get(function(req,res){
    
            var query = {};
    
            if(req.query.name)
            {
                query.name = req.query.name;
            }
            School.find(query, function(err,schools){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(schools);
            });
        });

         schoolRouter.route('/School/:schoolId')
    
        //var params = req.params;

        .get(function(req,res){
            School.findById({ _id: req.params.schoolId }).populate('S_course').exec(function (err, school){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(school);
            });
        });


    return schoolRouter;
};
module.exports = routes;