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
const Customer = require("./customer");
const TypeWaste = require("./type_waste");

var credit = db.define(
  "credit",
  {
    id_user: Sequelize.STRING,
    id_type: Sequelize.INTEGER,
    weight: Sequelize.DOUBLE,
    credit: Sequelize.DOUBLE,
    date_credit: Sequelize.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

credit.hasOne(Customer, { foreignKey: "id_user" });
credit.belongsTo(Customer, { foreignKey: "id_user" });
credit.hasOne(TypeWaste, { foreignKey: "id_type" });
credit.belongsTo(TypeWaste, { foreignKey: "id_type" });

// customer.removeAttribute("id");
// customer.removeAttribute("id_status");
module.exports = credit;
