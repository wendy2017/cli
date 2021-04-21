#!/usr/bin/env node

const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "please input your project name",
    default: "app",
    validate(val) {
      if (val.trim() === "") {
        return "project name can not be empty";
      }
      return true;
    },
    // 对用户输入的数据或选择的数据进行过滤
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "confirm",
    name: "useEs6",
    message: "是否启用ES6支持",
    default: true,
  },
  {
    type: "rawlist",
    name: "framework2",
    message: "请选择前端框架",
    choices: ["Vue", "React", "Angular"],
    default: 1,
  },
  {
    type: "checkbox",
    name: "tools",
    message: "开发工具",
    choices: [
      {
        name: "不使用",
        value: "",
        checked: true,
      },
      {
        name: "使用ESLint",
        value: "eslint",
      },
      {
        name: "使用mocha单元测试",
        value: "mocha",
      },
    ],
  },
]).then(res=> {
  console.log(res)
})
