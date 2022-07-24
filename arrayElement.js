let x=0;
let array=Array();
function add_element_to_array(){
    array[x]=document.getElementById(txtvalue).value
    alert("Element: " + array[x]+"added at index" + x);
    x++;
    document.getElementById("txtValue").value= "";
}
function display_array(){
    let e= "<hr/>"
    for (let e=0; i<arr.length;i++){
        e+= "element " + i + "= "+ arr[i] + " <br/>";
    }
    document.getElementById("result").innerHTML=e;
}