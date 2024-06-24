"use strict";
exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



const Roles = ({ agenda , setAgenda  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleTakeRole = async (roleId)=>{
        try {
            const response = await fetch(`http://localhost:8081/api/currentMeeting/reserveRole/${roleId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                credentials: "include"
            });
            if (response.ok) {
                console.log(`Role ${roleId} reserved successfully`);
                // Optionally, refresh the agenda to show updated roles
                const updatedAgenda = await response.json();
                setAgenda(updatedAgenda);
            } else if (response.status == 401) {
                router.push("/login");
            } else {
                console.error(`Failed to reserve role ${roleId}`);
            }
        } catch (error) {
            console.error(`Failed to reserve role ${roleId}:`, error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().agendaGrid),
        children: agenda?.roles.map((role)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().roleItem),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().roleName),
                        children: role.roleName
                    }),
                    role.userName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().userName)} ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().assignedRole)}`,
                        children: role.userName
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().userName)} ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().unassignedRole)}`,
                        children: "Unassigned"
                    }),
                    !role.userName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
                        onClick: ()=>{
                            handleTakeRole(role.roleId);
                        },
                        children: "Take Role"
                    })
                ]
            }, role.roleId))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Roles);


/***/ })

};
;