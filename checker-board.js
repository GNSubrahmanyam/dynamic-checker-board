/* 
 * checker-board.js
 * made by G Naga Subrahmanyam
 */

function checkerBoardBuilder(){
    var checkerBoardWrapper = document.getElementById("checkerBoardWrapper"); 
    var checkerBoard = document.getElementById("checkerBoard");     
    checkerBoardWrapper.innerHTML = null;
    var columns = document.getElementById("columns").value;
    var rows = document.getElementById("rows").value;
    var cellWidth = document.getElementById("width").value;
    if(columns === "" || rows === "" || cellWidth === ""){
        alert("Please fill in all the fields");
    }
    var cellHeight = cellWidth;
    var width = (columns * cellWidth)+12;
    if(columns !== "" && rows !== ""){
        if(columns % 2 === 0 && rows % 2 === 0){
            alert("Rows & Columns Should be an odd number");
            checkerBoardWrapper.innerHTML = '';
        }
        else if (columns % 2 === 0){
            alert("Columns Should be an odd number");
            checkerBoardWrapper.innerHTML = '';
        }
        else if (rows % 2 === 0){
            alert("Rows Should be an odd number");
            checkerBoardWrapper.innerHTML = '';
        }
        else{
            checkerBoard.style.display =  "block";
            checkerBoard.style.width =  width + "px";
            checkerBoardWrapper.style.width = width + "px";
            var cols = 1;
                for(var i = 0; i < rows; i++){
                    checkerBoardWrapper.innerHTML += "<div class='checkRow' style='width:"+width+"px; height:"+ cellHeight+"px;' id='row"+i+"'></div>"   
                    for(var j = 0; j < columns; j++){
                        if(cols % 2 === 0){
                            var color = "white";
                        }
                        else{
                            var color = "black";
                        }
                        var rowId = "row"+ i
                        var row = document.getElementById(rowId)
                        row.innerHTML += "<div class='checkCol "+ color +"' style='width:"+cellWidth+"px; height:"+cellHeight+"px;' id='column"+j+"'></div>"
                        cols++; 
                    }    
                }
        }
    }
       
}
