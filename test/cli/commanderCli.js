#!/usr/bin/env node

const commander = require("commander")
const fs = require('fs');

commander.command('create')

commander
.version("v1.0.0",'-v, --version')
.option('-s, --setname [val]','设置名称','默认名称')
.option('-r, --recursive','remove recursively')
.option('-p, --path [path]','设置要显示的目录',__dirname)
.option('-l, --list','以列表形式显示')
.action((cmd)=> {
  console.log("setname===  "+cmd.setname)
  console.log('recursive=== '+cmd.recursive)
  try {
    const files = fs.readdirSync(cmd.path);
    if(cmd.list) {
      // 用户输入了-l，以列表的方式展示
      let output = files.map(item=>{
        // 文件的拓展信息，除了文件内容以外的信息
        let stat = fs.statSync(cmd.path + '/' + item);
        // 根据isDirectory()显示不同的文件类型
        let type = stat.isDirectory() ? '目录' : '文件';
        return `[${type}]   ${item}\r\n`;
      }).join('');
      console.log(output);
    }else {
      console.log(files);
    }
    
  } catch (error) {
    console.log(error);
  }
})
commander.parse(process.argv);