<template>
    <h1>{{ text[lang][1] }}</h1>
    <div class="r-body">
        <p>{{ text[lang][2] }}<b>{{ text[lang][3] }}</b>{{ text[lang][0] }}</p>
        <p>
            {{ text[lang][4] + text[lang][5]  }}
        </p>
        <p>
            {{ text[lang][6] + text[lang][7]  }}
        </p>
        <p>
            {{ text[lang][8] + text[lang][9]  }}
        </p>
        <p>
            {{ text[lang][10] }}
        </p>
    </div>
    <div class="r-socmed">
        <svg> <use href="../assets/icons.svg#github" width="30" height="30"></use> </svg>
        <svg> <use href="../assets/icons.svg#gamejolt" width="30" height="30"></use> </svg>
        <svg> <use href="../assets/icons.svg#itchio" width="30" height="30"></use> </svg>
        <svg> <use href="../assets/icons.svg#youtube" width="30" height="30"></use> </svg>
        <svg> <use href="../assets/icons.svg#discord" width="30" height="30"></use> </svg>
    </div>

</template>

<script setup>
import { inject } from "vue";
const lang = inject("lang");

const text = {
  en: [
    ".",
    "Greetings!",
    "I am ",
    "@rdft-dev",
    "A passionate web developer, game developer, software engineer, and UI/UX designer. ",
    "I've been developing stuff since 2021, and I am currently working on a game project! ",
    "Basically, I am a multi-talented developer from Indonesia specializing in both technical and creative skills! ",
    "I am always eager to try something new and push my creativity beyond its limits. ",
    "I made this portfolio website as simple as possible, detailing all the information you need to know about me. ",
    "No need for fancy design, because I think simplicity speaks the loudest and would often be more approachable. ",
    "Thank you for visiting."
  ],
  id: [
    ".",
    "Selamat Datang!",
    "Saya ",
    "@rdft-dev",
    "Seorang web developer, game developer, pengembang perangkat lunak, dan UI/UX designer. ",
    "Saya telah mengembangkan berbagai macam aplikasi sejak 2021, dan saat ini saya aktif dalam suatu proyek game! ",
    "Bisa dibilang, saya adalah pengembang multi-talenta dari Indonesia yang menguasai keterampilan teknis dan kreatif! ",
    "Saya selalu ingin mencoba hal-hal yang baru dan mendorong kreativitas saya melampaui batas yang saya bisa. ",
    "Saya membuat situs portofolio ini sesederhana mungkin, menjelaskan semua informasi yang perlu Anda ketahui tentang saya. ",
    "Tak perlu desain yang mewah, karena saya percaya kesederhanaan lebih efektif dan lebih mudah untuk dimengerti. ",
    "Terima kasih sudah berkunjung."
  ],
  jv: [
    "꧉",
    "꧋꧆꧋꧈ꦱꦸꦒꦼꦁꦫꦮꦸꦃ꧉",
    "꧋ꦏꦸꦭꦤꦩꦶꦤꦺ",
    " @rdft-dev",
    "꧋ꦪꦲꦶꦏꦸ꧈ꦠꦸꦏꦁꦒꦮꦺꦮꦺꦧ꧀꧈ꦒꦮꦺꦒꦺꦩ꧀꧈ꦒꦮꦺꦥꦿꦁꦏꦠ꧀ꦲꦭꦸꦱ꧀꧈ꦭꦤ꧀꧈ꦝꦺꦱꦲꦶꦤꦼꦂUI/UX꧉ ",
    "ꦏꦸꦭꦫꦩ꧀ꦥꦸꦁꦤ꧀ꦢꦩꦼꦭ꧀ꦩꦕꦼꦩ꧀ꧏꦲꦥ꧀ꦭꦶꦏꦱꦶꦮꦶꦮꦶꦠ꧀ꦠꦲꦸꦤ꧀ 2021꧈ꦱꦂꦠꦱꦏ꧀ꦤꦶꦏꦶꦏꦸꦭꦲꦏ꧀ꦠꦶꦥ꦳ꦲꦶꦁꦱꦭꦃꦱꦶꦗꦶꦤꦶꦁꦥꦿꦺꦴꦪꦺꦏ꧀ꦒꦺꦩ꧀꧉",
    "",
    "",
    "",
    "",
    "ꦩꦠꦸꦂꦱꦼꦩ꧀ꦧꦃꦤꦸꦮꦸꦤ꧀ꦥꦤ꧀ꦗꦼꦤꦼꦔꦤ꧀ꦱꦩ꧀ꦥꦸꦤ꧀ꦩꦮꦺꦴꦱꦶ꧉"
  ]
};
</script>

<style lang="scss" scoped>
div {
    margin: 0 1em;
}

svg {
    width: 30px;
    height: 30px;
    margin-right: 1em;
    fill: white;
    transition: all 0.1s ease-in-out;

    &:hover {
        fill: #77e;
    }
}

.r-body {
    p {
        text-align: justify;
        margin: 1.2em 0;
    }

    i {
        color: #dd5;
    }
}

.r-socmed {
    display: flex;
    justify-content: center;
    background-color: #113;
    padding: 1em;
    margin-top: 3em;
}
</style>