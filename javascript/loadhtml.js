var targetElement = document.getElementById('snippet');

const loadHTML = name => {
    fetch( `/DocumentationSnippets/${ name }.html`)
        .then(res => {
            if (res.ok) {
                return res.text();
                
            }
            else {
                alert("the html couldnt be found");
            }
        })
        .then(htmlSnippet => {
           
            
          
            targetElement.innerHTML = htmlSnippet;
        });
};
