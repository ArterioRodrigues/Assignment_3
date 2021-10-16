let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    grid = document.getElementById("grid");
    table_r = document.createElement("TR");
    table_d = document.createElement("TD");

    table_r.className = "table row";
    table_d.className = "table content";

    if(!(numRows == 0 && numCols == 0))
    {   
        for(let i = 0; i < document.querySelector("tr").childElementCount; i++)
        {
            table_r.appendChild(table_d);
            table_d = document.createElement("TD");
            table_d.className = "table content";
        }
        grid.appendChild(table_r);
    }
    else
    {
        table_r.appendChild(table_d)
        grid.appendChild(table_r) 
        numCols++;  
    }

    numRows++;
    nodeEvent();
}

//Add a column
function addC() { 
    grid = document.getElementById("grid");
    table_d = document.createElement("TD");
    table_d.className = "table content";

    if(!(numCols == 0 && numRows == 0))
    {
        table_r_items = document.getElementsByClassName("table row")
        for(let i = 0; i < table_r_items.length; i++)
        {
            table_r_items[i].appendChild(table_d);
            table_d = document.createElement("TD");
            table_d.className = "table content";
        }
    }
    else
    {
        table_r = document.createElement("TR");
        table_r.className = "table row";
        table_r.appendChild(table_d);
        grid.appendChild(table_r);  
        numRows++;
    }
    numCols++;
    nodeEvent();
    
}

//Remove a row
function removeR() {
    grid = document.getElementById("grid");
    if(numRows > 0)
    {
        grid.removeChild(grid.lastChild);
        numRows--;
        if(numRows == 0)
            numCols = 0;
    }
}

//Remove a column
function removeC() {
    grid = document.getElementById("grid");
    if(numCols > 0)
    {
        table_r_items = document.getElementsByClassName("table row");  
        for(let i = 0; i < table_r_items.length; i++)
            table_r_items[i].removeChild(table_r_items[i].lastChild);
        numCols--; 
        if(numCols == 0)
        {
            numRows = 0;
            while (grid.lastChild) 
                grid.removeChild(grid.lastChild);         
        }
            
    }
}

function nodeEvent(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => {
        element.addEventListener("click", () => { 
            if(colorSelected != "Special")
                element.classList.remove('special');
            if(colorSelected == "Red")
                element.style.backgroundColor = '#F72A3E' ;
            else if(colorSelected == "Blue")
                element.style.backgroundColor = '#11ABF7' ;
            else if(colorSelected == "Yellow")
                element.style.backgroundColor = '#FFF990' ;
            else if(colorSelected == "Green")
                element.style.backgroundColor = '#2CFA24' ;
            else if(colorSelected == "Special")
                element.className = "special";
            ;});    
     });
     
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

function fill(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => { 
        if(colorSelected != "Special")
            element.classList.remove('special');

        if(colorSelected == "Red")
            element.style.backgroundColor = '#F72A3E' ;
        else if(colorSelected == "Blue")
            element.style.backgroundColor = '#11ABF7' ;
        else if(colorSelected == "Yellow")
            element.style.backgroundColor = '#FFF990' ;
        else if(colorSelected == "Green")
            element.style.backgroundColor = '#2CFA24' ;
        else if(colorSelected == "Special")
            element.className = "special";
        ;});  
    if(colorSelected == "Special")
    {
        a = document.createElement('A');
        a.href = "https://www.youtube.com/watch?v=RvBwypGUkPo&ab_channel=Rickroll%2Cbutwithadifferentlink";
        a.appendChild(document.createTextNode("HERE"));
        a.className = "click";
        table_d_items[Math.floor(table_d_items.length/2)].appendChild(a);
    }
  
}

function clearAll(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => {
        element.style.background = 'transparent' ;
    });
}

function fillU(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => {
        if(element.style.background === 'transparent' || element.style.backgroundColor === '')
        {
            if(colorSelected == "Red")
                element.style.backgroundColor = '#F72A3E' ;
            else if(colorSelected == "Blue")
                element.style.backgroundColor = '#11ABF7' ;
            else if(colorSelected == "Yellow")
                element.style.backgroundColor = '#FFF990' ;
            else if(colorSelected == "Green")
                element.style.backgroundColor = '#2CFA24' ;
            else if(colorSelected == "Special")
                element.className = "special";
        }
    });
}

