var type = document.querySelector('#type');
var sl_in = [{
        typ: '!vipbet',
        inp: ['inp', 'inp'],
        phr: ['Title', 'Rate'],
        add_btn: true
    },
    {
        typ: '!event',
        inp: ['sl', 'inp', 'inp', 'inp'],
        phr: ['', 'Time(s, m, h, d)', 'Phần thưởng', '(Điều kiện)'],
        add_btn: false
    },
    {
        typ: '!daugia',
        inp: ['inp', 'inp'],
        phr: ['Giá khởi điểm', '(Nội dung)'],
        add_btn: false
    }
]

var preview = document.querySelector('.preview');
var ty = 0;
// console.log(inps)
type.onchange = (e) => {
    ty = e.target.value;
    let inps = document.querySelector('.inps');
    let html = '';
    // console.log(ty, sl_in)     
    for (let i in sl_in[ty].inp) {
        html += codeAdd(sl_in[ty].inp[i], sl_in[ty].phr[i]);
    }
    if (sl_in[ty].add_btn) {
        html += `<button class="add-btn" onclick="btnAdd()">+</button>`
    }
    preview.innerHTML = sl_in[ty].typ + ' ';
    inps.innerHTML = html

    // inps = document.querySelector('.inps').children;
    // console.log(html)
    // preview
    // inps.forEach((val) => {val})
    console.log(ty)
}

function codeAdd(val, ph) {
    switch (val) {
        case 'inp':
            return `<input type="text" class="size inp" placeholder="${ph}" oninput="cgPreview()">
            `
        case 'sl':
            return `<select id="" class="size inp" onChange="cgPreview()">
            <option value="r">React</option>
            <option value="g">Quay Thưởng</option>
            <option value="lx">Lì xì</option>
        </select>
        `
    }
}

function cgPreview() {
    var inps = document.querySelector('.inps').querySelectorAll('.inp');
    let html = sl_in[ty].typ + ' ';
    preview = document.querySelector('.preview');
    inps.forEach((val, index) => {
        // console.log(val.value)
        if (ty == 0 && inedx % 2 == 0) {  
                html += '(' + val.value + ') ';
        } else {           
                html += val.value + ' ';
        }
    });
    preview.innerHTML = html;
}

function btnAdd() {
    let inps = document.querySelector('.inps');
    let html = '';
    for (let i in sl_in[ty].inp) {
        html += codeAdd(sl_in[ty].inp[i], sl_in[ty].phr[i]);
    }
    html += '<button class="add-btn" onclick="btnAdd()">+</button>';
    // console.log(inps.innerHTML)
    inps.innerHTML = inps.innerHTML.replace('<button class="add-btn" onclick="btnAdd()">+</button>', '') + html;
}

function copyBtn(containerid) {
    var range = document.createRange();
    range.selectNode(containerid);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("data copied");
}
