<!-- navbar + doctype -->
<?php include 'views/v_navbar.php' ?>


<div class="mt-3 d-flex justify-content-center">
    <h1>Bienvenue sur mon portfolio</h1>
</div>






<div class="row">
    <div class="col-lg-1"> &nbsp; </div>
    <div class="col-lg-3 py-5 px-3 index_presentation  light-block">
        <p class="index_intro">Je m'appelle Nathan Melin</p>
        <p class="">J'ai <?= currentAge() ?> ans </p>
        <p class="">Je suis en BTS Services Informatiques aux Organisations option
            développemnt Web et Logiciel</p>
    </div>
    <div class="col-lg-4"> &nbsp; </div>
    <div class=" col-lg-3 py-5 px-3  light-block">
        <p class="index_statut"> <strong>Statut :</strong> </br><?= $statut ?></p>
    </div>
    <div class="col-lg-1"> &nbsp; </div>
</div>

<div class="row mt-5">
    <div class="col-lg-1"> &nbsp; </div>
    <div class="col-lg-3 py-5 px-3 index_apprentissage light-block">
        <h5 class="">Ce que je suis en train d'apprendre:</h5>
        <ul>
            <li> Javasript</li>
            <li> Power Bi</li>
        </ul>
        <h5 class="">Je maîtrse déja : </h5>
        <button class="dark-block"><a class="nav-link" href="index.php?page=skill">Ces compétences</a></button>
    </div>


</div>

<?php include 'views/v_footer.php' ?>