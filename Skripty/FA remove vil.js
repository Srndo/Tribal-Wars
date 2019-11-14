javascript:
    
    function containsWord(str, word) {
      return str.match(new RegExp("\\b" + word + "\\b")) != null;
    }

    url = window.location.href;
    pomocna = url.substr(url.length - 7);
    empty = false;
    
    coords_to_remove = pomocna.replace(";","|");
    re = new RegExp("[0-9]{3}.[0-9]{3}");
    
    if(!re.test(coords_to_remove)){
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

        if(!containsWord(coords, coords_to_remove)){
            alert("Village isn't in coords.");
        }
        else{
            if(!empty){
                coords = coords.replace(coords_to_remove, '');
            }

            let now = new Date();
            let time = now.getTime();
            time += 7*24*60*60*1000;
            now.setTime(time);

            document.cookie ="coords="+coords+";expires="+now.toGMTString();
            alert("Removed: " + coords_to_remove);
        }
    }
