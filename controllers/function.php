<?php
/**
 * display the content of $debug in f12 console like console.log()
 */
function consoleLog($debug) {
    echo '<script>';
    echo 'console.log(' . json_encode($debug) . ')';
    echo '</script>';
}

function currentAge():int{
    return (date("M") < 5 || date("d") < 8 ? date("Y") - 2003 : date("Y") - 2002);
}