<script>
    import ForgetPassword from "$lib/components/ForgetPassword.svelte";
    import SupportImage from "$lib/components/SupportImage.svelte";

    export let form;
    export let data;

    const email = "yuvaraj@cn.com";
</script>   

<section>
    <div class="container flex flex_row">
        <div class="background">
            <SupportImage title="Quick, convenient, secure" content="Unlock the door to your digital world with the key of OTP." imageLink="/images/images/background-signup.png"/>
        </div>  
        <div class="content flex flex_col">
            <div class="social_login w-100">
                <h2 class="uppercase text_center">Sign By OTP</h2>
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

    .back {
        margin: 30px auto;
        color: #925778;
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