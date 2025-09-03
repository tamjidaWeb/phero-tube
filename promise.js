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


const loadData=async()=>{
   try{
     console.log('ami prothom');
    console.log('ami second');

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();

    console.log(data)
  
    const result = 10+10;
    console.log(result);

    console.log('ami third')
   }
   catch{
    console.log('error')
   }
}

loadData()

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


