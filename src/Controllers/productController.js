const create5 = (req,res)=>{
    res.status(201).json({
        success : true,
        data : "product create successfully"
    })
}

const read5 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "profile read successfully"
    })
}

const update5 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "profile update successfully"
    })
}

const deletes5 = (req,res)=>{
    res.status(200).json({
        success : true,
        data : "profile deletes successfully"
    })
}

module.exports = {create5,read5,deletes5,update5}