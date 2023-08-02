const urlYouTube = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
const optionsYouTube = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6ae28dab73msha91925ed81cb5bbp1fdee9jsn6f08ceef79e4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi, optionsApi) {
    
    try {
        const response = await fetch(urlApi, optionsApi);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }

};

( async () => {

    try {

        const videoContainerHTML = document.querySelector('#video-container');

        const videos = await fetchData(urlYouTube, optionsYouTube);

        const view = `
        
        ${videos.items.map( video => `

            <div class="group relative p-2 border border-black rounded">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700 capitalize"><span aria-hidden="true" class="absolute inset-0"></span> ${video.snippet.title} </h3>
                </div>
            </div>
        
        ` ).slice(0, 4).join('')}
        
        `;

        videoContainerHTML.innerHTML = view;

    } catch(error) {

        console.error(error);

    }

})();