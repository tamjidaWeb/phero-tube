// // const loadData=()=>{
// //     fetch('https://jsonplaceholder.typicode.com/todos/1')
// //     .then(res=>res.json())
// //     .then(data=>console.log(data))
// //     .catch(err=>console.log(err))
// // }
// // loadData();

// const fetchData = () =>{
//     return new Promise((resolve,reject)=>{
//         const status = true;
//         if(status){
//             const mockData = {
//                 json:()=>Promise.resolve({name:'hero'})
//             }
//             resolve(mockData)
//         }
//         else{
//             reject('server error')
//         }
//     })
// }

// fetchData()
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))


//     const fetchData2 = () =>{
//         return new Promise((resolve,reject)=>{
//             const status = false;
//             if(status){
//                 resolve({name:'hero'})
//             }
//             else{
//                 reject('data is not found')
//             }
//         })
//     }

//     fetchData2()
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err))



// const urls=[
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/comments',
//     'https://jsonplaceholder.typicode.com/albums',
//     'https://jsonplaceholder.typicode.com/photos',
//     'https://jsonplaceholder.typicode.com/todos',
// ];


// Promise.all(urls.map(url=>{
//     return fetch(url)
//     .then(res=>res.json)
//     .then(data=>data)
// }))
//     .then(res=>res)
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))


// const loadData=async()=>{
//    try{
//      console.log('ami prothom');
//     console.log('ami second');

//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json();

//     console.log(data)
  
//     const result = 10+10;
//     console.log(result);

//     console.log('ami third')
//    }
//    catch{
//     console.log('error')
//    }
// }

// loadData()

//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(res=>res.json())
        // .then(data=>console.log(data))



    // async function fetchData(){
    //     const response = await fetch('');
    //     const data = await response.json();
    //     console.log(data)

    // }


    // async function loadData2 (){
    //     const response = await fetch('');
    //     const data = await response.json()
    // }


// const nums = [1,2,3,4,5,6];

// const newArray =nums.map(value =>{
// return value+1;
// })
// console.log(newArray)

// const squareArr = nums.map(value=>value*value);
// console.log(squareArr)

// const names =[
//     {name:'hiui',job:'teacher'},
//     {name:'miki',job:'non-cadre'}
// ]

// const newAr = names.map(nam=>nam.name)
// console.log(newAr)

// let temp =[];
// for(let i=0;i<nums.length;i++){
//     const num = nums[i];
//     let sum = num + 1;
//     temp.push(sum)
// }
// console.log(temp)


// const word=['huio','jiji'];
// const upWord= word.map(w=>{
//     return w;
// });
// console.log(upWord)


// const nums = [2,3,5,4,6];
// const newaAr=nums.map(num=>`number=${num}`);
// console.log(newaAr)


// const products=[
//     {id:1,color:'gold',name:'iphone',price:120000},
//     {id:2,color:'black',name:'xiaomi',price:20000},
//     {id:3,color:'gold',name:'samsung',price:24000},
//     {id:4,color:'purple',name:'iphone',price:214000},
// ]

// const newProducts= products.map(p=>{
//     if(p.name==='iphone'){
//         p.price = p.price+234;
//     }
//     return p;
// });
// console.log(newProducts)

// const age =10;
// localStorage.setItem('my-age',age)





// products.forEach(product=>{
//     if(product.price>24000){
//         console.log(product)
//     }
// })

// const newProduct= products.find(product=>product.id===3);
// console.log(newProduct)



// const newProducts = products.filter(product=>product.color=="gold");
// console.log(newProducts)

// const newProducts = products.filter(product=>product.price>24000);
// console.log(newProducts)
// products.forEach(product=>{
//     if(product.price>24000){
//         console.log(product.name,product.price)
//     }
// });


// const handleLocalStorage = ()=>{
//   const person = {
//     name:'hero uddin',
//     age:10,
//     friend:['rohim']
//   }
//   const convertedToString = JSON.stringify(person);
// //   const backToObject = JSON.parse(convertedToString);
// // console.log(backToObject.name)
//   localStorage.setItem('alom mia vai',convertedToString);
// }

//   const data = localStorage.getItem('alom mia vai');
//   const converted = JSON.parse(data);
//   console.log(converted)




