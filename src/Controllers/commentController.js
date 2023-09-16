const create2 = (req,res)=>{
    res.status(201).json({
        success : true,
        data : "comment create successfully"
    })
}

const read2 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "comment read successfully"
    })
}

const update2 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "comment update successfully"
    })
}

const deletes2 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "comment deletes successfully"
    })
}

module.exports = {create2,read2,deletes2,update2}