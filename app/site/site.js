
exports.index = (req, res) => {
  res.render('main');
};

exports.getHello = (req, res) => {
  let currentTime = new Date();

  res.render('hello', {
    whenRendered: currentTime.toString()
  });
};
