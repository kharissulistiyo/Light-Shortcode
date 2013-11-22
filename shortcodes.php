<?php

/**
* Shortcode items go here
*/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly



function ls_hello_world(){

	
	$output = '<h1 class="ls-hello-world">Hello World!</h1>';
	
	echo $output; 

}

add_shortcode('hello_world', 'ls_hello_world');






?>