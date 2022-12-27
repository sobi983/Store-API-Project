module.exports.asyncWrapper = async(fn)=>{
    try {
        await fn()
    } catch (error) {
        console.log("Error occured while connecting to server or DB")
    }
}