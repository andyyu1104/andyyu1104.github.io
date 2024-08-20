
let gitRepo = document.querySelector("#repo");

fetch("https://api.github.com/users/andyyu1104/repos").then(
    response => {
        if (response.ok) {
            return response.json()
        } else {
            console.log(response.statusText)
        }
    }
).then(results => {
    const filterResults = results.filter((result) => (result.name != ("andyyu1104")) && (result.name != ("andyyu1104.github.io")));
    //console.log(filterResults);
    for (const result of filterResults) {
        let repo = `
            <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                    <a href=${result.html_url} target="_blank"
                        class="image featured"><img src=https://raw.githubusercontent.com/andyyu1104/${result.name}/${result.default_branch}/thumbnail.png
                            alt="${result.name}" /></a>
                    <h3><a href=${result.html_url}
                        target="_blank">${result.name.replace(/-/g, " ")}</a>
                    </h3>
                    <p>${result.description}</p>
                </article>
            </div>
            `
        gitRepo.insertAdjacentHTML("afterbegin", repo);
    }
});


/* insert html template
<div class="col-4 col-6-medium col-12-small">
    <article class="box style2">
        <a href="https://github.com/andyyu1104/Cryptography-Teaching-Tool" target="_blank"
            class="image featured"><img src="images/CryptoGame.png"
                alt="Cryptography teaching tool" /></a>
        <h3><a href="https://github.com/andyyu1104/Cryptography-Teaching-Tool"
            target="_blank">Cryptography teaching tool</a>
        </h3>
        <p>This is a computer science final year project about building a cryptography teaching tool.
            This project targets school children players to learn cryptographic topics, like classic
            cipher, modern cipher, password
            salting, and online attack. Written in Unity engine and C#.</p>
    </article>
</div>
*/