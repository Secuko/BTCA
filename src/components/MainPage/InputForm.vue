<script setup>

</script>

<template>
    <section class="container">
        <div class="cardCreatingBlock">
            <div class="inputFormsWrapper">
                <div class="cardPreview">
                    <div class="inside">

                    </div>
                </div>
                <div class="cardForm">
                    <div class="inside">
                        <div class="h3-wrapper">
                            <h3>
                                Выберите дизайн карты
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.cardCreatingBlock {
    padding: 0 3.5rem;
    width: 100%;
    padding: 5rem 0rem;
    display: flex;
    justify-content: center;
}

.inputFormsWrapper {
    width: 112.8rem;
    height: 87.5rem;
    border-radius: 2.4rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: $blue15;
}

.cardPreview {
    padding: 3.5rem 2.4rem 5.2rem 3.6rem;
    flex: 40%;
}

.cardForm {
    padding: 3.5rem 6.8rem 5.2rem 6.8rem;
    flex: 60%;
}

.inside{
    height: 100%;
    width: 100%;
    background-color:aliceblue;
}

.h3-wrapper{
    display: flex;
}

h3{
    @include text(h3CardForm);
    color: $buttonBlack
}

</style>
