const express = require('express');

const router = express.Router();

router.get('/getAllbus', (req, res) => {
  res.status(200).json({
    list: [
      ['1234', '123', '123'],
      ['12345', '123', '123'],
      ['123567', '123', '123'],
    ],
  });
});

module.exports = router;
