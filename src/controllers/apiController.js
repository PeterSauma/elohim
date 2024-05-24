const db = require("../database/models");

module.exports = {

  checkout: async function (req, res) {

    let order = await db.Order.create(
      { ...req.body, userId: req.session.usuario.id },
      {
        include: db.Order.OrderItems,
      }
    );
    res.json({ ok: true, status: 200, order: order });
  },

  
   
};
