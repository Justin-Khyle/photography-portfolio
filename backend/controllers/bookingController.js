const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createBooking = async (req, res, next) => {
  try {
    const { sessionType, date, location, notes } = req.body;
    if (!sessionType || !date || !location)
      return res.status(400).json({ error: 'sessionType, date, and location are required' });

    const booking = await prisma.booking.create({
      data: { userId: req.user.id, sessionType, date: new Date(date), location, notes },
    });
    res.status(201).json(booking);
  } catch (err) { next(err); }
};

const getMyBookings = async (req, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.id },
      orderBy: { date: 'asc' },
    });
    res.json(bookings);
  } catch (err) { next(err); }
};

const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: { user: { select: { name: true, email: true } } },
      orderBy: { date: 'asc' },
    });
    res.json(bookings);
  } catch (err) { next(err); }
};

const updateBookingStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const validStatuses = ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'];
    if (!validStatuses.includes(status))
      return res.status(400).json({ error: 'Invalid status' });

    const booking = await prisma.booking.update({ where: { id }, data: { status } });
    res.json(booking);
  } catch (err) { next(err); }
};

module.exports = { createBooking, getMyBookings, getAllBookings, updateBookingStatus };
