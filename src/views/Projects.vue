<template>
    <h1>Projects</h1>
    <!-- Papershot -->
    <div class="dd-head" @click="p_paper = !p_paper">
        <div class="dd-title">
            <h2>Papershot</h2>
            <p>Discover a wretched world you have never seen before!</p>
        </div>
        <div class="dd-drop" :class="{ yflip: p_paper }">
            <svg> <use xlink:href="../assets/icons.svg#down" width="30" height="30"></use> </svg>
        </div>
    </div>
    <div class="dd-info" v-show="p_paper">
        <div class="di-image">
            <img src="../assets/dropimage.jpg" alt="">
        </div>
        <div class="di-text">
            <p>
                What was once a beautiful world now has to meet its demise as the end of the world unfolded within their eyes.
                Join the adventure as they try to reclaim what once was a lost cause and take back their land!
            </p>
            <hr />
            <svg> <use xlink:href="../assets/icons.svg#gamejolt" width="30" height="30"></use> </svg>
            <svg> <use xlink:href="../assets/icons.svg#itchio" width="30" height="30"></use> </svg>
        </div>
    </div>

    <!-- Cloverdot Express -->
    <div class="dd-head" @click="p_clover = !p_clover">
        <div class="dd-title">
            <h2>Cloverdot Express</h2>
            <p>The number #1 special delivery express service needed! Please send your CV down below!</p>
        </div>
        <div class="dd-drop" :class="{ yflip: p_clover }">
            <svg> <use xlink:href="../assets/icons.svg#down" width="30" height="30"></use> </svg>
        </div>
    </div>
    <div class="dd-info" v-show="p_clover">
        <div class="di-image">
            <img src="../assets/dropimage.jpg" alt="">
        </div>
        <div class="di-text">
            <p>
                A delivery service is in need for your help! 
                Apply to be a member of Cloverdot Express now and 
            </p>
            <hr />
            <svg> <use xlink:href="../assets/icons.svg#gamejolt" width="30" height="30"></use> </svg>
            <svg> <use xlink:href="../assets/icons.svg#itchio" width="30" height="30"></use> </svg>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const p_paper = ref(false);
const p_clover = ref(false);
</script>


<style lang="scss" scoped>
h2 {
    margin: 0;
    font-weight: bold;
}

hr {
    margin: 1.2em 0;
}

svg {
    width: 30px;
    height: 30px;
    fill: white;
    transition: all 0.1s ease-in-out;

    &:hover {
        fill: #77e;
    }
}

.dd-head {
    display: flex;
    justify-content: space-between;

    background-image: linear-gradient(to right, #000022cc, #000022cc), 
        url('@/assets/example.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 25%;
    min-height: 6em;

    margin-bottom: 0;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover {
        cursor: pointer;
    }
}

.dd-title {
    p {
        font-size: small;
        color: #bbb;
    }
}

.dd-drop {
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    svg {
        fill: white;
    }
}

.dd-info {
    background-color: #112;
    padding: 0.5em;
    margin-top: 0;
    margin-bottom: 2em;

    display: flex;

    p {
        margin: 0;
    }

    img {
        width: 100%;
        fill: white;
    }
}

.di-image {
    flex: 1;
}

.di-text {
    flex: 2;
    color: white;

    img {
        width: 26px;
        fill: white;
        margin: 0 0.5em 0 0;
    }

    svg {
        margin-right: 0.5em;
    }
}

.yflip {
    transform: scaleY(-1);
}
</style>
