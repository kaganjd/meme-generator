var senators = [
  {
    "phone": "(202) 224-5744",
    "state": "Alabama",
    "name": "Richard Shelby",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Richard_Shelby%2C_official_portrait%2C_112th_Congress_crop.jpg"
  },
  {
    "phone": "(202) 224-4124",
    "state": "Alabama",
    "name": "Luther Strange",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Senator_Strange_headshot.jpg"
  },
  {
    "phone": "(202) 224-6665",
    "state": "Alaska",
    "name": "Lisa Murkowski",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Lisa_Murkowski_1_%28cropped%29.jpg"
  },
  {
    "phone": "(202) 224-3004",
    "state": "Alaska",
    "name": "Dan Sullivan",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/10/Senator_Dan_Sullivan_official.jpg"
  },
  {
    "phone": "(202) 224-4521",
    "state": "Arizona",
    "name": "John McCain",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/John_McCain_official_portrait_2009.jpg"
  },
  {
    "phone": "(202) 224-2235",
    "state": "Arizona",
    "name": "Jeff Flake",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jeff_Flake_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-4843",
    "state": "Arkansas",
    "name": "John Boozman",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/John_Boozman%2C_official_portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2353",
    "state": "Arkansas",
    "name": "Tom Cotton",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Tom_Cotton_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-3841",
    "state": "California",
    "name": "Dianne Feinstein",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Dianne_Feinstein%2C_official_Senate_photo_2.jpg"
  },
  {
    "phone": "(202) 224-3553",
    "state": "California",
    "name": "Kamala Harris",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Kamala_Harris_Official_Attorney_General_Photo.jpg"
  },
  {
    "phone": "(202) 224-5852",
    "state": "Colorado",
    "name": "Michael Bennet",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Michael_Bennet_Official_Photo.jpg"
  },
  {
    "phone": "(202) 224-5941",
    "state": "Colorado",
    "name": "Cory Gardner",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Cory_Gardner_official_Senate_portrait.jpeg"
  },
  {
    "phone": "(202) 224-2823",
    "state": "Connecticut",
    "name": "Richard Blumenthal",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/35/Richard_Blumenthal_Official_Portrait.jpg"
  },
  {
    "phone": "(202) 224-4041",
    "state": "Connecticut",
    "name": "Chris Murphy",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Chris_Murphy%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2441",
    "state": "Delaware",
    "name": "Tom Carper",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/Tom_Carper%2C_official_portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5042",
    "state": "Delaware",
    "name": "Chris Coons",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Chris_Coons%2C_official_portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5274",
    "state": "Florida",
    "name": "Bill Nelson",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Bill_Nelson.jpg"
  },
  {
    "phone": "(202) 224-3041",
    "state": "Florida",
    "name": "Marco Rubio",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/79/Marco_Rubio%2C_Official_Portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-3643",
    "state": "Georgia",
    "name": "Johnny Isakson",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Johnny_Isakson_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-3521",
    "state": "Georgia",
    "name": "David Perdue",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/David_Perdue%2C_Official_Portrait%2C_114th_Congress.jpg"
  },
  {
    "phone": "(202) 224-6361",
    "state": "Hawaii",
    "name": "Brian Schatz",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2.jpg"
  },
  {
    "phone": "(202) 224-3934",
    "state": "Hawaii",
    "name": "Mazie Hirono",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/24/Mazie_Hirono%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-6142",
    "state": "Idaho",
    "name": "Mike Crapo",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Mike_Crapo_Official_Photo_110th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2752",
    "state": "Idaho",
    "name": "Jim Risch",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Jim_Risch_official_portrait.jpg"
  },
  {
    "phone": "(202) 224-2854",
    "state": "Illinois",
    "name": "Dick Durbin",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Richard_Durbin_official_photo.jpg"
  },
  {
    "phone": "(202) 224-2152",
    "state": "Illinois",
    "name": "Tammy Duckworth",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tammy_Duckworth%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-4814",
    "state": "Indiana",
    "name": "Joe Donnelly",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Joe_Donnelly%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5623",
    "state": "Indiana",
    "name": "Todd Young",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Senator_Todd_Young_official_portrait_%28cropped%29.jpg"
  },
  {
    "phone": "(202) 224-3254",
    "state": "Iowa",
    "name": "Chuck Grassley",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Sen_Chuck_Grassley_official.jpg"
  },
  {
    "phone": "(202) 224-3744",
    "state": "Iowa",
    "name": "Joni Ernst",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Joni_Ernst_Official_photo_portrait_114th_Congress.jpg"
  },
  {
    "phone": "(202) 224-6521",
    "state": "Kansas",
    "name": "Pat Roberts",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Pat_Roberts_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-4774",
    "state": "Kansas",
    "name": "Jerry Moran",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/38/Jerry_Moran%2C_official_portrait%2C_112th_Congress_headshot.jpg"
  },
  {
    "phone": "(202) 224-2541",
    "state": "Kentucky",
    "name": "Mitch McConnell",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/Mitch_McConnell_official_portrait_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-4343",
    "state": "Kentucky",
    "name": "Rand Paul",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/78/Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate.jpg"
  },
  {
    "phone": "(202) 224-5824",
    "state": "Louisiana",
    "name": "Bill Cassidy",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/04/Bill_Cassidy_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-4623",
    "state": "Louisiana",
    "name": "John N. Kennedy",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2523",
    "state": "Maine",
    "name": "Susan Collins",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sen_Susan_Collins_official.jpg"
  },
  {
    "phone": "(202) 224-5344",
    "state": "Maine",
    "name": "Angus King",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Angus_King_official_portrait.jpg"
  },
  {
    "phone": "(202) 224-4524",
    "state": "Maryland",
    "name": "Ben Cardin",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Ben_Cardin_official_Senate_portrait.jpg"
  },
  {
    "phone": "(202) 224-4654",
    "state": "Maryland",
    "name": "Chris Van Hollen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/67/Chris_Van_Hollen_official_portrait%2C_2010.jpg"
  },
  {
    "phone": "(202) 224-2742",
    "state": "Massachusetts",
    "name": "Elizabeth Warren",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg"
  },
  {
    "phone": "(202) 224-4543",
    "state": "Massachusetts",
    "name": "Ed Markey",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Edward_Markey%2C_official_portrait%2C_114th_Congress.jpg"
  },
  {
    "phone": "(202) 224-6221",
    "state": "Michigan",
    "name": "Debbie Stabenow",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Debbie_Stabenow%2C_official_portrait_2.jpg"
  },
  {
    "phone": "(202) 224-4822",
    "state": "Michigan",
    "name": "Gary Peters",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Gary_Peters%2C_official_portrait%2C_114th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5641",
    "state": "Minnesota",
    "name": "Amy Klobuchar",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-3244",
    "state": "Minnesota",
    "name": "Al Franken",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/Al_Franken_Official_Senate_Portrait.jpg"
  },
  {
    "phone": "(202) 224-5054",
    "state": "Mississippi",
    "name": "Thad Cochran",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/CochranThad%28R-MS%29.jpg"
  },
  {
    "phone": "(202) 224-6253",
    "state": "Mississippi",
    "name": "Roger Wicker",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/SenatorRogerWicker%28R-MS%29.jpg"
  },
  {
    "phone": "(202) 224-5721",
    "state": "Missouri",
    "name": "Claire McCaskill",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Claire_McCaskill%2C_official_Senate_photo_portrait%2C_standing%2C_2007.jpg"
  },
  {
    "phone": "(202) 224-6154",
    "state": "Missouri",
    "name": "Roy Blunt",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/20/Roy_Blunt%2C_Official_Portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2651",
    "state": "Montana",
    "name": "Jon Tester",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Jon_Tester%2C_official_110th_Congress_photo.jpg"
  },
  {
    "phone": "(202) 224-2644",
    "state": "Montana",
    "name": "Steve Daines",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Steve_Daines_official_Senate_portrait.jpg"
  },
  {
    "phone": "(202) 224-6551",
    "state": "Nebraska",
    "name": "Deb Fischer",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/93/Deb_Fischer_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-4224",
    "state": "Nebraska",
    "name": "Ben Sasse",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Ben_Sasse_official_portrait_%28crop%29.jpg"
  },
  {
    "phone": "(202) 224-3542",
    "state": "Nevada",
    "name": "Dean Heller",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Dean_Heller%2C_Official_Senate_Portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-6244",
    "state": "Nevada",
    "name": "Catherine Cortez Masto",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Catherine_Cortez_Masto_official_portrait.jpg"
  },
  {
    "phone": "(202) 224-3324",
    "state": "New Hampshire",
    "name": "Jeanne Shaheen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Jeanne_Shaheen%2C_official_Senate_photo_portrait%2C_2009.jpg"
  },
  {
    "phone": "(202) 224-2841",
    "state": "New Hampshire",
    "name": "Maggie Hassan",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Maggie_Hassan%2C_official_portrait%2C_115th_Congress.jpg"
  },
  {
    "phone": "(202) 224-3224",
    "state": "New Jersey",
    "name": "Bob Menendez",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Robert_Menendez%2C_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-4744",
    "state": "New Jersey",
    "name": "Cory Booker",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5521",
    "state": "New Mexico",
    "name": "Tom Udall",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Tom_Udall_official_Senate_portrait.jpg"
  },
  {
    "phone": "(202) 224-6621",
    "state": "New Mexico",
    "name": "Martin Heinrich",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Martin_Heinrich%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-4451",
    "state": "New York",
    "name": "Chuck Schumer",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Senator_Chuck_Schumer_%28cropped%29.jpg"
  },
  {
    "phone": "(202) 224-6542",
    "state": "New York",
    "name": "Kirsten Gillibrand",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/df/Kirsten_Gillibrand%2C_official_portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-3154",
    "state": "North Carolina",
    "name": "Richard Burr",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Richard_Burr_official_portrait.jpg"
  },
  {
    "phone": "(202) 224-6342",
    "state": "North Carolina",
    "name": "Thom Tillis",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Senator_Thom_Tillis_Official_Portrait.jpg"
  },
  {
    "phone": "(202) 224-2043",
    "state": "North Dakota",
    "name": "John Hoeven",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Hoeven_Official_Portrait_2014.JPG"
  },
  {
    "phone": "(202) 224-2551",
    "state": "North Dakota",
    "name": "Heidi Heitkamp",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Heidi_Heitkamp_official_portrait_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2315",
    "state": "Ohio",
    "name": "Sherrod Brown",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/78/Sherrod_Brown_official_photo_2009_2.jpg"
  },
  {
    "phone": "(202) 224-3353",
    "state": "Ohio",
    "name": "Rob Portman",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Rob_Portman%2C_official_portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-4721",
    "state": "Oklahoma",
    "name": "Jim Inhofe",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Jim_Inhofe%2C_official_photo_portrait%2C_2007.jpg"
  },
  {
    "phone": "(202) 224-5754",
    "state": "Oklahoma",
    "name": "James Lankford",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/James_Lankford_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-3753",
    "state": "Oregon",
    "name": "Ron Wyden",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Ron_Wyden_official_portrait_crop.jpg"
  },
  {
    "phone": "(202) 224-5244",
    "state": "Oregon",
    "name": "Jeff Merkley",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Jeff_Merkley.jpg"
  },
  {
    "phone": "(202) 224-6324",
    "state": "Pennsylvania",
    "name": "Bob Casey Jr.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Senator_Bob_Casey_official_photo_2007.jpg"
  },
  {
    "phone": "(202) 224-4254",
    "state": "Pennsylvania",
    "name": "Pat Toomey",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/24/Pat_Toomey%2C_Official_Portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-4642",
    "state": "Rhode Island",
    "name": "Jack Reed",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Jack_Reed%2C_official_portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2921",
    "state": "Rhode Island",
    "name": "Sheldon Whitehouse",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sheldon_Whitehouse_2010.jpg"
  },
  {
    "phone": "(202) 224-5972",
    "state": "South Carolina",
    "name": "Lindsey Graham",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Lindsey_Graham%2C_Official_Portrait_2006.jpg"
  },
  {
    "phone": "(202) 224-6121",
    "state": "South Carolina",
    "name": "Tim Scott",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tim_Scott%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5842",
    "state": "South Dakota",
    "name": "John Thune",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/John_Thune%2C_official_portrait%2C_111th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2321",
    "state": "South Dakota",
    "name": "Mike Rounds",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/14/Mike_Rounds_official_Senate_portrait.jpg"
  },
  {
    "phone": "(202) 224-4944",
    "state": "Tennessee",
    "name": "Lamar Alexander",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/LamarAlexander.jpg"
  },
  {
    "phone": "(202) 224-3344",
    "state": "Tennessee",
    "name": "Bob Corker",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bob_Corker_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-2934",
    "state": "Texas",
    "name": "John Cornyn",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/John_Cornyn_official_portrait%2C_2009.jpg"
  },
  {
    "phone": "(202) 224-5922",
    "state": "Texas",
    "name": "Ted Cruz",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Ted_Cruz%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5251",
    "state": "Utah",
    "name": "Orrin Hatch",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Orrin_Hatch%2C_Official_Photograph.jpg"
  },
  {
    "phone": "(202) 224-5444",
    "state": "Utah",
    "name": "Mike Lee",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mike_Lee_official_portrait_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-4242",
    "state": "Vermont",
    "name": "Patrick Leahy",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Leahy2009.jpg"
  },
  {
    "phone": "(202) 224-5141",
    "state": "Vermont",
    "name": "Bernie Sanders",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg"
  },
  {
    "phone": "(202) 224-4024",
    "state": "Virginia",
    "name": "Mark Warner",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Mark_Warner%2C_official_111th_Congress_photo_portrait.jpg"
  },
  {
    "phone": "(202) 224-2023",
    "state": "Virginia",
    "name": "Tim Kaine",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Tim_Kaine%2C_official_113th_Congress_photo_portrait.jpg"
  },
  {
    "phone": "(202) 224-3441",
    "state": "Washington",
    "name": "Patty Murray",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Patty_Murray%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-2621",
    "state": "Washington",
    "name": "Maria Cantwell",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Maria_Cantwell%2C_official_portrait%2C_110th_Congress.jpg"
  },
  {
    "phone": "(202) 224-6472",
    "state": "West Virginia",
    "name": "Joe Manchin",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Joe_Manchin_official_portrait_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-3954",
    "state": "West Virginia",
    "name": "Shelley Moore Capito",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Shelley_Moore_Capito_official_Senate_photo.jpg"
  },
  {
    "phone": "(202) 224-5653",
    "state": "Wisconsin",
    "name": "Ron Johnson",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ron_Johnson%2C_official_portrait%2C_112th_Congress.jpg"
  },
  {
    "phone": "(202) 224-5323",
    "state": "Wisconsin",
    "name": "Tammy Baldwin",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress.jpg"
  },
  {
    "phone": "(202) 224-6441",
    "state": "Wyoming",
    "name": "Mike Enzi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mike_Enzi%2C_official_portrait%2C_111th_Congress.jpg"
  },
  {
    "phone": "(202) 224-3424",
    "state": "Wyoming",
    "name": "John Barrasso",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fb/John_Barrasso_official_portrait_112th_Congress.jpg"
  }
]
