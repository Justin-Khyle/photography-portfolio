const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query;
    const items = await prisma.galleryItem.findMany({
      where: category ? { category } : undefined,
      orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
