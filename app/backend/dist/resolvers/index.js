"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addSubject_1 = require("./mutations/addSubject");
const login_1 = require("./mutations/login");
const register_1 = require("./mutations/register");
const getSubjects_1 = require("./queries/getSubjects");
const getUser_1 = require("./queries/getUser");
const graphql_1 = require("graphql");
const dayjs_1 = __importDefault(require("dayjs"));
const formatDate_1 = require("../helpers/formatDate");
const createSemester_1 = require("./mutations/createSemester");
const getSemester_1 = require("./queries/getSemester");
const addTask_1 = require("./mutations/addTask");
const getTasks_1 = require("./queries/getTasks");
const getSubject_1 = require("./queries/getSubject");
const deleteTask_1 = require("./mutations/deleteTask");
const markCompleted_1 = require("./mutations/markCompleted");
const getTask_1 = require("./queries/getTask");
let Resolvers = {
    Query: {
        getSubjects: getSubjects_1.getSubjects,
        getUser: getUser_1.getUser,
        getSemester: getSemester_1.getSemester,
        getTasks: getTasks_1.getTasks,
        getSubject: getSubject_1.getSubject,
        getTask: getTask_1.getTask,
    },
    Mutation: {
        register: register_1.register,
        login: login_1.login,
        addSubject: addSubject_1.addSubject,
        createSemester: createSemester_1.createSemester,
        addTask: addTask_1.addTask,
        deleteTask: deleteTask_1.deleteTask,
        markTask: markCompleted_1.markTask,
    },
    Date: new graphql_1.GraphQLScalarType({
        name: 'Date',
        description: 'This is a custom type for dates',
        parseValue(value) {
            return dayjs_1.default(formatDate_1.formatDate(value));
        },
        serialize(value) {
            return dayjs_1.default(value).format('DD/MM/YYYY');
        },
    }),
};
exports.default = Resolvers;
//# sourceMappingURL=index.js.map