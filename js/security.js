// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable Common Developer Shortcuts
document.addEventListener("keydown", function (e) {

    const key = e.key.toUpperCase();

    if (
        key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C", "K"].includes(key)) ||
        (e.ctrlKey && ["U", "S"].includes(key))
    ) {
        e.preventDefault();
        return false;
    }

});

// Detect DevTools (basic)
(function () {

    let opened = false;

    setInterval(function () {

        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {

            if (!opened) {

                opened = true;

                document.body.innerHTML = `
                    <div style="
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        height:100vh;
                        background:#000;
                        color:#fff;
                        font-family:Arial;
                        text-align:center;
                        padding:20px;
                    ">
                        <div>
                            <h1>⚠ Developer Tools Detected</h1>
                            <p>Please close Developer Tools to continue.</p>
                        </div>
                    </div>
                `;
            }

        }

    }, 1000);

})();