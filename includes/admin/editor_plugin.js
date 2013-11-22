(
	function(){

		tinymce.create(
			"tinymce.plugins.LightShortcodes",
			{
				init: function(d,e) {},
				createControl:function(d,e)
				{

					var ed = tinymce.activeEditor;

					if(d=="ls_shortcodes_button"){

						d=e.createMenuButton( "ls_shortcodes_button",{
							title: ed.getLang('ls_shortcodes.insert'),
							icons: false
							});

							var a=this;d.onRenderMenu.add(function(c,b){

								a.addImmediate(b, ed.getLang('ls_shortcodes.hello_world'),"[hello_world]" );
								
								
								
								/** Working shortcode starting here 
								* default: a.addImmediate(b, ed.getLang('ls_shortcodes.ls_button'),'' );
								* --------------------------------------- */
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_button'),'[gpp_button color="blue" url="#" title="themes" icon_left="twitter" target="_blank" size="large" display="block"]Button Text[/gpp_button]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_box'),'[gpp_box color="green" width="50%" text_align="left" margin_bottom="50px" margin_top="50px"]Alert Box Text[/gpp_box]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_icon'),'[gpp_icon type="image"]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_highlight'),'[gpp_highlight color="green"]text to highlight[/gpp_highlight]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_divider'),'[gpp_divider type="dashed" color="green"]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_accordion'),'[gpp_accordion][gpp_accordion_section title="Section #1"]Section 1 text[/gpp_accordion_section][gpp_accordion_section title="Section #2"]Section 2 text[/gpp_accordion_section][gpp_accordion_section title="Section #3"]Section 3 text[/gpp_accordion_section][/gpp_accordion]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_toggle'),'[gpp_toggle title="Toggle Title"]Toggle text[/gpp_toggle]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_tabs'),'[gpp_tabgroup][gpp_tab title="Tab #1"]Tab 1 text [/gpp_tab][gpp_tab title="Tab #2"]Tab 2 text[/gpp_tab][/gpp_tabgroup]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_googlemaps'),'[gpp_googlemap location="new york,usa" zoom="5" title="New York" height="500"]' );
								
								a.addImmediate(b, ed.getLang('ls_shortcodes.ls_pricingtables'),'[gpp_pricing plan="Premium" cost="$200" per="per month" button_url="#" button_text="Sign Up" button_color="green" button_target="self" button_rel="nofollow"] <li>Item 1</li> <li>Item 2</li> [/gpp_pricing]' );
								
								
								c=b.addMenu({title:ed.getLang('ls_shortcodes.ls_grids')});
									a.addImmediate(c, ed.getLang('ls_shortcodes.ls_grids_two_cols'),"[one_half_first] This is the first column [/one_half_first][one_half_last] This is the first column [/one_half_last]" );
									
								
								// a.addImmediate(b, ed.getLang('ls_shortcodes.ls_button'),'' );
								
								
								/** End of working shortcode button
								* --------------------------------------- */
								
								// b.addSeparator(); // Used to create a line separator
								

							});
						return d

					} // End IF Statement

					return null
				},

				addImmediate:function(d,e,a){d.add({title:e,onclick:function(){tinyMCE.activeEditor.execCommand( "mceInsertContent",false,a)}})}

			}
		);

		tinymce.PluginManager.add( "LightShortcodes", tinymce.plugins.LightShortcodes);
	}
)();