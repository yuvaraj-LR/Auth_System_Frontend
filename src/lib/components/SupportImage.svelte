<script>
    export let title;
    export let content;
    export let imageLink;
</script>

<section>
    <div class="background_img">
        <img src={imageLink} alt="signin-background" class="bg_img">
    </div>

    <div class="background_content flex flex_col flex_center white-color">
        <div class="bg_content flex flex_col">
            <h1 class="uppercase">{title}</h1>
            <h3 class="p-5">{content}</h3>
        </div>
    </div>
</section>

<style>
    .background_img {
        position: relative;
    }

    .bg_img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100vh;
        box-shadow: rgba(28, 28, 36, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .background_content {
        position: relative;
        height: 100vh;
        max-width: 500px;
        width: 100%;
        margin: auto;
    }

    .bg_content {
        padding: 1rem;
        gap: 2rem;
    }

</style>