<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title> <?= $title ?> </title>
  <link rel="stylesheet" href="./css/globalStyle.css">
  <link rel="stylesheet" href="./css/darkMode.css">
  <link rel="shortcut icon" type="image/x-icon" href="vendor\img\logo_portfolio.png" />
  <?= isset($add_style) ? $add_style : '' ?>
</head>

<body class="dark">

  <!-- <nav class="navbar">

      <a href="index.php?page=index">Nathan Melin</a>

      <input id="menu-toggle" type="checkbox"/>
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>

        <ul class="menu">
          <li class="nav-item">
            <a class="nav-link active fs-3"  href="index.php?page=index">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-3" href="index.php?page=projet">Projet</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-3" href="index.php?page=studies">Etudes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-3" href="index.php?page=skill">Compétences</a>
          </li>
          <li>
            <button class="nav-link fs-3" id="btn-dm" onclick="myFunction()">Mode Nuit</button>
          </li>
        </ul>
      
    </nav> -->

  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active fs-3" href="index.php?page=index">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-3" href="index.php?page=projet">Projet</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-3" href="index.php?page=studies">Etudes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fs-3" href="index.php?page=skill">Compétences</a>
      </li>

      <li class="nav-item has-dropdown">
        <a href="#">Theme</a>
        <ul class="dropdown">
          <li class="dropdown-item">
            <a id="light" href="#">Light</a>
          </li>
          <li class="dropdown-item">
            <a id="dark" href="#">Dark</a>
          </li>
          <li class="dropdown-item">
            <a id="green" href="#">Solar</a>
          </li>
        </ul>
      </li>

    </ul>


    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>
  </nav>
  <header>
    <h1>Portfolio de zinzin</h1>
  </header>