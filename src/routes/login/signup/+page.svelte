<script>
    import SocialMediaLogin from "$lib/components/SocialMediaLogin.svelte";
    import Signup from "$lib/components/Signup.svelte";
    import SupportImage from "$lib/components/SupportImage.svelte";

    export let form;
    console.log(form, "form in signup...");
</script>   

<section>
    <div class="container flex flex_row">
        <div class="background">
            <SupportImage title="Ready to take the first step!!!" content="Sign up now and let's make magic happen together!" imageLink="/images/images/background-signup.png"/>
        </div>  
        <div class="content flex flex_col flex_space_between">
            <div class="social_login w-100">
                <SocialMediaLogin title="Sign Up" />
            </div>

            <div class="email_login w-100">
                <Signup {form}/>
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