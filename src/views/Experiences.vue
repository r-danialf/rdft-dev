<template>
    <h1>Experiences</h1>

    <div class="exp">
        <div class="ex-head">
            <svg> <use xlink:href="../assets/icons.svg#certificate" width="30" height="30"></use> </svg>
            <h2>Competitions</h2>
        </div>
        <div class="ex-body">
            <div class="ex-certificates">
                <div class="flex">
                    <div>
                        <img src="../assets/company/ukdc-logo.png" alt="">
                    </div>
                    <div>
                        <h3>OSII Week 2024 - Game Development with Construct 2</h3>
                        <p><b>Universitas Katolik Darma Cendika</b></p>
                        <p>Competition - Aug 2024</p>
                    </div>
                </div>
                <div class="ex-see xs-green" @click="goto('https://drive.google.com/file/d/1vdFkhA-btYCKGsLGLKVvaV5nf5h9LV8m/view')">
                    <svg> <use xlink:href="../assets/icons.svg#moneycheck" width="20" height="20"></use> </svg>
                </div>
            </div>
        </div>
    </div>
    
    <div class="exp">
        <div class="ex-head">
            <img src="../assets/company/gamelab_logo.jpeg" alt="">
            <h2>Gamelab Indonesia</h2>
        </div>
        <div class="ex-body">
            <div class="ex-certificates">
                <div>
                    <h3>Praktik Kerja Lapangan Educa Studio</h3>
                    <p>Apprenticeship - Expires: Jan 2028</p>
                </div>
                <div class="ex-see xs-green" @click="goto('https://www.gamelab.id/certificate/GL4581076794')">
                    <svg> <use xlink:href="../assets/icons.svg#moneycheck" width="20" height="20"></use> </svg>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>Game Fundamental: Construct</h3>
                    <p>Course - Expires: Nov 2026</p>
                </div>
                <div class="ex-see" @click="goto('https://gamelab.id/certificate/GL5582332394')">
                    <svg> <use xlink:href="../assets/icons.svg#file" width="20" height="20"></use> </svg>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>JavaScript Untuk Game Developer</h3>
                    <p>Course - Expires: Jan 2027</p>
                </div>
                <div class="ex-see" @click="goto('https://gamelab.id/certificate/GL1495418033')">
                    <svg> <use xlink:href="../assets/icons.svg#file" width="20" height="20"></use> </svg>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>Game 2D: Phaser Game Framework</h3>
                    <p>Course - Expires: Jun 2027</p>
                </div>
                <div class="ex-see" @click="goto('https://gamelab.id/certificate/GL8584123770')">
                    <svg> <use xlink:href="../assets/icons.svg#file" width="20" height="20"></use> </svg>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>Game 3D: Three.js</h3>
                    <p>Course - Expires: Jun 2027</p>
                </div>
                <div class="ex-see" @click="goto('https://gamelab.id/certificate/GL5903657587')">
                    <svg> <use xlink:href="../assets/icons.svg#file" width="20" height="20"></use> </svg>
                </div>
            </div>
        </div>
    </div>
    
    <div class="exp">
        <div class="ex-head">
            <img src="../assets/company/smk_logo.png" alt="">
            <h2>SMK Negeri 4 Bojonegoro</h2>
        </div>
        <div class="ex-body">
            <div class="ex-certificates">
                <div>
                    <h3>UKK Nasional 2025 Paket 3 - Kasir Toko Bakery</h3>
                    <p>Project - Feb 2025</p>
                </div>
                <div class="ex-see xs-orange" @click="goto('https://github.com/r-danialf/bakeryukk')">
                    <svg> <use href="../assets/icons.svg#git" width="20" height="20"></use> </svg>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>Game Construct 3 - Papershot</h3>
                    <p>Project - Dec 2021</p>
                </div>
                <div class="flex">
                    <div class="ex-see xs-green" @click="goto('https://rdft-preserved-private-papershot.netlify.app')">
                        <svg> <use href="../assets/icons.svg#gamepad" width="20" height="20"></use> </svg>
                    </div>
                    <div class="ex-see xs-orange" @click="goto('https://github.com/r-danialf/papershot')">
                        <svg> <use href="../assets/icons.svg#git" width="20" height="20"></use> </svg>
                    </div>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>Game Construct 2 - Cloverdot Express (OSII Week 2024)</h3>
                    <p>Project - Aug 2024</p>
                </div>
                <div class="flex">
                    <div class="ex-see xs-green" @click="goto('https://rdft-cloverdotexpress.netlify.app/')">
                        <svg> <use href="../assets/icons.svg#gamepad" width="20" height="20"></use> </svg>
                    </div>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>Easy SPP Logger (Native PHP)</h3>
                    <p>Project - Jun 2024</p>
                </div>
                <div class="ex-see xs-orange" @click="goto('https://github.com/r-danialf/easySPP')">
                    <svg> <use href="../assets/icons.svg#git" width="20" height="20"></use> </svg>
                </div>
            </div>
        </div>
    </div>
    
    <div class="exp">
        <div class="ex-head">
            <img src="../assets/company/dicoding_logo.jpeg" alt="">
            <h2>Dicoding Indonesia</h2>
        </div>
        <div class="ex-body">
            <div class="ex-certificates">
                <div>
                    <h3>Aplikasi Back-End untuk Pemula</h3>
                    <p>Course - Expires: April 2026</p>
                </div>
                <div class="ex-see" @click="goto('https://www.dicoding.com/certificates/EYX467JNRPDL')">
                    <svg> <use xlink:href="../assets/icons.svg#file" width="20" height="20"></use> </svg>
                </div>
            </div>
            <div class="ex-certificates">
                <div>
                    <h3>Dasar Pemrograman JavaScript</h3>
                    <p>Course - Expires: April 2026</p>
                </div>
                <div class="ex-see" @click="goto('https://www.dicoding.com/certificates/1OP80D001XQK')">
                    <svg> <use xlink:href="../assets/icons.svg#file" width="20" height="20"></use> </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const goto = (link) => {
    window.open(link, "_blank");
}
</script>

<style lang="scss" scoped>
h2 {
    margin: 0;
    font-weight: bold;
}

h3 {
    font-weight: lighter;
    margin: 0;
}

hr {
    margin: 1.2em 0;
}

img {
    width: 40px;
    height: 40px;
    margin-right: 1em;
}

.exp {
    padding: 0.3em;
    background-color: #113;
}

.ex-head {
    display: flex;
    align-items: center;

    svg {
        margin-right: 1em;
        width: 30px;
        height: 30px;
    }
}

.ex-certificates {
    background-color: #224;
    padding: 0.5em 0.8em;
    margin: 0 0 0.5em 0;
    
    display: flex;
    justify-content: space-between;
    
    p {
        font-size: small;
        margin-top: 0;
    }
    
    div {
        margin: 0;
        padding: 0;
    }
}

.ex-see {
    img {
        width: 20px;
        height: 20px;
    }

    * {
        padding: 0.5em;
        margin: 0.2em;
        background-color: #33e;
        fill: white;
        
        border-radius: 7px;
        transition: all 0.1s ease-in-out;
        
        &:hover {
            cursor: pointer;
            background-color: #12d;
        }
    }
}

.xs-green * {
    background-color: #393;
    transition: all 0.1s ease-in-out;
    
    &:hover {
        background-color: #262;
    }
}

.xs-orange * {
    background-color: #d31;
    transition: all 0.1s ease-in-out;
    
    &:hover {
        background-color: #921;
    }
}

.flex {
    display: flex;
}

svg {
    width: 20px;
    height: 20px;
    
    use {
        fill: white;
    }
}

</style>