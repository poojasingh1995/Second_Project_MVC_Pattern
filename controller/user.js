const db = require("../Model/connection")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Pooja@123",
        database: "second_project_knex",
    },
});

get_course_method=(req,res)=>{
    knex.from('project_tables').select("*")
    .then((rows)=>{
        res.send(rows)
    })
}

get_course_id=(req,res)=>{
    knex.from('project_tables').select("*").where({"id":req.params.id})
    .then((rows)=>{
        res.send(rows)
    })
}
course_update_data=(req,res)=>{
     knex.from("project_tables") 
     .where("id","=",req.params.id)
      .update({id:req.body.id, name:req.body.name, logo:req.body.notes, days_to_complete:req.body.days_to_complete, short_description:req.body.short_description, type:req.body.type, course_type:req.body.course_type, lang_available:req.body.lang_available })
       .then(()=>{
            console.log("update successfully")
            res.send({massage:"data update successfully"}) 
        }) 
        .catch((err)=>{
        console.log(err)
    }) 
}
// course_post_data=(req,res)=>{
//         const user={
//             id:req.params.id,
//             name:req.body.name,
//             logo:req.body.logo,
//             notes:req.body.notes,
//             days_to_complete:req.body.days_to_complete,
//             short_description:req.body.short_description,
//             type:req.body.type,
//             course_type:req.body.course_type,    
          
//            lang_available:req.body.lang_available
//         }
//         knex('project_tables').insert(user).then(()=>{
//             res.send({message:"data post successfully"})
//         }).catch((err)=>{
//             res.send(err)
//             console.log(err)
//         })
//     }

// course_delete_data=(req,res)=>{
//         knex.delete("*").from("project_tables").where("id","=",req.params.id)
//         .then((data)=>{
//             res.send({massage:"delete successfully"})
//         })
//         .catch((err)=>{
//             res.send(err)
//             console.log(err)
//         })
//     }


module.exports={get_course_method,get_course_id,course_update_data}
    // get_course_id,course_update_data,course_post_data,course_delete_data}

