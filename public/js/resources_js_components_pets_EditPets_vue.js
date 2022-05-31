"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pets_EditPets_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/EditPets.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/EditPets.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categories: [],
      labels: [],
      statuses: [],
      form: {
        category_id: "",
        name: "",
        photoUrl: "",
        status: "",
        tags: ""
      }
    };
  },
  created: function created() {
    this.getCategories();
    this.getTags();
    this.getStatus();
    this.getPet();
  },
  methods: {
    getPet: function getPet() {
      var _this = this;

      axios.get("/api/pets/" + this.$route.params.id).then(function (res) {
        _this.form = res.data.data;
      })["catch"](function (error) {
        console.log(console.error);
      });
    },
    getCategories: function getCategories() {
      var _this2 = this;

      axios.get("/api/pets/categories").then(function (res) {
        _this2.categories = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getTags: function getTags() {
      var _this3 = this;

      axios.get("/api/pets/tags").then(function (res) {
        _this3.labels = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getStatus: function getStatus() {
      var _this4 = this;

      axios.get("/api/pets/status").then(function (res) {
        _this4.statuses = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updatePet: function updatePet() {
      var _this5 = this;

      axios.put("/api/pets/" + this.$route.params.id, {
        category_id: this.form.category_id,
        name: this.form.name,
        photoUrl: this.form.photoUrl,
        tags: this.form.tags,
        status: this.form.status
      }).then(function (res) {
        _this5.$router.push({
          name: "indexPets"
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pets/EditPets.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pets/EditPets.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditPets_vue_vue_type_template_id_05daa43e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPets.vue?vue&type=template&id=05daa43e& */ "./resources/js/components/pets/EditPets.vue?vue&type=template&id=05daa43e&");
/* harmony import */ var _EditPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPets.vue?vue&type=script&lang=js& */ "./resources/js/components/pets/EditPets.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPets_vue_vue_type_template_id_05daa43e___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditPets_vue_vue_type_template_id_05daa43e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pets/EditPets.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pets/EditPets.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pets/EditPets.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/EditPets.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pets/EditPets.vue?vue&type=template&id=05daa43e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pets/EditPets.vue?vue&type=template&id=05daa43e& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPets_vue_vue_type_template_id_05daa43e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPets_vue_vue_type_template_id_05daa43e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPets_vue_vue_type_template_id_05daa43e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPets.vue?vue&type=template&id=05daa43e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/EditPets.vue?vue&type=template&id=05daa43e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/EditPets.vue?vue&type=template&id=05daa43e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/EditPets.vue?vue&type=template&id=05daa43e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center mt-4" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _vm._v(
                  "\n                        Update Pet\n                        "
                ),
                _c(
                  "router-link",
                  {
                    staticClass: "float-right",
                    attrs: { to: { name: "indexPets" } },
                  },
                  [_vm._v("go Home")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.updatePet.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "category" },
                      },
                      [_vm._v("Category")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.category_id,
                              expression: "form.category_id",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "category",
                            "aria-label": "Default select example",
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "category_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.categories, function (category) {
                          return _c(
                            "option",
                            {
                              key: category.id,
                              domProps: { value: category.id },
                            },
                            [_vm._v(_vm._s(category.name))]
                          )
                        }),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "name" },
                      },
                      [_vm._v("Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name",
                          },
                        ],
                        staticClass: "form-control ",
                        attrs: {
                          id: "name",
                          name: "name",
                          type: "text",
                          required: "",
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "photo" },
                      },
                      [_vm._v("Photo Url")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.photoUrl,
                            expression: "form.photoUrl",
                          },
                        ],
                        staticClass: "form-control ",
                        attrs: {
                          id: "photo",
                          name: "photo",
                          type: "text",
                          required: "",
                        },
                        domProps: { value: _vm.form.photoUrl },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "photoUrl", $event.target.value)
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "tags" },
                      },
                      [_vm._v("Tags")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.tags,
                              expression: "form.tags",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "tags",
                            "aria-label": "Default select example",
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "tags",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.labels, function (tag) {
                          return _c(
                            "option",
                            { key: tag.id, domProps: { value: tag.name } },
                            [_vm._v(_vm._s(tag.name))]
                          )
                        }),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "status" },
                      },
                      [_vm._v("Status")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.status,
                              expression: "form.status",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "status",
                            "aria-label": "Default select example",
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.statuses, function (status) {
                          return _c(
                            "option",
                            {
                              key: status.id,
                              domProps: { value: status.name },
                            },
                            [_vm._v(_vm._s(status.name))]
                          )
                        }),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0 mt-4" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-success", attrs: { type: "submit" } },
          [
            _vm._v(
              "\n                                        Update\n                                    "
            ),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);