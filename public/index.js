async function getHikeData() {
    const data = await axios.get('/washingtonhikes/api/hikes');
    return data;
}

async function App() {
    res = await getHikeData()
    hikes = res.data;

    document.body.innerHTML = (`
        <h1>Washington Hikes</h1>
        ${hikes.map((hike) => {
            return (`
                <h2>${hike.title}<h2/>
            `);
        }).join('')}
    `)
}

App();
