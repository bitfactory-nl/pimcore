<?php

namespace AppBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;

class BaseController extends FrontendController
{
    /**
     * @param FilterControllerEvent $event
     * Set autorendering using Twig as the default templating engine
     */
    public function onKernelController(FilterControllerEvent $event) {
        $this->setViewAutoRender($event->getRequest(), true, 'twig');
    }
}
