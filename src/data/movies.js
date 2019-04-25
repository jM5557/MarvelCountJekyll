export default {
	name: 'Movies List',
	movieList: [
		{
			id: 1,
			name: 'Iron Man',
			releaseDate: 'May 2, 2008',
			trailerUrl: 'https://www.youtube.com/watch?v=tbMG2yTDXSY',
			poster: 'iron-man-1.jpg',

			characterID: [1] 
		},
		{
			id: 2,
			name: 'The Incredible Hulk',
			releaseDate: 'June 13, 2008',
			trailerUrl: 'https://youtu.be/xbqNb2PFKKA',
			poster: 'hulk-1.jpg',

			characterID: [ 1, 4 ] 
		},
		{
			id: 3,
			name: 'Iron Man 2',
			releaseDate: 'May 7, 2010',
			trailerUrl: 'https://youtu.be/DIfgxIv5xmk',
			poster: 'iron-man-2.jpg',

			characterID: [ 1, 6 ]
		},
		{
			id: 4,
			name: 'Thor',
			releaseDate: 'May 6, 2011',
			trailerUrl: 'https://youtu.be/JOddp-nlNvQ',
			poster: 'thor-1.jpg',

			characterID: [ 2, 5, 7 ] 
		},
		{
			id: 5,
			name: 'Captain America: The First Avenger',
			releaseDate: 'July 19, 2011',
			trailerUrl: 'https://www.youtube.com/watch?v=JerVrbLldXw',
			poster: 'captain-america-1.jpg',


			characterID: [3] 
		},
		{
			id: 6,
			name: 'Marvel\'s The Avengers',
			releaseDate: 'May 4, 2012',
			trailerUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
			poster: 'avengers-1.jpg',
			characterID: [ 1, 2, 3, 4, 5, 6, 7 ] 
		},
		{
			id: 7,
			name: 'Iron Man 3',
			releaseDate: 'May 3, 2013',
			trailerUrl: 'https://youtu.be/YLorLVa95Xo',
			poster: 'iron-man-3.jpg',
			characterID: [1] 
		},
		{
			id: 8,
			name: 'Thor: The Dark World',
			releaseDate: 'November 8, 2013',
			trailerUrl: 'https://www.youtube.com/watch?v=npvJ9FTgZbM',
			poster: 'thor-2.jpg',

			characterID: [ 2, 7 ] 
		},
		{
			id: 9,
			name: 'Captain America: The Winter Soldier',
			releaseDate: 'April 4, 2014',
			trailerUrl: 'https://www.youtube.com/watch?v=tbayiPxkUMM',
			poster: 'captain-america-2.jpg',

			characterID: [ 3, 6 ] 
		},
		{
			id: 10,
			name: 'Guardians of the Galaxy',
			releaseDate: 'August 1, 2014',
			trailerUrl: 'https://youtu.be/d96cjJhvlMA',
			poster: 'guardians-1.jpg',

			characterID: [ 8 ] 
		},
		{
			id: 11,
			name: 'Avengers: Age of Ultron',
			releaseDate: 'May 1, 2015',
			trailerUrl: 'https://youtu.be/tmeOjFno6Do',
			poster: 'avengers-2.jpg',

			characterID: [ 1, 2, 3, 4, 5, 6, 11 ] 
		},
		{
			id: 12,
			name: 'Ant-Man',
			releaseDate: 'June 29, 2015',
			trailerUrl: 'https://youtu.be/pWdKf3MneyI',
			poster: 'antman-1.jpg',

			characterID: [10] 
		},
		{
			id: 13,
			name: 'Captain America: Civil War',
			releaseDate: 'May 6, 2016',
			trailerUrl: 'https://youtu.be/dKrVegVI0Us',
			poster: 'captain-america-3.jpg',
			characterID: [ 1, 3, 5, 6, 9, 10, 11, 12 ] 
		},
		{
			id: 14,
			name: 'Doctor Strange',
			releaseDate: 'October 20, 2016',
			trailerUrl: 'https://youtu.be/HSzx-zryEgM',
			poster: 'doctor-strange-1.jpg',

			characterID: [ 2 ] 
		},
		{
			id: 15,
			name: 'Guardians of the Galaxy Vol. 2',
			releaseDate: 'May 5, 2017',
			trailerUrl: 'https://youtu.be/dW1BIid8Osg',
			poster: 'guardians-2.jpg',

			characterID: [ 8 ] 
		},
		{
			id: 16,
			name: 'Spider-Man: Homecoming',
			releaseDate: 'July 7, 2017',
			trailerUrl: 'https://youtu.be/8wNgphPi5VM',
			poster: 'spiderman-1.jpg',
			characterID: [ 1, 9 ] 
		},
		{
			id: 17,
			name: 'Thor: Ragnarok',
			releaseDate: 'November 3, 2017',
			trailerUrl: 'https://youtu.be/ue80QwXMRHg',
			poster: 'thor-3.jpg',

			characterID: [ 2, 4, 7 ] 
		},
		{
			id: 18,
			name: 'Black Panther',
			releaseDate: 'February 16, 2017',
			trailerUrl: 'https://youtu.be/xjDjIWPwcPU',
			poster: 'black-panther-1.jpg',

			characterID: [ 13 ] 
		},
		{
			id: 19,
			name: 'Avengers: Infinity War',
			releaseDate: 'April 27, 2018',
			trailerUrl: 'https://youtu.be/mBeOUjf-NLA',
			poster: 'avengers-3.jpg',
			characterID: [ 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 15  ] 
		},
		{
			id: 20,
			name: 'Ant-Man and the Wasp',
			releaseDate: 'July 6, 2018',
			trailerUrl: 'https://youtu.be/8_rTIAOohas',
			poster: 'antman-2.jpg',

			characterID: [10] 
		},
		{
			id: 21,
			name: 'Captain Marvel',
			releaseDate: 'March 8, 2019',
			trailerUrl: 'https://youtu.be/0LHxvxdRnYc',

			poster: 'cpt-marvel.jpg',
			logo: 'cpt-marvel-logo.png',
			wallpaper: 'cpt-marvel-wp.jpg',

			characterID: [14] 
		},
		{
			id: 22,
			name: 'Avengers: Endgame',
			releaseDate: 'April 27, 2019',
			trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
			
			poster: 'avengers-4-wp.jpg',
			logo: 'avengers-4-logo.png',
			wallpaper: 'avengers-4-wp.jpg',

			characterID: [ 1, 2, 3, 4, 5, 6, 10, 14, 15 ]
		},
		{
			id: 23,
			name: 'Spider-Man: Far From Home',
			releaseDate: 'July 5, 2019',
			trailerUrl: 'https://www.youtube.com/watch?v=DYYtuKyMtY8',

			poster: 'spiderman-2-wp.jpg',
			logo: 'spiderman-2-logo.png',
			wallpaper: 'spiderman-2-wp.jpg',

			characterID: [ 9 ]
		}
	],

	featuredFilm: {

		id: 22,
		tickets_url: "https://www.fandango.com/avengers-endgame-215871/movie-overview",

		shadow_color: "#3e1bb3"

	},

	otherFeatured: {

		id: 23,
		tickets_url: "",

		shadow_color: "crimson"

	}
}