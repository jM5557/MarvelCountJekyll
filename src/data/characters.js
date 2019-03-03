export default {
	name: 'Character List',

	characterList: [
		{
			id: 1,

			name: 'Iron Man',

			alias: 'Tony Stark',

			movies: ['Iron Man', 'Iron Man 2', 
				'Marvel\'s The Avengers', 'Iron Man 3', 
				'Avengers: Age of Ultron', 'Captain America: Civil War',
				'Spider-Man: Homecoming', 'Avengers: Infinity War'],

			comparison: {
				film: {
					caption: '',
					imageUrl: 'iron-man-1-ca.jpg'
				},

				comic: {
					caption: '',
					imageUrl: 'iron-man-1-cb.jpg'
				}
			},

			evolution: [
				{
					id: 1,

					name: "Iron Man",

					year: "2008",

					imageUrl: "iron-man-1-e1.jpg"
				},

				{

					id: 2,

					name: "Iron Man 2",

					year: "2010",

					imageUrl: "iron-man-1-e2.jpg"

				},

				{
					id: 3,

					name: "Marvel's The Avengers",

					year: "2012",

					imageUrl: "iron-man-1-e3.jpg"
				},
				{
					id: 4,

					name: "Iron Man 3",

					year: "2013",

					imageUrl: "iron-man-1-e4.jpg"
				},
				{
					id: 5,

					name: "Avengers: Age of Ultron",

					year: "2015",

					imageUrl: "iron-man-1-e5.jpg"
				},
				{
					id: 6,

					name: "Captain America: Civil War",

					year: "2016",

					imageUrl: "iron-man-1-e6.jpg"
				},
				{
					id: 7,

					name: "Spider-Man: Homecoming",

					year: "2017",

					imageUrl: "iron-man-1-e7.jpg"
				},
				{
					id: 8,

					name: "Avengers: Infinity War",

					year: "2018",

					imageUrl: "iron-man-1-e8.jpg"
				}
			]
		},

		{
			id: 2,

			name: 'Thor',

			alias: 'Thor Odinson',

			movies: [
				'Thor', 'Marvel\'s The Avengers',
				'Thor: The Dark World', 'Avengers: Age of Ultron',
				'Doctor Strange', 'Thor: Ragnarok', 
				'Avengers: Infinity War'
			],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'thor-1-ca.jpg'

				},

				comic: {

					caption: '',

					imageUrl: 'thor-1-cb.jpg'

				}
			},

			evolution: [

				{
					id: 1,

					name: "Thor",

					year: "2011",

					imageUrl: "thor-1-e1.jpg"
				},

				{
					id: 2,

					name: "Thor: The Dark World",

					year: "2013",

					imageUrl: "thor-1-e2.jpg"
				}
			]
		},

		{
			id: 3,

			name: 'Captain America',

			alias: 'Steve Rodgers',

			movies: [ 
				'Captain America: The First Avenger', 'Marvel\'s The Avengers',
				'Captain America: The Winter Soldier', 'Avengers: Age of Ultron',
				'Captain America: Civil War', 
				'Avengers: Infinity War'
			 ],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'captain-america-1-ca.jpg',

				},

				comic: {

					caption: '',
					imageUrl: 'captain-america-1-cb.jpg'

				}

			},

			evolution: [

				{
					id: 1,

					name: "Captain America: The First Avenger",

					year: "2011",

					imageUrl: "captain-america-1-e1.jpg"
				},

				{
					id: 2,

					name: "Captain America: The Winter Soldier",

					year: "2014",

					imageUrl: "captain-america-1-e2.jpg"
				}
			]

		},

		{
			id: 4,

			name: 'Hulk',

			alias: 'Bruce Banner',

			movies: [

				'The Incredible Hulk', 
				'Marvel\'s The Avengers', 
				'Avengers: Age of Ultron', 
				'Thor: Ragnarok', 
				'Avengers: Infinity War'
			],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'hulk-1-ca.png',

				},

				comic: {

					caption: '',
					imageUrl: 'hulk-1-cb.jpg'

				}

			}
		},

		{
			id: 5,

			name: 'Hawkeye',

			alias: 'Clint Barton',

			movies: [
				'Thor',
				'Marvel\'s The Avengers',
				'Avengers: Age of Ultron',
				'Captain America: Civil War'
			],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'hawkeye-1-ca.jpg'

				},

				comic: {

					caption: '',
					imageUrl: 'hawkeye-1-cb.jpg'

				}

			},

		},

		{
			id: 6,

			name: 'Black Widow',

			alias: 'Natalia Romanoff',

			movies: ['Iron Man 2',
				'Marvel\'s The Avengers',
				'Captain America: The Winter Soldier',
				'Captain America: Civil War',
				'Avengers: Age of Ultron',
				'Avengers: Infinity War'
			],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'black-widow-1-ca.jpg'

				},

				comic: {

					caption: '',
					imageUrl: 'black-widow-1-cb.jpg'

				}

			}
		},

		{
			id: 7,

			name: 'Loki',

			alias: 'Loki Odinson',

			movies: [ 
				'Thor',
				'Marvel\'s The Avengers', 
				'Thor: The Dark World',
				'Thor: Ragnarok',
				'Avengers: Infinity War'
			],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'loki-1-ca.jpg'

				},

				comic: {

					caption: '',
					imageUrl: 'loki-1-cb.jpg'

				}

			}
		}
	]
}