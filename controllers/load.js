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
    let load;

    if (search) {
      load = await model.load.findAll({
        where: {
          [Op.or]: [
            {
              id: {
                [Op.like]: "%" + search + "%",
              },
            },
            {
              code: {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },
      });
    } else {
      load = await model.load.findAll();
    }

    if (load.length > 0) {
      res.status(200).json({
        message: "Get method customer",
        data: load,
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
    let load = await model.load.findAll({
      where: {
        code: req.params.code,
      },
    });
    if (load.length > 0) {
      res.status(200).json({
        message: "Get method customer",
        data: load,
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
    let load = await model.load.create({
      code: req.body.code,
      password: req.body.password,
      value: req.body.value,
    });
    res.status(200).json({
      message: "Berhasil tambah data load",
      data: load,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.put = async function (req, res) {
  try {
    let load = await model.load.update(
      {
        id: req.body.id,
        code: req.body.code,
        password: req.body.password,
        value: req.body.value,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      message: "Berhasil mengubah data load",
      data: load,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let load = await model.load.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Berhasil hapus data load",
      data: load,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = controller;
