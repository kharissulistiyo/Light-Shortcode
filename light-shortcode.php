<?php
/*
Plugin Name: Light Shortcode
Plugin URI: http://kharissulistiyo.github.io
Description: Kick-ass and light shortcode
Author: Kharis Sulistiyono
Version: 0.0.1
Author URI: http://kharissulistiyo.github.io
*/



if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


/**
 * Add a button for shortcodes to the WP editor.
 *
 * @access public
 * @return void
 */
function woocommerce_add_shortcode_button() {
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) return;
	if ( get_user_option('rich_editing') == 'true') :
		add_filter('mce_external_plugins', 'woocommerce_add_shortcode_tinymce_plugin');
		add_filter('mce_buttons', 'woocommerce_register_shortcode_button');
	endif;
	
	// Admin style
	
	if(is_admin()) {
		wp_enqueue_style( 'light-shortcodes-admin', plugin_dir_url( __FILE__ ) . 'includes/admin/light-shortcodes-admin.css' );
	}
		
		
	// Frontend style	
	
	if(!is_admin()){
		wp_enqueue_style( 'light-shortcodes', plugin_dir_url( __FILE__ ) . 'includes/frontend/light-shortcodes.css' );
	}
	
	
}

add_action( 'init', 'woocommerce_add_shortcode_button' );



/**
 * woocommerce_add_tinymce_lang function.
 *
 * @access public
 * @param mixed $arr
 * @return void
 */
function woocommerce_add_tinymce_lang( $arr ) {
    $arr['WooCommerceShortcodes'] = plugin_dir_path( __FILE__ ) . 'editor_plugin_lang.php';
    return $arr;
}

add_filter( 'mce_external_languages', 'woocommerce_add_tinymce_lang', 10, 1 );





/**
 * Register the shortcode button.
 *
 * @access public
 * @param mixed $buttons
 * @return array
 */
function woocommerce_register_shortcode_button($buttons) {
	array_push($buttons, "|", "woocommerce_shortcodes_button");
	return $buttons;
}





/**
 * Add the shortcode button to TinyMCE
 *
 * @access public
 * @param mixed $plugin_array
 * @return array
 */
function woocommerce_add_shortcode_tinymce_plugin($plugin_array) {
	$plugin_array['WooCommerceShortcodes'] = plugin_dir_url( __FILE__ ) . 'includes/admin/editor_plugin.js';
	return $plugin_array;
}




/**
 * Force TinyMCE to refresh.
 *
 * @access public
 * @param mixed $ver
 * @return int
 */
function woocommerce_refresh_mce( $ver ) {
	$ver += 3;
	return $ver;
}





/**
 * Shortcodes
 *
 * @access public
 * @param mixed $ver
 * @return int
 */



include('shortcodes.php'); 
 

?>