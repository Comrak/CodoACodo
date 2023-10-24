// // LLAMADO A LA API QUEDA COMENTADO POR QUE LOS INTENTOS SON LIMITADOS
// const url = 'https://myanimelist.p.rapidapi.com/manga/top/all';
// const topMangas = document.querySelector("#topMangas")
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '23a3e5a543msh7242fcbf53bd8b4p16e73ejsnb375c61c88a9',
// 		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
// 	}
// };

// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         result.forEach(mangas => {
//             //aca creo los elementos HTML
//             const titulo2 = document.createElement("h2");
//               const puntos2 = document.createElement("p");
//               const rango2 = document.createElement("p");
//               const img2 = document.createElement("img");
//               const section = document.createElement("section");
//               const titulo = document.createElement("article");
//               const puntos = document.createElement("article");
//               const rango = document.createElement("article");
//               const img = document.createElement("article");
//               //aca les asigno los valores
//               rango2.innerText = `El rango del manga es ${mangas.rank}`;
//               puntos2.innerText = `El puntaje del manga es ${mangas.score}`;
//               img2.src = mangas.picture_url;
//               img2.style.width = "50%";
//               img2.style.height = "50%";
//               titulo2.innerText = mangas.title;
//               //aca los agrego al HTML
//               /* topMangas.append(spacio); */
//               topMangas.append(section);
//               section.append(img);
//               section.append(titulo)
//               section.append(puntos);
//               section.append(rango);
//               img.append(img2);
//               titulo.append(titulo2)
//               puntos.append(puntos2);
//               rango.append(rango2);  
//         })
        
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();


// aca estamos en modo de pruebas con un json statico



let data = [
    {
      "title": "Berserk",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/157897.jpg?s=f03b5f8bfeb0b0962b7d5e7cb9a8d0d3",
      "myanimelist_url": "https://myanimelist.net/manga/2/Berserk",
      "myanimelist_id": 2,
      "rank": 1,
      "score": 9.46,
      "type": "Manga (? vols)",
      "aired_on": "Aug 1989 -",
      "members": 590745
    },
    {
      "title": "JoJo no Kimyou na Bouken Part 7: Steel Ball Run",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/179882.jpg?s=dac8109140406ca296cf4946296b5037",
      "myanimelist_url": "https://myanimelist.net/manga/1706/JoJo_no_Kimyou_na_Bouken_Part_7__Steel_Ball_Run",
      "myanimelist_id": 1706,
      "rank": 2,
      "score": 9.28,
      "type": "Manga (24 vols)",
      "aired_on": "Jan 2004 - Apr 2011",
      "members": 225009
    },
    {
      "title": "One Piece",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/253146.jpg?s=e5286481ed2b4c11ab39d1420110dc43",
      "myanimelist_url": "https://myanimelist.net/manga/13/One_Piece",
      "myanimelist_id": 13,
      "rank": 3,
      "score": 9.21,
      "type": "Manga (? vols)",
      "aired_on": "Jul 1997 -",
      "members": 536267
    },
    {
      "title": "Vagabond",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/259070.jpg?s=44d04f9e5ce80fa5af1bd6dc74241e81",
      "myanimelist_url": "https://myanimelist.net/manga/656/Vagabond",
      "myanimelist_id": 656,
      "rank": 4,
      "score": 9.2,
      "type": "Manga (37 vols)",
      "aired_on": "Sep 1998 - May 2015",
      "members": 309620
    },
    {
      "title": "Monster",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/258224.jpg?s=f65b4f0f7c01818fedf3987591ab7ce2",
      "myanimelist_url": "https://myanimelist.net/manga/1/Monster",
      "myanimelist_id": 1,
      "rank": 5,
      "score": 9.14,
      "type": "Manga (18 vols)",
      "aired_on": "Dec 1994 - Dec 2001",
      "members": 207795
    },
    {
      "title": "Slam Dunk",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/258749.jpg?s=fad0d2cae56806beefaca50b445fa0dd",
      "myanimelist_url": "https://myanimelist.net/manga/51/Slam_Dunk",
      "myanimelist_id": 51,
      "rank": 6,
      "score": 9.07,
      "type": "Manga (31 vols)",
      "aired_on": "Sep 1990 - Jun 1996",
      "members": 143640
    },
    {
      "title": "Fullmetal Alchemist",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/243675.jpg?s=8cb0a643f8a7597514447f2dd0e4ffc2",
      "myanimelist_url": "https://myanimelist.net/manga/25/Fullmetal_Alchemist",
      "myanimelist_id": 25,
      "rank": 7,
      "score": 9.04,
      "type": "Manga (27 vols)",
      "aired_on": "Jul 2001 - Sep 2010",
      "members": 272917
    },
    {
      "title": "Grand Blue",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/166124.jpg?s=3a3e1279dd192ea90a32ff6bdfdbe4dc",
      "myanimelist_url": "https://myanimelist.net/manga/70345/Grand_Blue",
      "myanimelist_id": 70345,
      "rank": 8,
      "score": 9.03,
      "type": "Manga (? vols)",
      "aired_on": "Apr 2014 -",
      "members": 156750
    },
    {
      "title": "Oyasumi Punpun",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/266834.jpg?s=0e22ce75cad9b1b0d7c61f16d4d8fbe2",
      "myanimelist_url": "https://myanimelist.net/manga/4632/Oyasumi_Punpun",
      "myanimelist_id": 4632,
      "rank": 9,
      "score": 9.02,
      "type": "Manga (13 vols)",
      "aired_on": "Mar 2007 - Nov 2013",
      "members": 380279
    },
    {
      "title": "Vinland Saga",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/188925.jpg?s=18b1d30b74bf96b476068901f579e408",
      "myanimelist_url": "https://myanimelist.net/manga/642/Vinland_Saga",
      "myanimelist_id": 642,
      "rank": 10,
      "score": 9,
      "type": "Manga (? vols)",
      "aired_on": "Apr 2005 -",
      "members": 251028
    },
    {
      "title": "Kingdom",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/171872.jpg?s=21a45c6d977c58c19e3075b015c4ee39",
      "myanimelist_url": "https://myanimelist.net/manga/16765/Kingdom",
      "myanimelist_id": 16765,
      "rank": 11,
      "score": 8.99,
      "type": "Manga (? vols)",
      "aired_on": "Jan 2006 -",
      "members": 149573
    },
    {
      "title": "Houseki no Kuni",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/115443.jpg?s=9795cb8739785d402a60e5aade4ddf3b",
      "myanimelist_url": "https://myanimelist.net/manga/44489/Houseki_no_Kuni",
      "myanimelist_id": 44489,
      "rank": 12,
      "score": 8.96,
      "type": "Manga (? vols)",
      "aired_on": "Oct 2012 -",
      "members": 104456
    },
    {
      "title": "20th Century Boys",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/5/260006.jpg?s=b437a7b1e1f15ff9a5759121351e47d5",
      "myanimelist_url": "https://myanimelist.net/manga/3/20th_Century_Boys",
      "myanimelist_id": 3,
      "rank": 13,
      "score": 8.94,
      "type": "Manga (22 vols)",
      "aired_on": "Sep 1999 - Apr 2006",
      "members": 212042
    },
    {
      "title": "Monogatari Series: First Season",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/5/173535.jpg?s=b3742ac411067d352b351824b11b5836",
      "myanimelist_url": "https://myanimelist.net/manga/14893/Monogatari_Series__First_Season",
      "myanimelist_id": 14893,
      "rank": 14,
      "score": 8.94,
      "type": "Light Novel (6 vols)",
      "aired_on": "Nov 2006 - Jul 2010",
      "members": 54192
    },
    {
      "title": "Ashita no Joe",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/268827.jpg?s=55e8f76b4a90a8b7d167fa1b9df3d0da",
      "myanimelist_url": "https://myanimelist.net/manga/1303/Ashita_no_Joe",
      "myanimelist_id": 1303,
      "rank": 15,
      "score": 8.93,
      "type": "Manga (20 vols)",
      "aired_on": "Jan 1968 - May 1973",
      "members": 44892
    },
    {
      "title": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/177958.jpg?s=53f4b8f50c92e541bdd3e1d662e9b3eb",
      "myanimelist_url": "https://myanimelist.net/manga/89357/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e",
      "myanimelist_id": 89357,
      "rank": 16,
      "score": 8.92,
      "type": "Light Novel (14 vols)",
      "aired_on": "May 2015 - Sep 2019",
      "members": 74529
    },
    {
      "title": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/188896.jpg?s=107a5af07f0e6992faa286f94596f231",
      "myanimelist_url": "https://myanimelist.net/manga/90125/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen",
      "myanimelist_id": 90125,
      "rank": 17,
      "score": 8.92,
      "type": "Manga (28 vols)",
      "aired_on": "May 2015 - Nov 2022",
      "members": 238775
    },
    {
      "title": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e: 2-nensei-hen",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/235363.jpg?s=c149025727da0c0cb037d23e25677c92",
      "myanimelist_url": "https://myanimelist.net/manga/123992/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e__2-nensei-hen",
      "myanimelist_id": 123992,
      "rank": 18,
      "score": 8.92,
      "type": "Light Novel (? vols)",
      "aired_on": "Jan 2020 -",
      "members": 29167
    },
    {
      "title": "Mikkakan no Koufuku",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/248674.jpg?s=8df50c1467deb0ebeb25d3bfe1b4ef13",
      "myanimelist_url": "https://myanimelist.net/manga/126479/Mikkakan_no_Koufuku",
      "myanimelist_id": 126479,
      "rank": 19,
      "score": 8.91,
      "type": "Novel (1 vols)",
      "aired_on": "Dec 2013 - Dec 2013",
      "members": 17999
    },
    {
      "title": "Monogatari Series: Second Season",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/181553.jpg?s=f27f4bdebd5a5d90996112eda295cf1b",
      "myanimelist_url": "https://myanimelist.net/manga/23751/Monogatari_Series__Second_Season",
      "myanimelist_id": 23751,
      "rank": 20,
      "score": 8.91,
      "type": "Light Novel (6 vols)",
      "aired_on": "Oct 2010 - Dec 2011",
      "members": 20841
    },
    {
      "title": "Real",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/115969.jpg?s=5a4f02899c76aa4e575a7e877b20b4d8",
      "myanimelist_url": "https://myanimelist.net/manga/657/Real",
      "myanimelist_id": 657,
      "rank": 21,
      "score": 8.91,
      "type": "Manga (? vols)",
      "aired_on": "Oct 1999 -",
      "members": 72171
    },
    {
      "title": "GTO",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/172982.jpg?s=12df0730d20b4e6c9294bf8293feb5ee",
      "myanimelist_url": "https://myanimelist.net/manga/336/GTO",
      "myanimelist_id": 336,
      "rank": 22,
      "score": 8.89,
      "type": "Manga (25 vols)",
      "aired_on": "Dec 1996 - Jan 2002",
      "members": 151165
    },
    {
      "title": "3-gatsu no Lion",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/52283.jpg?s=4444b5a8d50383a733a6fd2275f9b0af",
      "myanimelist_url": "https://myanimelist.net/manga/1224/3-gatsu_no_Lion",
      "myanimelist_id": 1224,
      "rank": 23,
      "score": 8.89,
      "type": "Manga (? vols)",
      "aired_on": "Jul 2007 -",
      "members": 59684
    },
    {
      "title": "Yotsuba to!",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/5/259524.jpg?s=65d98a8441b880cb045253b201b2a595",
      "myanimelist_url": "https://myanimelist.net/manga/104/Yotsuba_to",
      "myanimelist_id": 104,
      "rank": 24,
      "score": 8.87,
      "type": "Manga (? vols)",
      "aired_on": "Mar 2003 -",
      "members": 139017
    },
    {
      "title": "Monogatari Series: Final Season",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/181554.jpg?s=bbd4d7cf1d64d06cfec15220f9c39540",
      "myanimelist_url": "https://myanimelist.net/manga/44227/Monogatari_Series__Final_Season",
      "myanimelist_id": 44227,
      "rank": 25,
      "score": 8.86,
      "type": "Light Novel (6 vols)",
      "aired_on": "Sep 2012 - Sep 2014",
      "members": 16844
    },
    {
      "title": "Koe no Katachi",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/120529.jpg?s=7d7fdc308409589ca579b5a9376effd9",
      "myanimelist_url": "https://myanimelist.net/manga/56805/Koe_no_Katachi",
      "myanimelist_id": 56805,
      "rank": 26,
      "score": 8.86,
      "type": "Manga (7 vols)",
      "aired_on": "Aug 2013 - Nov 2014",
      "members": 251486
    },
    {
      "title": "Ookami to Koushinryou",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/153860.jpg?s=3981f0bee3695e1a75744764f8d1b257",
      "myanimelist_url": "https://myanimelist.net/manga/9115/Ookami_to_Koushinryou",
      "myanimelist_id": 9115,
      "rank": 27,
      "score": 8.84,
      "type": "Light Novel (? vols)",
      "aired_on": "Feb 2006 -",
      "members": 59640
    },
    {
      "title": "Haikyuu!!",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/258225.jpg?s=4ea4d6551d8893a82e10ef164d06a00a",
      "myanimelist_url": "https://myanimelist.net/manga/35243/Haikyuu",
      "myanimelist_id": 35243,
      "rank": 28,
      "score": 8.84,
      "type": "Manga (45 vols)",
      "aired_on": "Feb 2012 - Jul 2020",
      "members": 196585
    },
    {
      "title": "Akatsuki no Yona",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/269202.jpg?s=afdc44fcf21ebb19cc21d3d430c1da6c",
      "myanimelist_url": "https://myanimelist.net/manga/21525/Akatsuki_no_Yona",
      "myanimelist_id": 21525,
      "rank": 29,
      "score": 8.83,
      "type": "Manga (? vols)",
      "aired_on": "Aug 2009 -",
      "members": 121333
    },
    {
      "title": "86",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/194315.jpg?s=3844c469c8f810b8f496b0beddcfaf5c",
      "myanimelist_url": "https://myanimelist.net/manga/104039/86",
      "myanimelist_id": 104039,
      "rank": 30,
      "score": 8.83,
      "type": "Light Novel (? vols)",
      "aired_on": "Feb 2017 -",
      "members": 32667
    },
    {
      "title": "Kaze no Tani no Nausicaä",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/259856.jpg?s=417999b3b17c01e2991ceb2b5d1662d2",
      "myanimelist_url": "https://myanimelist.net/manga/651/Kaze_no_Tani_no_Nausicaä",
      "myanimelist_id": 651,
      "rank": 31,
      "score": 8.83,
      "type": "Manga (7 vols)",
      "aired_on": "Oct 1982 - Feb 1994",
      "members": 52287
    },
    {
      "title": "Umineko no Naku Koro ni Chiru - Episode 8: Twilight of the Golden Witch",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/206205.jpg?s=96c2a8b6097d3d142c66342609fe919c",
      "myanimelist_url": "https://myanimelist.net/manga/34053/Umineko_no_Naku_Koro_ni_Chiru_-_Episode_8__Twilight_of_the_Golden_Witch",
      "myanimelist_id": 34053,
      "rank": 32,
      "score": 8.82,
      "type": "Manga (9 vols)",
      "aired_on": "Jan 2012 - Jun 2015",
      "members": 13908
    },
    {
      "title": "Re:Zero kara Hajimeru Isekai Seikatsu",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/129447.jpg?s=59022093f8f6937a00b6dc9c9f668c00",
      "myanimelist_url": "https://myanimelist.net/manga/74697/Re_Zero_kara_Hajimeru_Isekai_Seikatsu",
      "myanimelist_id": 74697,
      "rank": 33,
      "score": 8.79,
      "type": "Light Novel (? vols)",
      "aired_on": "Jan 2014 -",
      "members": 61904
    },
    {
      "title": "Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/5/260043.jpg?s=71266253d4f302ec76848f2d24eed5de",
      "myanimelist_url": "https://myanimelist.net/manga/100448/Jumyou_wo_Kaitotte_Moratta_Ichinen_ni_Tsuki_Ichimanen_de",
      "myanimelist_id": 100448,
      "rank": 34,
      "score": 8.79,
      "type": "Manga (3 vols)",
      "aired_on": "Aug 2016 - Oct 2017",
      "members": 137908
    },
    {
      "title": "Made in Abyss",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/161645.jpg?s=58beeec91ad4532699a2b1da3c4d4cda",
      "myanimelist_url": "https://myanimelist.net/manga/91941/Made_in_Abyss",
      "myanimelist_id": 91941,
      "rank": 35,
      "score": 8.78,
      "type": "Manga (? vols)",
      "aired_on": "Oct 2012 -",
      "members": 140540
    },
    {
      "title": "Yahari Ore no Seishun Love Comedy wa Machigatteiru.",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/122461.jpg?s=e2c4751d530c14cf510a1e8f4ce69e39",
      "myanimelist_url": "https://myanimelist.net/manga/40171/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru",
      "myanimelist_id": 40171,
      "rank": 36,
      "score": 8.78,
      "type": "Light Novel (18 vols)",
      "aired_on": "Mar 2011 - Apr 2021",
      "members": 66564
    },
    {
      "title": "Uchuu Kyoudai",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/166256.jpg?s=1d3e9084ba8828ce8938ad1d5777febf",
      "myanimelist_url": "https://myanimelist.net/manga/14483/Uchuu_Kyoudai",
      "myanimelist_id": 14483,
      "rank": 37,
      "score": 8.78,
      "type": "Manga (? vols)",
      "aired_on": "Dec 2007 -",
      "members": 31204
    },
    {
      "title": "Nana",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/262324.jpg?s=79dc410cc9c1c5a2b57a1f183625c20b",
      "myanimelist_url": "https://myanimelist.net/manga/28/Nana",
      "myanimelist_id": 28,
      "rank": 38,
      "score": 8.77,
      "type": "Manga (21 vols)",
      "aired_on": "May 2000 - May 2009",
      "members": 117875
    },
    {
      "title": "Mushoku Tensei: Isekai Ittara Honki Dasu",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/120337.jpg?s=bac74eab7cfacca199e1674799dfe095",
      "myanimelist_url": "https://myanimelist.net/manga/70261/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu",
      "myanimelist_id": 70261,
      "rank": 39,
      "score": 8.77,
      "type": "Light Novel (26 vols)",
      "aired_on": "Jan 2014 - Nov 2022",
      "members": 68405
    },
    {
      "title": "Chainsaw Man",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/216464.jpg?s=be8b827c88ca462abed2d034b1a98dae",
      "myanimelist_url": "https://myanimelist.net/manga/116778/Chainsaw_Man",
      "myanimelist_id": 116778,
      "rank": 40,
      "score": 8.76,
      "type": "Manga (? vols)",
      "aired_on": "Dec 2018 -",
      "members": 499569
    },
    {
      "title": "One Punch-Man",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/80661.jpg?s=3eb9cd0c329dacd00f6c318ee0f5945f",
      "myanimelist_url": "https://myanimelist.net/manga/44347/One_Punch-Man",
      "myanimelist_id": 44347,
      "rank": 41,
      "score": 8.75,
      "type": "Manga (? vols)",
      "aired_on": "Jun 2012 -",
      "members": 426601
    },
    {
      "title": "Utsuro no Hako to Zero no Maria",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/175662.jpg?s=b9b22bf0e733997a1325b6461032eeac",
      "myanimelist_url": "https://myanimelist.net/manga/55215/Utsuro_no_Hako_to_Zero_no_Maria",
      "myanimelist_id": 55215,
      "rank": 42,
      "score": 8.73,
      "type": "Light Novel (7 vols)",
      "aired_on": "Jan 2009 - Jun 2015",
      "members": 97983
    },
    {
      "title": "Mushishi",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/159514.jpg?s=83c655376f84797c601792fa52e094ea",
      "myanimelist_url": "https://myanimelist.net/manga/418/Mushishi",
      "myanimelist_id": 418,
      "rank": 43,
      "score": 8.73,
      "type": "Manga (10 vols)",
      "aired_on": "Nov 1999 - Aug 2008",
      "members": 74261
    },
    {
      "title": "Sayonara Eri",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/263979.jpg?s=60b9a986cc62dabaab7e784d9f752a9c",
      "myanimelist_url": "https://myanimelist.net/manga/145863/Sayonara_Eri",
      "myanimelist_id": 145863,
      "rank": 44,
      "score": 8.73,
      "type": "Manga (1 vols)",
      "aired_on": "Apr 2022 - Apr 2022",
      "members": 67277
    },
    {
      "title": "Hunter x Hunter",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/253119.jpg?s=f9d25027f52ceb3d4f127ab96c3e0e5e",
      "myanimelist_url": "https://myanimelist.net/manga/26/Hunter_x_Hunter",
      "myanimelist_id": 26,
      "rank": 45,
      "score": 8.72,
      "type": "Manga (? vols)",
      "aired_on": "Mar 1998 -",
      "members": 242710
    },
    {
      "title": "Death Note",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/258245.jpg?s=dc85ade0b0e1083e92fd8c4509808626",
      "myanimelist_url": "https://myanimelist.net/manga/21/Death_Note",
      "myanimelist_id": 21,
      "rank": 46,
      "score": 8.7,
      "type": "Manga (12 vols)",
      "aired_on": "Dec 2003 - May 2006",
      "members": 366254
    },
    {
      "title": "Solo Leveling",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/3/222295.jpg?s=b3abea95ceaccea8adf223bd0e4047b6",
      "myanimelist_url": "https://myanimelist.net/manga/121496/Solo_Leveling",
      "myanimelist_id": 121496,
      "rank": 47,
      "score": 8.7,
      "type": "Manhwa (? vols)",
      "aired_on": "Mar 2018 - Dec 2021",
      "members": 397560
    },
    {
      "title": "The Horizon",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/229331.jpg?s=c0ea9fd43c57983166e994940f50b441",
      "myanimelist_url": "https://myanimelist.net/manga/125036/The_Horizon",
      "myanimelist_id": 125036,
      "rank": 48,
      "score": 8.7,
      "type": "Manhwa (3 vols)",
      "aired_on": "Mar 2016 - Jul 2016",
      "members": 63886
    },
    {
      "title": "Hajime no Ippo",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/2/250313.jpg?s=6dc41bd9010faf794e434cf14c20a7a9",
      "myanimelist_url": "https://myanimelist.net/manga/7/Hajime_no_Ippo",
      "myanimelist_id": 7,
      "rank": 49,
      "score": 8.69,
      "type": "Manga (? vols)",
      "aired_on": "Sep 1989 -",
      "members": 74549
    },
    {
      "title": "Shoujo Shuumatsu Ryokou",
      "picture_url": "https://cdn.myanimelist.net/r/50x70/images/manga/1/185918.jpg?s=e1a2d052b694eaad2364ed1d7a33b799",
      "myanimelist_url": "https://myanimelist.net/manga/72467/Shoujo_Shuumatsu_Ryokou",
      "myanimelist_id": 72467,
      "rank": 50,
      "score": 8.69,
      "type": "Manga (6 vols)",
      "aired_on": "Feb 2014 - Jan 2018",
      "members": 54777
    }
]
const topMangas = document.querySelector("#topMangas")
data.forEach(mangas => {  
  console.log(mangas);
  console.log(mangas.image_url);
    const titulo2 = document.createElement("h2");
    const puntos2 = document.createElement("p");
    const rango2 = document.createElement("p");
    const img2 = document.createElement("img");
    const section = document.createElement("section");
    const titulo = document.createElement("article");
    const puntos = document.createElement("article");
    const rango = document.createElement("article");
    const img = document.createElement("article");
    //aca les asigno los valores
    rango2.innerText = `El rango del manga es ${mangas.rank}`;
    puntos2.innerText = `El puntaje del manga es ${mangas.score}`;
    img2.src = mangas.picture_url;
    img2.style.width = "50%";
    img2.style.height = "50%";
    titulo2.innerText = mangas.title;
    //aca los agrego al HTML
    /* topMangas.append(spacio); */
    topMangas.append(section);
    section.append(img);
    section.append(titulo)
    section.append(puntos);
    section.append(rango);
    img.append(img2);
    titulo.append(titulo2)
    puntos.append(puntos2);
    rango.append(rango2);  
})