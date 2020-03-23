<?php

namespace ExampleBundle;

//use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class ExampleBundle extends Bundle
{
    public function getJsPaths()
    {
        return [
            '/bundles/example/js/pimcore/startup.js'
        ];
    }
}