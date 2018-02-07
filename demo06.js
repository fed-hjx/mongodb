var db = connect('company');

// 使用$set修改器 修改数据
// db.workmate.update({ "name": "MinJie" }, { "$set": { sex: 2, age: 21 } })

// 使用$set修改器 修改嵌套数据
// db.workmate.update({ "name": "MinJie" }, { "$set": { "skill.skillThree": 'word' } })


// 使用$unset修改器 删除数据
// db.workmate.update({ "name": "MinJie" }, { $unset: { "age": '' } })


// $inc对数字进行计算

// 它是对value值的修改，但是修改的必须是数字，字符串是不起效果的。我们现在要对MiJie的年龄减去2岁，就可以直接用$inc来操作。

// db.workmate.update({ "name": "MinJie" }, { $inc: { "age": -2 } })

// 使用multi选项 批量加字段
// db.workmate.update({}, { $set: { interset: [] } }, { multi: true })

// upsert选项
// upsert是在找不到值的情况下，直接插入这条数据
db.workmate.update({ name: 'xiaoWang' }, { $set: { age: 20 } }, { upsert: true })