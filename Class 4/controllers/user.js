import fs from 'fs'

const getuser = (req,res)=>{

    let data = fs.readFileSync('./database/data.json', 'utf-8')

    data = JSON.parse(data)

    res.status(200).json({
        message:'data received successfully....',
        success:true,
        data

    })
}



const createUser = (req,res)=>{

    let {name, age, id} = req.body

    if(!name || !age || !id){
        res.status(404).json({
            message : 'data not found for creation....',
            success:false
        })
    }


     let data = fs.readFileSync('./database/data.json', 'utf-8')

     data = JSON.parse(data)

     data.push({name, age , id})

     fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))


     res.status(200).json({
        message:'data created successfully...',
        success:true,
        data
     })


    
    

}

const updateUser = (req,res)=>{

const id = req.params.id

let {name, age} = req.body

let data = fs.readFileSync('./database/data.json', 'utf-8')

data = JSON.parse(data)



let index = data.findIndex((element)=>{
    return element.id == id
})

// let user = data.find((element)=>{
//     return element.id == id
// })


// user.name = name
// user.id = id
// user.age = age

data.splice(index, 1, {name, age, id})

// data[index].name = name
// data[index].age = age
// data[index].id = id

fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 4))

res.status(200).json({
    message:'data updated successfully...',
    success:true,
    data
})

}



const deleteuser = (req, res)=>{

    const id = req.params.id

    let data =  fs.readFileSync('./database/data.json', 'utf-8')


    data = JSON.parse(data)


    let index = data.findIndex((element)=>{
        return element.id == id
    })

    data.splice(index, 1)


    fs.writeFileSync('./database/data.json', JSON.stringify(data, null, 3))

    res.status(200).json({
        message:'data deleted successfully...',
        success : true,
        data
    })




}


export { getuser, createUser ,updateUser, deleteuser}