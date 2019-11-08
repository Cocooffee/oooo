const download = require("download-git-repo")
const child_process = require("child_process")

let type = process.argv[2] ? process.argv[2] : "vue"

download(`github:Cocooffee/${type}-dome`, type, function(err) {
    if (err) throw err

    process.chdir(type)

    child_process.exec("npm install")
})


