const express = require("express")
const { create, read, update,deletes } = require("../Controllers/blogController")
const {create2,read2,update2,deletes2} = require("../Controllers/commentController")
const { create3, read3, update3, deletes3 } = require("../Controllers/messageController")
const { create4, read4, update4, deletes4 } = require("../Controllers/portfolioController")
const router = express.Router()

router.post("/blog-user",create)
router.get("/blog-user",read)
router.put("/blog-user",update)
router.delete("/blog-user",deletes)

// comment controller 

router.post("/comment-user",create2)
router.get("/comment-user",read2)
router.put("/comment-user",update2)
router.delete("/comment-user",deletes2)


// message controller 

router.post("/message-user",create3)
router.get("/message-user",read3)
router.put("/message-user",update3)
router.delete("/message-user",deletes3)

// prortfillo controller


router.post("/protfilo-user",create4)
router.get("/protfilo-user",read4)
router.put("/protfilo-user",update4)
router.delete("/protfilo-user",deletes4)



// product controller


router.post("/product-user",create4)
router.get("/product-user",read4)
router.put("/product-user",update4)
router.delete("/product-user",deletes4)




module.exports = router