module.exports.customErr = (err, req, res, next)=>{
    return res.status(404).json({err:err})
    next()
}