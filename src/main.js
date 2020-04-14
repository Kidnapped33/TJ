let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*你好，我是珊珊
接下来我要演示我的前端功底
首先我要准备一个div
**/
#div1{
    border:1px solid gray;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
*注意看好啦
*首先，div变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
/*加两个圆*/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*到此就结束啦~
**/
`;


string2 = '';
let n = 0;
let step = () => {
    setTimeout(() => {
        // 如果是回车就加个br
        // 如果不是回车就照搬
        string2 += (string[n] === '\n' ? '<br/>' : string[n]);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 2000)
        html.scrollTo(0, 2000)
        if (n + 1 < string.length) {
            // n如果不是最后一个就继续
            n += 1;
            step();
        }
    }, 0);
};
step()

