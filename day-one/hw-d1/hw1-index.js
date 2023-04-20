class MyQuery {
    constructor(query) {
        this.domElem = document.querySelector(query);
    }

    html(innerHTML) {
        this.domElem.innerHTML = innerHTML;
        return this;
    }

    on(eventType, cb) {
        if (this.domElem) {
            this.domElem.addEventListener(eventType, cb);
          }
          return this;
        }

    //fadeout function please
    fadeOut() {
        this.domElem.style.transition = "all 3s ease";
        this.domElem.style.opacity = 0;
        return this;
    }

    fadeIn() {
        this.domElem.style.transition = "all 3s ease";
        this.domElem.style.opacity = 1;
        return this;
    }

    slideWords(words, duration = 1000) {
        let i = 0;
        setInterval(() => {
          this.domElem.innerHTML = words[i];
          i++;
          if (i === words.length) {
            i = 0;
          }
        }, duration);
        return this; 
    }

}

const $$ = (query) => {
    return new MyQuery(query);
}

const fadedMessage = $$("#fadeout-message");
const clickFadeOut = $$("#clickFade").on("click", function(event) {
    fadedMessage.fadeOut();
    console.log("fadeout-click")
});


const clickFadeIn = $$("#clickFade1").on("click", function(event) {
    fadedMessage.fadeIn();
    console.log("fadein-click");
  });


  const slideShow = $$("#slide-show").slideWords(
    ["Why", "not", "working", "after", "click"],
    1000
  );

  const clickSlide1 = $$("#clickSlide").on("click",function(event) {
    slideShow.slideWords(
        ["hi", "hello", "hola", "sawaddeeka"],
        );
        
    console.log("slide-click")
  })