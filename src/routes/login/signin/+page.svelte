<script>
    import SocialMediaLogin from "$lib/components/SocialMediaLogin.svelte";
    import EmailLogin from "$lib/components/EmailLogin.svelte";
    import SupportImage from "$lib/components/SupportImage.svelte";
</script>   

<section>
    <div class="container flex flex_row">
        <div class="content flex flex_col flex_space_between">
            <div class="social_login w-100">
                <SocialMediaLogin title="Sign In" />
            </div>

            <div class="email_login w-100">
                <EmailLogin />
            </div>
        </div>
        <div class="background">
            <SupportImage title="Welcome back!!!" content="Enter a world where are limitless.&nbsp; &nbsp; &nbsp; Login now to continue your adventure." imageLink="/images/images/background-login.png"/>
        </div>  
    </div>
</section>

<style>
    .background {
        display: none;
    }

    .content {
        margin: auto;
        padding: 40px 25px;
    }


    @media (min-width: 768px) {
        .content {
            width: 60%;
            padding: 85px 50px;
        }

        .background {
            display: none;
            width: 40%;
        }
    }

    @media (min-width: 1200px) {
        .content {
            width: 30%;
            padding: 50px;
        }

        .background {
            display: block;
            width: 70%;
        }
    }
</style>