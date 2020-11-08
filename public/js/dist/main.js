(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("function mobileMenu() {\n  const menu = document.querySelector('.welcome-menu');\n  const burgerMenu = document.querySelector('.mobile-burger-menu__elements');\n  menu.addEventListener('click', closeBtn);\n\n  function closeBtn() {\n    this.style.transform = 'translateX(-15em)';\n  } // burgerMenu.addEventListener('click', function() {\n  // \tconsole.log('clicked');\n  // \tmenu.style.transform = 'translateX(0em)';\n  // \t// $(this).toggleClass('close')\n  // });\n  //! Close btn SideBar Nav Menu\n\n\n  document.querySelector('#mobile-nav-menu ul li a').addEventListener('click', function () {\n    document.querySelector('#mobile-nav-menu').removeClass('active'); // $menu.removeClass('close')\n  });\n}\n\nmobileMenu(); // function hamburgerAnimation () {\n//   const burgerMenu = document.querySelector('.mobile-burger-menu__elements')\n//   burgerMenu.addEventListener('click', function () {\n//     console.log('clicked')\n//     document.querySelector('#mobile-nav-menu').toggleClass('active')\n//     $(this).toggleClass('close')\n//   })\n//   //! Close btn SideBar Nav Menu\n//   document.querySelector('#mobile-nav-menu ul li a').addEventListener('click', function () {\n//     document.querySelector('#mobile-nav-menu').removeClass('active')\n//     // $menu.removeClass('close')\n//   })\n// }\n// hamburgerAnimation()\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});