**Environment 1**: [${globals.PROTOCOL}://${settings.envName}.${globals.REGION-0}/](${globals.PROTOCOL}://${settings.envName}.${globals.REGION-0}/)   
**Environment 2**: [${globals.PROTOCOL}://${settings.envName}-1.${globals.REGION-1}/](${globals.PROTOCOL}://${settings.envName}-1.${globals.REGION-1}/)

Use the following credentials to access the admin panel:

**Admin Panel**: [${globals.PROTOCOL}://${settings.envName}.${globals.REGION-0}/wp-admin/](${globals.PROTOCOL}://${settings.envName}.${globals.REGION-0}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.WP_ADMIN_PASS}  

Manage the database nodes using the next credentials:

**phpMyAdmin Panel 1**: [https://node${globals.masterDB-ID0}-${settings.envName}.${globals.REGION-0}/](https://node${globals.masterDB-ID0}-${settings.envName}.${globals.REGION-0}/)   
**phpMyAdmin Panel 2**: [https://node${globals.masterDB-ID1}-${settings.envName}-1.${globals.REGION-1}/](https://node${globals.masterDB-ID1}-${settings.envName}-1.${globals.REGION-1}/)

**Username**: ${globals.DB_USER}    
**Password**: ${globals.DB_PASS}  

The instructions below can help you with the further managing your WordPress:

* [Bind custom domain](https://docs.jelastic.com/custom-domain-via-cname)
* [Share access to the environment](http://docs.jelastic.com/share-environment)
* [Adjust automatic vertical scaling settings](http://docs.jelastic.com/automatic-vertical-scaling)
* [Configure automatic horizontal scaling](http://docs.jelastic.com/automatic-horizontal-scaling)
* [Monitor the statistics](http://docs.jelastic.com/view-app-statistics) & [view log files](https://docs.jelastic.com/view-log-files)
* [Attach Public IP](https://docs.jelastic.com/public-ip)
* [Access environment via SSH](https://docs.jelastic.com/ssh-access)
