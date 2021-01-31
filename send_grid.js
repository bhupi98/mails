const mail=require('@sendgrid/mail');
mail.setApiKey('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');
const msg={
    from:'',
    to:[],
    subject:'testing sendgrid',
    text:'testing mail api with sendgrid',
    html:'<p>Hello Bhupender</p>'
}
mail.sendMultiple(msg).then((msg) => {
    console.log('msg sent' + msg)
}).catch((err) => {
    console.log(err)
})
// const message=(async()=>{
//     try{
//       await mail.send(msg)
//       console.log('message sent' + msg)
//     }catch(err){
//         console.error(err)
//         if(err.response){
//             console.error(err.response)
//         }
//     }
// })
// message();