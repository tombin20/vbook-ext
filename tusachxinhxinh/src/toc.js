function execute(url) {
    url = url.replace("tusachxinhxinh.com","tusachxinhxinh.online")
    var doc = Http.get(url).html()
    var chapters = doc.select(".table-striped tbody tr")
    var listChapter = []
    chapters.forEach(chapter =>listChapter.push({
        name: chapter.select(".hidden-xs").first().text(),
        url: chapter.select("td").get(1).select("a").attr("href"),
        host: "https://tusachxinhxinh.online"
    }))
    return Response.success(listChapter.reverse())
}
    