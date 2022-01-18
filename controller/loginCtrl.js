const loginModel = require('../model/loginModel');

const Root = async (req, res) =>{
    try{
        const result = await loginModel.data();
        console.log(result);
        res.render('index', {output: result});
    }catch (err){
        throw err;
    }
}
const fdsa = (req, res)=>{
    try{
        let parameters = {
            id: req.body.id,
        }
        loginModel.data(parameters)
        .then((db_data) => {
            console.log(db_data);
            res.render('index',{db_data});
        })
    }catch(err) {
        throw err;
    }
}

module.exports ={
    Root,fdsa
}