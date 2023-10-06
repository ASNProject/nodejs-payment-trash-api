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
    let debit;

    if (search) {
      debit = await model.debit.findAll({
        include: [
          {
            model: model.customer,
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
      debit = await model.debit.findAll({
        include: [
          {
            model: model.customer,
          },
        ],
      });
    }

    if (debit.length > 0) {
      res.status(200).json({
        message: "Get method debit",
        data: debit,
      });
    } else {
      res.status(200).json({
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
    let debit = await model.debit.findAll({
      include: [
        {
          model: model.customer,
        },
      ],
      where: {
        id_user: req.params.id_user,
      },
    });
    if (debit.length > 0) {
      res.status(200).json({
        message: "Get method debit",
        data: debit,
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
    let debit = await model.debit.create({
      id_user: req.body.id_user,
      debit: req.body.debit,
      status_withdrawal: req.body.status_withdrawal,
    });
    res.status(200).json({
      message: "Berhasil tambah data debit",
      data: debit,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let debit = await model.debit.update(
      {
        id_user: req.body.id_user,
        debit: req.body.debit,
        status_withdrawal: req.body.status_withdrawal,
      },
      {
        where: {
          id_user: req.params.id_user,
        },
      }
    );
    res.status(200).json({
      message: "Berhasil mengubah data debit",
      data: debit,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let debit = await model.debit.destroy({
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).json({
      message: "Berhasil hapus data debit",
      data: debit,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
