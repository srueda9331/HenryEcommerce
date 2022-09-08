const newsletterRepositories = require("../repositories/newsletter.repositories");
const bcrypt = require("bcrypt");
const { transporter } = require("../config/emailTransporter");

async function get(req, res, next) {
  try {
    const all = await newsletterRepositories.get();

    if (!all || !all.length) {
      return res.status(404).json({
        error: "Error al enviar novedades, no hay usuarios suscriptos!",
      });
    }

    return res.status(200).json(all);
  } catch (error) {
    next(error);
  }
}

/* las cuentas que crea el admin */
async function create(req, res, next) {
  try {
    const data = req.body;

    if (!req.body.email) {
      return res.status(400).json({ error: "El email no puede estar vacio!" });
    }

    const find = await newsletterRepositories.getByEmail(data.email);

    if (find) {
      return res.status(400).json({ error: "El email ya está suscripto!" });
    }

    const add = await newsletterRepositories.create(data);

    return res.status(201).json(add);
  } catch (error) {
    next(error);
  }
}

/* registro */
async function sendEmails(req, res, next) {
  try {
    const { title, description } = req.body;

    if (!description) {
      return res
        .status(400)
        .json({ error: "La descripción no puede estar vacia!" });
    }

    const all = await newsletterRepositories.get();

    if (!all || !all.length) {
      return res.status(404).json({
        error: "No se pudo enviar novedades, no hay usuarios suscriptos!",
      });
    }

    const emails = all.map((e) => e.email);

    await transporter.sendMail({
      from: '"Newsletter" <henryecommerceg13@gmail.com',
      to: emails,
      subject: "Newsletter",
      html: `
        <html lang="en-US">
        <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <title>Henry Ecommerce</title>
          <meta name="description" content="Henry Ecommerce" />
          <style type="text/css">
            a:hover {
              text-decoration: underline !important;
            }
          </style>
        </head>
      
        <body
          marginheight="0"
          topmargin="0"
          marginwidth="0"
          style="margin: 0px; background-color: #f2f3f8"
          leftmargin="0"
        >
          <!-- 100% body table -->
          <table
            cellspacing="0"
            border="0"
            cellpadding="0"
            width="100%"
            bgcolor="#f2f3f8"
            style="
              @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
              font-family: 'Open Sans', sans-serif;
            "
          >
            <tr>
              <td>
                <table
                  style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
                  width="100%"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td style="height: 80px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="height: 20px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        width="95%"
                        border="0"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          max-width: 670px;
                          background: #fff;
                          border-radius: 3px;
                          text-align: center;
                          -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                          -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                          box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        "
                      >
                        <tr>
                          <td style="height: 40px">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style="text-align: center">
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 35px">
                            <h1
                              style="
                                color: #1e1e2d;
                                font-weight: 500;
                                margin: 0;
                                font-size: 32px;
                                font-family: 'Rubik', sans-serif;
                              "
                            >
                              ${title ? title : "Tenemos novedades para vos!"}
                            </h1>
                            <p
                              style="
                                font-size: 15px;
                                color: #455056;
                                margin: 8px 0 0;
                                line-height: 24px;
                              "
                            >
                                <strong>${description}</strong>                              
                            </p>
      
                            <a
                              href="${process.env.HOST}/"
                              style="
                                background: #ffbe33;
                                text-decoration: none !important;
                                display: inline-block;
                                font-weight: 500;
                                margin-top: 24px;
                                color: #fff;
                                text-transform: uppercase;
                                font-size: 14px;
                                padding: 10px 24px;
                                display: inline-block;
                                border-radius: 50px;
                              "
                              >${"VER MÁS"}</a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td style="height: 40px">&nbsp;</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 20px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="text-align: center">
                      <p
                        style="
                          font-size: 14px;
                          color: rgba(69, 80, 86, 0.7411764705882353);
                          line-height: 18px;
                          margin: 0 0 0;
                        "
                      >
                        &copy; <strong>Henry Ecommerce</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 80px">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!--/100% body table-->
        </body>
      </html>`,
    });
    return res.status(201).json(emails);
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await newsletterRepositories.destroy(id);

    if (deleted)
      return res
        .status(200)
        .json({ message: "Usuario suscripto desactivado correctamente!" });

    return res.status(404).json({
      error: `No hay ningún usuario suscripto para ser desactivado con id ${id}!`,
    });
  } catch (error) {
    next(error);
  }
}

async function restore(req, res, next) {
  try {
    const { id } = req.params;
    const restore = await newsletterRepositories.restore(id);

    if (restore)
      return res
        .status(200)
        .json({ message: "Usuario suscripto activado correctamente!" });

    return res.status(404).json({
      error: `No hay ningún usuario suscripto para ser activado con id ${id}!`,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  get,
  sendEmails,
  create,
  destroy,
  restore,
};
