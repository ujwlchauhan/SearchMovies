let movies = [
    {
        name:"Scario",
        poster:"https://www.tallengestore.com/cdn/shop/products/Art_Poster_-_Sicario_-_Tallenge_Hollywood_Collection_f722e295-e77e-4479-aa10-8a8a29140dc0.jpg?v=1505078992",
        rating:7.6
    },
    {
        name:"Aladin",
        poster:"https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg",
        rating:7
    },
    {
        name:"Tiisity Mistity",
        poster:"https://img.freepik.com/premium-photo/movie-poster-design_841014-8784.jpg",
        rating:8
    },
    {
        name:"1971",
        poster:"https://www.tallengestore.com/cdn/shop/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089",
        rating:8.5
    },
    {
        name:"Walk Alone",
        poster:"https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
        rating:5.6
    },
    {
        name:"Bloody Daddy",
        poster:"https://filmfare.wwmindia.com/content/2023/apr/bloodydaddyshahidkapoor31681304057.jpg",
        rating:5.1
    },
    {
        name:"Parasite",
        poster:"https://parade.com/.image/t_share/MTkwNTgxMjk2NzkxODg5MDIx/parasite2.jpg",
        rating:8
    },
    {
        name:"Flash",
        poster:"https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-International-01.jpeg?fit=1382%2C2048&quality=80&strip=info&ssl=1",
        rating:9
    },
    {
        name:"Captain Marvel",
        poster:"https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top",
        rating:8.9
    }
]



function searchMovie()
{
   let movieName =  document.getElementById("search").value;
    
   if(movieName !== "")
   {

    let result =  movies.filter(function(movie){
        return movie.name.toUpperCase().includes( movieName.toUpperCase())
    })

    displayMovies(result);
   }
   else
   {
    displayMovies(movies);
   }
}


    function displayMovies(data)
    {
        let display = ``;

            for(let i = 0 ; i<=data.length;i++)
            {

        display = display + `<div class="movie">
        <div class="hidden">
            <div class="videos">

            </div>
            <div class="details">
                <h1>${data[i].name}</h1>
                <h3>${data[i].rating}</h3>
            </div>
        </div>
    <img class="movie-img" src="${data[i].poster}" alt="">
    </div>`

    document.querySelector('.movies').innerHTML = display;

            }
    }

    displayMovies(movies);