<template>
    <div>
        <footer>
            <div class="footer-container">
                <img src="../assets/images/logo.png" class="footer-title"/>
                <br>
                <div class="footer-links">
                    <a href="">SIGN IN</a>
                    <a href="">SIGN UP</a>
                    <a href="">404</a>
                    <a href="">SUPPORT</a>
                    <a href="">GET THEME</a>
                </div>
                <div class="footer-sm">
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-whatsapp"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div class="copyright-div">
                THINKTECH &copy; 2020 - All rights reserved.
            </div>
        </footer>
    </div>
</template>

<style scoped>
    footer {
        margin: 0 .5rem;
        padding: 1rem;
        border-top: 1px solid var(--light-grey);
        position: relative;
    }

    .footer-title {
        position: absolute;
        top: -20%;
        left: -5%;
        height: 200px;
        width: auto;
    }

    .footer-container {
        padding: 1rem;
        display: grid;
        grid-gap: .5rem;
        align-items: center;
    }

    .footer-links {
        display: grid;
        font-size: 13px;
    }

    .footer-container a {
        color: var(--dark);
        padding: .25rem;
    }

    .copyright-div {
        margin: 0 auto;
        text-align: center;
        font-size: 11px;
        color: var(--dark);
    }

    @media screen and (min-width: 768px) {
        .footer-title {
            top: -56%;
            left: 0;
        }
        .footer-container {
            grid-template-columns: repeat(3, 1fr);
        }
        .footer-links {
            display: block;
            white-space: nowrap;
            justify-self: center;
        }
        .footer-container a {
            margin: 0 .25rem;
        }
        .footer-sm {
            justify-self: flex-end;
        }
    }

</style>