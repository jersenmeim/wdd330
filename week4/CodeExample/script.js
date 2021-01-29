			
    function search(event) {
    alert(`You've Searched for: ${input.value}`);
    event.preventDefault();
    }

    const formSearch = document.forms["search"];
    const input = formSearch["searchInput"];
    input.placeholder = 'Search Here';
    formSearch.addEventListener ('submit', search, false);
        
    input.addEventListener('focus', function(){
        if (input.placeholder==='Search Here') {
            input.placeholder = 'Yes! Search Here!' 
        }
    }, false);
			
		
    const adventurer = {
            name: "",
            character: "",
            introduction(expLocation){
                expLocation.innerHTML = `Hello! My name is ${this.name}. I am a${this.character == "elf" ? "n" : ""} ${this.character}. Let's Fight!`;
                return this;
            },
            portrait(imgLocation){
                imgLocation.setAttribute("src", "images/" + this.character + ".png")
                imgLocation.setAttribute("alt", this.character)
                return this;
            }
        
    }


    function mixin(target,...objects) {
        for (const object of objects) {   
        if(typeof object === 'object') {
            for (const key of Object.keys(object)) {
                if (typeof object[key] === 'object') {
                target[key] = Array.isArray(object[key]) ? [] : {};
                mixin(target[key],object[key]);
                } else {
                Object.assign(target,object);  
                }
            }
            }
        }
        return target;
    }


    function createAdventurer(){
    let expLocation = document.getElementById("info");
    let imgLocation = document.getElementById("img");
    let adName = document.getElementById("name").value;
    let adRace = document.getElementById("race").value;

    const firstAdventurer = Object.create(adventurer);
    mixin (firstAdventurer, {name: adName, character: adRace});

    firstAdventurer.introduction(expLocation).portrait(imgLocation);
    imgLocation.style.display= "block";
    }
