function sommeElementsDistincts(liste1, liste2) {
    var somme = 0;

    for (var i = 0; i < liste1.length; i++) {
        var flag = true;
        for (var j = 0; j < liste2.length; j++) {
            if (liste1[i] === liste2[j]) {
                flag = false;
            }
        }
        if (flag === true) {
            somme = somme + liste1[i]
        }
    }

    for (var i = 0; i < liste2.length; i++) {
        var flag = true
        for (var j = 0; j < liste1.length; j++) {
            if (liste2[i] === liste1[j]) {
                flag = false
            }
        }
        if (flag === true) {
            somme = somme + liste2[i]
        }
    }
    return somme
}

function sommeElementsCommuns(liste1, liste2) {
    var somme = 0;
    for (var i = 0; i < liste1.length; i++) {
        var flag = true
        for (var j = 0; j < liste2.length; j++) {
            if (liste1[i] === liste2[j]) {
                flag = false
            }
        }
        if (flag === false) {
            somme = somme + liste1[i]
        }
    }

    for (var i = 0; i < liste2.length; i++) {
        var flag = true
        for (var j = 0; j < liste1.length; j++) {
            if (liste2[i] === liste1[j]) {
                flag = false
            }
        }
        if (flag === false) {
            somme = somme + liste2[i]
        }
    }
    return somme

}