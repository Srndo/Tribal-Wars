javascript:
    
    function containsWord(str, word) {
      return str.match(new RegExp("\\b" + word + "\\b")) != null;
    }

    url = window.location.href;
    pomocna = url.substr(url.length - 7);
    empty = false;
    
    coords_to_add = pomocna.replace(";","|");
    re = new RegExp("[0-9]{3}.[0-9]{3}");
    
    if(!re.test(coords_to_add)){
        alert("Must be in village info.");
    }
    else{
        let pom = document.cookie.match(new RegExp('(^| )coords=([^;]+)'));

        if (pom){
            coords = pom[2];
        }
        else{
            alert("Coords cookie expired, setting coords to empty.");
            coords = "";
            empty = true;
        }

        if(containsWord(coords, coords_to_add)){
            alert("Village is already in coords.");
        }
        else{
            if(empty){
                coords = coords.concat(coords_to_add);
            }
            else{
                coords = coords.concat(" ", coords_to_add);
            }

            let now = new Date();
            let time = now.getTime();
            time += 7*24*60*60*1000;
            now.setTime(time);

            document.cookie ="coords="+coords+";expires="+now.toGMTString();
            alert("Added: " + coords_to_add);
        }
    }
