
(()  =>{
        const filterContainer = document.querySelector(".portfolio-filter"),
        portfolioItemsContainer = document.querySelector(".portfolio-items"),
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        popup = document.querySelector(".portfolio-popup"),
        prevBtn = popup.querySelector(".pp-prev"),
        nextBtn =  popup.querySelector(".pp-next"),
        closeBtn = popup.querySelector(".pp-close"),
        projectDetailsContainer = popup.querySelector(".pp-details"),
        projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
        let itemIndex, sliderIndex, screenshots;

        /* filter portfolio items */

        filterContainer.addEventListener("click", (event)=>{
                if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")) {
                        /* desactivate existing active "filter-item" */
                        filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                        /* activate new filter */
                        event.target.classList.add("active", "outer-shadow"); 
                        /* activate new "filter item"*/
                        const target = event.target.getAttribute("data-target");
                        portfolioItems.forEach((item) => {
                                if(target === item.getAttribute("data-category")) {
                                        item.classList.remove("hide");
                                        item.classList.add("show");
                                } 
                                else {
                                        item.classList.remove("show");
                                        item.classList.add("hide");
                                }                
                        })
                } 
        })

})();