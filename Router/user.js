const express=require("express")
const router=express.Router()
const courses=require("../controller/user")


router.get('/course',courses.get_course_method)
router.get('/course/:id',courses.get_course_id)
router.put('/course/updata/:id',courses.course_update_data)
// router.delete("/course/delete/:id",courses.delete_data)
// router.post('/course/post/:id',courses.postdata)

module.exports=router