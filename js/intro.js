let header = document.querySelector('#intro');
let anim = [{
        t: "{ }",
        ms: 200
    },
    {
        t: "{_}",
        ms: 200
    },
    {
        t: "{ }",
        ms: 200
    },
    {
        t: "{_}",
        ms: 200
    },
    {
        t: "{C_}",
        ms: 100
    },
    {
        t: "{CH_}",
        ms: 100
    },
    {
        t: "{CHA_}",
        ms: 100
    },
    {
        t: "{CHAR_}",
        ms: 100
    },
    {
        t: "{CHARL_}",
        ms: 100
    },
    {
        t: "{CHARLI_}",
        ms: 100
    },
    {
        t: "{CHARLIE_}",
        ms: 100
    },
    {
        t: "{CHARLIE_}",
        ms: 100
    },
    {
        t: "{CHARLIE_}",
        ms: 100
    },
    {
        t: "{CHARLIE }",
        ms: 200
    },
    {
        t: "{CHARLIE_}",
        ms: 200
    },
    {
        t: "{CHARLIE }",
        ms: 200
    },
    {
        t: "{CHARLIE_}",
        ms: 200
    },
    {
        t: "{CHARLIE}",
        ms: 200
    },
    {
        t: "{CHARLIE}",
        ms: 200
    }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();