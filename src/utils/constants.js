export const netfilxBackGroungImg = 'https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg';

export const url_nowplaying = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const url_trailerInfo = 'https://api.themoviedb.org/3/movie/'

export const url_TMDB_CDN = 'https://image.tmdb.org/t/p/w500'

export const url_popular = 'https://api.themoviedb.org/3/movie/popular'

export const url_top_rated = 'https://api.themoviedb.org/3/movie/top_rated'

export const url_upcoming = 'https://api.themoviedb.org/3/movie/upcoming'

export const url_search_movies = 'https://api.themoviedb.org/3/search/movie?query='

const tmdb_key = process.env.REACT_APP_TMDB_ACCESS_TOKEN

export const Api_options = {
  method: 'GET',
  headers: { 
    accept: 'application/json',
    Authorization: 'Bearer ' + tmdb_key,
  }
};

export const language_supported = [{identifier:'En', name:'English'},
  {identifier:'Hi', name:'Hindi'},
  {identifier:'Ka', name:'Kannada'},
  {identifier:'Sp', name:'Spanish'},
]

export const language = {
  'En' : {
    placeholder: 'Which movie do you like to see today?',
    search : 'search'
  },
  'Hi' : {
    placeholder: 'आज आप कौनसी फिल्म देखना पसंद करेंगे?',
    search : 'खोज '
  },
  'Ka' : {
    placeholder: 'ಇಂದು ನೀವು ಯಾವ ಚಲನಚಿತ್ರವನ್ನು ನೋಡಲು ಇಷ್ಟಪಡುತ್ತೀರಿ?',
    search : 'ಹುಡುಕಾಟ '
  },
  'Sp' : {
    placeholder: '¿Qué película te gustaría ver hoy?',
    search : 'búsqueda'
  }
}


export const gptQuery = "only give the 5 movie names comma saparated like in example ex movie1, movie2, movie3, movie4, movie5 for the given query"