const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware.js');
const { getFeed, getFeedById, createFeed, updateFeed, deleteFeed } = require('../controllers/feedController');

const router = express.Router();

router.get('/getAllFeed', authMiddleware, getFeed);
router.get('/:id', authMiddleware, getFeedById);
router.post('/createFeed', authMiddleware, createFeed);
router.put('/:id', authMiddleware, updateFeed);
router.delete('/:id', authMiddleware, deleteFeed);

module.exports = router;
