<script>
    import SocialMediaLogin from "$lib/components/SocialMediaLogin.svelte";
    import EmailLogin from "$lib/components/EmailLogin.svelte";
    import SupportImageSignIn from "$lib/components/SupportImageSignIn.svelte";
</script>

<section>
    <div class="container w-100 h-100 flex flex_row">
        <div class="content">
            <div class="social_login">
                <SocialMediaLogin title="Sign In" />
            </div>

            <div class="email_login">
                <EmailLogin />
            </div>
        </div>
        <div class="background">
            <SupportImageSignIn title="Welcome back!!!" content="Enter a world where are limitless.Login now to continue your adventure."/>
        </div>  
    </div>
</section>

<style>

</style>