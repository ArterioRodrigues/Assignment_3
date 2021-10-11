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

    if(grid.hasChildNodes())
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
    }

    numRows++;
    nodeEvent();
}

//Add a column
function addC() { 
    grid = document.getElementById("grid");
    table_r = document.createElement("TR");
    table_d = document.createElement("TD");
    table_r_items = document.getElementsByClassName("table row")
    table_r.className = "table row";
    table_d.className = "table content";

    if(grid.hasChildNodes())
    {
        for(let i = 0; i < table_r_items.length; i++)
        {
            table_r_items[i].appendChild(table_d);
            table_d = document.createElement("TD");
            table_d.className = "table content";
        }
    }
    else
    {
        table_r.appendChild(table_d);
        grid.appendChild(table_r);  
    }
    numCols++;
    nodeEvent();
}

//Remove a row
function removeR() {
    grid = document.getElementById("grid");
    if(grid.hasChildNodes())
    {
        table_r_items = document.getElementsByClassName("table row");
        grid.removeChild(table_r_items[table_r_items.length -1]);
        numRows--;
    }
}

//Remove a column
function removeC() {
    grid = document.getElementById("grid");
    if(grid.hasChildNodes())
    {
        table_r_items = document.getElementsByClassName("table row");
        
    
        for(let i = 0; i < table_r_items.length; i++)
        {
            table_d = table_r_items[i].childNodes;
            table_r_items[i].removeChild(table_d[table_d.length-1]);
        }
        numCols--; 
    }
}

function nodeEvent(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => {
        element.addEventListener("click", () => { 
            if(colorSelected == "Red")
                element.style.backgroundColor = 'Red' ;
            else if(colorSelected == "Blue")
                element.style.backgroundColor = 'blue' ;
            else if(colorSelected == "Yellow")
                element.style.backgroundColor = 'yellow' ;
            else if(colorSelected == "Green")
                element.style.backgroundColor = 'green' ;
            else
                element.style.backgroundColor = 'white' ;
            ;});    
     });
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected); 
}

function fill(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => {
        if(colorSelected == "Red")
            element.style.backgroundColor = 'Red' ;
        else if(colorSelected == "Blue")
            element.style.backgroundColor = 'blue' ;
        else if(colorSelected == "Yellow")
            element.style.backgroundColor = 'yellow' ;
        else if(colorSelected == "Green")
            element.style.backgroundColor = 'green' ;
        else
            element.style.backgroundColor = 'white' ;
    });
}

function clearAll(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => {
        element.style.backgroundColor = 'white' ;
    });
}

function fillU(){
    table_d_items = document.querySelectorAll('TD')   
    table_d_items.forEach(element => {
        if(element.style.backgroundColor === 'white' || element.style.backgroundColor === '')
        {
            if(colorSelected == "Red")
                element.style.backgroundColor = 'Red' ;
            else if(colorSelected == "Blue")
                element.style.backgroundColor = 'blue' ;
            else if(colorSelected == "Yellow")
                element.style.backgroundColor = 'yellow' ;
            else if(colorSelected == "Green")
                element.style.backgroundColor = 'green' ;
        }
    });
}
