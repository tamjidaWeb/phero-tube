
function removeActiveClass(){
    const activeBtn = document.getElementsByClassName('active');

    for(let btn of activeBtn){
        btn.classList.remove('active')
    }
}

function loadCategories(){
    //fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
}

function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((response)=>response.json())
    .then((data)=>{
        document.getElementById('btn-all').classList.add('active')
        displayVideos(data.videos)})
}

// const loadCategoryVideos=(id)=>{
//     const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
//     console.log(url);

//     fetch(url)
//     .then(res=>res.json())
//     .then(data => {
//     const clickedButton = document.getElementById(`btn-${id}`);
//     displayVideos(data.videos);
// })


const loadCategoryVideos = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const clickedButton = document.getElementById(`btn-${id}`);
            console.log(clickedButton);
            removeActiveClass();
            clickedButton.classList.add('active')
            displayVideos(data.videos); // ✅ use videos array
        });
}; // ✅ function properly closed


// {category_id: '1001', category: 'Music'}
function displayCategories(categories){
    const categoryContainer = document.getElementById('category-container');
    for(let cat of categories){
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML=`
                    <button id="btn-${cat.category_id}" onclick="loadCategoryVideos('${cat.category_id}')" class="bg-[#D0D0D0] hover:bg-[#FF1F3D] hover:text-white  px-4 py-1 rounded">${cat.category}</button>`;
        categoryContainer.append(categoryDiv)
    }
}

const displayVideos =(videos)=>{
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML='';
if(videos.length===0){
    videoContainer.innerHTML =` 
     <div class="col-span-full text-center flex flex-col justify-center items-center py-20">
            <img class="w-[120px]" src="assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold ">Oops!There is no Content here.</h2>
        </div>`;
    return;
}
    videos.forEach(video=>{
           const videoDiv = document.createElement('div');
        videoDiv.innerHTML=`
        <div class="card bg-base-100">
        <figure class="relative">
            <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute text-white bg-black px-1 rounded bottom-2 text-sm right-2">3 hours 56 min ago</span>
        </figure>
        <div class="py-4 flex gap-3 px-0">
           <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" />
                    </div>
                </div>
           </div>
           <div class="intro">
                <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                <p class="text-gray-400 text-sm flex gap-2">${video.authors[0].profile_name}
                    <img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                </p>
                <p>${video.others.views}</p>
           </div>
        </div>
        </div>
        `;
    videoContainer.append(videoDiv)
    })
}
loadCategories();
