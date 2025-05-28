<?php

class Controller
{
    public function handleRequest($page, $sub)
    {
        switch ($page) {
            case 'index':
                $statut = "En recherche d'alternance";
                $title = 'Portfolio Nathan Melin';
                include 'views/v_index.php';
                break;
            case 'projet':
                $sub = (isset($_GET['sub'])) ? $_GET['sub'] : '';
                include 'controllers/Project.php';
                $portfolioController = new Project();
                $portfolioController->handleRequest($sub);
                break;
            case 'studies':
                include 'controllers/Studies.php';
                $portfolioController = new Studies();
                $portfolioController->handleRequest();
                break;
            case 'skill':
                include 'controllers/Skill.php';
                $portfolioController = new Skill();
                $portfolioController->handleRequest();
                break;
        }
    }
}
