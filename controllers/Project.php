<?php
class Project
{

    public function handleRequest($project)
    {

        switch ($project) {
            case 'math':
                include 'controllers/Math.php';

                $projectController = new Math();
                $projectController->handleRequest();

                break;
            case 'conway':
                include 'controllers/Conway.php';
                $projectController = new Conway;
                $projectController->handleRequest();
                break;
            default:
                $title = 'Portfolio Nathan Melin';
                include 'views/project/v_project.php';
                break;
        }
    }
}
