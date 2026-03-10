const express = require('express');
const router = express.Router();
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { createBooking, getMyBookings, getAllBookings, updateBookingStatus } = require('../controllers/bookingController');

router.post('/', requireAuth, createBooking);
router.get('/my', requireAuth, getMyBookings);
router.get('/', requireAuth, requireAdmin, getAllBookings);
router.patch('/:id/status', requireAuth, requireAdmin, updateBookingStatus);

module.exports = router;
