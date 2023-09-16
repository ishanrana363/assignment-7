const create = (req,res)=>{
    res.status(201).json({
        success : true,
        data : "blog create successfully"
    })
}

const read = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "blog read successfully"
    })
}

const update = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "blog update successfully"
    })
}

const deletes = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "blog deletes successfully"
    })
}

module.exports = {create,read,deletes,update}