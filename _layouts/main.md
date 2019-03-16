<!doctype html>
<html>
  <head>
  	<meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- COMMON TAGS -->
<meta charset="utf-8">
<!-- Search Engine -->
<meta name="description" content="MarvelCount, an interactive webapp built and crafted in tribute to the Marvel Cinematic Universe.">
<meta name="image" content="https://marvelcount.com/dist/mc-logo.png">
<!-- Schema.org for Google -->
<meta itemprop="description" content="MarvelCount, an interactive webapp built and crafted in tribute to the Marvel Cinematic Universe.">
<meta itemprop="image" content="https://marvelcount.com/dist/mc-logo.png">
<!-- Twitter -->
<meta name="twitter:card" content="summary">
<meta name="twitter:description" content="MarvelCount, an interactive webapp built and crafted in tribute to the Marvel Cinematic Universe.">
<meta name="twitter:site" content="@marvelcount">
<meta name="twitter:image:src" content="https://marvelcount.com/dist/mc-logo.png">
<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta name="og:description" content="MarvelCount, an interactive webapp built and crafted in tribute to the Marvel Cinematic Universe.">
<meta name="og:image" content="https://marvelcount.com/dist/mc-logo.png">
<meta name="og:url" content="https://marvelcount.com/">
<meta name="og:site_name" content="MarvelCount">
<meta name="og:type" content="website">
    <title>{{ page.title }}</title>

	<link rel="stylesheet" href="{{ site.baseurl }}/scss/style.css">

	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136382055-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-136382055-1');
</script>
    
  </head>
  <body>
  	<div id = "app-nav"></div>
    {{ content }}
    <div id = "app-footer"></div>
    <script type="text/javascript" src="{{ site.baseurl }}/dist/build.js"></script>
  </body>
</html>