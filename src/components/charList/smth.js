function nextBigger(n){
    
    const string = ""+n;
        for (let i = string.length-1; i > 0; i--) {
            console.log(string.charAt(i))
            console.log(string.charAt(i-1))
            console.log()
            if (string.charAt(i) > string.charAt(i-1)) {
                let min = string.charAt(i);
                let index = i;
                for (let j = i+1; j < string.length; j++) {
                    if (min > string.charAt(j)) {
                        index = j;
                        min = string.charAt(j);
                    }
                }
                console.log(string.charAt(i-1)+string
                .slice(i+1).split(""))
                return +(string.slice(0, i-1)+min+(string.charAt(i-1)+string
                    .slice(i+1)).split("").splice(index, 1).sort().join(""));
            }
        }
        return -1;

}

console.log(nextBigger("3204608520"))