const create3 = (req,res)=>{
    res.status(201).json({
        success : true,
        data : "message create successfully"
    })
}

const read3 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "message read successfully"
    })
}

const update3 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "message update successfully"
    })
}

const deletes3 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "message deletes successfully"
    })
}

module.exports = {create3,read3,deletes3,update3}