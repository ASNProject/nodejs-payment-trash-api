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

const customer = require("./customer");
const status = require("./status");
const type_waste = require("./type_waste");
const load = require("./load");
const debit = require("./debit");
const credit = require("./credit");
const model = {};

model.customer = customer;
model.status = status;
model.type_waste = type_waste;
model.load = load;
model.debit = debit;
model.credit = credit;
module.exports = model;
