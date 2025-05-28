<?php

class Math
{
    public function handleRequest()
    {
        $title = 'Maths - Nathan Melin';
        $add_script = ' <script src="js\project\calculator.js"></script>
                        <script src="js\project\mathFunc.js"></script>';
        $add_style = '<link rel="stylesheet" href="./css/math_style.css">';
        include 'views/project/v_math.php';
    }

    // public static function bernoulli(float $n, float $p, float $k){
    //     if (($p<0) || ($p>1)){
    //         $result = 'La probabilité p doit être comprise en 0 et 1';
    //     } else {
    //         $result = Math::choose($k,$n) * 
    //         Math::power($p, $k) * 
    //         Math::power((1-$p),($n-$k));
    //     }
    //     return $result;
    // }
}
