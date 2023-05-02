export async function postURL(longUrl) {
    console.log("sending long url: ", longUrl)
    const response = await fetch("http://localhost:10000/api/v1/short", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({long_url: longUrl})
    })
    return await response.json()
}
