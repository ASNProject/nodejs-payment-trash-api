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

router.get("/", controller.load.getAll);
router.get("/:id", controller.load.getOne);
router.post("/", controller.load.post);
router.put("/:id", controller.load.put);
router.delete("/:id", controller.load.delete);

module.exports = router;
