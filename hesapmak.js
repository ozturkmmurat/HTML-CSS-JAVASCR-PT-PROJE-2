document.write('<div class ="Ana">' );
document.write('<div class = "Beyazkısım">');
document.write('<input id="metinbar" class ="metinbar" type = "text"/><br/>');
document.write('<form class="hesapbutonlari1">   ');
document.write('<input type  ="button" value ="ON/C"  onclick="bastir_onc()"/>     ');
document.write('  <input type ="button" value ="CE"  onclick="bastir_ce()"/>    ');
document.write('  <input type ="button" value ="M R-C" onclick="bastir_mrc()"/>   ');
document.write('  <input type ="button" value ="M-" onclick="bastir_meksı()"/>    ');
document.write('  <input type ="button" value ="M+" onclick="bastir_martı()"/>     ');
document.write('    <input type ="button" value ="7" onclick="sayi(this.value)"/>   ');
document.write('   <input type ="button" value ="8" onclick="sayi(this.value)"/>     ');
document.write('<input type ="button" value ="9" onclick="sayi(this.value)"/>     ');
document.write('<input type ="button" value ="%" onclick="bastir_yuzde()"/>    ');
document.write('<input type ="button" value =" √¯" onclick="bastir_kare()"/><br/>     ');
document.write('<input type ="button" value ="4" onclick="sayi(this.value)"/>     ');
document.write(' <input type ="button" value ="5" onclick="sayi(this.value)"/>     ');
document.write('<input type ="button" value ="6" onclick="sayi(this.value)"/>     ');
document.write('<input type ="button" value ="X" onclick="operator(this.value)"/>   ');
document.write('<input type ="button" value ="/" onclick="operator(this.value)"/><br/>     ');
document.write('<input type ="button" value ="1" onclick="sayi(this.value)" />     ');
document.write('<input type ="button" value ="2" onclick="sayi(this.value)"/>     ');
document.write('<input type ="button" value ="3" onclick="sayi(this.value)"/>     ');
document.write ('</form>');
document.write('<form class="hesapbutonlari3">   ');
document.write('<input type ="button" value ="0" onclick="sayi(this.value)"/>     ');
document.write('<input type ="button" value ="." onclick="operator(this.value)"/>     ');
document.write('<input type ="button" value ="+/-" onclick="bastir_artıeksı()"/>     ');
document.write('</form>')
document.write('<form class="hesapbutonlari2">   ');
document.write(' <input   type ="button" value ="+" onclick="operator(this.value)"/>     ');
document.write('</form>');
document.write('<form class="hesapbutonlari4">   ');
document.write('<input type ="button" value ="-" onclick="operator(this.value)"/><br/>     ');
document.write('<input type ="button" value ="=" onclick="bastir_esıttır()"/>     ');
document.write('</form>')
document.write ('</div>')


    var metinbar = document.getElementById("metinbar"); 

    function sayi(x){
        if(x == 1){
            metinbar.value = metinbar.value +  "1"; 
        }
        if(x == 2){
            metinbar.value = metinbar.value +  "2"; 
        }
        if(x == 3){
            metinbar.value = metinbar.value +  "3"; 
        }
        if(x == 4){
            metinbar.value = metinbar.value +  "4"; 
        }
        if(x == 5){
            metinbar.value = metinbar.value +  "5"; 
        }
        if(x == 6){
            metinbar.value = metinbar.value +  "6"; 
        }
        if(x == 7){
            metinbar.value = metinbar.value +  "7"; 
        }
        if(x == 8){
            metinbar.value = metinbar.value +  "8"; 
        }
        if(x == 9){
            metinbar.value = metinbar.value +  "9"; 
        }
        if(x == 0){
            metinbar.value = metinbar.value +  "0"; 
        }
    }

    function operator(y){
        if(y == "+"){
            metinbar.value = metinbar.value +  "+";
        }
        if(y == "-"){
            metinbar.value = metinbar.value +  "-";
        }
        if(y == "X"){
            metinbar.value = metinbar.value +  "*";
        }
        if(y == "/"){
            metinbar.value = metinbar.value +  "/";
        }
        if(y == "."){
            metinbar.value = metinbar.value + ".";
        }
    }

var ekrani_temizle = "";

function bastir_ce(){
    metinbar.value = ekrani_temizle;
}

function bastir_kare(){
    metinbar.value = Math.sqrt(metinbar.value);
}

function bastir_yuzde(){
    metinbar.value = (metinbar.value)/100;
}


function bastir_artıeksı(){
    metinbar.value = -metinbar.value;
}

var hafizadatutulansayı;

function bastir_martı(){
    hafizadatutulansayı = metinbar.value;
}

function bastir_meksı(){
    hafizadatutulansayı = undefined;
}

function bastir_mrc(){
    if(hafizadatutulansayı != ""){
        if(hafizadatutulansayı != undefined){
        metinbar.value = metinbar.value + hafizadatutulansayı;
    }
    }
}

function bastir_onc(){
    metinbar.value = " ";
    hafizadatutulansayı = undefined;
}

function bastir_esıttır(){
    metinbar.value = eval(metinbar.value); 
}
