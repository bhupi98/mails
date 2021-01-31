const nodemailer=require('nodemailer');
const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'bhupicool99@gmail.com',
        pass:''
    }
})
const mailOptions ={
    from:'',
    to:[],
    subject:'Testing multiple mail',
    text: 'Testing mail sending to friend ',
    cc:''
}
transport.sendMail(mailOptions,(err,info) => {
    if(err) throw err;
    console.log(info.response);
})
