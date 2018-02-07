// 数组修改器
var db = connect('company');

// $push追加数组 / 内嵌文档值
// db.workmate.update({ name: 'xiaoWang' }, { $push: { interest: 'draw' } })

// db.workmate.update({ name: 'MinJie' }, { $push: { "skill.skillFour": 'draw' } })

// $ne 没有则修改，有则不修改。
// db.workmate.update({ name: 'xiaoWang', "interest": { $ne: 'playGame' } }, { $push: { interest: 'Game' } })
// $addToSet 升级版的$ne
// db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: "readBook" } })

// $each 批量追加数据
// var newInterset = ["Sing", "Dance", "Code"];
// db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: { $each: newInterset } } })

// $pop 删除数组值 （1末端 -1开始端）
// db.workmate.update({ name: 'xiaoWang' }, { $pop: { interest: 1 } })

// 数组定位修改
db.workmate.update({ name: 'xiaoWang' }, { $set: { "interest.2": "Code" } })