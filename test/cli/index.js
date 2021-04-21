#!/usr/bin/env node
console.log("hello world wendy/cli");


const fs = require("fs");
const path = require("path");

const args = process.argv.splice(2)
const componentName = args[0]
let root ="./src/components"

let templ = fs.readFileSync(path.join(__dirname,"../template/index.vue"),'utf-8')
let content = templ.replace(/componentName/g,componentName)


fs.mkdirSync('./src/components',{recursive:true})
fs.writeFileSync('./src/components/index.vue',content)



