javascript:
    var units=[0,0,0,1,10,0,0,0];

    function insertUnit(input, count){
        if(input.value != count){
            input.value=count;
            
        }
        else{
            input.value='';
        }
    }

    var doc=document;
    var now = new Date();
    var time = now.getTime();
    time += 7200 * 1000;
    now.setTime(time);

    if(window.frames.length>0)
        doc=window.main.document;

    url=doc.URL;
    if(url.indexOf('screen=place')==-1)
        alert('This script needs to be run from the rally point');

    farmcookie=doc.cookie.match('(^|;) ?farm=([^;]*)(;|$)');
    
    var pom = document.cookie.match(new RegExp('(^| )coords=([^;]+)'));

    if (pom)
        coords = pom[2];
    else{
        alert("Coords cookie expired, setting coords to empty.");
        coords = "";
        empty = true;
    }
    coords=coords.split(" ");

    if(farmcookie!=null)
        index=parseInt(farmcookie[2]);
    else
        index = 0;

    if(index>=coords.length){
        index = 0;
        document.cookie ="farm="+index+";expires="+now.toGMTString();
        alert('End of villages.');
    }
    else{
        if(coords[index] == '')
            while(coords[index] == '')
                index = index + 1;
        doc.forms[0].input.value=coords[index];
        index = index + 1;
        document.cookie ="farm="+index+";expires="+now.toGMTString();
        insertUnit(doc.forms[0].spear,units[0]);
        insertUnit(doc.forms[0].sword,units[1]);
        insertUnit(doc.forms[0].axe,units[2]);
        insertUnit(doc.forms[0].spy,units[3]);
        insertUnit(doc.forms[0].light,units[4]);
        insertUnit(doc.forms[0].heavy,units[5]);
        insertUnit(doc.forms[0].ram,units[6]);
        insertUnit(doc.forms[0].catapult,units[7]);
    }
