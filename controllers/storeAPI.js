const { model } = require('mongoose')
const product = require('../model/model')
const productJSON = require('../product.json')

//Query from mongo documentation selct sort...
module.exports.insertAllData = async(req, res)=>{
    const t = await product.create(productJSON)
    res.json(t)
}

module.exports.getAllData = async(req, res)=>{
    const result = await product.find(req.query)
    return res.status(200).json({Length: result.length, Data: result})
}

module.exports.getSpecificData = async(req, res)=>{
    const { company, featured } = req.query
    const result = await product.find({company: company, featured: featured})
    return res.status(200).json({Length: result.length, Data: result})
}

module.exports.getPatternMatchingData = async(req,res)=>{
    const {company} = req.query
    const result = await product.find({
        //$option : i for deactivating the case sentivity 
        company: {$regex: company, $options :'i'}
    })
    return res.status(200).json({Length: result.length, Data: result})
}

module.exports.getDataSorted = async(req,res)=>{
    //.sort({name})( a-z order)
    //.sort({-name})( z-a order)
    const result = await product.find({}).sort('-name')
    return res.status(200).json({Length: result.length, Data: result})
}

module.exports.getDataSortedReq = async(req,res)=>{
    var {sort} = req.query //send (name,price) or (-price. name) or any other combination
    // this.sort = sort.split(' ')
    // console.log(sort)
    const result = await product.find({}).sort(sort)
    return res.status(200).json({Length: result.length, Data: result})
}

module.exports.getSelectedData = async(req, res)=>{
    var  { field } = req.query

    const result =  await product.find({}).select(field)
    return res.status(200).json({Length: result.length, Data: result})
}


