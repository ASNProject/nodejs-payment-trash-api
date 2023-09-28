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
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const customerRoutes = require("./routes/customer");
const typeWasteRoutes = require("./routes/type_waste");
const loadRoutes = require("./routes/load");
const debitRoutes = require("./routes/debit");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/customer", customerRoutes);
app.use("/type-waste", typeWasteRoutes);
app.use("/load", loadRoutes);
app.use("/debit", debitRoutes);

app.use((req, res, next) => {
  const error = new Error("API tidak ditemukan");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
