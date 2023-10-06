// Copyright 2023 ariefsetyonugroho
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const model = require("../model/index");
const controller = {};
const { Op } = require("sequelize");

controller.getAll = async function (req, res) {
  const search = req.query.keyword;
  try {
    let customers;

    if (search) {
      customers = await model.customer.findAll({
        include: [
          {
            model: model.status,
          },
        ],
        where: {
          [Op.or]: [
            {
              id_user: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              name: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
      });
    } else {
      customers = await model.customer.findAll({
        include: [
          {
            model: model.status,
          },
        ],
      });
    }

    if (customers.length > 0) {
      res.status(200).json({
        message: "Get method customer",
        data: customers,
      });
    } else {
      res.status.status(200).json({
        message: "Tidak ada data",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.getOne = async function (req, res) {
  try {
    let customer = await model.customer.findAll({
      where: {
        id_user: req.params.id_user,
      },
    });
    if (customer.length > 0) {
      res.status(200).json({
        message: "Get method customer",
        data: customer,
      });
    } else {
      res.status.status(200).json({
        message: "Tidak ada data",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.post = async function (req, res) {
  try {
    let customer = await model.customer.create({
      id_user: req.body.id_user,
      name: req.body.name,
      password: req.body.password,
      address: req.body.address,
      id_number: req.body.id_number,
      id_status: req.body.id_status,
      id_load: req.body.id_load,
    });
    res.status(200).json({
      message: "Berhasil tambah data customer",
      data: customer,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let customer = await model.customer.update(
      {
        id_user: req.body.id_user,
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
        id_number: req.body.id_number,
        id_load: req.body.id_load,
      },
      {
        where: {
          id_user: req.params.id_user,
        },
      }
    );
    res.status(200).json({
      message: "Berhasil mengubah data customer",
      data: customer,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let customer = await model.customer.destroy({
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).json({
      message: "Berhasil hapus data customer",
      data: customer,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
