

export function useNavBarSetup(){

    function setActiveLink(){
        document.querySelectorAll(".nav-link").forEach((value) => {
            if (value.classList.contains("router-link-active")){
                value.classList.add("active")
            }
        })
    }

    return { setActiveLink }
}