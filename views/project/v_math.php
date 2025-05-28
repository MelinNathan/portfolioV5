<!-- navbar + doctype -->
<?php include 'views/v_navbar.php' ?>

<body>
    <h1>Nathan Melin</h1>
    <a href="curves.html">Curve</a>
    <a href="conway.html">Conway</a>
    <div>
        <label for="facto">Facto : </label>
        <input type="number" id="facto" placeholder="Base" />
        <label id="factoResult">waiting input</label>
    </div>
    </br>
    <div>
        <label for="power">Power : </label>
        <input type="number" id="powerBase" placeholder="Base" />
        <input type="number" id="powerExpo" placeholder="Exponent" />
        <label id="powerResult">waiting input</label>
    </div>
    </br>
    <div>
        <label for="permutation">Permutation : </label>
        <input type="number" id="permN" placeholder="n" />
        <input type="number" id="permK" placeholder="k" />
        <label id="permResult">waiting input</label>
    </div>
    </br>
    <!-- <div>
        <label for="binCoef">Binomial Coefficient : </label>
        <input type="number" id="permN" placeholder="n" />
        <input type="number" id="permK" placeholder="k" />
        <label id="permResult">waiting input</label>
    </div> -->
</body>


<!-- footer -->
<?php include 'views/v_footer.php' ?>