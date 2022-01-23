const buttons = document.querySelectorAll(".buttons input")

const desactiveButton = () =>{
    buttons.forEach(element => {
        
        element.dataset.active = "false"
    
    })
}


const reactClick = (e) => {
    desactiveButton()
    removerElements()
    element =e.target
    element.dataset.active = "true"
}


const vueClick = (e) => {
    desactiveButton()
    removerElements()
    element =e.target
    element.dataset.active = "true"
}

const resposiveClick = (e) => {
    desactiveButton()
    element =e.target
    element.dataset.active = "true"
    elementsDefault()
    
}



const removerElements = () => {
    const projects = document.querySelector(".projects-container")
    projects.innerHTML = ''
    for(let i = 0; i < 3; i++){
        projects.innerHTML += /*html*/ `
            <div class="projects-content" style="width:329px ;height:430px;background-color:white;">
                <div style="width:226px ;height:334px;padding:20px;background-color:rgb(96 92 92 / 16%);margin:20px auto;border-radius:12px">
                    <p style="color: #333333;text-align:center;">Coming soon</P>
                </div>
            </div>`
    }
}


const elementsDefault = () => {
    const projects = document.querySelector(".projects-container")
    projects.innerHTML =  /*html*/`
        <div class="projects-content">
            <div class="project-img">
                <img src="images/checout.png" alt="project Checkout">
            </div>
            <div class="project-tags">
                <span>#HTML</span> <span>#CSS</span> <span>#responsive</span>
            </div>
            <div class="project-info">
                <h4>Checkout</h4>
                <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
            </div>
            <div class="project-buttons">
                <input type="button" value="Demo">
                <input type="button" value="Code">
            </div>
        </div>

        <div class="projects-content">
            <div class="project-img">
                <img src="images/blog.png" alt="project blog">
            </div>
            <div class="project-tags">
                <span>#HTML</span> <span>#CSS</span> <span>#responsive</span>
            </div>
            <div class="project-info">
                <h4>Recipe Blog</h4>
                <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
            </div>
            <div class="project-buttons">
                <input type="button" value="Demo">
                <input type="button" value="Code">
            </div>
        </div>

        <div class="projects-content">
            <div class="project-img">
                <img src="images/gallery.png" alt="project gallery">
            </div>
            <div class="project-tags">
                <span>#HTML</span> <span>#CSS</span> <span>#responsive</span>
            </div>
            <div class="project-info">
                <h4>My Gallery</h4>
                <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
            </div>
            <div class="project-buttons">
                <input type="button" value="Demo">
                <input type="button" value="Code">
            </div>
        </div>
    `
}