<?php get_header(); ?>

<style type="text/css">
#intro { 
    background: url(wp-content/themes/dotme/assets/images/intro.png) 50% 0 fixed; 
    height: auto;  
    margin: 0 auto; 
    width: 100%; 
    position: relative; 
    padding: 100px 0;
}
#home { 
    background: url(wp-content/themes/dotme/assets/images/home.png) 50% 0 fixed; 
    height: auto;  
    margin: 0 auto; 
    width: 100%; 
    position: relative; 
    padding: 200px 0;
    color:#fff;
}
#about { 
    background: url(wp-content/themes/dotme/assets/images/about.png) 50% 0 fixed; 
    height: auto;
    margin: 0 auto; 
    width: 100%; 
    position: relative; 
    padding: 100px 0;
}
</style>


<!-- Section 1 -->
<section id="intro" data-speed="6" data-type="background">
    <div class="container">
        <h1>I am parallax :)</h1>
    </div>
</section>
<!-- Section 2 -->
<section id="home" data-speed="4" data-type="background">
    <div class="container">
        More content goes here!
    </div>
</section>
<!-- Section 3 -->
<section id="about" data-speed="2" data-type="background">
    <div class="container">
        This is the final section!
    </div>
</section>


<?php get_footer(); ?>