(function() {
    let ids = ['l1', 'l2', 'l3', 'l4'];
    let realBtns = [];
    for (let id of ids) realBtns.push(document.getElementById(id))
  
    let bbb = realBtns[0].getBoundingClientRect();
    let bbbb = document.getElementById("links").getBoundingClientRect();
    
    const butWidth = bbb.width;
    const butHei = bbb.height;

    const canvWidth = bbbb.width;
    const canvHei = bbbb.height;

    let cvs = document.getElementById("linesbetween");
    let ctx = cvs.getContext("2d");
    cvs.width = canvWidth;
    cvs.height = canvHei;

    function button(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.update = function() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                if (this.dx < 0) {
                    this.dx *= -1;
                }
            }
            if (this.x + butWidth > canvWidth) {
                if (this.dx > 0) {
                    this.dx *= -1;
                }
            }
            if (this.y < 0) {
                if (this.dy < 0) {
                    this.dy *= -1;
                }
            }
            if (this.y + butHei > canvHei) {
                if (this.dy > 0) {
                    this.dy *= -1;
                }
            }
        }
    }
    let btns = [];
    for (let i=0; i<4; i++) {
        btns.push(new button(
            (bbbb.width-bbb.width)*Math.random(),
            (bbbb.height-bbb.height)*Math.random(), 
            2*Math.random()-1, 
            2*Math.random()-1));
    }
    
    window.requestAnimationFrame(anim);
    function anim() {
        window.requestAnimationFrame(anim);
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        for (let i=0; i<4; i++) {
            realBtns[i].style.left = (btns[i].x + "px");
            realBtns[i].style.top = (btns[i].y + "px");
            if (!($("#" + ids[i] + ":hover").length != 0)) {
                btns[i].update();
            }
        }
        for (let i=0; i<4; i++) {
            for (let j=0; j<4; j++) {
                ctx.strokeStyle = 'rgba(255,255,255,0.2)';
                if ($("#" + ids[i] + ":hover").length != 0) 
                    ctx.strokeStyle = 'rgba(161,255,250,0.8)';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(btns[i].x+(butWidth/2), btns[i].y+(butHei/2));
                ctx.lineTo(btns[j].x+(butWidth/2), btns[j].y+(butHei/2));
                ctx.stroke();
            }
        }
    }

})();