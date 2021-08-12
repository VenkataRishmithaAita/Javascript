function getData(uId){
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
	let error=false;
	if(!error){
	   console.log("Fetching data......");
	   resolve("skc@gmail.com");
	}
	else{
	reject("error: There's a problem somewhere!!");
	}
	},4000);
     })
}
	
	console.log("start");
	var email= getData("skc");
	email.then((message)=>console.log("Email id of the user id is:"+message));
	console.log("end");












