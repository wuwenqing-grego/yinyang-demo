let html = document.querySelector('#main')
let style = document.querySelector('#style')
const str = `
/* Hello, here's wenqing!
 * Now i'm going to add some CSS, like this.
 */
#yinyang {
    border: 1px solid red;
    height: 200px;
    width: 200px;
}
/* Behold, i will draw a YinYang.
 * Now turn div into a circle.
 */
#yinyang {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* YinYang consists of two halves.
 * White and Black.
 */
#yinyang {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* Yin and Yang are complementary, interconnected, and interdependent,
 * rather than clearly seperated from each other.
 */
#yinyang::before {
    width: 100px;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
#yinyang::after {
    width: 100px;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
/* The Taijitu is done, now feel the power of YinYang!
 */
`
let index = 0

html.innerHTML = str[index]
let step = () => {
    console.log(str[index])
    if (index === str.length - 1) {return}
    setTimeout(() => {
        index++
        if (str[index] === '\n') {
            html.innerHTML += '<br>'
        } else if (str[index] === ' ') {
            html.innerHTML += '&nbsp;'
        } else {
            html.innerHTML += str[index]
        }
        style.innerHTML += str[index]
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        step()
    }, 5)
}
step()