<?php

$router->get("/{:url}/", function ($url) {

    $data  = Func::request("single/" . $url);
    // $data = json_decode(file_get_contents("views/data.json"), false);
    if ($data == "404") {
        include("views/404.php");
        exit;
    }

    $resto = $data->restaurant;
    $menu = $data->menu;
    $opening_time = $data->opening_time;
    $opening_time_week = $data->opening_time_week;
    $source = $data->source;
    $specialty = $data->specialty;
    $delivery_zone = $data->delivery_zone;
    $reviews = $data->reviews;

    $resto->city = ucwords(mb_strtolower($resto->city));
    $just_eat_url = urldecode($source->just_eat_url);

    $title = "Restaurant " . $resto->name . " à " . $resto->city . " - " . APP_NAME;
    $description = "Recevez tous vos plats favoris de chez " . $resto->name . " à " . $resto->city . " en livraison ou à emporter. 
    Composez votre menu sur " . APP_NAME;


    //restaurantShema
    $restaurantShema = (object) [];

    $restaurantShema->{"@context"} = "http://schema.org";
    $restaurantShema->{"@type"} = "Restaurant";
    $restaurantShema->name = $resto->name;
    $restaurantShema->image = $resto->logo;
    $restaurantShema->url = ACTUAL_URL;

    if (isset($resto->phone)) {
        $restaurantShema->telephone = $resto->phone;
    }

    $restaurantShema->priceRange = "€€";


    if ($opening_time != null) {
        $days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        $openingHoursSpecification =  [];

        foreach ($opening_time as $key => $ot) {
            $ot = $ot[0];
            $ohsitem =  (object) [];
            $ohsitem->{"@type"} = "OpeningHoursSpecification";
            $ohsitem->dayOfWeek = $days[$key - 1];
            if ($ot->status == "partially_opened") {
                $ohsitem->opens =  $ot->start_time;
                $ohsitem->closes = $ot->end_time;
            } else {
                if ($ot->status == "all_day") {
                    $ohsitem->opens =  "00:00";
                    $ohsitem->closes = "23:59";
                } else {
                    $ohsitem->opens =  "00:00";
                    $ohsitem->closes = "00:00";
                }
            }
            $openingHoursSpecification[$key - 1] = $ohsitem;
        }

        $restaurantShema->openingHoursSpecification = $openingHoursSpecification;
    }

    $restaurantShema->servesCuisine = $specialty;
    $address = (object) [];
    $address->{"@type"} = "PostalAddress";
    $address->addressLocality = $resto->city;
    $address->addressRegion = "FR";
    $address->postalCode = $resto->zip_code;
    $address->streetAddress = $resto->address;
    $restaurantShema->address = $address;

    if (isset($source->rating)) {
        $aggregateRating = (object) [];
        $aggregateRating->{"@type"} = "AggregateRating";
        $aggregateRating->ratingValue = $source->google_maps_rating;
        $aggregateRating->reviewCount = $source->google_maps_total_ratings;
        $restaurantShema->aggregateRating = $aggregateRating;
    }

    $hasMenu = (object) [];
    $hasMenu->name = $resto->name;
    $hasMenu->hasMenuSection = [];
    foreach ($menu as $category) {
        $hasMenuSection = (object) [];
        $hasMenuSection->{"@type"} = "MenuSection";
        $hasMenuSection->name = $category->name;
        $hasMenuSection->hasMenuItem = [];
        foreach ($category->items as $product) {
            $hasMenuItem = (object) [];
            $hasMenuItem->{"@type"} = "MenuItem";
            $hasMenuItem->name = $product->name;
            $hasMenuItem->description = $product->description;
            if (isset($product->image)) {
                $hasMenuItem->image = $product->image;
            }

            $offers = (object) [];
            $offers->price = $product->price;
            $offers->priceCurrency = "EUR";
            $hasMenuItem->offers = $offers;
            $hasMenuSection->hasMenuItem[] = $hasMenuItem;
        }
        $hasMenu->hasMenuSection[] = $hasMenuSection;
    }
    $restaurantShema->hasMenu = $hasMenu;

    $restaurantShema = json_encode($restaurantShema);
    //End - restaurantShema
?>
    <!doctype html>
    <html>

    <head>
        <title><?= $title ?></title>


        <meta name="description" content="<?= $description ?>" />
        <meta name="keywords" content="restaurant,<?= $resto->name ?>,<?= implode(", livraison ", $specialty); ?>,<?= $resto->city ?>,<?= $resto->zip_code ?>,<?= $resto->address ?>" />

        <?= App::getHead(); ?>

        <?= App::getStyle() ?>

        <script type="application/ld+json">
            <?= $restaurantShema ?>
        </script>
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "<?= BASE_URL ?>"
                }, {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "<?= mb_strtolower($resto->city) ?>",
                    "item": "<?= Url::link("filterCity", [0, $resto->city]) ?>"
                }, {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "<?= $resto->name ?>",
                    "item": "<?= ACTUAL_URL ?>"
                }]
            }
        </script>
        <?php include('components/head.php'); ?>

    </head>

    <body>

        <div id="wrapper">

            <header id="header-container" class="fullwidth not-sticky header-home">
                <div id="header">
                    <div class="container  nav-scroll">
                        <div class="left-side">
                            <div id="logo"><a href=" <?= BASE_URL ?>"> <img src="<?= BASE_URL . APP_LOGO ?>" alt="<?= APP_NAME ?>"> </a></div>
                            <nav id="navigation">
                                <ul>
                                    <li><a href="<?= BASE_URL ?>#get-started"><i class="mdi mdi-food"></i> Notre plateforme
                                        </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>


            <div class="single-page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="single-page-header-inner">
                                <div class="left-side">

                                    <div class="header-details">
                                        <h1><?= $resto->name ?> </h1> <small> #<?= $resto->id ?></small>
                                        <h2>Livraison à domicile de <span> <?= implode("</span>, <span>", $specialty); ?></h2>
                                        <br>
                                        <ul>
                                            <?php if ($source->google_maps_rating && $source->google_maps_rating >= 3) { ?>
                                                <li class="nav-scroll">
                                                    <a href="#review">
                                                        <div class="stars-outer ">
                                                            <div class="stars-inner" data-rating="<?= $source->google_maps_rating ?>"></div>
                                                        </div> <small>(<?= $source->google_maps_total_ratings ?>)</small>
                                                    </a> </li>
                                            <?php } ?>
                                            <li>
                                                <i class="mdi-map mdi mr-1"></i><?= $resto->address ?>, <?= $resto->zip_code ?> <?= $resto->city ?> </li>


                                        </ul>
                                    </div>
                                </div>
                                <div class="right-side">
                                    <a href="https://www.google.com/maps/search/?api=1&query=restaurant <?= $resto->name . " " . $resto->city ?>" target="_blank" class=" btn call-btn  w-100"><i class="mdi mdi-food"></i>
                                        Voir le restaurant
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="background-image-container background-image" data-background="<?= Func::basePlus("assets/image/home/food-1932466_1920.jpg") ?>"></div>


            </div>



            <div class="container">
                <!-- Carré -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8856372675107777" data-ad-slot="3981211768" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                <!-- Breadcrumbs -->
                <nav id="breadcrumbs" class="margin-top-19">
                    <ol>
                        <li>
                            <a href="<?= BASE_URL ?>">
                                <span>Accueil</span></a>
                        </li>
                        <li>
                            <a href="<?= Url::link("filterCity", [0, $resto->city]) ?>">
                                <span><?= $resto->city ?></span></a>
                        </li>
                        <li>
                            <span><?= $resto->name ?></span>
                        </li>
                    </ol>

                </nav>
                <div class="row">

                    <!-- Content -->


                    <div class="col-12  col-xl-9 col-md-9">

                        <!-- Description -->
                        <div class="single-page-section">


                            <div style="height : 49.4px">
                                <nav id="nav-respo" class="fixed-nav-scroll">
                                    <ul id="nav" class="nav-scroll">
                                        <?php foreach ($menu as  $key => $item) { ?>
                                            <li><a href="#<?= $item->cat_id ?>" class="<?php if ($key == 0) echo "active"; ?>"><?= $item->name ?></a></li>

                                        <?php } ?>
                                        <li class="more"> <span>Plus <i class="mdi mdi-menu-down"></i></span>
                                            <ul id="overflow">
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>



                            <div id="menu">
                                <br>
                                <h4 class="alert-box margin-top-5 margin-bottom-10">
                                    <b> <?= $resto->name ?> s'assure de livrer vos repas le plus rapidement possible.
                                        Demandez au restaurant s’il propose des commandes à emporter </b></h4>
                                <br>
                                <?php
                                $product_num = 0;
                                foreach ($menu as $key => $item) { ?>

                                    <div class="cards-wrapper" id="<?= $item->cat_id ?>">
                                        <h3> <?= $item->name ?> </h3>
                                        <?php
                                        foreach ($item->items as $pKey => $product) {
                                        ?>
                                            <div class="card-content">
                                                <h4><?= $product->name ?></h4>
                                                <?php if ($product->description != "") { ?>
                                                    <small class="desc"><?= $product->description ?></small>
                                                <?php }   ?>
                                            </div>
                                        <?php $product_num++;
                                        } ?>

                                    </div>


                                <?php } ?>
                            </div>

                        </div>


                    </div>


                    <div class="col-12 col-xl-9" id="review">
                        <?php if (count($reviews) > 0) { ?>

                            <div class="boxed-list margin-bottom-60">

                                <ul class="boxed-list-ul">

                                    <?php
                                    $avatares = [
                                        "https://lh4.googleusercontent.com/-Rk1pUOEmGXs/AAAAAAAAAAI/AAAAAAAAAAA/L5oAUuGSMiU/s48-fm/p.png",
                                        "https://lh3.googleusercontent.com/-ItgwIinbBSc/AAAAAAAAAAI/AAAAAAAAAAA/XBfReor2gpY/s48-fm/p.png",
                                        "https://lh4.googleusercontent.com/-UOfVnBjWSGE/AAAAAAAAAAI/AAAAAAAAAAA/hvSBV0E23uI/s48-fm/p.png"
                                    ];

                                    foreach ($reviews as $key => $review) {
                                        if ($review->rating == 5) { ?>

                                            <li>
                                                <div class="boxed-list-item">
                                                    <div class="item-image">
                                                        <img class="lazyload" data-src="<?= $avatares[rand(0, 2)] ?>">
                                                    </div>
                                                    <div class="item-content">
                                                        <h4><?= $review->author_name ?></h4>
                                                        <div class="item-details">
                                                            <div class="stars-outer">
                                                                <div class="stars-inner" data-rating="<?= $review->rating ?>"></div>
                                                            </div>
                                                        </div>
                                                        <div class="item-description">
                                                            <p><?= $review->body ?></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                    <?php }
                                    } ?>

                                </ul>
                            </div>

                        <?php } ?>

                    </div>

                </div>




            </div>


            <?php include('components/footer.php'); ?>


        </div>


        <?= App::getScript(); ?>

    </body>

    </html>

<?php
}); ?>