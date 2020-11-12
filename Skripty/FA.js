javascript:
    var units=[0,0,0,0,3,0,0,0];

    function insertUnit(input, count){
        if(input.value != count){
            input.value=count;
            
        }
        else{
            //input.value='';
        }
    }

/*
    var waitForEl = function(selector, callback) {
      if (jQuery(selector).prevObject.length) {
        callback();
      } else {
        setTimeout(function() {
          waitForEl(selector, callback);
        }, 300);
      }
    };
*/

    var doc=document;
    var now = new Date();
    var time = now.getTime();
    time += 7*24*60*60*1000;
    now.setTime(time);

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
        alert('End of villages (' + coords.length + ').');
    }
    else{
        if(coords[index] == '' || coords[index] == ' ')
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
        doc.getElementById("target_attack").click();
/*        waitForEl("troop_confirm_go", function() {
            doc = document;
            doc.getElementById("troop_confirm_go").click();
        });
 */
    }
