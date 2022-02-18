//list
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

//start the render with for loop
//let i callout
//note: using "var" instead of "let" since the copied code cannot be altered and uses "var"
for(var i=0; i<warriors.length; i++){
    if (warriors[i].health>=10 && warriors[i].damage>=2 && warriors[i].warrior===true) {
    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var damageEle = document.createElement("h3");
    var healthEle = document.createElement("h3");
    var warriorEle = document.createElement("h3");
    nameEle.innerHTML="Name: "+warriors[i].name;
    damageEle.innerHTML="Damage: "+warriors[i].damage;
    healthEle.innerHTML="Health: "+warriors[i].health;

    //make "a" name red
    if (warriors[i].name.includes("a")){
        ele.style.color = "red";
    }
    ele.appendChild(nameEle);
    ele.appendChild(damageEle);
    ele.appendChild(healthEle);
    ele.appendChild(warriorEle);
    document.body.appendChild(ele);
    }
}
//hey Luke, if you're reading this I appreciate you giving me an extension on this assignment
//and I hope you have a great day!
