"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pets_IndexPets_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/IndexPets.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/IndexPets.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'indexPets',
  data: function data() {
    return {
      pets: [],
      statuses: [],
      labels: [],
      search: null,
      selectedStatus: null,
      selectedTags: null
    };
  },
  watch: {
    search: function search() {
      this.getPets();
    },
    selectedStatus: function selectedStatus() {
      this.getPets();
    },
    selectedTags: function selectedTags() {
      this.getPets();
    }
  },
  mounted: function mounted() {
    this.getPets();
    this.getStatus();
    this.getTags();
  },
  methods: {
    getPets: function getPets() {
      var _this = this;

      axios.get("/api/pets", {
        params: {
          search: this.search,
          status: this.selectedStatus,
          tags: this.selectedTags
        }
      }).then(function (res) {
        _this.pets = res.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getStatus: function getStatus() {
      var _this2 = this;

      axios.get("/api/pets/status").then(function (res) {
        _this2.statuses = res.data;
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
    deletePet: function deletePet(id) {
      var _this4 = this;

      if (window.confirm("Are you sure you want to remove the pet?")) {
        axios["delete"]("api/pets/" + id).then(function (res) {
          _this4.getPets();
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pets/IndexPets.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pets/IndexPets.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPets_vue_vue_type_template_id_14ccff76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPets.vue?vue&type=template&id=14ccff76& */ "./resources/js/components/pets/IndexPets.vue?vue&type=template&id=14ccff76&");
/* harmony import */ var _IndexPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPets.vue?vue&type=script&lang=js& */ "./resources/js/components/pets/IndexPets.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexPets_vue_vue_type_template_id_14ccff76___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexPets_vue_vue_type_template_id_14ccff76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pets/IndexPets.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pets/IndexPets.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pets/IndexPets.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/IndexPets.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pets/IndexPets.vue?vue&type=template&id=14ccff76&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pets/IndexPets.vue?vue&type=template&id=14ccff76& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPets_vue_vue_type_template_id_14ccff76___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPets_vue_vue_type_template_id_14ccff76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPets_vue_vue_type_template_id_14ccff76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexPets.vue?vue&type=template&id=14ccff76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/IndexPets.vue?vue&type=template&id=14ccff76&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/IndexPets.vue?vue&type=template&id=14ccff76&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pets/IndexPets.vue?vue&type=template&id=14ccff76& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("form", [
            _c("div", { staticClass: "form-row align-items-center" }, [
              _c("div", { staticClass: "col-md-4 text-center" }, [
                _c(
                  "label",
                  { staticClass: "col-form-label", attrs: { for: "search" } },
                  [_vm._v("Search Pets by Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search",
                    },
                  ],
                  staticClass: "form-control mb-2",
                  attrs: {
                    type: "search",
                    placeholder: "Write the Pets name to search",
                  },
                  domProps: { value: _vm.search },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 text-center" }, [
                _c(
                  "label",
                  { staticClass: "col-form-label", attrs: { for: "status" } },
                  [_vm._v("Filter Pets by Status")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectedStatus,
                        expression: "selectedStatus",
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
                        _vm.selectedStatus = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                    },
                  },
                  _vm._l(_vm.statuses, function (status) {
                    return _c(
                      "option",
                      { key: status.id, domProps: { value: status.name } },
                      [_vm._v(_vm._s(status.name))]
                    )
                  }),
                  0
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 text-center" }, [
                _c(
                  "label",
                  { staticClass: "col-form-label", attrs: { for: "tags" } },
                  [_vm._v("Filter Pets by Tag")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectedTags,
                        expression: "selectedTags",
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
                        _vm.selectedTags = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                    },
                  },
                  _vm._l(_vm.labels, function (tags) {
                    return _c(
                      "option",
                      { key: tags.id, domProps: { value: tags.name } },
                      [_vm._v(_vm._s(tags.name))]
                    )
                  }),
                  0
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row justify-content-center mt-3" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-sm btn-success",
            attrs: { to: { name: "createPets" } },
          },
          [_vm._v("Create Pets")]
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row justify-content-center mt-3" },
      _vm._l(_vm.pets, function (pet) {
        return _c("div", { key: pet.id, staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass: "card text-center mt-3",
              staticStyle: { width: "18rem" },
            },
            [
              _c("img", {
                staticClass: "card-img-top",
                attrs: {
                  src: pet.photoUrl,
                  alt: "Card image cap",
                  height: "300px",
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(pet.name)),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(_vm._s(pet.status)),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-center",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "btn-group" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-sm btn-outline-warning",
                            attrs: {
                              to: { name: "editPets", params: { id: pet.id } },
                            },
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-outline-danger ",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.deletePet(pet.id)
                              },
                            },
                          },
                          [_vm._v("Delete")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(pet.tags)),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);