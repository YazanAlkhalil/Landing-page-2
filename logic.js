document.addEventListener("DOMContentLoaded", function () {
  const headerElement = document.querySelector("header");

  const wh = window.innerHeight;

  const whyUs = document.querySelector(".why-us-content");
  const skills = document.querySelector(".skills-section");
  const services = document.querySelector(".services");
  const callToAction = document.querySelector(".call-to-action");

  const cards = document.querySelectorAll(".expandable-card");

  cards.forEach((card, index) => {
    const paragraph = card.querySelector(".card-paragraph");
    const icon = card.querySelector(".fa-chevron-down");
    const titleText = card.querySelector("#title-text");

    if (index !== 0) {
      paragraph.style.display = "none";
    }

    icon.addEventListener("click", () => {
      paragraph.style.display = "block";
      icon.classList.add("fa-flip-vertical");
      titleText.style.color = "var(--secondary-color)";
      icon.style.color = "var(--secondary-color)";
      cards.forEach((otherCard, otherIndex) => {
        if (otherIndex !== index) {
          otherCard.querySelector(".card-paragraph").style.display = "none";
          otherCard
            .querySelector(".fa-chevron-down")
            .classList.remove("fa-flip-vertical");
          otherCard.querySelector("#title-text").style.color = "";
          otherCard.querySelector(".fa-chevron-down").style.color = "black";
        }
      });
    });
    icon.addEventListener("mouseover", () => {
      if (paragraph.style.display === "none") {
        titleText.style.color = "var(--secondary-color)";
        icon.style.color = "var(--secondary-color)";
        icon.style.cursor = "pointer";
      }
    });
    icon.addEventListener("mouseout", () => {
      if (paragraph.style.display === "none") {
        titleText.style.color = "";
        icon.style.color = "black";
      }
      icon.style.cursor = "default";
    });
  });

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      headerElement.style.backgroundColor = "rgba(38, 54, 85,0.9)";
    } else {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    if (currentScrollY > whyUs.offsetTop - wh) {
      whyUs.id = "why-us-animation";
    }
    if (currentScrollY > skills.offsetTop - wh+200) {
      skills.querySelector(".content img").id = "skills-animation-right";
      skills.querySelector(".content .skills").id = "skills-animation-left";
      this.document.querySelector("#html").style.animationPlayState = "running";
      this.document.querySelector("#css").style.animationPlayState = "running";
      this.document.querySelector("#javascript").style.animationPlayState =
        "running";
      this.document.querySelector("#asp").style.animationPlayState = "running";
      this.document.querySelector("#c").style.animationPlayState = "running";
      this.document.querySelector("#database").style.animationPlayState =
        "running";
    }
    if (currentScrollY > services.offsetTop - wh+200) {
      services.querySelector(".title").style.animationPlayState = "running";
      services.querySelector(".content p").style.animationPlayState = "running";
      services.querySelectorAll(".content .card").forEach((card, index) => {
        card.style.animationPlayState = "running";
      });
    }
    if (currentScrollY > callToAction.offsetTop - wh+200) {
      callToAction.querySelector("h2").style.animationPlayState = "running";
      callToAction.querySelector("p").style.animationPlayState = "running";
      callToAction.querySelector("a").style.animationPlayState = "running";
    }
  });

  const toggleButtons = document.querySelectorAll(".portoflio .content .buttons button");
  const items = document.querySelectorAll(".portoflio .img");
  toggleButtons.forEach((button) =>
    button.addEventListener("click", (event) => {
    toggleButtons.forEach(button =>  button.classList.remove("active"));
      const clickedButton = event.target;
      if (clickedButton.tagName === "BUTTON") {
        button.classList.add("active");
        items.forEach((item) => {
          if (!item.classList.contains(clickedButton.id) && clickedButton.id != "all") {
            item.classList.add('invisible');
            item.classList.remove('visible');
          } else {
            setTimeout(function() {
              item.classList.remove('invisible');
              item.classList.add('visible');
          }, 200);
            
          }
        });
      }
    })
  );
  //   const removedItems = [];
  //   const breaks = [];

  // toggleButtons.forEach(button => button.addEventListener('click', (event) => {
  //     const clickedButton = event.target;
  //     if (clickedButton.tagName === 'BUTTON') {
  //         const initialPositions = Array.from(items).map(item => item.getBoundingClientRect());
  //         items.forEach(item => {
  //             if(!item.classList.contains(clickedButton.id) && !item.classList.contains("break") && clickedButton.id != "all"){
  //                 removedItems.push(item);
  //                 item.remove();

  //             }
  //             else if(removedItems.includes(item)){
  //                 document.querySelector('.portoflio .images').appendChild(item);
  //                 removedItems.splice(removedItems.indexOf(item), 1);
  //             }
  //             else if(item.classList.contains("break")){
  //                 breaks.push(item);
  //                 item.remove();
  //             }
  //         });
  //         breaks.forEach(Break => {
  //             document.querySelector('.portoflio .images').appendChild(Break);
  //         });
  //         breaks = [];
  //         // Calculate final positions
  //         const finalPositions = Array.from(items).map(item => item.getBoundingClientRect());

  //         // Apply transforms to slide items into place
  //         items.forEach((item, index) => {
  //             const dx = initialPositions[index].left - finalPositions[index].left;
  //             item.style.transform = `translateX(${dx}px)`;
  //         });

  // Reset transforms after the animation completes

  // }));
});
