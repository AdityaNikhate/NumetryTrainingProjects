let a = "data.json";

fetch(a)
  .then(res=>{
    if(!res.ok){
      throw new Error("You have and error because your response is not ok");
    }
    return res.json();
  })
  .then(data=>{
    console.log(data);
  })
  .catch(error=>{
    console.error("There is an error: ",error);
  })
