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
    let credit;

    if (search) {
      credit = await model.credit.findAll({
        include: [
          {
            model: model.customer,
          },
          {
            model: model.type_waste,
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
      credit = await model.credit.findAll({
        include: [
          {
            model: model.customer,
          },
          {
            model: model.type_waste,
          },
        ],
      });
    }

    if (credit.length > 0) {
      res.status(200).json({
        message: "Get method credit",
        data: credit,
      });
    } else {
      res.status.status(200).json({
        message: "Tidak ada credit",
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
    let credit = await model.credit.findAll({
      include: [
        {
          model: model.customer,
        },
        {
          model: model.type_waste,
        },
      ],
      where: {
        id_user: req.params.id_user,
      },
    });
    if (credit.length > 0) {
      res.status(200).json({
        message: "Get method credit",
        data: credit,
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

controller.post = async function (req, res) {
  try {
    let credit = await model.credit.create({
      id_user: req.body.id_user,
      id_type: req.body.id_type,
      weight: req.body.weight,
      credit: req.body.credit,
    });
    res.status(200).json({
      message: "Berhasil tambah data credit",
      data: credit,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let credit = await model.credit.update(
      {
        id_user: req.body.id_user,
        id_type: req.body.id_type,
        weight: req.body.weight,
        credit: req.body.credit,
      },
      {
        where: {
          id_user: req.params.id_user,
        },
      }
    );
    res.status(200).json({
      message: "Berhasil mengubah data credit",
      data: credit,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let credit = await model.credit.destroy({
      where: {
        id_user: req.params.id_user,
      },
    });
    res.status(200).json({
      message: "Berhasil hapus data credit",
      data: credit,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
