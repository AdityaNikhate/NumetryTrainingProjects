// import data from 'data.json';

let data = "data.json"
let datatoshow = "";
fetch(data)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(jsonData => {
    // Work with the JSON data
    console.log(jsonData);
    for(var n in jsonData){
      // console.log(jsonData[n].name)
      datatoshow+='<tr>';
      datatoshow+=`<td>${jsonData[n].name}</td> <td>${jsonData[n].email}</td> <td>${jsonData[n].role}</td><td>${jsonData[n].salary}</td>`
      datatoshow+='</tr>';
    }
    
    const body = document.body;
    const adddiv = document.querySelector(".addrows");
    adddiv.innerHTML = datatoshow;
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });


