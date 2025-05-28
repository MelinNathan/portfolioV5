<?php

class Conway{

public function handleRequest()
    {
        $title = 'Conway\'s Game of Life - Nathan Melin';
        $add_script = '<script src="js\project\conway.js"></script>';
        include 'views/project/v_conway.php';
    }


}