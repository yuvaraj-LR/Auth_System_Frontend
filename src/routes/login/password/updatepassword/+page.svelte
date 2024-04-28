<script>
    import SocialMediaLogin from "$lib/components/SocialMediaLogin.svelte";
    import UpdatePassword from "$lib/components/UpdatePassword.svelte";
    import SupportImage from "$lib/components/SupportImage.svelte";

    export let form;
    export let data;

    let email = "yuvaraj@cn.com";

</script>   

<section>
    <div class="container flex flex_row">
        <div class="background">
            <SupportImage title="Strengthen, Renew, Secure!!!" content="Update your password for enhanced data protection." imageLink="/images/images/background-login.png"/>
        </div>  
        <div class="content flex flex_col ">
            <div class="social_login w-100">
                <h2 class="uppercase text_center">Update Password</h2>
            </div>

            <div class="email_login w-100">
                <UpdatePassword {email} {form} {data}/>
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
            padding: 85px 50px;
        }

        .background {
            display: block;
            width: 70%;
        }
    }

</style>