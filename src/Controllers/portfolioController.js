const create4 = (req,res)=>{
    res.status(201).json({
        success : true,
        data : "profile create successfully"
    })
}

const read4 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "profile read successfully"
    })
}

const update4 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "profile update successfully"
    })
}

const deletes4 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "profile deletes successfully"
    })
}

module.exports = {create4,read4,deletes4,update4}