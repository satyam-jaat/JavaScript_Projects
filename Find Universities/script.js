window.onload = () => {
    let url = "http://universities.hipolabs.com/search?name=";
    let btn = document.querySelector("button");

    btn.addEventListener("click", async () => {
        let country = document.querySelector("input").value;
        let data = await getColleges(country);
        show(data);
    });

    function show(data) {
        let list = document.querySelector("#list");
        list.innerText = "";
        for (let d of data) {
            console.log(d.name);
            let li = document.createElement("li");
            li.innerText = d.name;
            list.appendChild(li);
        }
    }

    async function getColleges(country) {
        try {
            let res = await axios.get(url + country);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}
