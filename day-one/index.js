// console.log($("button.continue"))

// console.log(document.querySelector("button.continue"))

// document.querySelector("button.continue").innerHTML = "Next Step.."


// document.querySelector("button").addEventListener("click", e => {
    //     console.log("clicked")
    // })

    
// var hiddenBox = $( "#banner-message" );
// $( "#button-container button" ).on( "click", function( event ) {
//     hiddenBox.show();
// });

class MyQuery {
    constructor(query){
        this.domElem = document.querySelector(query);
    }

    html(innerHTML) {
        this.domElem. innerHTML = innerHTML;
        return this;
        }
        
    on(eventType, cb) {
       this.domElem. addEventListener (eventType, cb);
        return this; 
    }

    show() {
        // domElem.style.display = "block";
        this.domElem. style. removeProperty ("display");
        return this; 
    }
        
    addClass(className)  {
        this.domElem.classList.add(className);
        return this;
    }

}


const $$ = (query) => {
    // const domElem = document.querySelector(querySelector);
    // console.log(domElem)
    
    // return {
    //     html: (innerHTML) => {
    //         domElem.innerHTML = innerHTML;
    //         return $$(querySelector); 
    //     }, 
    //     on: (eventType, cb) => {
    //         domElem.addEventListener(eventType,cb)
    //         return $$(querySelector);
    //     },
    //     show: () => {
    //         // domElem.style.display = "block"
    //         domElem.style.removeProperty("display")
    //         return $$(querySelector);
    //     },
    //     addClass: (className) => {
    //         domElem.classList.add(className);
    //         return $$(querySelector);
    //     }

    // }
    // const obj = {
    //     html: (innerHTML) => {
    //         domElem. innerHTML = innerHTML;
    //         return obj;},
            
    //     on: (eventType, cb) => {
    //         domElem. addEventListener (eventType, cb);
    //         return obj; },

    //     show: () => {
    //         // domElem.style.display = "block";
    //         domElem. style. removeProperty ("display");
    //         return obj; },
            
    //     addClass: (className) => {
    //         domElem.classList.add(className);
    //         return obj;
    //     },
    // };
    return new MyQuery(query); }
    
    $$.ajax = (requestOpt) => {
        const {url,data,sucess} = requestOpt;

        if(data !== undefined) {
            fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(data)
            })
            .then(res=> res.json())
            .then((sucess));
        } else {
            fetch(url) 
            .then(res=> res.json())
            .then((sucess));
        }
    }; 

    $$.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        success: (result) =>{
        console.log(result);
        }
    });



// const input = "<button onclick = 'alert(`hacked`)'>hack</button>"

// $$("button.continue").html(input)
// $$("button.continue").html("next step..")

const continueBtn = $$( "button.continue" ).html( "Next Step..." ).on("click",() => {
    console.log("continue");
}).addClass("red");

const hiddenBox = $$("#banner-message");
const clickBtn = $$("#button-container button").on( "click", function( event ) {
    hiddenBox.show();
    // console.log(" event clicked")
});

console.log(continueBtn)
console.log(hiddenBox)
console.log(clickBtn)

console.log([1,2,3])
