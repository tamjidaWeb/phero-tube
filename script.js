function loadCategories(){
    //fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategories(data.categories))
}

function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((response)=>response.json())
        .then((data)=>displayVideos(data.videos))
}

// {category_id: '1001', category: 'Music'}
function displayCategories(categories){
    const categoryContainer = document.getElementById('category-container');
    for(let cat of categories){
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML=`
                    <button class="bg-[#D0D0D0] hover:bg-[#FF1F3D] hover:text-white  px-4 py-1 rounded">${cat.category}</button>`;
        categoryContainer.append(categoryDiv)
    }
}

const displayVideos =(videos)=>{
    const videoContainer = document.getElementById('video-container');

    videos.forEach(video=>{
           const videoDiv = document.createElement('div');
        videoDiv.innerHTML=`
        <div class="card bg-base-100 shadow-sm">
        <figure>
            <img
            src="${video.thumbnail}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        `;
    videoContainer.append(videoDiv)
    })
}
loadCategories();
loadVideos();