const router = require('express').Router();

const apiPeopleRouter = require('./api/people');

router.use('/people', apiPeopleRouter);

module.exports = router;