<?php
/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */
use Pimcore\HttpKernel\BundleCollection\BundleCollection;
use Pimcore\Kernel;
use Symfony\Bundle\MakerBundle\MakerBundle;

class AppKernel extends Kernel
{
    /**
     * Adds bundles to register to the bundle collection. The collection is able
     * to handle priorities and environment specific bundles.
     *
     * @param BundleCollection $collection
     */
    public function registerBundlesToCollection(BundleCollection $collection)
    {
        if (class_exists('\\AppBundle\\AppBundle')) {
            $collection->addBundle(new \AppBundle\AppBundle);
        }

        if (class_exists('\Pimcore\Bundle\LegacyBundle\PimcoreLegacyBundle')) {
            $collection->addBundle(new \Pimcore\Bundle\LegacyBundle\PimcoreLegacyBundle);
        }

        /**
         * Load Encore so the helper functions are available in your twig templates. Since we need it,
         * no 'if (class_exists...'. I need an exception with why stuff isn't working.
         */
        $collection->addBundle(new \Symfony\WebpackEncoreBundle\WebpackEncoreBundle());

        /**
         * Load the makerbundle. It will give you some symfony commands for code generation. Useful for
         * for example setting up a form, fictures or tests. See available commands: $ bin/console make
         */
        $collection->addBundle(new MakerBundle);

        /**
         * Example bundle. Comment or remove to deactivate
         */
        $collection->addBundle(new \ExampleBundle\ExampleBundle());
    }
}
