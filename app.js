const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logEvents');

app.set('PORT', process.env.PORT || 3000);
//const PORT =  3000;
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/', require('./routes/root'));
//app.use('/subdir', require('./routes/root/subdir'));
//app.use('/login', require('./routes/root/login'));

app.use(express.static( path.join(__dirname, 'public')));
app.use(express.static( path.join(__dirname, 'data')));
app.use(express.static( path.join(__dirname, 'subdir')));

const users = [
    {id: 1, userid:"test1", userpwd:"1111"},
    {id: 2, userid:"test2", userpwd:"2222"},
]

app.get('/login' , (req, res)=>{
    //users에서 아이디와 비번이 같다면 로그인
    //이미 로그인 된 상태면 또 로그인 하지 않음. : 공유해서 서브페이지에서도 이름 뜨기
    //그렇지 않다면  로그인 시켜줌. => 쿠키

   
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
})
app.post('/login' , (req, res)=>{
    console.log(req.body.userid);

    const {userid, userpwd} = req.body;
    const user =  users.find(user=>user.userid === userid && user.userpwd === userpwd);
    let loginStatus = {}
    if(user) {
        loginStatus = {success : true, userid  }
    }else{
        loginStatus = {success : false, url : 'register.html' }
    }
    res.json(loginStatus);
})



app.listen(app.get('PORT'), ()=>{
    console.log( `${app.get('PORT')} start Sever`);
})


/*  
    MVC : 모델 
    model : 데이터를 처리하는 코드
    router : 주소를 관리하는 코드
    controller : 처리작업 
*/