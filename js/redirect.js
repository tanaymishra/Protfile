const gitrid = () => {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = 'https://github.com/tanaymishra';
    a.click();
}
const insrid = () => {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = 'https://www.instagram.com/tanay_mishra/';
    a.click();
}
const linkrid = () => {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = 'https://www.linkedin.com/in/tanay-mishra-0a7ba7213/';
    a.click();
}
const mail = () => {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = 'mailto:tanaymishra2204@gmail.com';
    a.click();
}
const emaildet = () => {
    let Subject = document.querySelector("#name input").value
    let desc = document.querySelector(".desicription textarea").value
    let mailid = document.querySelector("#email input").value
    let descmain = ""
    let wrapper = 0
    for (let i; i <= desc.length - 1; i++) {
        if (desc[i] == " ") {
            if (wrapper >= 5) {
                descmain += `\n${desc[i]}`
                wrapper = 0
            } else {
                descmain += desc[i]
                wrapper += 1
            }
        } else {
            descmain += desc[i]
        }
    }
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = `mailto:tanaymishra2204@gmail.com?subject=${Subject}&body=${descmain}
    From ${mailid}`;
    a.click();
}

//font adjust
let h2 = document.querySelector(".text h2")
console.log(window.innerHeight)
if (window.innerHeight < 700) {
    if (navigator.platform != "Win32") {
        h2.style.fontSize = "3rem";
    }
}