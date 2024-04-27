<script>
    export let title;
</script>

<section>
    <div class="social_media_container flex flex_col">
        <h2 class="uppercase text_center">{title}</h2>
        <button>
            <span><img src="/images/icons/google.svg" alt="google-icon"></span>
            <span>Google</span>
        </button>
        <button>
            <span><img src="/images/icons/facebook.svg" alt="fb-icon"></span>
            <span>Facebook</span>
        </button>
    </div>

    <div class="text_center seperator"><h4> ( OR ) </h4></div>
</section>

<style>

    .social_media_container {
        gap: 1.5rem;
    }

    .seperator {
        margin: 2.5rem auto;
        position: relative;
    }

    .seperator::after {
        content: "";
        position: absolute;
        right: 10px;
        height: 2.5px;
        background: #999;
        width: 35%;
        top: .6125rem;
    }

    .seperator::before {
        content: "";
        position: absolute;
        left: 10px;
        height: 2.5px;
        background: #999;
        width: 35%;
        top: .6125rem;
    }

</style>