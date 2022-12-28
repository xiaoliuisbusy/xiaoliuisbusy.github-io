   window.addEventListener('scroll', function () {
        let top = window.scrollY
        if (top != 0) {
            $('.shell-top').css('top', '-100vh')
            $('.shell-main').css('top', '0')
            $('.shell-main-lbt-word').css('transform', 'translateY(0px)')
            $('.shell-main-lbt-word').css('backdrop-filter', 'blur(5px)')
            $('.shell-main-lbt-word h2').css('transform', 'translate(0px)')
            $('.shell-main-lbt-word span').css('transform', 'translate(0px)')

        } else {
            $('.shell-top').css('top', '0px')
            $('.shell-main').css('top', '100vh')
            $('.shell-main-lbt-word').css('transform', 'translateY(400px)')
            $('.shell-main-lbt-word').css('backdrop-filter', 'blur(0px)')
            $('.shell-main-lbt-word h2').css('transform', 'translate(520px)')
            $('.shell-main-lbt-word span').css('transform', 'translate(-620px)')
        }
        if (top > 650) {
            $('.shell-main-header-left-top').css('opacity', '1')
            $('.shell-main-header-left-top').css('transform', 'translateY(0px)')
            $('.shell-main-header-left-bottom').css('opacity', '1')
            $('.shell-main-header-left-bottom').css('transform', 'translateY(0px)')
            $('.shell-main-header-left-footer').css('opacity', '1')
            $('.shell-main-header-left-footer').css('transform', 'translateY(0px)')
        } else {
            $('.shell-main-header-left-top').css('opacity', '0')
            $('.shell-main-header-left-top').css('transform', 'translateY(400px)')
            $('.shell-main-header-left-bottom').css('opacity', '0')
            $('.shell-main-header-left-bottom').css('transform', 'translateY(400px)')
            $('.shell-main-header-left-footer').css('opacity', '0')
            $('.shell-main-header-left-footer').css('transform', 'translateY(400px)')
        }
    })
    let left = document.querySelector(".button-left")
    let right = document.querySelector(".button-right")
    let min = document.querySelectorAll(".min")
    let images = document.querySelector(".images")
    let index = 0
    let time
    function position() {
        images.style.left = (index * -100) + "%"
    }
    function add() {
        if (index >= min.length - 1) {
            index = 0
        } else {
            index++
        }
    }
    function desc() {
        if (index < 1) {
            index = min.length - 1
        } else {
            index--
        }
    }

    function timer() {
        time = setInterval(() => {
            index++
            desc()
            add()
            position()
        }, 34000)
    }

    left.addEventListener("click", () => {
        desc()
        position()
        clearInterval(time)
        timer()
    })
    // 右边的按钮和左边也是差不多
    right.addEventListener("click", () => {
        add()
        position()
        clearInterval(time)
        timer()
    })

    for (let i = 0; i < min.length; i++) {
        min[i].addEventListener("click", () => {
            index = i
            position()
            clearInterval(time)
            timer()
        })
    }

    timer()