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
const Sequelize = require("sequelize");
const db = require("../config/database/database");
const Status = require("./status");

var customer = db.define(
  "customer",
  {
    id_user: { type: Sequelize.STRING, primaryKey: true },
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    address: Sequelize.STRING,
    id_number: Sequelize.STRING,
    registration: Sequelize.DATE,
    id_status: Sequelize.INTEGER,
    id_load: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

customer.hasOne(Status, { foreignKey: "id_status" });
customer.belongsTo(Status, { foreignKey: "id_status" });

// customer.removeAttribute("id");
// customer.removeAttribute("id_status");
module.exports = customer;
