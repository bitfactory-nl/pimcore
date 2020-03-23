<?php

namespace ExampleBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends BaseController
{
    /**
     * @Route("/example", name="example_index")
     */
    public function indexAction(Request $request)
    {
        return $this->render('@Example/default.html.twig');
    }
}
