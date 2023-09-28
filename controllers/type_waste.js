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
    let type_waste;

    if (search) {
      type_waste = await model.type_waste.findAll({
        where: {
          [Op.or]: [
            {
              id_type: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              type: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
      });
    } else {
      type_waste = await model.type_waste.findAll();
    }

    if (type_waste.length > 0) {
      res.status(200).json({
        message: "Get method type",
        data: type_waste,
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
    let type_waste = await model.type_waste.findAll({
      where: {
        id_type: req.params.id_type,
      },
    });
    if (type_waste.length > 0) {
      res.status(200).json({
        message: "Get method type",
        data: type_waste,
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
    let type_waste = await model.type_waste.create({
      id_type: req.body.id_type,
      type: req.body.type,
      price: req.body.price,
    });
    res.status(200).json({
      message: "Berhasil tambah data type",
      data: type_waste,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let type_waste = await model.type_waste.update(
      {
        id_type: req.body.id_type,
        type: req.body.type,
        price: req.body.price,
      },
      {
        where: {
          id_type: req.params.id_type,
        },
      }
    );
    res.status(200).json({
      message: "Berhasil mengubah data type",
      data: type_waste,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let type = await model.type_waste.destroy({
      where: {
        id_type: req.params.id_type,
      },
    });
    res.status(200).json({
      message: "Berhasil hapus data type",
      data: model.type_waste,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
