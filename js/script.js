(function( $ ){
	$( document ).ready( function() {
		/**
		 * calculte maximum number of sent mails and show confirm-window if user enter too large value
		 */
		var runTime      = $( '#mlq_mail_run_time' ),
			runTimeVal   = runTime.val(),
			sendCount    = $( '#mlq_mail_send_count' ),
			sendCountVal = sendCount.val(),
			number       = 0;
		runTime.change( function() {
			if ( parseInt( $( this ).val() ) < 1 || !( /^\s*(\+|-)?\d+\s*$/.test( $( this ).val() ) ) ) {
				$( this ).val( '1' ).text( '1' );
			}
			if ( parseInt( $( this ).val() ) > 360 ) {
				if( ! confirm( mlqScriptVars['toLongMessage'] ) ) {
					$( this ).val( runTimeVal ).text( runTimeVal );
				}
			}
			number = ( 60 > $( this ).val() ) ? Math.floor( ( 60 / $( this ).val() ) ) * parseInt( sendCount.val() ) : parseInt( sendCount.val() );
			$( '#mlq-calculate' ).text( '' ).text( number );
		});
		sendCount.change( function() {
			if ( parseInt( $( this ).val() ) < 1 || !( /^\s*(\+|-)?\d+\s*$/.test( $( this ).val() ) ) ) {
				$( this ).val( '1' ).text( '1' );
			}
			if ( parseInt( $( this ).val() ) > 50 ) {
				if( ! confirm( mlqScriptVars['toLongMessage'] ) ) {
					$( this ).val( sendCountVal ).text( sendCountVal );
				}
			}
			number = ( 60 > runTime.val() ) ? parseInt( Math.floor( ( 60 / runTime.val() ) ) * $( this ).val() ) : parseInt( $( this ).val() );
			$( '#mlq-calculate' ).text( '' ).text( number );
		});

		/**
		 * Show/hide some blocks on plugin settings page
		 */
		var phpRadio    = $( '#mlq_wp_mail_radio, #mlq_php_mail_radio' ),
			delCheck	= $( '#mlq_delete_old_mail' ),
			delOptions	= $( '.mlq_delete_old_mail_option' );
		$( '#mlq_change_options' ).click( function() {
			if ( $( this ).is( ':checked' ) ) {
				$( '.mlq_ad_opt' ).each( function() {
					if( $( this ).hasClass( 'mlq_delete_old_mail_option' ) ) {
						if ( delCheck.is( ':checked' ) ) {
							$( this ).show();
						}
					} else {
						$( this ).show();
					}
				} )
			} else {
				$( '.mlq_ad_opt' ).hide();
			}
		} );
		delCheck.click( function() {
			if ( $( this ).is( ':checked' ) ) {
				delOptions.show();
			} else {
				delOptions.hide();
			}
		} );

		/**
		 * hide bottom line of mail receivers list with headings
		 * if the height of the screen is enough to display the whole list
		 */
		var userCnt		= $( '#mlq-total-users' ),
			userCntVal 	= userCnt.val();
		if( $(window).height() > 117 + 37 * userCntVal ) {
			$( '.mlq-receivers-list tfoot' ).hide();
		}

		/**
		 * scroll to receivers list table
		 */
		if( $( '.mlq-receivers-list' ).length ) {
			$( 'html, body' ).animate( {
				scrollTop: $( '.mlq-receivers-list' ).offset().top - 30 + 'px'
			}, 500 );
		}

		/**
		 * fires form submit action on focus out if lists-per-page or page-number has been changed
		 */
		$( '.mlq-list-per-page input, .mlq-list-paged input.mlq-page-number' ).focusout( function() {
			var value = $( this ).val();
			if ( $( this ).hasClass( 'mlq-page-number' ) && value != $( '.mlq-list-paged[name="current_page"]' ).val() ) {
				$(this).parents('form:first').trigger('submit');
			}
			if ( $( this ).parent().hasClass( 'mlq-list-per-page' ) && value != $( '.mlq-list-paged[name="list_per_page"]' ).val() ) {
				$(this).parents('form:first').trigger('submit');
			}
		} );
	} );
} )( jQuery );