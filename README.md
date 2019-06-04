A custom module for [thesuitdepot.com](https://thesuitdepot.com).

## How to install
```
bin/magento maintenance:enable
composer clear-cache
composer require thesuitdepot/core:*
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US --area frontend --theme Webwolf/suitdepot
bin/magento maintenance:disable
bin/magento cache:enable
```

## How to upgrade
```
bin/magento maintenance:enable
composer clear-cache
composer update thesuitdepot/core
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f en_US --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy -f en_US --area frontend --theme Webwolf/suitdepot
bin/magento maintenance:disable
bin/magento cache:enable
```

If you have problems with these commands, please check the [detailed instruction](https://mage2.pro/t/263).