const router = require('express').Router();
const {addJob,fetchAllJobs,fetchAJob,applyToJob} =require('../controllers/JobController');
const fetchuser = require('./middleware/FetchUser');


router.get('/fetchall',fetchuser,fetchAllJobs)
router.get('/fetchJob/:id',fetchuser,fetchAJob)
router.get('/apply/:id',fetchuser,applyToJob)
router.post("/addjob", fetchuser,addJob ); 

// router.get("/fetchJob", fetchuser, temp); //example of using middleware
// router.post('/fetchUser',fetchUser)

module.exports = router;