let result=[{"AppraisedValue":300,"Color":"blue","ID":"asset1","Owner":"Tomoko","Size":5,"docType":"asset"},{"AppraisedValue":400,"Color":"red","ID":"asset2","Owner":"Brad","Size":5,"docType":"asset"},{"AppraisedValue":500,"Color":"green","ID":"asset3","Owner":"Jin Soo","Size":10,"docType":"asset"},{"AppraisedValue":"1300","Color":"yellow","ID":"asset313","Owner":"Tom","Size":"5"},{"AppraisedValue":600,"Color":"yellow","ID":"asset4","Owner":"Max","Size":10,"docType":"asset"},{"AppraisedValue":700,"Color":"black","ID":"asset5","Owner":"Adriana","Size":15,"docType":"asset"},{"AppraisedValue":800,"Color":"white","ID":"asset6","Owner":"Michel","Size":15,"docType":"asset"}]
console.log("yes")












// document.getElementById('getResult').addEventListener('click',  ()=> {


//     const resEle = document.getElementById('result');
//     console.log(resEle)
//     //resEle.style.display="block" //to apper which button is clicked
//     if(resEle.childNodes.length>1)
//     {
//         console.log(resEle.childNodes.length)
//         return;
//     }
//     resEle.setAttribute("class","r")
//     console.log(resEle)
//     let keys=Object.keys(result[0]);
//     let size=keys.length //size of the columns
//     let row=document.createElement("div");
//     keys.forEach((item)=>{
//         let child=document.createElement("h1")
//         child.textContent=item;
//         row.appendChild(child)
//     })
//     resEle.append(row)
//     result.forEach((item)=>{
//         let row=document.createElement("div");
//          let values=Object.values(item);
//          while(values.length<size)values.push(""); //to make entries even
//          values.forEach((item)=>{
//             let child=document.createElement("p")
//             child.textContent=item
//             row.appendChild(child)
//          })
//          resEle.append(row)      
            
//     })
    
//             //console.log(response.data);
//             //console.log(resEle)
    
//     // result.forEach((item)=>{
//     //     let child=document.createElement("p");
//     //     child.textContent=JSON.stringify(item)
        
        
//     // })
    
    
// });

// document.getElementById('createAssets').addEventListener('click',()=>{
//     let form=document.getElementById('createAssetForm');
//     form.style.display="block";


// })
