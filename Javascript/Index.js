const Base = document.querySelector(".content_Real")
const fond = document.querySelector(".modale_Info")
const elementReal = real_list


function generation(elementReal){
    Base.innerHTML = ""

    elementReal.forEach((e) =>{
        const divBase = document.createElement("div")
        divBase.className = "div_Real"
        divBase.style.backgroundImage = "URL(" + e.img_Fond + ")"
        Base.appendChild(divBase)

        const divInfo = document.createElement("div")
        divInfo.className = "info"
        divBase.appendChild(divInfo)

        const h5 = document.createElement("h5")
        h5.innerText = e.titre
        divInfo.appendChild(h5)

        const divIcone = document.createElement("div")
        divIcone.classList = "content_icone"
        divInfo.appendChild(divIcone)

        let arrayIcone = e.code_Langage

        arrayIcone.forEach((a) => {
            const imgIcone = document.createElement("img")
            imgIcone.src = a
            imgIcone.alt = "Icone Langage"
            imgIcone.classList = "icone"
            divIcone.appendChild(imgIcone)
        })

        const divClick = document.createElement("div")
        divClick.className = "element_click"
        divClick.id = e.id
        divBase.appendChild(divClick)
    })
}

function modaleRealisation(){
    let selectReal = document.querySelectorAll(".element_click")
    const modale = document.querySelector(".content_modale_info")

    for(i = 0; i < selectReal.length; i++){
        selectReal[i].addEventListener("click", (event) =>{
            let clickId = event.target.id
            fond.style.display = "flex"
            modale.innerHTML = ""

            const divtop = document.createElement("div")
            divtop.className = "modale_content_title"
            modale.appendChild(divtop)

            const cross = document.createElement("i")
            cross.className = "fa-solid fa-xmark"
            divtop.appendChild(cross)

            const h3 = document.createElement("h3")
            h3.innerText = real_list[clickId].titre
            modale.appendChild(h3)

            const divSep = document.createElement("div")
            divSep.className = "line_Sep_modale"
            modale.appendChild(divSep)

            const divGallery = document.createElement("div")
            divGallery.className = "gallery_Modale"
            modale.appendChild(divGallery)

            const left = document.createElement("i")
            left.className = "fa-solid fa-angle-left"
            divGallery.appendChild(left)

            const imgGallery = document.createElement("img")
            imgGallery.src = real_list[clickId].img_Fond
            imgGallery.alt = `image ${real_list[clickId].titre}`
            imgGallery.className = "image_gallery"
            divGallery.appendChild(imgGallery)

            const right = document.createElement("i")
            right.className = "fa-solid fa-angle-right"
            divGallery.appendChild(right)

            const divDesc = document.createElement("div")
            divDesc.className = "content_modale_desc"
            modale.appendChild(divDesc)

            const description1 = document.createElement("p")
            description1.innerText = real_list[clickId].description
            description1.className = "description1_modale"
            divDesc.appendChild(description1)

            const divSepDesc = document.createElement("div")
            divSepDesc.className = "sep_Description"
            divDesc.appendChild(divSepDesc)

            const divInfoPlus = document.createElement("div")
            divInfoPlus.className = "content_modale_info_plus"
            divDesc.appendChild(divInfoPlus)

            let arrayInfoPlus = real_list[clickId].complement

            arrayInfoPlus.forEach((e) =>{
                const description2 = document.createElement("p")
                description2.innerText = e
                description2.className = "description2_modale"
                divInfoPlus.appendChild(description2)
            })

            const contentDivIcone = document.createElement("div")
            contentDivIcone.className = "content_modale_icone"
            modale.appendChild(contentDivIcone)

            let arrayIcone = real_list[clickId].code_Langage

            arrayIcone.forEach((e) => {
                const imgIcone = document.createElement("img")
                imgIcone.src = e
                imgIcone.alt = "Icone Langage"
                imgIcone.classList = "icone_modale"
                contentDivIcone.appendChild(imgIcone)
            })

            const divLink = document.createElement("div")
            divLink.className = "content_link"
            modale.appendChild(divLink)

            const iconeGit = document.createElement("div")
            iconeGit.className = "git_icone"
            divLink.appendChild(iconeGit)

            const linkGit = document.createElement("a")
            linkGit.innerText = "Lien GitHub"
            linkGit.href = real_list[clickId].gitHub
            linkGit.className = "link_git"
            divLink.appendChild(linkGit)

            cross.addEventListener("click", () =>{
                fond.style.display = "none"
            })
        })

        
    }
}

function filtres(){

    const selectFiltre = document.querySelectorAll(".filtre")

    for(i = 0; i < selectFiltre.length; i++){
        selectFiltre[i].addEventListener("click", (event) =>{

            if(event.target.id == "tous"){
                const pro = document.getElementById("pro")
                const perso = document.getElementById("perso")
                
                event.target.classList.add ("active")
                pro.classList.remove("active")
                perso.classList.remove("active")

                generation(elementReal)
                modaleRealisation()
            }
            if(event.target.id == "pro"){
                const realPro = real_list.filter(function(list){
                    return list.categorie === event.target.id
                })
                const tous = document.getElementById("tous")
                const perso = document.getElementById("perso")
                
                event.target.classList.add ("active")
                tous.classList.remove("active")
                perso.classList.remove("active")

                generation(realPro)
                modaleRealisation()
            }
            if(event.target.id == "perso"){
                const realPerso = real_list.filter(function(list){
                    return list.categorie === event.target.id
                })
                const pro = document.getElementById("pro")
                const tous = document.getElementById("tous")
                
                event.target.classList.add ("active")
                pro.classList.remove("active")
                tous.classList.remove("active")
                
                generation(realPerso)
                modaleRealisation()
            }
        })
    }
}

function closeAllInfo(){
    const eInfo1 = document.querySelector(".f1")
    const eInfo2 = document.querySelector(".f2")
    const eInfo3 = document.querySelector(".f3")
    const eInfo4 = document.querySelector(".e1")
    const eInfo5 = document.querySelector(".e2")
    const eInfo6 = document.querySelector(".e3")

    eInfo1.style.display = "none"
    eInfo2.style.display = "none"
    eInfo3.style.display = "none"
    eInfo4.style.display = "none"
    eInfo5.style.display = "none"
    eInfo6.style.display = "none"
}

function openInfo(){
    const cevronAll = document.querySelectorAll(".fa-caret-up")
    
    for(i = 0; i < cevronAll.length; i++){
        cevronAll[i].addEventListener("click", (event) =>{

            if(event.target.classList.contains("close") === true){
                event.target.classList.remove("close")
                event.target.classList.add("open")
            } else {
                event.target.classList.remove("open")
                event.target.classList.add("close")
                closeAllInfo()
            }

            if(event.target.id == "form_1" && event.target.classList.contains("open") === true){
                closeAllInfo()
                const eInfo = document.querySelector(".f1")
                eInfo.style.display = "flex"
            }

            if(event.target.id == "form_2" && event.target.classList.contains("open") === true){
                closeAllInfo()
                const eInfo = document.querySelector(".f2")
                eInfo.style.display = "flex"
            }

            if(event.target.id == "form_3" && event.target.classList.contains("open") === true){
                closeAllInfo()
                const eInfo = document.querySelector(".f3")
                eInfo.style.display = "flex"
            }

            if(event.target.id == "exp_1" && event.target.classList.contains("open") === true){
                closeAllInfo()
                const eInfo = document.querySelector(".e1")
                eInfo.style.display = "flex"
            }

            if(event.target.id == "exp_2" && event.target.classList.contains("open") === true){
                closeAllInfo()
                const eInfo = document.querySelector(".e2")
                eInfo.style.display = "flex"
            }

            if(event.target.id == "exp_3" && event.target.classList.contains("open") === true){
                closeAllInfo()
                const eInfo = document.querySelector(".e3")
                eInfo.style.display = "flex"
            }  
        })
    }
}

function navMobile(){
    const clickMobile = document.querySelector(".click_nav")
    const navOpen = document.querySelector(".content_nav_mobile")

    const line1 = document.querySelector(".line_nav_1")
    const line2 = document.querySelector(".line_nav_2")
    const line3 = document.querySelector(".line_nav_3")

    clickMobile.addEventListener("click", () =>{

        if(navOpen.id == "close_nav"){
            
            navOpen.style.display = "flex"
            navOpen.id = "open_nav"
            navOpen.classList.add("close_select")
            navOpen.classList.remove("open_select")
            line1.style.transform = "rotate(45deg)"
            line2.style.opacity = "0"
            line3.style.transform = "rotate(-45deg)"

        } else {
            
            navOpen.style.display = "none"
            navOpen.id = "close_nav"
            navOpen.classList.remove("close_select")
            navOpen.classList.add("open_select")

            line1.style.transform = "rotate(0deg)"
            line2.style.opacity = "1"
            line3.style.transform = "rotate(0deg)"
        }
    })
}

generation(elementReal)
modaleRealisation()
filtres()
openInfo()
navMobile()