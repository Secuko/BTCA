<script>
export default {
    setup() {

        const H2_TEXT_1 = "Готовы начать?"
        const SMALL_TEXT_1 = "Независимо от того, являетесь ли вы разработчиком, мерчантом, конечным пользователем или покупателем окон, мы приветствуем вас в сообществе BTCA."
        const H2_TEXT_2 = "Никогда не пропускайте обновления"
        const SMALL_TEXT_2 = "Подпишитесь на информационный бюллетень\nи будьте первым, кто получит новейшие оповещения, объявления\nи обновления о разработках BTCA."
        const BUTTON_TEXT = "Подписаться"
        const EMAIL_PLACEHOLDER = "Ваш e-mail"
        const INSTRUCTIONS = [
            {
                step_index: "1",
                step: "шаг",
                text: "Скачайте\nприложение",
                src: new URL('../../assets/images/instruction1.png', import.meta.url).href,
                alt: 'image',
            },
            {
                step_index: "2",
                step: "шаг",
                text: "Регистрируйтесь",
                src: new URL('../../assets/images/instruction2.png', import.meta.url).href,
                alt: 'image',
            },
            {
                step_index: "3",
                step: "шаг",
                text: "Пользуйтесь",
                src: new URL('../../assets/images/instruction3.png', import.meta.url).href,
                alt: 'image',
            },
        ]

        return {
            H2_TEXT_1,
            SMALL_TEXT_1,
            H2_TEXT_2,
            SMALL_TEXT_2,
            BUTTON_TEXT,
            EMAIL_PLACEHOLDER,
            INSTRUCTIONS
        };
    },

}


</script>

<template>
    <div class="container custom-style">
        <div class="text-block">
            <div class="text-block__h2">
                <h2>{{ H2_TEXT_1 }}</h2>
            </div>
            <div class="text-block__text">
                <p>{{ SMALL_TEXT_1 }}</p>
            </div>
        </div>
        <div class="instructions">
            <div class="instruction" v-for="(item, index) in INSTRUCTIONS" :key="index"
                :style="{ backgroundImage: `url(${item.src})`, alt: `${item.alt}` }">
                <div class="instruction__header">
                    <span class="step_index"> {{ item.step_index }}</span>
                    <span class="step">{{ item.step }}</span>
                    <div class="separated-line"></div>
                </div>
                <h3 class="instruction__h3">
                    {{ item.text }}
                </h3>
                <div class="instruction__picture">

                </div>
            </div>
        </div>
        <form class="subsribe-banner">
            <div class="subsribe-banner__h2">
                <h2>{{ H2_TEXT_2 }}</h2>
            </div>
            <div class="subsribe-banner__text">
                <p>{{ SMALL_TEXT_2 }}</p>
            </div>
            <div class="input-field">
                <input type="email" name="email" id="email" required :placeholder="{EMAIL_PLACEHOLDER}">
                <button class="subscribe-button">
                    <span>{{ BUTTON_TEXT }}</span>
                </button>
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>
.container.custom-style {
    background: $mainBg;
    position: relative;
    height: 107.3rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 12.8rem;
}

.text-block {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1.6rem;
    max-width: 54.3rem;
}

.text-block__h2 {
    @include text(h2);
    background: linear-gradient(91.92deg, $white 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}

.text-block__text {
    @include text(p);
    color: $white;
    text-align: center;
}

.instructions {
    margin-top: 4.9rem;
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
}

.instruction {
    height: 25.7rem;
    width: 36.5rem;
    border-radius: 0.8rem;
    background: $sliderBlack;
    padding-top: 3rem;
    padding-left: 2.8rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.instruction__header {
    display: flex;
    align-items: center;
    /* Выравнивание элементов по вертикали по центру */
}

.step_index {
    @include text(caption);
    color: $white;
    margin-left: 0.5rem;
    margin-right: 0.7rem;
}

.step {
    @include text(p);
    color: rgba($color: $white, $alpha: 0.8);
    width: 3.3rem;
    margin-right: 2.8rem;
}

.separated-line {
    flex-grow: 1;
    height: 0.1rem;
    background: rgba($color: $white, $alpha: 0.1);
}

.instruction__h3 {
    @include text(h3);
    color: $white;
    white-space: pre-line;
}

.subsribe-banner{
    padding-top: 7.5rem;
    padding-left: 5.4rem;
    margin-top: 3.2rem;
    width: 114rem;
    height: 40.2rem;
    border-radius: 2.8rem;
    background: url('../../assets/images/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.subsribe-banner__h2{
    @include text(h2);
    background: linear-gradient(91.92deg, $white 29.24%, rgba(176, 250, 255, 0) 131.64%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-bottom: 1.6rem;
}

.subsribe-banner__text{
    @include text(p);
    color: rgba($color: $white, $alpha: 0.8);
    white-space: pre-line;
    margin-bottom: 3.2rem;
}


.subscribe-button{
    box-shadow: 0px 4px 16px 0px #00FFA342;
    background: $subscribeButton;
    border-radius: 6.6rem;
    height: 4.9rem;
    width: 16.8rem;
}

.subscribe-button span{
    @include text(button);
    color: $white;
}


</style>
