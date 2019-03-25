exports.id = "main";
exports.modules = {

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
var resolvers_1 = __importDefault(__webpack_require__(/*! ./resolvers */ "./src/resolvers.ts"));
var schemas_1 = __importDefault(__webpack_require__(/*! ./schemas */ "./src/schemas.ts"));
var environment_1 = __webpack_require__(/*! ./environment */ "./src/environment.ts");
var permissions_1 = __webpack_require__(/*! ./data/permissions */ "./src/data/permissions.ts");
var server = new apollo_server_1.ApolloServer({
    resolvers: resolvers_1.default,
    typeDefs: schemas_1.default,
    introspection: environment_1.environment.apollo.introspection,
    playground: environment_1.environment.apollo.playground,
    context: function (_a) {
        var req = _a.req, res = _a.res;
        return ({
            token: req.headers['access_token'],
            level: function () {
                var user = permissions_1.userPermissions.find(function (user) { return user.token == req.headers['access_token']; });
                return user ? user.level : 0;
            }
        });
    }
});
server.listen(environment_1.environment.port)
    .then(function (_a) {
    var url = _a.url;
    return console.log("Server ready at " + url + ". ");
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return console.log('Module disposed.'); });
}


/***/ }),

/***/ "./src/resolvers.ts":
/*!**************************!*\
  !*** ./src/resolvers.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(/*! ./data/data */ "./src/data/data.ts");
var permissions_1 = __webpack_require__(/*! ./data/permissions */ "./src/data/permissions.ts");
exports.default = {
    Query: {
        agent: function (obj, args, context) {
            if (context.level >= 2) {
                return data_1.agents.find(function (agent) { return agent.id == args.id; });
            }
            return null;
        },
        agents: function (obj, args, context) {
            if (context.level >= 2) {
                return data_1.agents;
            }
            return null;
        }
    },
    Agent: {
        id: function (obj, args, context) {
            if (context.level >= permissions_1.fieldPermissions.id) {
                return obj.id;
            }
            return null;
        },
        firstName: function (obj, args, context) {
            if (context.level >= permissions_1.fieldPermissions.firstName) {
                return obj.firstName;
            }
            return null;
        },
        lastName: function (obj, args, context) {
            if (context.level >= permissions_1.fieldPermissions.lastName) {
                return obj.lastName;
            }
            return null;
        },
        age: function (obj, args, context) {
            if (context.level >= permissions_1.fieldPermissions.age) {
                return obj.age;
            }
            return null;
        },
        level: function (obj, args, context) {
            if (context.level >= permissions_1.fieldPermissions.level) {
                return obj.level;
            }
            return null;
        },
        type: function (obj, args, context) {
            if (context.level >= permissions_1.fieldPermissions.type) {
                return obj.type;
            }
            return null;
        },
        secretCode: function (obj, args, context) {
            if (context.level >= permissions_1.fieldPermissions.secretCode) {
                return obj.secretCode;
            }
            return null;
        }
    }
};


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLG9DQUFlO0FBQzdDLGtDQUFrQyxtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZELGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLDJDQUFlO0FBQzNDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxrREFBa0QsRUFBRTtBQUNuSTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELElBQUksSUFBVTtBQUNkO0FBQ0Esb0NBQW9DLHdDQUF3QyxFQUFFO0FBQzlFOzs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLHVDQUFhO0FBQ2xDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCw0QkFBNEIsRUFBRTtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi4wM2MxMjQ1MjI0ZjY0NDc5ZTIzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG52YXIgcmVzb2x2ZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVzb2x2ZXJzXCIpKTtcbnZhciBzY2hlbWFzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2NoZW1hc1wiKSk7XG52YXIgZW52aXJvbm1lbnRfMSA9IHJlcXVpcmUoXCIuL2Vudmlyb25tZW50XCIpO1xudmFyIHBlcm1pc3Npb25zXzEgPSByZXF1aXJlKFwiLi9kYXRhL3Blcm1pc3Npb25zXCIpO1xudmFyIHNlcnZlciA9IG5ldyBhcG9sbG9fc2VydmVyXzEuQXBvbGxvU2VydmVyKHtcbiAgICByZXNvbHZlcnM6IHJlc29sdmVyc18xLmRlZmF1bHQsXG4gICAgdHlwZURlZnM6IHNjaGVtYXNfMS5kZWZhdWx0LFxuICAgIGludHJvc3BlY3Rpb246IGVudmlyb25tZW50XzEuZW52aXJvbm1lbnQuYXBvbGxvLmludHJvc3BlY3Rpb24sXG4gICAgcGxheWdyb3VuZDogZW52aXJvbm1lbnRfMS5lbnZpcm9ubWVudC5hcG9sbG8ucGxheWdyb3VuZCxcbiAgICBjb250ZXh0OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHJlcSA9IF9hLnJlcSwgcmVzID0gX2EucmVzO1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHRva2VuOiByZXEuaGVhZGVyc1snYWNjZXNzX3Rva2VuJ10sXG4gICAgICAgICAgICBsZXZlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gcGVybWlzc2lvbnNfMS51c2VyUGVybWlzc2lvbnMuZmluZChmdW5jdGlvbiAodXNlcikgeyByZXR1cm4gdXNlci50b2tlbiA9PSByZXEuaGVhZGVyc1snYWNjZXNzX3Rva2VuJ107IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyID8gdXNlci5sZXZlbCA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuc2VydmVyLmxpc3RlbihlbnZpcm9ubWVudF8xLmVudmlyb25tZW50LnBvcnQpXG4gICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHVybCA9IF9hLnVybDtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXCJTZXJ2ZXIgcmVhZHkgYXQgXCIgKyB1cmwgKyBcIi4gXCIpO1xufSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKCdNb2R1bGUgZGlzcG9zZWQuJyk7IH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGF0YV8xID0gcmVxdWlyZShcIi4vZGF0YS9kYXRhXCIpO1xudmFyIHBlcm1pc3Npb25zXzEgPSByZXF1aXJlKFwiLi9kYXRhL3Blcm1pc3Npb25zXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIGFnZW50OiBmdW5jdGlvbiAob2JqLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5sZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFfMS5hZ2VudHMuZmluZChmdW5jdGlvbiAoYWdlbnQpIHsgcmV0dXJuIGFnZW50LmlkID09IGFyZ3MuaWQ7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGFnZW50czogZnVuY3Rpb24gKG9iaiwgYXJncywgY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQubGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXzEuYWdlbnRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIEFnZW50OiB7XG4gICAgICAgIGlkOiBmdW5jdGlvbiAob2JqLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5sZXZlbCA+PSBwZXJtaXNzaW9uc18xLmZpZWxkUGVybWlzc2lvbnMuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0TmFtZTogZnVuY3Rpb24gKG9iaiwgYXJncywgY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQubGV2ZWwgPj0gcGVybWlzc2lvbnNfMS5maWVsZFBlcm1pc3Npb25zLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmouZmlyc3ROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3ROYW1lOiBmdW5jdGlvbiAob2JqLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5sZXZlbCA+PSBwZXJtaXNzaW9uc18xLmZpZWxkUGVybWlzc2lvbnMubGFzdE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmxhc3ROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGFnZTogZnVuY3Rpb24gKG9iaiwgYXJncywgY29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQubGV2ZWwgPj0gcGVybWlzc2lvbnNfMS5maWVsZFBlcm1pc3Npb25zLmFnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmouYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGxldmVsOiBmdW5jdGlvbiAob2JqLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5sZXZlbCA+PSBwZXJtaXNzaW9uc18xLmZpZWxkUGVybWlzc2lvbnMubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmxldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IGZ1bmN0aW9uIChvYmosIGFyZ3MsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmxldmVsID49IHBlcm1pc3Npb25zXzEuZmllbGRQZXJtaXNzaW9ucy50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNlY3JldENvZGU6IGZ1bmN0aW9uIChvYmosIGFyZ3MsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmxldmVsID49IHBlcm1pc3Npb25zXzEuZmllbGRQZXJtaXNzaW9ucy5zZWNyZXRDb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5zZWNyZXRDb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==