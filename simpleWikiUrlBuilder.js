
wikiURL = window.location.hostname.toString() 
checkIsWikiURL(wikiURL)

function checkIsWikiURL(url){
    domain = url.split(".")
    if (domain[1] == "wikipedia") {
        toggleSimpleAndStandard(window.location.toString())
    }
    else {
        alert("Simple Wiki only works on Wikipedia.org pages")
    }
}

function toggleSimpleAndStandard(url){
    splitUrl = url.split(/[./]/)
    newUrl = url
    if (splitUrl[2] == "simple"){  // Toggle to normal wiki
        newUrl = url.replace(splitUrl[2], "en")
    } else {                    // Toggle to simple wiki
        newUrl = url.replace(splitUrl[2], "simple")
    }
    window.open(newUrl, "_self");
}