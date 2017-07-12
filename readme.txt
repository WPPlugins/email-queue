=== Email Queue by BestWebSoft ===
Contributors: bestwebsoft
Donate link: https://bestwebsoft.com/donate/
Tags: add mail settings, add mail extra settings, email queue plugin, email queue, email, organize mail queue, queue, mail query, mailout, manage mail, manage messages, priority
Requires at least: 3.9
Tested up to: 4.8
Stable tag: 1.1.3
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Automatically add outgoing email messages to queue instead of sending them immediately.

== Description ==

Email Queue plugin is a simple way to set the priority for email sending from your WordPress website. Delete your messages, set sending priority, organize simple and effective mail queue.

Optimize email sending and distribute your server load to deliver all important messages to your customers!

= Features =

* Control emails in queue sent via:
	* [Contact Form](https://bestwebsoft.com/products/wordpress/plugins/contact-form/?k=c1ada8da6398734b5aa948e9d2b7acad)
	* [Sender](https://bestwebsoft.com/products/wordpress/plugins/sender/?k=acd2f126ee86524e5f28f1f4abd4fbae)
	* [Subscriber](https://bestwebsoft.com/products/wordpress/plugins/subscriber/?k=b0e77d9c7f22266219b6a61101b62038)
	* [Updater](https://bestwebsoft.com/products/wordpress/plugins/updater/?k=c9514c3366ba95825f1470bfc8d75f4f)
* Choose the priority for email sending:
	* Low
	* Normal
	* High
* Set time interval between emails
* Set the number of emails sent at one time
* Set the number of tries for a single email sending
* Automatically delete old emails from database
* View email list with additional info:
	* Plugin
	* Priority
	* Status
	* Date
* Manage plugins in queue:
	* Remove
	* Restore
* Add custom code via plugin settings page
* Compatible with latest WordPress version
* Incredibly simple settings for fast setup without modifying code
* Detailed step-by-step documentation and videos

If you have a feature suggestion or idea you'd like to see in the plugin, we'd love to hear about it! [Suggest a Feature](https://support.bestwebsoft.com/hc/en-us/requests/new)

= Documentation & Videos =

* [[Doc] Installation](https://docs.google.com/document/d/1-hvn6WRvWnOqj5v5pLUk7Awyu87lq5B_dO-Tv-MC9JQ/)

= Help & Support =

Visit our Help Center if you have any questions, our friendly Support Team is happy to help — <https://support.bestwebsoft.com/>

= Translation =

* Russian (ru_RU)
* Ukrainian (uk)

Some of these translations are not complete. We are constantly adding new features which should be translated. If you would like to create your own language pack or update the existing one, you can send [the text of PO and MO files](https://codex.wordpress.org/Translating_WordPress) to [BestWebSoft](https://support.bestwebsoft.com/hc/en-us/requests/new) and we'll add it to the plugin. You can download the latest version of the program for work with PO and MO [files Poedit](https://www.poedit.net/download.php).

= Recommended Plugins =

* [Updater](https://bestwebsoft.com/products/wordpress/plugins/updater/?k=c9514c3366ba95825f1470bfc8d75f4f) - Automatically check and update WordPress website core with all installed plugins and themes to the latest versions.
* [Contact Form](https://bestwebsoft.com/products/wordpress/plugins/contact-form/?k=c1ada8da6398734b5aa948e9d2b7acad) - Allow customers to reach you using secure contact form plugin any website must have.
* [Sender](https://bestwebsoft.com/products/wordpress/plugins/sender/?k=acd2f126ee86524e5f28f1f4abd4fbae) - Send bulk email messages to WordPress users. Custom templates, advanced settings and detailed reports.
* [Subscriber](https://bestwebsoft.com/products/wordpress/plugins/subscriber/?k=b0e77d9c7f22266219b6a61101b62038) - Add email newsletter sign up form to WordPress posts, pages and widgets. Collect data and subscribe your users.

== Installation ==

1. Upload `email-queue` folder to the `/wp-content/plugins/` directory
2. Activate the plugin via the 'Plugins' menu in WordPress.
3. Plugin settings are located in 'BWS Panel', 'Email Queue'.
4. The mail queue is located in 'Email Queue' menu on Dashboard.

[View a Step-by-step Instruction on Email Queue Installation](https://docs.google.com/document/d/1-hvn6WRvWnOqj5v5pLUk7Awyu87lq5B_dO-Tv-MC9JQ/)

== Frequently Asked Questions ==

= How to use the plugin? =

1. Install and activate the plugin.
2. Go to the plugin settings page (Dashboard > BWS Plugins > Email Queue) and edit the necessary options.
3. Go to the mail queue page (Dashboard > Email Queue) where you can:
	– See if there are any messages in queue;
	– Filter and sort your messages by plugin, status, priority or date;
	– Find out whether particular message was sent;
	– Look up mail receivers list for any message;
	– Trash, untrash, delete permanently you mail.

= I've installed the plugin, but I can't send letters to all of my users at once. Why? =

1. Simultaneous sending of a large number of messages can slow down your site.
2. Your site can be identified as a source of spam, which can lead to blocking of your website or hosting account.

= Why are my letters sent so long? =

For sending letters in the plugin we use wp_cron - Wordpress function for periodic execution of any planned actions. This function depends on the traffic of your site: the more visitors, the faster the letters will be sent. Also, some of your emails may have been assigned a low priority. In that case mail with low priority would have to wait until all "High" and "Normal" prioritized mail would be sent.

= I have installed the plugin and I see that it displays the mail of “Contact Form”, “Sender”, “Subscriber”, and “Updater” plugins in its queue. Why? =

Please make sure you have set mail-capable plugin’s status to in queue on this plugin settings page.
Also, to make this plugin work with other mail-capable plugins you should use the most recent versions of the plugins listed in this question. Please, make sure you use at least the following versions:

– v. 3.80 of [Contact Form](https://wordpress.org/plugins/contact-form-plugin/) plugin,
– v. 1.31 of [Contact Form Pro](https://bestwebsoft.com/products/wordpress/plugins/contact-form/?k=c1ada8da6398734b5aa948e9d2b7acad) plugin,
– v. 0.7 of [Sender](https://wordpress.org/plugins/sender/) plugin,
– v. 1.0.2 of [Sender Pro](https://bestwebsoft.com/products/wordpress/plugins/sender/?k=acd2f126ee86524e5f28f1f4abd4fbae) plugin,
– v. 1.1.2 of [Subscriber](https://bestwebsoft.com/products/wordpress/plugins/subscriber/?k=b0e77d9c7f22266219b6a61101b62038) plugin,
– v. 1.20 of [Updater](https://wordpress.org/plugins/updater/) plugin and
– v. 1.11 of [Updater Pro](https://bestwebsoft.com/products/wordpress/plugins/updater/?k=c9514c3366ba95825f1470bfc8d75f4f) plugin.

= Does this plugin work on multisite? =

To use the plugin on Multisite you should activate it for the network. If you use Multisite installation, the plugin settings page and mail queue page will be displayed only on the Network Admin Dashboard. The list of plugins on the settings page would mark any plugin as "active" if it’s activated on a network or any site of the network.

= I have some problems with the plugin's work. What Information should I provide to receive proper support? =

Please make sure that the problem hasn't been discussed yet on our forum (<https://support.bestwebsoft.com>). If no, please provide the following data along with your problem's description:

- The link to the page where the problem occurs
- The name of the plugin and its version. If you are using a pro version - your order number.
- The version of your WordPress installation
- Copy and paste into the message your system status report. Please read more here: [Instruction on System Status](https://docs.google.com/document/d/1Wi2X8RdRGXk9kMszQy1xItJrpN0ncXgioH935MaBKtc/)

== Screenshots ==

1. Mail queue page with the list of addresses.
2. Plugin`s settings page with mail plugins list.
3. Plugin`s settings page with additional settings.

== Changelog ==

= V1.1.3 - 06.07.2017 =
* Email Queue plugin is no longer supported (updates will be unavailable).

= V1.1.2 - 14.04.2017 =
* Bugfix : Multiple Cross-Site Scripting (XSS) vulnerability was fixed.

= V1.1.1 - 17.10.2016 =
* Update : We updated all functionality for Contact Form Pro V4.0.2.
* Update : We updated all functionality for Sender Pro V1.1.8.

= V1.1.0 - 21.07.2016 =
* Bugfix : Bug with sending Sender plugin mail to single user was fixed.

= V1.0.9 - 23.06.2016 =
* Bugfix : Bug with sending Sender Pro plugin mail was fixed.
* Update : BWS plugins section is updated.
* Update : We updated all functionality for wordpress 4.5.3.

= V1.0.8 - 09.12.2015 =
* Bugfix : The bug with plugin menu duplicating was fixed.

= V1.0.7 - 20.10.2015 =
* NEW : We added ability to restore settings to defaults.
* Bugfix : We fixed bug with pagination on the report page.

= V1.0.6 - 05.06.2015 =
* Update : BWS plugins section is updated.
* Update : We updated all functionality for wordpress 4.2.2.

= V1.0.5 - 22.04.2015 =
* Bugfix : We fixed bug with displaying the list of the letters.

= V1.0.4 - 05.02.2015 =
* Update : Compatibility with Subscriber Pro was added.
* Bugfix : Bug with PRO plugins priorities was fixed.
* Bugfix : Bug with sending Sender PRO plugin mail was fixed.

= V1.0.3 - 30.12.2014 =
* Update : BWS plugins section is updated.
* Update : We updated all functionality for wordpress 4.1.

= V1.0.2 - 21.08.2014 =
* Bugfix : Bug with errors on mailout list and plugin list pages on WP versions prior to 3.6 was fixed.

= V1.0.1 - 08.08.2014 =
* Bugfix : Security Exploit was fixed.

= V1.0.0 - 20.06.2014 =
* NEW : Russian language files were added to the plugin.
* Update : Database tables were renamed.
* Update : The tructure of settings page was changed.

== Upgrade Notice ==

= V1.1.3 =
Email Queue plugin is no longer supported.

= V1.1.2 =
* Bugs fixed.

= V1.1.1 =
* The compatibility with new Contact Form Pro and Sender Pro versions updated.

= V1.1.0 =
* Bugs fixed.

= V1.0.9 =
The bug with sending Sender PRO plugin mail was fixed.
BWS plugins section is updated. We updated all functionality for wordpress 4.5.3.

= V1.0.8 =
The bug with plugin menu duplicating was fixed.

= V1.0.7 =
We added ability to restore settings to defaults. We fixed bug with pagination on the report page.

= V1.0.6 =
BWS plugins section is updated. We updated all functionality for wordpress 4.2.2.

= V1.0.5 =
We fixed bug with displaying the list of the letters.

= V1.0.4 =
Compatibility with Subscriber Pro was added. Bug with PRO plugins priorities was fixed. Bug with sending Sender PRO plugin mail was fixed.

= V1.0.3 =
BWS plugins section is updated. We updated all functionality for wordpress 4.1.

= V1.0.2 =
Bug with errors on mailout list and plugin list pages on WP versions prior to 3.6 was fixed.

= V1.0.1 =
Security Exploit was fixed.

= V1.0.0 =
Russian language files were added to the plugin. Database tables were renamed. The tructure of settings page was changed.
