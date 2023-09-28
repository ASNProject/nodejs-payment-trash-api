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

const express = require("express");
const router = express.Router();
const db = require("../config/database/database");
const controller = require("../controllers/index");

router.get("/", controller.debit.getAll);
router.get("/:id_user", controller.debit.getOne);
router.post("/", controller.debit.post);
router.put("/:id_user", controller.debit.put);
router.delete("/:id_user", controller.debit.delete);

module.exports = router;
