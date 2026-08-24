function intform(){
    let nameinput = document.getElementById('studentname');
    let phoneinput = document.getElementById('studentphone');
    let otherradio = document.getElementById('otherradio');
    let otherinput = document.getElementById('otherinput');
    let error = false;
    let college = document.getElementsByName('chose')
    if(nameinput.value==="")
        {
            nameinput.style.borderColor = "red";
            nameinput.focus();
            error = true;
        }
      if(phoneinput.value==="")
        { 
            phoneinput.style.borderColor = "red";
            phoneinput.focus();
            error = true;
        }
            let select = false;
        for (let type  of college)
            {
                if(type.checked)
                {
                    select = true;
                    break;
                }
            }
        if(!select)
            {
                alert("برجاء اختيار الكلية");
                error = true;
            }
        else if(otherradio.checked && otherinput.value==="")
        {
           otherinput.style.borderColor = "red";
           otherinput.focus();
            error = true;
        }
        if(error)  //if(error===(true))
            {
                return false;
            }
        alert("تم الارسال");

        return true;

}