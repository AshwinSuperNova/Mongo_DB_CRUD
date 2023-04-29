const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find()
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        console.log('Error in retrieving employees :' + JSON.stringify(err, undefined, 2));
      });
  });
  

  router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);
  
    Employee.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2));
        return res.status(500).send('Error in retrieving employee');
      }
      if (!doc) {
        return res.status(404).send('Employee not found');
      }
      res.send(doc);
    });
  });
  

router.post('/', (req, res) => {
    var emp = new Employee({
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    });
    emp.save()
      .then(doc => {
        res.send(doc);
      })
      .catch(err => {
        console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2));
      });
  });
  

  router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);
  
    var emp = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true })
      .then(doc => {
        res.send(doc);
      })
      .catch(err => {
        console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2));
      });
  });
  

  router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);
  
    Employee.findByIdAndRemove(req.params.id)
      .then(doc => {
        if (!doc) {
          return res.status(404).send();
        }
        res.send(doc);
      })
      .catch(err => {
        console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2));
      });
  });
  

module.exports = router;