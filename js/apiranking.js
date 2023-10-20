/* const url = 'https://myanimelist.p.rapidapi.com/manga/top/manga';
const topMangas = document.querySelector("#topMangas")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '77765b8a69msh0713a395a511ab9p139dacjsnd0a397940068',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

 */