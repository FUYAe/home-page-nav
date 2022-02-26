function movveIt(moveBodySelect, MoveClickSelect) {
    const wrapper = document.querySelector(moveBodySelect)

    function onDrag({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(wrapper)
        let left = parseInt(getStyle.left)
        let top = parseInt(getStyle.top)
        wrapper.style.left = `${left + movementX}px`
        wrapper.style.top = `${top + movementY}px`

    }
    const ele = document.querySelector(MoveClickSelect);
    ele.addEventListener("mousedown", () => {
        ele.style.cursor = "move"
        wrapper.style.userSelect = "none"
        document.addEventListener("mousemove", onDrag)

    })
    document.addEventListener("mouseup", () => {
        ele.style.cursor = "pointer"
        wrapper.style.userSelect = "none"
        document.removeEventListener("mousemove", onDrag)

    })
}