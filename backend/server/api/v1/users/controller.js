const { info } = require('winston');
const { Model, fields } = require('./model');
const { signToken } = require('../auth');
const { signin } = require('../integrator/controller');

exports.signup = async (req, res, next) => {
  const { body = {} } = req;
  const document = new Model(body);

  try {
    const doc = await document.save();
    const { _id } = doc;
    console.log(_id);
    const token = signToken({ _id });
    res.status(201);
    res.json({
      sucess: true,
      data: doc,
      meta: {
        token,
      },
    });
  } catch (error) {
    next(new Error(error));
  }
};

exports.signin = async (req, res, next) => {
  const { body = {} } = req;
  const { cc = '', password = '' } = body;

  try {
    const user = await Model.findOne({ cedula: cc }).exec();
    if (!user) {
      const message = 'CC is not in the whiteList';
      return next({
        success: false,
        message,
        statusCode: 401,
        level: 'info',
      });
    }
    const response = await signin(cc, password);
    console.log(response.statusCode);
    if (response.statusCode === 200) {
      const data = JSON.parse(response.body);
      const smartToken = data.auth_token;
      const token = signToken({ smartToken, id: user.id });
      return res.json({
        success: true,
        meta: {
          token,
        },
      });
    }
    return res.json({
      success: false,
    });
  } catch (error) {
    return next(new Error(error));
  }
};
