<script>
    import SocialMediaLogin from "$lib/components/SocialMediaLogin.svelte";
    import ForgetPassword from "$lib/components/ForgetPassword.svelte";
    import SupportImage from "$lib/components/SupportImage.svelte";

    export let form;
    export let data;

    const email = "yuvaraj@cn.com";
</script>   

<section>
    <div class="container flex flex_row">
        <div class="background">
            <SupportImage title="Lost your way?" content="Reset your password and let's find the right path again." imageLink="/images/images/background-signup.png"/>
        </div>  
        <div class="content flex flex_col flex_space_between">
            <div class="social_login w-100">
                <SocialMediaLogin title="Forget Password"  />
            </div>

            <div class="email_login w-100">
                <ForgetPassword {email} {form} {data}/>
            </div>
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
            padding: 30px 50px;
        }

        .background {
            display: block;
            width: 70%;
        }
    }

</style>