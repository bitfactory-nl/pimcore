<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;

class DefaultController extends BaseController
{
    public function defaultAction(Request $request)
    {
        // Nothing here yet, but since you're reading this that's about to change, right?!

        // redirect to the example page from exampleBundle
        return $this->redirectToRoute('example_index');
    }
}
