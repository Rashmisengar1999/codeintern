
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8208a79bf3msha700e186dd816acp108732jsnd11db5da3deb',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn = document.querySelector(".btn")
const summary = document.querySelector(".summary")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.querySelector("#url").value
    const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2';

    summary.innerText = "Please wait article is summarizing !!"


    fetch(url, options)
    .then(data => data.json())
    .then(data => {
        //console.log(data.summary)
        summary.innerText = data?.summary
    })
    .catch(error => {
        console.log(error)
    })
})